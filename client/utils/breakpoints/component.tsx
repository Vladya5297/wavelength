import React from 'react';
import type {ReactNode} from 'react';

import {useBreakpoint} from './hook';
import type {Breakpoint as BreakpointType} from './types';

type Range = {
    from?: BreakpointType;
    to?: BreakpointType;
};

const makeRangeKey = ({from, to}: Range): string => {
    return `${from || ''}-${to || ''}`;
};

type Props = Range & {children: ReactNode};

export const Breakpoint = ({children, ...props}: Props) => {
    const key = makeRangeKey(props);
    const visible = useBreakpoint({[key]: true, fallback: false});

    return visible ? <>{children}</> : null;
};
