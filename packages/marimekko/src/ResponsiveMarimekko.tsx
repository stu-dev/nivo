import { ResponsiveWrapper } from '@stu-dev/nivo-core'
import { Marimekko } from './Marimekko'
import { SvgProps } from './types'

export const ResponsiveMarimekko = <RawDatum,>(
    props: Omit<SvgProps<RawDatum>, 'width' | 'height'>
) => (
    <ResponsiveWrapper>
        {({ width, height }) => <Marimekko<RawDatum> width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)
