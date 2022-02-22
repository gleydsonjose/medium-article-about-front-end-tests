import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("<template/>", () => {
  it("deveria ser igual ao snapshot", () => {
    const wrapper = shallowMount(Footer);

    expect(wrapper).toMatchSnapshot();
  });
});
