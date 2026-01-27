import { watch } from 'vue';

function watchOnce(source, cb, options) {
  return watch(
    source,
    cb,
    {
      ...options,
      once: true
    }
  );
}

export { watchOnce };
