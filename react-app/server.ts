import express from 'express';
import fs from 'node:fs/promises';
// import path, { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import { createServer as createViteServer } from 'vite';

// const __dirname = dirname(fileURLToPath(import.meta.url));
const { createServer } = await import('vite');

const PORT = process.env.PORT || 3001;

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

// async function createServer() {
const app = express();

app.use(vite.middlewares);

app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl;
    const template = await fs.readFile('./index.html', 'utf-8');
    const templateHTML = await vite.transformIndexHtml(url, template);
    const parts = templateHTML.split('<!--ssr-outlet-->');
    const { render } = await vite.ssrLoadModule('/src/ServerApp.tsx');

    const { pipe } = await render(url, {
      onShellReady() {
        res.write(parts[0]);
        pipe(res);
        res.write(parts[1]);
      },
    });
  } catch (error) {
    // if (error instanceof Error) {
    //   vite.ssrFixStacktrace(error);
    //   next(error);
    // }
  }
});
console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
// }

// createServer();
