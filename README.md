<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-use-watch-once/main/banner.svg" alt="vue-use-watch-once" width="100%" />
</p>

<h1 align="center">vue-use-watch-once</h1>

<p align="center">A Vue 3 composition API utility providing a convenient shorthand for creating one-time watchers that automatically stop after first trigger.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-use-watch-once"><img src="https://img.shields.io/npm/v/vue-use-watch-once.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-use-watch-once"><img src="https://img.shields.io/npm/dm/vue-use-watch-once.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-use-watch-once
```

## Usage

```ts
import { watchOnce } from 'vue-use-watch-once'
import { ref } from 'vue'

const count = ref(0)

watchOnce(count, (value) => {
  console.log('Count changed once:', value)
})

count.value = 1 // Triggers callback
count.value = 2 // Does not trigger
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
