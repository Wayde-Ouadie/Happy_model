
import React from 'react';

import Stage1 from './stage1';
import Stage2 from './stage2/Stage2';
import Stage3 from './stage3';
import Stage4 from './stage4';
import Stage5 from './stage5';

const drafts = {
      stage1: (props) => <><Stage1 {...props} /></>,
      stage2: (props) => <><Stage2 {...props} /></>,
      stage3: (props) => <><Stage3 {...props} /></>,
      stage4: (props) => <><Stage4 {...props} /></>,
      stage5: (props) => <><Stage5 {...props} /></>,
} as const;

export type TDraft = keyof typeof drafts;

const Draw = ({ name, calculDimensionSvg, screen }: { name: string, calculDimensionSvg: (height: number, width: number) => ({width: number, height: number}), screen }) => {
      return (
            <>
                  {drafts[name]({ calculDimensionSvg, screen })}
            </>
      )
}

export default Draw;