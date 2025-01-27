import React from 'react'
import { Highlight } from '../../Highlight'

const code = `
import { patternDotsDef, patternSquaresDef } from '@stu-dev/nivo-core'
import { Stream } from '@stu-dev/nivo-stream'

const MyChart = () => (
    <Stream
        data={/*…*/}
        keys={['react', 'vue', 'elm']}
        // 1. defining patterns
        defs={[
            // using helpers (cannot be used with http rendering API)
            // will use color from current element
            patternDotsDef('dots', { color: 'inherit' }),
            // will use background color from current element
            patternSquaresDef('squares', { background: 'inherit' }),
            // using plain object
            { id: 'custom', type: 'patternSquares', size: 24 },
        ]}
        // 2. defining rules to apply those patterns
        fill={[
            // match using query object
            // (can be used with http rendering API
            { match: { id: 'react' }, id: 'dots' },
            // match using function
            // (cannot be used with http rendering API
            { match: d => d.id === 'vue', id: 'squares' },
            // match all, will only affect 'elm' because once
            // a rule match, others are skipped
            // (can be used with http rendering API
            { match: '*', id: 'custom' },
        ]}
    />
)
`.trim()

export const PatternsExample = () => <Highlight code={code} language="jsx" />
