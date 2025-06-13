
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/story-board"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 757, hash: 'eb479fc821e174eafd0fc6281750afa121f9b524d27280e8a32b7168bc8df9e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: 'ff4c8bc70be323a2c88aa3f6bbd5019ffe9afce6fa29ea72d4dda50c1efa81bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15287, hash: 'ad0675a0356163b9e1c513c1ccc6a85036c551acad711b148fc65d62be816ccb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'story-board/index.html': {size: 10489, hash: '98b1cbb28e2c6245df7b293a864c866abed8e65b3e07eff01024522fa5bb9014', text: () => import('./assets-chunks/story-board_index_html.mjs').then(m => m.default)},
    'styles-5RUYDJ4L.css': {size: 215, hash: 'TtpeXS4hQrM', text: () => import('./assets-chunks/styles-5RUYDJ4L_css.mjs').then(m => m.default)}
  },
};
