import React from 'react'
import { useTheme } from 'styled-components'
import { linearGradientDef } from '@stu-dev/nivo-core'
import { ResponsiveBar } from '@stu-dev/nivo-bar'
import { ResponsiveStream } from '@stu-dev/nivo-stream'
import { ResponsiveTreeMap } from '@stu-dev/nivo-treemap'
import { generateCountriesData } from '@stu-dev/nivo-generators'
import { FullWidthBanner } from '../../styled'

const GradientsIllustrations = () => {
    const theme = useTheme()

    return (
        <FullWidthBanner>
            <div className="guide__illustrations">
                <div className="guide__illustrations__item">
                    <ResponsiveStream
                        margin={{ top: -2, right: -2, bottom: -2, left: -2 }}
                        data={generateCountriesData(['a', 'b', 'c'], { size: 9 })}
                        indexBy="country"
                        keys={['a', 'b', 'c']}
                        offsetType="expand"
                        axisLeft={null}
                        axisBottom={null}
                        enableGridX={false}
                        defs={[
                            linearGradientDef('example1A', [
                                { offset: 0, color: '#faed94' },
                                { offset: 30, color: '#faf047' },
                                { offset: 100, color: '#e4b400' },
                            ]),
                            linearGradientDef('example1B', [
                                { offset: 0, color: '#a8f9eb' },
                                { offset: 30, color: '#97e3d5' },
                                { offset: 100, color: '#458a7d' },
                            ]),
                            linearGradientDef('example1C', [
                                { offset: 0, color: '#f9804e' },
                                { offset: 30, color: '#f96a3d' },
                                { offset: 100, color: '#a84f35' },
                            ]),
                        ]}
                        fill={[
                            { match: { id: 'a' }, id: 'example1A' },
                            { match: { id: 'b' }, id: 'example1B' },
                            { match: { id: 'c' }, id: 'example1C' },
                        ]}
                        isInteractive={false}
                        animate={false}
                        theme={theme.nivo}
                    />
                </div>
                <div className="guide__illustrations__item">
                    <ResponsiveBar
                        margin={{ top: 15, right: 10, bottom: -2, left: 10 }}
                        data={generateCountriesData(['a', 'b', 'c'], { size: 7 })}
                        indexBy="country"
                        keys={['a', 'b', 'c']}
                        colors={{ scheme: 'spectral' }}
                        padding={0.2}
                        axisLeft={null}
                        axisBottom={null}
                        enableGridY={false}
                        enableLabel={false}
                        defs={[
                            linearGradientDef('example2', [
                                { offset: 0, color: 'inherit' },
                                { offset: 40, color: 'inherit' },
                                { offset: 100, color: 'inherit', opacity: 0.6 },
                            ]),
                        ]}
                        fill={[{ match: '*', id: 'example2' }]}
                        borderWidth={1}
                        borderColor="inherit:darker(0.2)"
                        isInteractive={false}
                        animate={false}
                        theme={theme.nivo}
                    />
                </div>
                <div className="guide__illustrations__item">
                    <ResponsiveTreeMap
                        margin={{ top: -2, right: -2, bottom: -2, left: -2 }}
                        data={{
                            country: 'root',
                            children: generateCountriesData(['value'], { size: 9 }),
                        }}
                        colors={{ scheme: 'spectral' }}
                        colorBy="path"
                        identity="country"
                        leavesOnly={false}
                        borderWidth={1}
                        nodeOpacity={1}
                        borderColor={{ theme: 'background' }}
                        outerPadding={10}
                        innerPadding={4}
                        enableParentLabel={false}
                        isInteractive={false}
                        animate={false}
                        enableLabel={false}
                        defs={[
                            linearGradientDef('example2', [
                                { offset: 0, color: 'inherit' },
                                { offset: 40, color: 'inherit' },
                                { offset: 100, color: 'inherit', opacity: 0.3 },
                            ]),
                        ]}
                        fill={[{ match: '*', id: 'example2' }]}
                        theme={theme.nivo}
                    />
                </div>
                <div className="guide__illustrations__legend">
                    gradients applied to various nivo components.
                </div>
            </div>
        </FullWidthBanner>
    )
}

export default GradientsIllustrations
