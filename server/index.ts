import path from 'path';

import {createServer} from './createServer';

createServer(path.resolve(__dirname, './public'), 80);
