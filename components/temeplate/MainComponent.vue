<template>
   <div class="main wrapper block">
      <section class="main-content">
            <slot/>
      </section>
   </div>
</template>

<script>
    export default {
        name: 'MainComponent'
    }
</script>

<style lang="scss">
   @import "../../assets/scss/main/main";
</style>

