# Vuex 是全局状态管理模式库

通俗点：平常在开发过程中，有很多个组件，组件间可能没明确的关系，但它们依赖与某个相同的状态，比如用户的登陆信息，这种称为全局状态。  
如果通过组件之间传参就会很不方便。

设计思路：

1. 统一状态存储 ： store
2. 可预测的变更.

# 统一状态存储 Store

存起来的 state 是**响应式**的，因为这些数据在组件中有依赖，这些数据发生变化，组件需要去实时更新。

# 可预测的变更

库里面必须提供一个修改状态的方式，不能随便访问数据，想改就改。

## store.commit()

1. 把用户配置的 mutations 拿到
2. 用户传入 type 类型，然后从 mutations 数组/对象中将 type 传入得到具体的 mutations，然后调用得到的 mutations 函数。
