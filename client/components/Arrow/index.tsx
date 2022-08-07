import React from 'react';
import {useSelector} from 'react-redux';
import type {State} from 'client/store';

import css from './style.module.css';

export const Arrow = () => {
    const angle = useSelector((state: State) => state.angle);

    return (
        <div className={css.wrapper} style={{transform: `rotate(${angle}deg)`}}>
            <div className={css.center} />
            <div className={css.pointer} />
        </div>
    );
};
