import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer, ViteDevServer } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();

const parts = html.split('<!--ssr-outlet-->');

const app = express();

const vite: ViteDevServer = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
app.use(async (req, res) => {
  res.write(parts[0]);
  const { render } = await vite.ssrLoadModule('/src/ServerApp.tsx');
  const stream = render(req.url, {
    onShellReady() {
      stream.pipe(res);
    },
    onShellError() {
      // do error handling
    },
    onAllReady() {
      // last thing to write
      res.write(parts[1]);
      res.end();
    },
    onError(err: string) {
      console.error(err);
    },
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
