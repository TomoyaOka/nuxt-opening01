<script setup lang="ts">
import animation from "@/assets/animation";

onMounted(() => {
  const app = new animation();
  app._setElement().then(() => {
    app.init();
  });
});
</script>

<template>
  <div class="opening">
    <div class="opening__switch-area">
      <div class="opening__switch-left">
        <p class="switch-text01">NUXT3</p>
        <p class="switch-text02">GSAP</p>
        <p class="switch-text03">ARTIFACTS</p>
      </div>
      <div class="opening__switch-right">
        <p class="switch-text04">OPENING</p>
        <p class="switch-text05">ANIMATION</p>
        <p class="switch-text06">PRACTICE</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.opening {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  background-color: #222;
  z-index: 200;
}

.opening__switch-area {
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 22px;
  overflow: hidden;
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
}

.opening__switch-left {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 150px;
  height: 100%;
  position: relative;
  top: calc(100% - 24px);
  p {
    width: fit-content;
    font-size: 24px;
    line-height: 1;
    color: #fff;
  }
}

.opening__switch-right {
  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
  width: 300px;
  height: 100%;
  position: relative;
  top: calc(-100% + 24px);
  p {
    width: 100%;
    text-align: right;
    font-size: 24px;
    color: #fff;
    line-height: 1;
    margin-left: auto;
  }
}
</style>
