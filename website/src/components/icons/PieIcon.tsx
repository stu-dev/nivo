import React from 'react'
import { Pie, PieSvgProps } from '@stu-dev/nivo-pie'
import pieLightNeutralImg from '../../assets/icons/pie-light-neutral.png'
import pieLightColoredImg from '../../assets/icons/pie-light-colored.png'
import pieDarkNeutralImg from '../../assets/icons/pie-dark-neutral.png'
import pieDarkColoredImg from '../../assets/icons/pie-dark-colored.png'
import { ICON_SIZE, Icon, colors, IconImg } from './styled'
import { IconType } from './types'

type Datum = {
    id: string
    label: string
    value: number
}

const chartProps: PieSvgProps<Datum> = {
    width: ICON_SIZE,
    height: ICON_SIZE,
    data: [
        { id: '0', label: '0', value: 45 },
        { id: '1', label: '1', value: 90 },
        { id: '2', label: '2', value: 225 },
    ],
    margin: {
        top: 3,
        right: 3,
        bottom: 3,
        left: 3,
    },
    innerRadius: 0.6,
    padAngle: 2.5,
    enableArcLinkLabels: false,
    enableArcLabels: false,
    isInteractive: false,
}

const PieIconItem = ({ type }: { type: IconType }) => (
    <Icon id={`pie-${type}`} type={type}>
        <Pie<Datum>
            {...chartProps}
            colors={[colors[type].colors[4], colors[type].colors[3], colors[type].colors[2]]}
        />
    </Icon>
)

export const PieIcon = () => (
    <>
        <PieIconItem type="lightNeutral" />
        <IconImg url={pieLightNeutralImg} />
        <PieIconItem type="lightColored" />
        <IconImg url={pieLightColoredImg} />
        <PieIconItem type="darkNeutral" />
        <IconImg url={pieDarkNeutralImg} />
        <PieIconItem type="darkColored" />
        <IconImg url={pieDarkColoredImg} />
    </>
)
