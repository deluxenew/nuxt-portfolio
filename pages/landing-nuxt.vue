<template>
   <div class="nuxt-landing">
      <main-menu/>

      <header-l/>
      <header-home/>
      <div class="sections">
         <title-desc/>
         <three-images/>
         <centered-text/>
         <image-boxes/>
         <gallery-slider/>
         <clients-slider/>
         <clients-logos-slider/>
         <faq-block/>
         <home-contact/>
      </div>
   </div>
</template>

<script>
    import MainMenu from "../components/landing/menu/MainMenu";
    import HeaderL from "../components/landing/header/HeaderL";
    import HeaderHome from "../components/landing/header/HeaderHome";
    import TitleDesc from "../components/landing/sections/TitleDesc";
    import ThreeImages from "../components/landing/sections/ThreeImages";
    import CenteredText from "../components/landing/sections/CenteredText";
    import ImageBoxes from "../components/landing/sections/ImageBoxes";
    import GallerySlider from "../components/landing/sections/GallerySlider";
    import ClientsSlider from "../components/landing/sections/ClientsSlider";
    import ClientsLogosSlider from "../components/landing/sections/ClientsLogosSlider";
    import FaqBlock from "../components/landing/sections/FaqBlock";
    import HomeContact from "../components/landing/sections/HomeContact";

    export default {
        name: "landing-nuxt",
        components: {
            HomeContact,
            FaqBlock,
            ClientsLogosSlider,
            ClientsSlider,
            GallerySlider, ImageBoxes, CenteredText, ThreeImages, TitleDesc, HeaderHome, HeaderL, MainMenu},
        layout: 'landing',
    }
</script>

