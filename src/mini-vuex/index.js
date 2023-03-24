export function createStore(options) {
  // 创建 Store实例
  const store = {};
  // 插件实现要求的install方法
  store.install = function (app) {
    const store = this;
    // 注册$router
    app.config.globalProperties.$store = store;
  };

  return store;
}
