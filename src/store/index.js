import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alert: {
      isOpen: true,
      type: "default",
      message: "",
      useIcon: false,
    },
  },
  mutations: {
    SET_ALERT(state, payload) {
      state.alert = payload;
    },
  },
  actions: {
    openAlert(context, payload) {
      const alert = {
        isOpen: true,
        type: payload.type,
        message: payload.message,
        useIcon: payload.useIcon,
      };
      context.commit("SET_ALERT", alert);
    },
    closeAlert(context) {
      const defaultAlert = {
        isOpen: false,
        type: "default",
        message: "",
        useIcon: false,
      };

      context.commit("SET_ALERT", defaultAlert);
    },
  },
  modules: {},
});
