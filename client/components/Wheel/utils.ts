import type {State} from 'client/store';
import {wheelSlice} from 'client/store/wheel';
import type {SegmentOptions} from 'client/types/Winwheel';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const makeSegments = () => {
    const targetSegments = [
        {text: '2', fillStyle: '#ec9221'},
        {text: '3', fillStyle: '#ef3238'},
        {text: '4', fillStyle: '#58809e'},
        {text: '3', fillStyle: '#ef3238'},
        {text: '2', fillStyle: '#ec9221'},
    ].map(props => ({...props, textFontFamily: 'sans-serif'}));

    const segments: Array<Partial<SegmentOptions>> = Array.from({length: 36});
    segments.splice(0, 5, ...targetSegments);
    segments.splice(18, 23, ...targetSegments);

    return segments;
};

export const useWheel = () => {
    const rotationAngle = useSelector((state: State) => state.wheel.value);
    const dispatch = useDispatch();

    const spinCallback = () => {
        dispatch(wheelSlice.actions.setDone());
    };

    useEffect(() => {
        const backgroundColor = '#dedbc7';
        const segments = makeSegments();

        window.wheel = new window.Winwheel({
            canvasId: 'wheel',
            textOrientation: 'vertical',
            textAlignment: 'outer',
            textMargin: 20,
            fillStyle: backgroundColor,
            strokeStyle: backgroundColor,
            lineWidth: 1,
            pointerAngle: 0,
            rotationAngle,
            numSegments: 36,
            segments,
            animation:
            {
                type: 'spinToStop',
                duration: 2,
                spins: 1,
                direction: 'clockwise',
                callbackFinished: spinCallback,
            },
        });
    }, []);
};
