<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div @click="$store.commit('add')">
      vuex:commit:{{ $store.state.count }}
    </div>
    <div @click="$store.dispatch('add')">
      vuex: dispatch{{ $store.state.count }}
    </div>
    <div>vuex: getters{{ $store.getters.doubleCounter }}</div>
    <div @click="$store.state.count++" style="height: 50px">
      通过store.state直接修改状态，如果使用严格模式会报警告
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
