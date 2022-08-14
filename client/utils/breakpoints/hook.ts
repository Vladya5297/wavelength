import {useEffect, useState} from 'react';

import {BREAKPOINTS, RANGES} from './constants';
import type {Breakpoint, RangeKey} from './types';

const getBreakpointIndex = (breakpoint: Breakpoint): number => {
    return BREAKPOINTS.indexOf(breakpoint);
};

const getBreakpointQuery = (range: {minWidth: number; minHeight: number}): string => {
    return `(min-width: ${range.minWidth}px) and (min-height: ${range.minHeight}px)`;
};

const subscribe = (breakpoint: Breakpoint, callback: (value: boolean) => void): () => void => {
    const onChange = (event: MediaQueryListEvent) => {callback(event.matches)};
    const range = RANGES[breakpoint];
    const media = window.matchMedia(getBreakpointQuery(range));
    media.addEventListener('change', onChange);

    return () => {media.removeEventListener('change', onChange)};
};

const makeInitialValue = (): boolean[] => {
    return Object.values(RANGES).map(range => {
        return window.matchMedia(getBreakpointQuery(range)).matches;
    });
};

type Config<T> = Partial<Record<RangeKey, T>> & {fallback: T};

export const useBreakpoint = <T>({fallback, ...config}: Config<T>): T => {
    const [breakpoints, setBreakpoints] = useState(makeInitialValue());

    useEffect(() => {
        const unsubscribe = BREAKPOINTS.map(
            (breakpoint, index) => subscribe(breakpoint, matches => {
                setBreakpoints(values => {
                    const result = [...values];
                    result.splice(index, 1, matches);
                    return result;
                });
            }),
        );

        return () => {unsubscribe.forEach(callback => callback())};
    }, []);

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(config)) {
        const [from, to] = key.split('-') as Breakpoint[];

        if (from && !to) {
            const fromValue = breakpoints[getBreakpointIndex(from)];
            if (fromValue) return value;
        }

        if (!from && to) {
            const toValue = breakpoints[getBreakpointIndex(to)];
            if (!toValue) return value;
        }

        if (from && to) {
            const fromValue = breakpoints[getBreakpointIndex(from)];
            const toValue = breakpoints[getBreakpointIndex(to)];
            if (fromValue && !toValue) return value;
        }
    }

    return fallback;
};
