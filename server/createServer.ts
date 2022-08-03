import express from 'express';
import type {Express} from 'express';
import type {Send, Query} from 'express-serve-static-core';

// https://github.com/tomnil/typedexpress

export interface Request<B = any, Q extends Query = any> extends Express.Request {
    body: B;
    query: Q;
}

export interface Response<B = any> extends Express.Response {
    send: Send<B, this>;
}

export const createServer = (path: string, port: number) => {
    const app = express();

    app.use(express.json());
    app.use(express.static(path));

    app.get('/', (req, res) => {
        res.sendFile('index.html', {
            root: path,
        });
    });

    app.listen(port, () => {
        console.log(`listening at http://localhost:${port}`);
    });

    return app;
};

export type Config = {
    method: string;
    path: string;
    callback: (req: Request, res: Response) => void;
};

export const setupApi = (app: Express, configs: Config[]) => {
    configs.forEach(({method, path, callback}) => {
        switch (method) {
            case 'GET': {
                app.get(path, callback);
                break;
            }
            case 'POST': {
                app.post(path, callback);
                break;
            }
            default:
                throw new Error(`Unknown method: ${method}`);
        }
    });
};
