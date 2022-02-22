<template>
  <div class="search-bar">
    <div class="search-bar__input-outer">
      <input
        class="search-bar__input"
        type="text"
        :placeholder="placeholder"
        ref="search-bar"
        v-model="localSearchValue"
      />
      <button class="search-bar__close-button" @click="clearInput">
        <i class="mdi mdi-close search-bar__close-button-icon"></i>
      </button>
    </div>

    <p
      v-if="maxLength"
      class="search-bar__length-message"
      :class="
        !localValidations.charactersLength
          ? ' search-bar__length-message--error'
          : ''
      "
    >
      {{ charactersLengthLabel }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    maxLength: {
      type: Number,
      default: 0,
    },
    searchValue: {
      type: String,
      default: "",
    },
    validations: {
      type: Object,
      required: true,
    },
  },
  computed: {
    localSearchValue: {
      get() {
        return this.searchValue;
      },
      set(value) {
        this.$emit("update:searchValue", value);
      },
    },
    localValidations: {
      get() {
        return this.validations;
      },
      set(value) {
        this.$emit("update:validations", value);
      },
    },
    charactersLengthHasError() {
      const inputLength = this.localSearchValue.length;
      return inputLength >= this.maxLength;
    },
    charactersLengthLabel() {
      const inputLength = this.localSearchValue.length;
      let label = `${inputLength}/${this.maxLength}`;

      if (this.charactersLengthHasError) {
        label += " Limite atingido";
      }

      return label;
    },
  },
  watch: {
    localSearchValue() {
      if (this.charactersLengthHasError) {
        this.localValidations = {
          ...this.localValidations,
          charactersLength: false,
        };
      } else {
        this.localValidations = {
          ...this.localValidations,
          charactersLength: true,
        };
      }
    },
  },
  methods: {
    clearInput() {
      this.localSearchValue = "";
      this.$refs["search-bar"].focus();
    },
  },
};
</script>

<style scoped>
.search-bar {
  width: 100%;
  height: 20px;
  position: relative;
}

.search-bar__input-outer {
  display: flex;
  justify-content: space-between;
}

.search-bar__input {
  width: 100%;
  height: 100%;
  padding: 10px 0 10px 10px;
  border-top: 1px solid #263238;
  border-left: 1px solid #263238;
  border-bottom: 1px solid #263238;
  border-right: none;
  border-radius: 5px 0 0 5px;
  transition: border 0.2s ease-out;
}

.search-bar__input-outer .search-bar__input:focus {
  outline: none;
  border-color: #039be5;
  transition: border 0.2s ease-in;
}

.search-bar__close-button {
  background: #263238;
  color: #fff;
  border-top: 1px solid #263238;
  border-left: none;
  border-bottom: 1px solid #263238;
  border-right: 1px solid #263238;
  border-radius: 0 5px 5px 0;
  padding: 0 10px;
  transition: background 0.2s ease-out, border 0.2s ease-out;
  cursor: pointer;
}

.search-bar__input-outer .search-bar__input:focus ~ .search-bar__close-button {
  background: #039be5;
  border-color: #039be5;
  transition: background 0.2s ease-in, border 0.2s ease-in;
}

.search-bar__length-message {
  margin: 0;
  text-align: left;
  padding-top: 7px;
  color: #43a047;
}

.search-bar__length-message--error {
  color: #e53935;
}
</style>
