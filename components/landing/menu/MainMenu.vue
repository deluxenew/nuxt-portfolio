<template>
   <div class="mainMenu">
      <div class="mainMenu__inner">
         <div class="mainMenu__header">
            <div class="mainMenu__headerLogo">
               <top-logo
                  class="mainMenu__logo"
                  :svgClass="'mainMenu__logoSvg mainMenu__logoSvg--desktop'"
               />
            </div>

            <button class="mainMenu__headerClose">
               close
            </button>
         </div>
         <div class="mainMenu__content container">
            <div class="mainMenu__contentMenu">
               <ul class="mainMenu__nav">
                  <li class="mainMenu__navItem"><a href="https://drowart.com/projects/" target="_self"
                                                   class="mainMenu__navLink "> projects <span>projects</span></a></li>
                  <li class="mainMenu__navItem"><a href="https://drowart.com/services/" target="_self"
                                                   class="mainMenu__navLink "> services <span>services</span></a></li>
                  <li class="mainMenu__navItem"><a href="https://drowart.com/about-us/" target="_self"
                                                   class="mainMenu__navLink "> about us <span>about us</span></a></li>
                  <li class="mainMenu__navItem"><a href="https://drowart.com/contact/" target="_self"
                                                   class="mainMenu__navLink "> contact <span>contact</span></a></li>
               </ul>
            </div>
            <div class="mainMenu__contentSocials"><h4 class="mainMenu__socialsTitle">Find us here:</h4>
               <ul class="mainMenu__socials">
                  <li class="mainMenu__socialsItem"><a class="mainMenu__socialsLink"
                                                       href="https://www.facebook.com/drowartstudio/" target="_blank"
                                                       rel="noopener noreferrer"><span
                     class="mainMenu__socialsLink--text">facebook</span><span
                     class="mainMenu__socialsLink--icon icon-facebook"></span></a></li>
                  <li class="mainMenu__socialsItem"><a class="mainMenu__socialsLink"
                                                       href="https://www.instagram.com/drowartteam/" target="_blank"
                                                       rel="noopener noreferrer"><span
                     class="mainMenu__socialsLink--text">instagram</span><span
                     class="mainMenu__socialsLink--icon icon-instagram"></span></a></li>
                  <li class="mainMenu__socialsItem"><a class="mainMenu__socialsLink"
                                                       href="https://www.behance.net/info70baaa5b" target="_blank"
                                                       rel="noopener noreferrer"><span
                     class="mainMenu__socialsLink--text">behance</span><span
                     class="mainMenu__socialsLink--icon icon-behance"></span></a></li>
                  <li class="mainMenu__socialsItem"><a class="mainMenu__socialsLink"
                                                       href="https://www.linkedin.com/company/drowart/" target="_blank"
                                                       rel="noopener noreferrer"><span
                     class="mainMenu__socialsLink--text">linkedin</span><span
                     class="mainMenu__socialsLink--icon icon-linkedin"></span></a></li>
                  <li class="mainMenu__socialsItem"><a class="mainMenu__socialsLink"
                                                       href="https://twitter.com/DrowartTeam" target="_blank"
                                                       rel="noopener noreferrer"><span
                     class="mainMenu__socialsLink--text">twitter</span><span
                     class="mainMenu__socialsLink--icon icon-twitter"></span></a></li>
               </ul>
            </div>
         </div>

         <div class="mainMenu__footer"></div>
      </div>

   </div>
</template>

<script>
    import TopLogo from "../../temeplate/header/TopLogo";

    export default {
        name: "MainMenu",
        components: {TopLogo}
    }
</script>

