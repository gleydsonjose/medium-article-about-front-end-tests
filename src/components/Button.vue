<template>
  <button
    class="button"
    :style="buttonStyle"
    :disabled="disabled"
    @click="clickEvent"
  >
    <i v-show="useIcon" class="mdi button__icon" :class="colorsType.icon"></i>
    <p class="button__text">{{ text }}</p>
  </button>
</template>

<script>
import { COLORS_TYPE } from "@/constants/colors.js"

export default {
  name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    useIcon: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "default",
      validator: (type) =>
        ["default", "info", "success", "warn", "error"].includes(type),
    },
  },
  computed: {
    colorsType() {
      return COLORS_TYPE[this.type];
    },
    buttonStyle() {
      const style = {
        "background-color": this.colorsType.backgroundColor,
        "border-color": this.colorsType.borderColor,
      };

      return style;
    },
  },
  methods: {
    clickEvent() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  color: #eceff1;
  padding: 14px;
  transition: opacity 0.3s ease-out;
  font-size: 12pt;
}

.button:hover {
  opacity: 0.9;
  cursor: pointer;
  transition: opacity 0.3s ease-in;
}

.button__icon {
  margin-right: 5px;
}

.button__text {
  font-weight: bold;
  margin: 0;
}
</style>
