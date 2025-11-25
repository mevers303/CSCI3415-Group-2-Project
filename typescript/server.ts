import express from 'express';
const app = express();
const port = 3000;

// const config: AppConfiguration = {
//   angularEnvironment: process.env['ANGULAR_ENVIRONMENT'] === 'development' ? 'development' : 'production',
//   apiUrl: process.env['API_URL'] ?? null,
//   backgroundColor: process.env['BACKGROUND_COLOR'] ?? null
// }

// If not found, doesn't throw an error.
app.use(express.static(`${process.cwd()}/client/dist/client/browser/`, {}));

// // Provide configuration on /config
// app.get('/config', (req, res) => {
//   res.json(config);
// });

// Other requests should be redirected to our Angular client
app.use('*', (req: express.Request, res: express.Response) => {
  res.sendFile(`${process.cwd()}/client/dist/client/browser/index.html`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
