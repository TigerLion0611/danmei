<template>
  <div>
    <form id="excel-upload-form"
          name="excel-upload-form"
          enctype="multipart/form-data"
          style="display: flex;align-items: center">
      <yuliang-button type="button"
                      OnClick="javascript:document.getElementById('hiddenFile').click()">
        选择Excel文件
      </yuliang-button>
      <input id='hiddenFile'
             hidden
             type='file' @change="getFile($event)"/>
      <span>{{ fileName }}</span>
      <yuliang-button @click.native="uploadExcel">
        <img src="../../assets/svg/up-arrow.svg" style="height: 20px;width: 20px;"/>
        <span>上传</span>
      </yuliang-button>
    </form>
    <div></div>
  </div>
</template>
<script>
import YuliangButton from '../yuliang/YuliangButton'
import YuliangInputTerm from '../yuliang/YuliangInputTerm'
export default {
  name: 'ExcelUpload',
  components: {YuliangInputTerm, YuliangButton},
  data () {
    return {
      file: undefined,
      fileName: ''
    }
  },
  methods: {
    uploadExcel: function () {
      let formData = new FormData()
      formData.append('file', this.file)
      let config = { headers: { 'Content-Type': 'multipart/form-data' } }
      this.$http.post('http://localhost:9090/customerInformation/addByExcel', formData, config).then(function (response) {
      })
    },
    getFile: function (event) {
      this.file = event.target.files[0]
      this.fileName = this.file.name
    }
  }
}
</script>
