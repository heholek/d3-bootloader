/**
 * d3-bootloader
 * 2017 Ændrew Rininsland <@aendrew>, Financial Times
 *
 * Allows the use of D3 using ES6 modules via SystemJS.
 * This does Babel transpilation in the browser. It's probably
 * not very performant — at all — and is intended for scenarios
 * such as with Visual Vocabulary (I.e., D3 is being used as an
 * in-browser tool for creating static print visualisations).
 */

import SystemJS from 'systemjs';

var defaultMap = {
  '@financial-times/load-data':
    'https://unpkg.com/@financial-times/load-data@^1.0.2/dist/loadData.dist.min.js',
  d3: 'https://d3js.org/d3.v4.js',
  'd3-array': 'https://d3js.org/d3.v4.js',
  'd3-axis': 'https://d3js.org/d3.v4.js',
  'd3-brush': 'https://d3js.org/d3.v4.js',
  'd3-chord': 'https://d3js.org/d3.v4.js',
  'd3-collection': 'https://d3js.org/d3.v4.js',
  'd3-color': 'https://d3js.org/d3.v4.js',
  'd3-dispatch': 'https://d3js.org/d3.v4.js',
  'd3-drag': 'https://d3js.org/d3.v4.js',
  'd3-dsv': 'https://d3js.org/d3.v4.js',
  'd3-ease': 'https://d3js.org/d3.v4.js',
  'd3-force': 'https://d3js.org/d3.v4.js',
  'd3-format': 'https://d3js.org/d3.v4.js',
  'd3-geo': 'https://d3js.org/d3.v4.js',
  'd3-hierarchy': 'https://d3js.org/d3.v4.js',
  'd3-interpolate': 'https://d3js.org/d3.v4.js',
  'd3-path': 'https://d3js.org/d3.v4.js',
  'd3-polygon': 'https://d3js.org/d3.v4.js',
  'd3-quadtree': 'https://d3js.org/d3.v4.js',
  'd3-quarterly': 'https://rawgit.com/ft-interactive/d3-quarterly/v1.0.0/index.js',
  'd3-queue': 'https://d3js.org/d3.v4.js',
  'd3-random': 'https://d3js.org/d3.v4.js',
  'd3-request': 'https://d3js.org/d3.v4.js',
  'd3-sankey': 'https://unpkg.com/d3-sankey',
  'd3-scale': 'https://d3js.org/d3.v4.js',
  'd3-selection-multi': 'https://unpkg.com/d3-selection-multi@1.0.1',
  'd3-selection': 'https://d3js.org/d3.v4.js',
  'd3-shape': 'https://d3js.org/d3.v4.js',
  'd3-time-format': 'https://d3js.org/d3.v4.js',
  'd3-time': 'https://d3js.org/d3.v4.js',
  'd3-timer': 'https://d3js.org/d3.v4.js',
  'd3-transition': 'https://d3js.org/d3.v4.js',
  'd3-voronoi': 'https://d3js.org/d3.v4.js',
  'd3-zoom': 'https://d3js.org/d3.v4.js',
  'g-annotations': 'https://unpkg.com/g-annotations@0.0.8',
  'g-axis': 'https://unpkg.com/g-axis@1',
  'g-chartcolour': 'https://unpkg.com/g-chartcolour@0.8',
  'g-chartframe': 'https://unpkg.com/g-chartframe@5',
  'g-legend': 'https://unpkg.com/g-legend@0.0.8',
  'g-xaxisdate': 'https://unpkg.com/g-axis@1',
  'g-yaxislinear': 'https://unpkg.com/g-axis@1',
  'plugin-babel': 'https://unpkg.com/systemjs-plugin-babel@0.0.25',
  'plugin-json': 'https://unpkg.com/systemjs-plugin-json@0.3.0',
  'save-svg-as-png': 'https://unpkg.com/save-svg-as-png@1',
  'simple-statistics': 'https://unpkg.com/simple-statistics@5',
  'systemjs-babel-build':
    'https://unpkg.com/systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',
  'topojson-client': 'https://unpkg.com/topojson-client@3',
};

var config = {
  map: Object.assign({}, defaultMap, window.D3_BOOTLOADER_MODULES),
  packages: {
    'plugin-babel': {
      main: 'plugin-babel.js',
    },
  },
  meta: { '*.json': { loader: 'plugin-json' } },
  transpiler: 'plugin-babel',
};

SystemJS.config(config);

export default SystemJS.import('./index.js');
