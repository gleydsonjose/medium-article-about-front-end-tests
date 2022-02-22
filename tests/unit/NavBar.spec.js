import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("<template/>", () => {
  it("deveria ser igual ao snapshot", () => {
    const wrapper = shallowMount(NavBar, {
      stubs: ["router-link"],
    });

    expect(wrapper).toMatchSnapshot();
  });
});
