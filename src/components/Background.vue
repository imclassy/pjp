<template>
  <div>
    <div class="bg-image"></div>
    <div class="transparent-bg"></div>
  </div>
</template>

<script>
export default {
  name: 'background'
}
</script>

<style scoped>
body{
  background:url("../assets/big-data.jpg");
}

.bg-image{
  background-image:url("../assets/big-data.jpg");
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.transparent-bg{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.6);
}

</style>


