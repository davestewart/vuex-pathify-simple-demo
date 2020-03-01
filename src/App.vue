<template>
  <div id="app">
    <img width="600" src="./assets/logo.png">
    <div>
      <h1>{{ message }}</h1>
      <input v-model="greeting" placeholder="Greeting">
      <input v-model="name" placeholder="Name">
      <button @click="greet">Greet</button>
    </div>
  </div>
</template>

<script>
import { get, sync, call } from 'vuex-pathify'

export default {
  computed: {
    message: get('demo/message'),
    ...sync('demo/*')
  },

  methods: call('demo', [
    'greet'
  ])
}
</script>
