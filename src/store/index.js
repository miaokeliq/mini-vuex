import { createStore } from "../mini-vuex";

const store = createStore({
  state() {
    return {
      count: 111,
    };
  },
});

export { store };
