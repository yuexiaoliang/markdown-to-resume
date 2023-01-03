import liveServer from 'live-server';
import { resolve } from 'path';
import { __dirname } from './core.js';

liveServer.start({
  port: 8181,
  host: '0.0.0.0',
  root: resolve(__dirname, '../dist'),
  open: false,
  file: 'index.html'
});
