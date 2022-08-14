import React from 'react';
import cn from 'classnames';

import css from './style.module.css';

type Props = {
    text: string;
    className?: string;
};

export const Card = ({text, className}: Props) => {
    return <div className={cn(css.card, className)}>{text}</div>;
};
