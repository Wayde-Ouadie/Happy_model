import { ArrowNarrowLeft,BiohazardOff , ChevronsRight, ChevronsLeft, ArrowUp, ArrowNarrowRight, Biohazard, Copyright, ArrowBarRight } from 'tabler-icons-react';

const ListIconComponent = {
    Copyright: (props) => <Copyright {...props} />,
    ArrowBarRight: (props) => <ArrowBarRight {...props}/>,
    ArrowNarrowLeft: (props) => <ArrowNarrowLeft {...props}/>,
    ArrowNarrowRight: (props) => <ArrowNarrowRight {...props} />,
    ChevronsRight: (props) => <ChevronsRight {...props} />,
    ChevronsLeft: (props) => <ChevronsLeft {...props} />,
    Biohazard: (props) => <Biohazard {...props} />,
    BiohazardOff: (props) => <BiohazardOff {...props} />,
    ArrowUp: (props) => <ArrowUp {...props}/>
} as const;



export type IconNames = keyof typeof ListIconComponent;

export default ListIconComponent;