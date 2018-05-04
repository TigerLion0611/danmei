<template>
  <div>
    <label>{{ inputTerm.label }}：</label>
    <input v-model="inputTerm.value"/>
  </div>
</template>
<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
<script>
import bus from '../../utils/bus'
export default {
  name: 'YuliangInputTerm',
  props: ['inputTerm'],
  created: function () {
    let parent = this
    bus.$on('cleanInput', function () {
      parent.inputTerm.value = ''
    })
  },
  watch: {
    'inputTerm.value': function (newVal, oldVal) {
      let obj = {}
      obj[this.inputTerm.key] = newVal
      this.$emit('returnVal', obj)
    }
  }
}
</script>
