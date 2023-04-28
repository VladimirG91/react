import express from 'express';
import fs from 'node:fs/promises';
const { createServer } = await import('vite');

const PORT = 3001;
const app = express();

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use(vite.middlewares);

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;
  try {
    const template = await fs.readFile('./index.html', 'utf-8');
    const templateHTML = await vite.transformIndexHtml(url, template);
    const [partStart, partEnd] = templateHTML.split('<!--ssr-outlet-->');
    const render = (await vite.ssrLoadModule('/src/ServerApp.tsx')).render;
    res.write(partStart);
    const { stream, preload } = await render(url, {
      onShellReady() {
        stream.pipe(res);
      },
      onAllReady() {
        const preloader = partEnd.replace('<!--preload-->', preload());
        res.write(preloader);
        res.end();
      },
      onError(err: Error) {
        console.error(err);
      },
    });
  } catch (error) {
    vite.ssrFixStacktrace(error as Error);
    next(error);
  }
});
console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
