import { createLocalVue, shallowMount } from "@vue/test-utils";
import Alert from "@/components/Alert.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("<template/>", () => {
  let state;
  let actions;

  beforeEach(() => {
    state = {
      alert: {
        isOpen: true,
        type: "default",
        message: "",
        useIcon: false,
      },
    };
    actions = {
      closeAlert: () => { },
    };
  });

  it("deveria mostrar o icone após usar prop useIcon", () => {
    state.alert.useIcon = true;

    const wrapper = shallowMount(Alert, {
      store: new Vuex.Store({
        state,
        actions,
      }),
      localVue,
    });

    expect(wrapper.find(".alert__type-icon").isVisible()).toBeTruthy();
  });

  it("deveria esconder o icone após não usar prop useIcon", () => {
    const wrapper = shallowMount(Alert, {
      store: new Vuex.Store({
        state,
        actions,
      }),
      localVue,
    });

    expect(wrapper.find(".alert__type-icon").isVisible()).toBeFalsy();
  });

  it("deveria acionar evento após clicar no botão de fechar alerta", () => {
    const closeMethodSpy = jest.spyOn(Alert.methods, "close");
    const wrapper = shallowMount(Alert, {
      store: new Vuex.Store({
        state,
        actions,
      }),
      localVue,
    });

    wrapper.find(".alert__btn-close").trigger("click");

    expect(closeMethodSpy).toBeCalled();
  });

  it("deveria ser igual ao snapshot", () => {
    const wrapper = shallowMount(Alert, {
      store: new Vuex.Store({
        state,
        actions,
      }),
      localVue,
    });

    expect(wrapper).toMatchSnapshot();
  });
});

describe("methods@close", () => {
  let state;
  let actions;

  beforeEach(() => {
    state = {
      alert: {
        isOpen: true,
        type: "default",
        message: "",
        useIcon: false,
      },
    };
    actions = {
      closeAlert: () => { },
    };
  });

  it("deveria chamar action do Vuex após usar método", () => {
    const closeAlert = jest.fn();
    actions.closeAlert = closeAlert;
    const wrapper = shallowMount(Alert, {
      store: new Vuex.Store({
        state,
        actions,
      }),
      localVue,
    });

    wrapper.find(".alert__btn-close").trigger("click");

    expect(closeAlert).toBeCalled();
  });
});
