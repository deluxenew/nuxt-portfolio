<template>
   <div id="app">
      <header-component/>

      <div class="main-wrap">
         <main-component>

               <nuxt/>

         </main-component>
         <sidebar-component/>
      </div>

      <footer-component/>
   </div>
</template>
<script>
    import HeaderComponent from '../components/temeplate/HeaderComponent'
    import MainComponent from '../components/temeplate/MainComponent'
    import SidebarComponent from '../components/temeplate/SidebarComponent'
    import FooterComponent from '../components/temeplate/FooterComponent'

    export default {
        components: {FooterComponent, SidebarComponent, MainComponent, HeaderComponent},

    }
</script>

<style lang="scss">
   @import "./assets/scss/default.scss";
</style>
