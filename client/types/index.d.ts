import type {Winwheel} from './Winwheel';

declare global {
    interface Window {
        wheel: Winwheel;
        Winwheel: typeof Winwheel;
    }
}
