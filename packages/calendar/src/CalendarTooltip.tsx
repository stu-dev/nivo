import { BasicTooltip } from '@stu-dev/nivo-tooltip'
import { CalendarTooltipProps } from './types'
import { memo } from 'react'

export const CalendarTooltip = memo(({ value, day, color }: CalendarTooltipProps) => {
    if (value === undefined || isNaN(Number(value))) return null
    return <BasicTooltip id={day} value={value} color={color} enableChip={true} />
})
