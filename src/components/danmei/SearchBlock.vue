<template>
  <div>
    <yuliang-table-input-terms :input-terms-array="inputTermsArray" @returnInputs="returnFilter"></yuliang-table-input-terms>
    <div style="display: flex;justify-content: center">
      <yuliang-button @click.native="cleanAll" :style="{width: '5vw'}">
        <div style="text-align: center">
          清空
        </div>
      </yuliang-button>
    </div>
  </div>
</template>
<script>
import YuliangFlexInputTerms from '../yuliang/YuliangFlexInputTerms'
import YuliangTableInputTerms from '../yuliang/YuliangTableInputTerms'
import YuliangButton from '../yuliang/YuliangButton'
import bus from '../../utils/bus'
export default {
  name: 'SearchBlock',
  components: {YuliangButton, YuliangTableInputTerms, YuliangFlexInputTerms},
  data () {
    return {
      inputTermsArray: [
        [
          {
            label: '申请编号',
            key: 'code',
            value: ''
          },
          {
            label: '客户姓名',
            key: 'customerName',
            value: ''
          },
          {
            label: '证件号码',
            key: 'credentialsNumber',
            value: ''
          }
        ],
        [
          {
            label: '还款卡账号',
            key: 'repaymentDebitCardAccountNumber',
            value: ''
          },
          {
            label: '客户手机号',
            key: 'contactPhone',
            value: ''
          }
        ]
      ]
    }
  },
  methods: {
    returnFilter: function (obj) {
      this.$emit('returnFilter', obj)
    },
    cleanAll: function () {
      bus.$emit('cleanInput')
    }
  }
}
</script>
