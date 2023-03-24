import { reactive } from "vue";
export function createStore(options) {
  // 创建 Store实例
  const store = {
    // 如果这个值发生变化，则依赖的app组件会重新render
    _state: reactive(options.state()),
    // get state() {
    //   return this._state;
    // },
    // set state(v) {
    //   console.error("please use replaceState() to reset state");
    // },
  };

  Object.defineProperty(store, "state", {
    get() {
      return this._state;
    },
    set(v) {
      console.error("please use replaceState() to reset state");
    },
  });

  // 插件实现要求的install方法
  store.install = function (app) {
    const store = this;
    // 注册$router
    app.config.globalProperties.$store = store;
  };

  return store;
}
