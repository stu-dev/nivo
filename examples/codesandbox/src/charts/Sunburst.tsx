import { ResponsiveSunburst } from '@stu-dev/nivo-sunburst'
import { generateLibTree } from '@stu-dev/nivo-generators'
import { useChart } from '../hooks'

const props = {
  id: 'name',
  value: 'loc',
}

export function Sunburst() {
  const [data] = useChart(generateLibTree)

  return <ResponsiveSunburst data={data} {...props} />
}
