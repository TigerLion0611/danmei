<template>
  <table style="margin: auto;">
    <tbody>
      <tr v-for="(inputTerms, index) in inputTermsArray" :key="index">
        <td v-for="inputTerm in inputTerms" :key="inputTerm.key">
          <yuliang-input-term :input-term="inputTerm" :style="{margin: '0 5vw'}" @returnVal="returnObj"></yuliang-input-term>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
</style>
<script>
import YuliangInputTerm from './YuliangInputTerm'
export default {
  name: 'YuliangTableInputTerms',
  components: {YuliangInputTerm},
  props: ['inputTermsArray'],
  data () {
    return {
      inputs: {}
    }
  },
  methods: {
    returnObj: function (obj) {
      Object.assign(this.inputs, obj)
      this.$emit('returnInputs', this.inputs)
    }
  }
}
</script>
