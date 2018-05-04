<template>
  <div style="padding: 2vw">
    <table-term :table-term="tableTerm"></table-term>
    <yuliang-pagination v-if="pagination.totalCount" :pagination="pagination" @changePage="changePage"></yuliang-pagination>
  </div>
</template>
<script>
import TableTerm from '../yuliang/TableTerm'
import urls from '../../router/urls'
import httpUtil from '../../utils/httpUtil'
import YuliangPagination from '../yuliang/YuliangPagination'
export default {
  name: 'CustomerInformationList',
  components: {YuliangPagination, TableTerm},
  props: ['filter'],
  data () {
    return {
      tableTerm: {
        thead: {
          ths: [
            {
              key: 'operation',
              value: '操作'
            },
            {
              key: 'code',
              value: '申请编号'
            },
            {
              key: 'customerName',
              value: '客户姓名'
            },
            {
              key: 'credentialsType',
              value: '证件类型'
            },
            {
              key: 'credentialsNumber',
              value: '证件号'
            },
            {
              key: 'repaymentDebitCardAccountNumber',
              value: '还款卡账号'
            },
            {
              key: 'firstMonthlyPayment',
              value: '每月租金'
            },
            {
              key: 'financingMaturity',
              value: '融资期限'
            },
            {
              key: 'latestRepaymentIssues',
              value: '已还期数'
            },
            {
              key: 'financialCaliberSurplusPrincipal',
              value: '剩余本金'
            },
            {
              key: 'productSolutionName',
              value: '产品方案名称'
            },
            {
              key: 'contactPhone',
              value: '客户手机号'
            },
            {
              key: 'vehicleType',
              value: '车辆类型'
            },
            {
              key: 'licensePlate',
              value: '车牌号码'
            },
            {
              key: 'latestOverdueDays',
              value: '逾期天数'
            },
            {
              key: 'latestOverdueAmount',
              value: '逾期金额'
            },
            {
              key: 'overdueLevel',
              value: '逾期级别'
            },
            {
              key: 'latestOverdueIssues',
              value: '逾期期数'
            },
            {
              key: 'vehicleIsRecovered',
              value: '车辆是否收回'
            },
            {
              key: 'detailedAddress',
              value: '地址'
            },
            {
              key: 'store',
              value: '销售店面'
            }
          ]
        },
        tbody: {
          trs: []
        }
      },
      pagination: {
        totalCount: 0,
        totalPages: 0,
        pageSize: 5
      },
      pageNumber: 1,
      pageSize: 10
    }
  },
  created: function () {
    this.getList()
  },
  watch: {
    filter: {
      handler (newFilter, oldFilter) {
        this.getList()
      },
      deep: true
    }
  },
  methods: {
    getList: function () {
      let url = httpUtil.setGetParam(urls.customerInformationList, Object.assign(this.filter, {pageNumber: this.pageNumber, pageSize: this.pageSize}))
      this.$http.get(url).then((res) => {
        if (res.status === 200) {
          let result = res.body.result
          let list = result.list
          for (let i in list) {
            list[i]['operation'] = '详情'
          }
          this.tableTerm.tbody.trs = result.list
          this.pagination.totalCount = result.totalCount
          this.pagination.totalPages = result.totalPages
        }
      })
    },
    changePage: function (page) {
      this.pageNumber = page
      this.getList()
    }
  }
}
</script>
