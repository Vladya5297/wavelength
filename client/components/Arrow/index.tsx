import React from 'react';

import css from './style.module.css';

export const Arrow = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.center} />
            <div className={css.pointer} />
        </div>
    );
};
