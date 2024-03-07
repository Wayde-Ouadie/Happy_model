// global resources
import React from 'react'

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import TeamStyle from './Team.module.scss'
const cg = StyleNameGestion(TeamStyle)

import teamDb from 'lib/db/team';

import Member from './member';
import { useI18n } from 'helpers/hooks';
const Team = ({ }) => {
    const { sections: { team } } = useI18n();
    return (
        <>
            <div className={cg('container', 'member')}>
                <div className={cg('head', 'member')} >
                    <h2 className={cg('title')}>
                        {team.title}
                    </h2>
                </div>
                <ul className={cg('team', 'member')} >
                    {teamDb.map((team, index) => {
                        return (
                            <li key={index} className={cg('item', 'member', 'my-auto')} >
                                <Member {...team} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Team;