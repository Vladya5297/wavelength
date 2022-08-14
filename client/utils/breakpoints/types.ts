import type {BREAKPOINTS} from './constants';

type RangeTo =
| '-xs'
| '-s'
| '-m'
| '-l'
| '-xl'
| '-xxl';

type RangeFrom =
| 'xs-'
| 's-'
| 'm-'
| 'l-'
| 'xl-'
| 'xxl-';

type RangeXs =
| 'xs-s'
| 'xs-m'
| 'xs-l'
| 'xs-xl'
| 'xs-xxl';

type RangeS =
| 's-m'
| 's-l'
| 's-xl'
| 's-xxl';

type RangeM =
| 'm-l'
| 'm-xl'
| 'm-xxl';

type RangeL =
| 'l-xl'
| 'l-xxl';

type RangeXl =
| 'xl-xxl';

export type RangeKey = RangeTo | RangeFrom | RangeXs | RangeS | RangeM | RangeL | RangeXl;

export type Breakpoint = typeof BREAKPOINTS[number];
