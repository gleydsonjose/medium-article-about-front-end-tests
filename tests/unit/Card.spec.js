import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("<template/>", () => {
  it("deveria ser igual ao snapshot", () => {
    const wrapper = shallowMount(Card);

    expect(wrapper).toMatchSnapshot();
  });
});
