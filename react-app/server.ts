import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const parts = template.split('<!--ssr-outlet-->');
      const { render } = await vite.ssrLoadModule('/src/ServerApp.tsx');

      const { pipe } = await render(url, {
        onShellReady() {
          res.write(parts[0]);
          pipe(res);
          res.write(parts[1]);
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        vite.ssrFixStacktrace(error);
        next(error);
      }
    }
  });
  console.log(`listening on http://localhost:${PORT}`);
  app.listen(PORT);
}

createServer();
