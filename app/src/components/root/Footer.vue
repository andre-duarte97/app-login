<template>
  <div class="footer">
    <div class="text-center" style="color: #fff;">
      Minhas redes:
      <br><a target="_blank" rel="noopener" href="https://github.com/andre-duarte97/">GitHub</a> - <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/andre-ribeiro-023435167/">LinkedIn</a></div>
  </div>
</template>
<script>
export default {
  name: 'AppFooter'
}
</script>
<style lang="css" scoped>
  .footer {
    background-color: #0a437c;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 2;
    display: flex;
    align-content: center;
    vertical-align: middle;
    align-items: center;
  }
  .footer div{ width: 100%}
  .footer a{ color:#fac812;}
</style>
