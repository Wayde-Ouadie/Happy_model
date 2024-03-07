// global resources
import React, { useContext } from 'react';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import LandingPageStyle from './LandingPage.module.scss'
const cg = StyleNameGestion(LandingPageStyle);

// layers
import { Header, Footer, SectionContainer } from 'components/layout';

import Sections from './sections';


import { ROUTE_BREAKPOINT } from 'lib/conf/route';
import { SectionContext } from 'pages/_app';

import { useI18n } from 'helpers/hooks';
import InfoBar from './infoBar';
import { Loading } from 'components/layout';

import { Decoration } from 'components/layout';

import { decoPosition } from './decoration';


const LandingPage = ({ }) => {
      const { section: geSectionOffset, setSectionPosition } = useContext(SectionContext);
      const { infoBar } = useI18n();

      return (
            <>
                  <Loading>
                        <Header>
                              <div id='scroller' >
                                    <Footer >
                                          <Decoration images={decoPosition} geSectionOffset={geSectionOffset} >
                                                <SectionContainer setRef={setSectionPosition} name={ROUTE_BREAKPOINT.HOME}><Sections.home /></SectionContainer>
                                                <SectionContainer setRef={setSectionPosition} name={ROUTE_BREAKPOINT.ABOUT}><Sections.about /></SectionContainer>
                                                <div className='h-52'></div>
                                                <SectionContainer setRef={setSectionPosition} name={ROUTE_BREAKPOINT.CARTS}><Sections.carts /></SectionContainer>
                                                <div className='h-52'></div>
                                                <InfoBar title={infoBar.phase_1} />
                                                <div className='h-52'></div>
                                                <SectionContainer setRef={setSectionPosition} name={ROUTE_BREAKPOINT.OVERVIEW}><Sections.overview /></SectionContainer>
                                                <div className='h-52'></div>
                                                <SectionContainer setRef={setSectionPosition} name={ROUTE_BREAKPOINT.EGGS}><Sections.eggs /></SectionContainer>
                                                <div className='h-52'></div>
                                                <InfoBar title={infoBar.phase_2} />
                                                <div className='h-52'></div>
                                                <SectionContainer setRef={setSectionPosition} name={ROUTE_BREAKPOINT.COLLECTION}><Sections.collection /></SectionContainer>
                                                <div className='h-52'></div>
                                                <SectionContainer setRef={setSectionPosition} name={ROUTE_BREAKPOINT.MISSION}><Sections.mission /></SectionContainer>
                                                <div className='h-52'></div>
                                                <SectionContainer setRef={setSectionPosition} name={ROUTE_BREAKPOINT.ASSETS}><Sections.assets /></SectionContainer>
                                                <div className='h-52'></div>
                                                <SectionContainer setRef={setSectionPosition} name={ROUTE_BREAKPOINT.ROAD_MAP}><Sections.roadMap /></SectionContainer>
                                                <SectionContainer setRef={setSectionPosition} name={ROUTE_BREAKPOINT.TEAM}><Sections.team /></SectionContainer>
                                                <div className='h-52'></div>
                                                <SectionContainer setRef={setSectionPosition} name='motivation'><Sections.motivation /></SectionContainer>
                                          </Decoration>
                                    </Footer>
                              </div>
                        </Header>
                  </Loading>

            </>
      )
}

export default LandingPage;