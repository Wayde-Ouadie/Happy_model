// global resources
import React from 'react'
import Image from 'next/image';

// style
import StyleNameGestion from 'helpers/ClassNameCreator'
import MemberStyle from './Member.module.scss'
const cg = StyleNameGestion(MemberStyle)

import { ITeam } from 'lib/db/team';
import socialNetworkIcons from "public/socialNetwork";
import colors from 'lib/identity/colors';

const Member = (props: ITeam) => {

    return (
        <>
            <div className={cg('container', 'member')} >
                <div className={cg('image', 'member')} >
                </div>
                <div className={cg('content', 'member')} >
                    <div className={cg('content')} >

                        <div className={cg('head')} >
                            <h5 className={cg('title', 'head')} >
                                {props.title}
                            </h5>
                            <h4 className={cg('name', 'head')} >
                                {props.pseudoName}
                            </h4>
                        </div>
                        <div className={cg('body')}>
                            <p className={cg('resume', 'body')} >
                                {props.resume}
                            </p>
                        </div>
                    </div>
                    <div className={cg('footer')} >
                        {props.socialNetworks.map((sn, index) => {
                            return (
                                <a className={cg('social-network')} key={index} href={sn.link}>
                                    {socialNetworkIcons[sn.name]({ color: colors.light_4 })}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Member;