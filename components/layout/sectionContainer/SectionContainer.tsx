// global resources
import React, { useRef, useEffect } from 'react'


const SectionContainer = ({ children, name, setRef }) => {
    return (
        <>
            <section ref={e => {
                if(!e) return null;
                setRef(e);
            }} id={name} className='section overflow-hidden'>
                {children}
            </section>
        </>
    )
}

export default SectionContainer;