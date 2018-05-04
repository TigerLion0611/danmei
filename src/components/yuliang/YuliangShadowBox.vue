<template>
  <div class="shadow">
    <slot></slot>
  </div>
</template>
<style scoped>
  div.shadow{
    background-color: white;
    box-shadow: 0 3px 3px grey;
  }
</style>
<script>
export default {
  name: 'YuliangShadowBox'
}
</script>
