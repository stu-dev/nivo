import type { Meta, StoryObj } from '@storybook/react'
import { generateSwarmPlotData } from '@stu-dev/nivo-generators'
import { SwarmPlot } from '@stu-dev/nivo-swarmplot'
import { SwarmPlotExtraLayers } from './SwarmPlotExtraLayers'
import { SwarmPlotCustomCircle } from './SwarmPlotCustomCircle'

const meta: Meta<typeof SwarmPlot> = {
    title: 'SwarmPlot',
    component: SwarmPlot,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SwarmPlot>

const commonProps = {
    width: 700,
    height: 360,
    margin: {
        top: 40,
        right: 40,
        bottom: 40,
        left: 40,
    },
    groupBy: 'group',
    id: 'id',
    value: 'price',
    valueScale: {
        type: 'linear' as const,
        min: 0,
        max: 500,
    },
    size: 10,
    ...generateSwarmPlotData(['group A', 'group B', 'group C'], { min: 40, max: 60 }),
}

export const Basic: Story = { render: () => <SwarmPlot {...commonProps} /> }

export const ExtraLayers: Story = { render: () => <SwarmPlotExtraLayers /> }

export const CustomCircleComponent: Story = { render: () => <SwarmPlotCustomCircle /> }

export const UsingAnnotations: Story = {
    render: () => (
        <SwarmPlot
            {...commonProps}
            useMesh={true}
            annotations={[
                {
                    type: 'circle',
                    match: { index: 40 },
                    noteX: 40,
                    noteY: 40,
                    offset: 4,
                    note: 'Node at index: 40',
                },
                {
                    type: 'rect',
                    match: { index: 80 },
                    noteX: -40,
                    noteY: -40,
                    offset: 4,
                    note: 'Node at index: 80',
                },
                {
                    type: 'dot',
                    match: { index: 120 },
                    noteX: 0,
                    noteY: { abs: -20 },
                    size: 6,
                    note: 'Node at index: 120',
                },
            ]}
        />
    ),
}

const localeTimeFormat = (value: number | Date) => value.toLocaleString()

export const UsingTimeScale: Story = {
    render: () => (
        <SwarmPlot
            {...commonProps}
            data={[
                {
                    group: 'group A',
                    id: '21c4519f-713f-473b-8ce5-e4078d8822c9',
                    timestamp: '2020-09-04T23:10:13.002Z',
                    volume: 18,
                },
                {
                    group: 'group A',
                    id: '91c4519f-713f-473b-8ce5-e4078d882e77',
                    timestamp: '2020-09-05T15:10:13.002Z',
                    volume: 16,
                },
                {
                    group: 'group B',
                    id: '91c4519f-713f-473b-8ce5-e4078d882e67',
                    timestamp: '2020-09-05T05:10:13.002Z',
                    volume: 16,
                },
                {
                    group: 'group C',
                    id: '91c4519f-713f-473b-8ce5-e4078d882t67',
                    timestamp: '2020-09-05T05:10:13.002Z',
                    volume: 14,
                },
            ]}
            margin={{
                top: 40,
                right: 40,
                bottom: 40,
                left: 100,
            }}
            value="timestamp"
            valueFormat={localeTimeFormat}
            valueScale={{
                format: '%Y-%m-%dT%H:%M:%S.%LZ',
                type: 'time',
            }}
            size={{ key: 'volume', values: [4, 20], sizes: [6, 20] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                format: localeTimeFormat,
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'timestamp',
                legendPosition: 'middle',
                legendOffset: 46,
                tickValues: 'every 4 hours',
            }}
            axisLeft={{
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'groups',
                legendPosition: 'middle',
                legendOffset: -76,
            }}
            layout="horizontal"
        />
    ),
}
