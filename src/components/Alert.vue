<template>
  <div class="alert" :style="alertStyle">
    <section class="alert__message-outer">
      <i
        v-show="alert.useIcon"
        class="mdi alert__type-icon"
        :class="colorsType.icon"
      ></i>
      <p class="alert__message">{{ alert.message }}</p>
    </section>
    <button class="alert__btn-close" @click="close">
      <i class="mdi mdi-close-circle alert__btn-close-icon"></i>
    </button>
  </div>
</template>

<script>
import { COLORS_TYPE } from "@/constants/colors.js"
import { mapState, mapActions } from "vuex";

export default {
  name: "Alert",
  computed: {
    ...mapState(["alert"]),
    colorsType() {
      const type = this.alert?.type || "default";
      return COLORS_TYPE[type];
    },
    alertStyle() {
      const style = {
        "background-color": this.colorsType.backgroundColor,
        "border-color": this.colorsType.borderColor,
      };

      return style;
    },
  },
  methods: {
    ...mapActions(["closeAlert"]),
    close() {
      this.closeAlert();
    },
  },
};
</script>

<style scoped>
.alert {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 40px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  color: #eceff1;
  padding: 8px 0;
  font-size: 12pt;
}

.alert__message-outer {
  display: flex;
  align-items: center;
}

.alert__type-icon {
  margin: 0 6px;
}

.alert__message {
  word-wrap: break-word;
  width: 396px;
  font-weight: bold;
  margin: 0;
}

.alert__btn-close {
  background: transparent;
  border: none;
  color: #eceff1;
  padding: 0;
  transition: opacity 0.25s ease-out;
  margin: 0 6px;
}

.alert__btn-close:hover {
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.25s ease-in;
}

.alert__btn-close-icon {
  font-size: 13pt;
}
</style>
