import { useState, useCallback } from 'react';

import useScrollToSection from './gsap/useScrollToSection';
import { useRouter } from 'next/router';
import { WindowMaximize } from 'tabler-icons-react';

const useGoToItemLink = () => {
    const [ goToSection ] = useScrollToSection();
    const router = useRouter();

    const linker = ({ page, offsetTop = () => 0 }) => {
        console.log(offsetTop());
        if(!!page && router.pathname !== page) {
            router.push(page);
        }else{
            goToSection(offsetTop());
        }
    }
    return { linker };
}


export default useGoToItemLink;