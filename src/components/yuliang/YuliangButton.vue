<template>
  <button type="button">
    <slot></slot>
  </button>
</template>
<style scoped>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
<script>
export default {
  name: 'YuliangButton'
}
</script>
