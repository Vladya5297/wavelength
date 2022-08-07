import React from 'react';

import css from './style.module.css';

type Props = {
    angle: number;
};

export const Arrow = ({angle}: Props) => {
    return (
        <div className={css.wrapper} style={{transform: `rotate(${angle}deg)`}}>
            <div className={css.center} />
            <div className={css.pointer} />
        </div>
    );
};
