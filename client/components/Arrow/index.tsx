import React from 'react';
import type {CSSProperties} from 'react';
import cn from 'classnames';

import url from '~/images/arrow.svg';

import css from './style.module.css';

type Props = {
    style?: CSSProperties;
    className?: string;
    angle: number;
};

export const Arrow = ({angle, style = {}, className}: Props) => {
    return (
        <img
            src={url}
            alt=""
            className={cn(css.arrow, className)}
            style={{...style, transform: `rotate(${angle}deg)`}}
        />
    );
};
