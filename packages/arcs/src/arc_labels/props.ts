import { PropertyAccessor } from '@stu-dev/nivo-core'
import { InheritedColorConfig } from '@stu-dev/nivo-colors'
import { ArcLabelComponent } from './ArcLabelsLayer'
import { DatumWithArcAndColor } from '../types'

export interface ArcLabelsProps<Datum extends DatumWithArcAndColor> {
    arcLabel: PropertyAccessor<Datum, string>
    arcLabelsRadiusOffset: number
    arcLabelsSkipAngle: number
    arcLabelsTextColor: InheritedColorConfig<Datum>
    arcLabelsComponent: ArcLabelComponent<Datum>
}
