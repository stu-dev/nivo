import {
  ResponsiveCirclePacking,
  ResponsiveCirclePackingCanvas,
  ResponsiveCirclePackingHtml,
} from '@stu-dev/nivo-circle-packing'
import { generateLibTree } from '@stu-dev/nivo-generators'
import { useChart } from '../hooks'

const props = {
  id: 'name',
  labelsSkipRadius: 16,
  padding: 2,
  value: 'loc',
}

export function CirclePacking() {
  const [data, flavor] = useChart(generateLibTree)

  switch (flavor) {
    case 'canvas':
      return <ResponsiveCirclePackingCanvas data={data} {...props} />
    case 'html':
      return <ResponsiveCirclePackingHtml data={data} {...props} />
    case 'svg':
      return <ResponsiveCirclePacking data={data} {...props} />
  }
}
