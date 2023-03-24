import { computed, reactive } from "vue";
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

    _mutations: options.mutations, // 用户传进来的mutations
    _actions: options.actions,
  };

  Object.defineProperty(store, "state", {
    get() {
      return this._state;
    },
    set(v) {
      console.error("please use replaceState() to reset state");
    },
  });
  // commit 实现
  // payload 用户传递进来的参数
  function commit(type, payload) {
    // 获取 type 对应的 mutation
    const entry = this._mutations[type];

    if (!entry) {
      console.log(`unknown mutation type: ${type}`);
      return;
    }

    entry.call(this._state, this._state, payload);
  }
  // dispatch 实现
  function dispatch(type, payload) {
    // 获取用户编写的 type 对应的 actions
    const entry = this._actions[type];
    if (!entry) {
      console.log(`unknown action type: ${type}`);
    }

    entry(this, this, payload);
  }

  store.commit = commit.bind(store);
  store.dispatch = dispatch.bind(store);

  // 定义 store.getters
  store.getters = {};
  // 遍历用户定义的 getters
  Object.keys(options.getters).forEach((key) => {
    const result = computed(() => {
      let getter = options.getters[key];
      if (getter) {
        return getter.call(store, store._state);
      } else {
        console.error(`Unknown getter: ${key}`);
        return "";
      }
    });

    Object.defineProperty(store.getters, key, {
      get() {
        return result;
      },
    });
  });
  // 动态定义 store.getters.xxx
  // 值来自于用户定义的getter函数的返回值

  // 插件实现要求的install方法
  store.install = function (app) {
    const store = this;
    // 注册$router
    app.config.globalProperties.$store = store;
  };

  return store;
}
