import type {SegmentOptions} from 'client/types/Winwheel';

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
