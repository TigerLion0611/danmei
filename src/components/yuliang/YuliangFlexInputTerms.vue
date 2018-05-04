<template>
  <div style="display: flex;">
    <yuliang-input-term v-for="inputTerm in inputTerms"
                        @returnVal="returnObj"
                        :inputTerm="inputTerm"
                        :key="inputTerm.key">
    </yuliang-input-term>
  </div>
</template>
<script>
import YuliangInputTerm from './YuliangInputTerm'
export default {
  name: 'YuliangFlexInputTerms',
  components: {YuliangInputTerm},
  props: ['inputTerms'],
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
