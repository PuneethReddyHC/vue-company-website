<template>
  <label :for="cbId" class="container">
    <slot>
      <span v-if="inline">&nbsp;</span>
    </slot>
    <input :id="cbId" type="checkbox" :checked="shouldBeChecked" :value="value" @change="updateInput">
    <span class="checkmark"></span>
  </label>

</template>
<script>
import { randomString } from "./stringUtils";

export default {
  name: "custom-checkbox",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: {
      type: '<span class="hljs-built_in">String</span>',
    },
    modelValue: {
      default: false
    },
    label: {
      type: '<span class="hljs-built_in">String</span>',
      required: true
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  computed: {
    shouldBeChecked() {
      if (this.modelValue instanceof <span class="hljs-built_in">Array</span>) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked

      if (this.modelValue instanceof <span class="hljs-built_in">Array</span>) {
        let newValue = [...this.modelValue]

        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }

        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  },
  mounted() {
    this.cbId = randomString()
  }
};
</script>
