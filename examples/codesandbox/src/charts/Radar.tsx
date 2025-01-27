import { ResponsiveRadar } from '@stu-dev/nivo-radar'
import { generateWinesTastes } from '@stu-dev/nivo-generators'
import { useChart } from '../hooks'

const props = {
  indexBy: 'taste',
  margin: { top: 60, right: 80, bottom: 20, left: 80 },
}

export function Radar() {
  const [data] = useChart(generateWinesTastes)

  return <ResponsiveRadar {...data} {...props} />
}
