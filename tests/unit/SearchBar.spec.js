import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("<template/>", () => {
  it("deveria mostrar placeholder recebido por prop no input", () => {
    const placeholderText = "Faça uma buscas por algo aqui";
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        placeholder: placeholderText,
        validations: {},
      },
    });

    expect(wrapper.find(".search-bar__input").attributes("placeholder")).toBe(
      placeholderText
    );
  });

  it("deveria acionar evento após clicar no botão de limpar input", () => {
    const clearInputMethodSpy = jest.spyOn(SearchBar.methods, "clearInput");
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        validations: {},
      },
    });

    wrapper.find(".search-bar__close-button").trigger("click");
    expect(clearInputMethodSpy).toBeCalled();
  });

  it("deveria mostrar contador de caracteres após o valor máximo de caracteres ficar acima de 0", () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        maxLength: 10,
        validations: {},
      },
    });

    expect(wrapper.find(".search-bar__length-message").exists()).toBeTruthy();
  });

  it("não deveria mostrar o contador de caracteres após o valor máximo de caracteres ser 0", () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        maxLength: 0,
        validations: {},
      },
    });

    expect(wrapper.find(".search-bar__length-message").exists()).toBeFalsy();
  });

  it("deveria ser igual ao snapshot", () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        validations: {},
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});

describe("computed:charactersLengthHasError", () => {
  it("deveria retornar false se a quantidade de caracteres no input ultrapassar o valor máximo de caracteres", () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        maxLength: 10,
        validations: {
          charactersLength: true,
        },
        searchValue: "Como testar componentes Vue?",
      },
    });

    expect(wrapper.vm.charactersLengthHasError).toBeTruthy();
  });

  it("deveria retornar true se a quantidade de caracteres no input for menor que o valor máximo de caracteres", () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        maxLength: 20,
        validations: {
          charactersLength: true,
        },
        searchValue: "O que é Vue?",
      },
    });

    expect(wrapper.vm.charactersLengthHasError).toBeFalsy();
  });
});

describe("computed:charactersLengthLabel", () => {
  it("deveria retornar uma mensagem de erro se caso a quantidade de caracteres no input ultrapassar o valor máximo de caracteres", () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        maxLength: 10,
        validations: {
          charactersLength: true,
        },
        searchValue: "Como testar componentes Vue?",
      },
    });

    expect(wrapper.vm.charactersLengthLabel).toBe("28/10 Limite atingido");
  });

  it("deveria retornar o contador de caracteres caso não tenha erros", () => {
    const wrapper = shallowMount(SearchBar, {
      propsData: {
        maxLength: 20,
        validations: {
          charactersLength: true,
        },
        searchValue: "O que é Vue?",
      },
    });

    expect(wrapper.vm.charactersLengthLabel).toBe("12/20");
  });
});
