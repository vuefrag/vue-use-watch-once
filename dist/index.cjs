'use strict';

const vue = require('vue');

function watchOnce(source, cb, options) {
  return vue.watch(
    source,
    cb,
    {
      ...options,
      once: true
    }
  );
}

exports.watchOnce = watchOnce;
