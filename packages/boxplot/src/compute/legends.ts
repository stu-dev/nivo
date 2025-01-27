import { BoxPlotDatum, BoxPlotCommonProps, ComputedBoxPlotSummary, LegendData } from '../types'
import { getPropertyAccessor } from '@stu-dev/nivo-core'
import uniqBy from 'lodash/uniqBy'
import sortBy from 'lodash/sortBy'

export const getLegendData = <RawDatum extends BoxPlotDatum>({
    boxPlots,
    dataFrom,
    legendLabel,
}: {
    boxPlots: ComputedBoxPlotSummary[]
    dataFrom: BoxPlotCommonProps<RawDatum>['colorBy']
    legendLabel: BoxPlotCommonProps<RawDatum>['legendLabel']
}) => {
    const getLegendLabel = getPropertyAccessor(legendLabel ?? dataFrom)
    const byGroup = dataFrom === 'group'
    const legendData = boxPlots.map(
        boxPlot =>
            // id & label are redundant below, but needed for ts in @stu-dev/nivo-legends
            ({
                id: byGroup ? boxPlot.data.groupIndex : boxPlot.data.subGroupIndex,
                label: getLegendLabel(boxPlot?.data),
                color: boxPlot?.color,
            } as LegendData)
    )
    // reduce to unique labels, then sort by id/index
    // ensures correct ordering of legends even when certain group-subGroup combos are missing
    return sortBy(
        uniqBy(legendData, ({ label }) => label),
        ({ id }) => id
    )
}
