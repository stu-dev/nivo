import { memo } from 'react'
import { BasicTooltip } from '@stu-dev/nivo-tooltip'
import { ArcTooltipComponentProps } from './types'

export const ChordArcTooltip = memo(({ arc }: ArcTooltipComponentProps) => (
    <BasicTooltip id={arc.label} value={arc.formattedValue} color={arc.color} enableChip={true} />
))
