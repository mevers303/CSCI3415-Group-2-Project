import express from 'express';

import { demo2 } from './api/demo2.ts';

const app: express.Application = express();
const port: number = 3000;



// Middleware to parse JSON request bodies
app.use('/api/*', express.json());
// POST requests to demo2
app.post('/api/demo2', demo2);


// If not found, doesn't throw an error.
app.use(express.static(`${process.cwd()}/client/dist/client/browser/`, {}));
// Other requests should be redirected to our Angular client
app.use('*', (req: express.Request, res: express.Response) => {
  res.sendFile(`${process.cwd()}/client/dist/client/browser/index.html`);
});

// open theserver
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
