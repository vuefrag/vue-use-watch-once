<p align="center">
  <img src="banner.svg" alt="vue-use-watch-once" width="100%" />
</p>

<h1 align="center">vue-use-watch-once</h1>

<p align="center"></p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-use-watch-once"><img src="https://img.shields.io/npm/v/vue-use-watch-once.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-use-watch-once"><img src="https://img.shields.io/npm/dm/vue-use-watch-once.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-use-watch-once
```

## Usage

Shorthand for watching value with `{ once: true }`. Once the callback fires once, the watcher will be stopped.
See [Vue's docs](https://vuejs.org/guide/essentials/watchers.html#once-watchers) for full details.

Similar to `watch`, but with `{ once: true }`

```ts
import { watchOnce } from 'vue-use-watch-once'

watchOnce(source, () => {
  // triggers only once
  console.log('source changed!')
})
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
