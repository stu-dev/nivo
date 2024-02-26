/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { ResponsiveWrapper } from '@stu-dev/nivo-core'
import GeoMapCanvas from './GeoMapCanvas'

const ResponsiveGeoMapCanvas = props => (
    <ResponsiveWrapper>
        {({ width, height }) => <GeoMapCanvas width={width} height={height} {...props} />}
    </ResponsiveWrapper>
)

export default ResponsiveGeoMapCanvas
