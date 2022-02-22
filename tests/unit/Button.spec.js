import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("<template/>", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deveria mostrar o icone após usar prop useIcon", () => {
    const wrapper = shallowMount(Button, {
      propsData: { useIcon: true },
    });

    expect(wrapper.find(".button__icon").isVisible()).toBeTruthy();
  });

  it("deveria esconder o icone após não usar prop useIcon", () => {
    const wrapper = shallowMount(Button);

    expect(wrapper.find(".button__icon").isVisible()).toBeFalsy();
  });

  it("deveria renderizar o texto recebido por prop", () => {
    const text = "Clique aqui para salvar";
    const wrapper = shallowMount(Button, {
      propsData: {
        text,
      },
    });

    expect(wrapper.find(".button__text").text()).toBe(text);
  });

  it("deveria acionar um evento após clicar no botão", () => {
    const clickEventSpy = jest.spyOn(Button.methods, "clickEvent");
    const wrapper = shallowMount(Button);

    wrapper.find(".button").trigger("click");

    expect(clickEventSpy).toBeCalled();
  });

  it("não deveria acionar um evento após clicar no botão que está desabilitado", () => {
    const clickEventMethodSpy = jest.spyOn(Button.methods, "clickEvent");
    const wrapper = shallowMount(Button, { propsData: { disabled: true } });

    wrapper.find(".button").trigger("click");

    expect(clickEventMethodSpy).toBeCalledTimes(0);
  });

  it("deveria ser igual ao snapshot", () => {
    const wrapper = shallowMount(Button);

    expect(wrapper).toMatchSnapshot();
  });
});

describe("props:type", () => {
  it("deveria retornar erro caso o tipo recebido pela prop não seja aceitável", () => {
    expect(Button.props.type.validator("danger")).toBeFalsy();
  });
});

describe("methods@clickEvent", () => {
  it("deveria chamar emit após usar método", () => {
    const wrapper = shallowMount(Button);
    wrapper.find(".button").trigger("click");
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
