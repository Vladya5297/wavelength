import React from 'react';
import {useMediaQuery} from 'react-responsive';

import {PortraitLayout, LandscapeLayout} from './components/Layout';

export const Game = () => {
    const portrait = useMediaQuery({orientation: 'portrait'});

    return portrait ? <PortraitLayout /> : <LandscapeLayout />;
};
