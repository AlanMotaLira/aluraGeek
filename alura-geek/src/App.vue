<template>
  <div class="page">
    <router-view />
  </div>
</template>
<script>
import './assets/styles/reset.css'
import './assets/styles/styles-global.css';

export default {};
</script>
<style>
  .page{
    padding: 16px;
  }

  @media screen and (min-width: 768px) {
    .page{
      padding: 16px 32px;
    }
  }

  @media screen and (min-width: 1136px) {
  .page{
    height: 115px;
    margin: 0px 100px;
    padding: 0px;
  }
}
</style>
