import React from 'react';
import {useSelector} from 'react-redux';

import url from 'client/images/arrow.png';
import type {State} from 'client/store';

import css from './style.module.css';

export const Arrow = () => {
    const angle = useSelector((state: State) => state.angle);

    return (
        <div className={css.wrapper} style={{transform: `rotate(${angle}deg)`}}>
            <img className={css.arrow} src={url} alt="" />
        </div>
    );
};
