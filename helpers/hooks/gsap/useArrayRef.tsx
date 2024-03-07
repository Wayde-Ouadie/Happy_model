
import { useEffect, useRef } from 'react';

export function useArrayRef() {
    const refs = useRef([]);
    refs.current = [];
    
    return [refs, (ref) => ref && refs.current.push(ref)] as const;
}

// https://codepen.io/GreenSock/pen/oNWqyzr