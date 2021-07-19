<template>
   <div>
      <nuxt/>
   </div>
</template>

<script>
    export default {
        name: "landing"
    }
</script>

<style lang="scss">

   .beer-slider {
      display: inline-block;
      overflow: hidden;
      position: relative
   }

   .beer-slider *, .beer-slider:after, .beer-slider :after, .beer-slider:before, .beer-slider :before {
      box-sizing: border-box
   }

   .beer-slider img, .beer-slider svg {
      vertical-align: bottom
   }

   .beer-slider > * {
      height: 100%
   }

   .beer-slider > img {
      height: auto;
      max-width: 100%
   }

   .beer-reveal {
      left: 0;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      right: 50%;
      top: 0;
      transition: opacity .35s;
      z-index: 1
   }

   .beer-reveal > :first-child {
      height: 100%;
      max-width: none;
      width: 200%
   }

   .beer-reveal > img:first-child {
      height: auto
   }

   .beer-range {
      -moz-appearance: none;
      -ms-touch-action: auto;
      -webkit-appearance: slider-horizontal !important;
      bottom: 0;
      cursor: pointer;
      height: 100%;
      left: -1px;
      margin: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      touch-action: auto;
      width: calc(100% + 2px);
      z-index: 2
   }

   .beer-range::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 300vh
   }

   .beer-range::-moz-range-thumb {
      -webkit-appearance: none;
      height: 300vh
   }

   .beer-range::-ms-tooltip {
      display: none
   }

   .beer-handle {
      background: hsla(0, 0%, 100%, .5);
      border-radius: 50%;
      box-shadow: 0 0 6px transparent;
      color: #000;
      height: 48px;
      left: 50%;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      transition: background .3s, box-shadow .3s, opacity .5s .25s;
      width: 48px;
      z-index: 2
   }

   .beer-handle:after, .beer-handle:before {
      border-left: 2px solid;
      border-top: 2px solid;
      content: "";
      height: 10px;
      position: absolute;
      top: 50%;
      transform-origin: 0 0;
      width: 10px
   }

   .beer-handle:before {
      left: 10px;
      transform: rotate(-45deg)
   }

   .beer-handle:after {
      right: 0;
      transform: rotate(135deg)
   }

   .beer-range:focus ~ .beer-handle {
      background: hsla(0, 0%, 100%, .85);
      box-shadow: 0 0 3px rgba(0, 0, 0, .4)
   }

   .beer-reveal[data-beer-label]:after, .beer-slider[data-beer-label]:after {
      background: hsla(0, 0%, 100%, .75);
      border-radius: .125rem;
      content: attr(data-beer-label);
      line-height: 1;
      padding: .5rem;
      position: absolute;
      top: 1.5rem
   }

   .beer-slider[data-beer-label]:after {
      right: 1.5rem
   }

   .beer-reveal[data-beer-label]:after {
      left: 1.5rem
   }

   .beer-reveal[data-beer-label=""]:after, .beer-slider[data-beer-label=""]:after {
      content: none
   }

   .beer-ready .beer-handle, .beer-ready .beer-reveal {
      opacity: 1
   }

   [data-aos][data-aos][data-aos-duration="50"], body[data-aos-duration="50"] [data-aos] {
      transition-duration: 50ms
   }

   [data-aos][data-aos][data-aos-delay="50"], body[data-aos-delay="50"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="50"].aos-animate, body[data-aos-delay="50"] [data-aos].aos-animate {
      transition-delay: 50ms
   }

   [data-aos][data-aos][data-aos-duration="100"], body[data-aos-duration="100"] [data-aos] {
      transition-duration: .1s
   }

   [data-aos][data-aos][data-aos-delay="100"], body[data-aos-delay="100"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="100"].aos-animate, body[data-aos-delay="100"] [data-aos].aos-animate {
      transition-delay: .1s
   }

   [data-aos][data-aos][data-aos-duration="150"], body[data-aos-duration="150"] [data-aos] {
      transition-duration: .15s
   }

   [data-aos][data-aos][data-aos-delay="150"], body[data-aos-delay="150"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="150"].aos-animate, body[data-aos-delay="150"] [data-aos].aos-animate {
      transition-delay: .15s
   }

   [data-aos][data-aos][data-aos-duration="200"], body[data-aos-duration="200"] [data-aos] {
      transition-duration: .2s
   }

   [data-aos][data-aos][data-aos-delay="200"], body[data-aos-delay="200"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="200"].aos-animate, body[data-aos-delay="200"] [data-aos].aos-animate {
      transition-delay: .2s
   }

   [data-aos][data-aos][data-aos-duration="250"], body[data-aos-duration="250"] [data-aos] {
      transition-duration: .25s
   }

   [data-aos][data-aos][data-aos-delay="250"], body[data-aos-delay="250"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="250"].aos-animate, body[data-aos-delay="250"] [data-aos].aos-animate {
      transition-delay: .25s
   }

   [data-aos][data-aos][data-aos-duration="300"], body[data-aos-duration="300"] [data-aos] {
      transition-duration: .3s
   }

   [data-aos][data-aos][data-aos-delay="300"], body[data-aos-delay="300"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="300"].aos-animate, body[data-aos-delay="300"] [data-aos].aos-animate {
      transition-delay: .3s
   }

   [data-aos][data-aos][data-aos-duration="350"], body[data-aos-duration="350"] [data-aos] {
      transition-duration: .35s
   }

   [data-aos][data-aos][data-aos-delay="350"], body[data-aos-delay="350"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="350"].aos-animate, body[data-aos-delay="350"] [data-aos].aos-animate {
      transition-delay: .35s
   }

   [data-aos][data-aos][data-aos-duration="400"], body[data-aos-duration="400"] [data-aos] {
      transition-duration: .4s
   }

   [data-aos][data-aos][data-aos-delay="400"], body[data-aos-delay="400"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="400"].aos-animate, body[data-aos-delay="400"] [data-aos].aos-animate {
      transition-delay: .4s
   }

   [data-aos][data-aos][data-aos-duration="450"], body[data-aos-duration="450"] [data-aos] {
      transition-duration: .45s
   }

   [data-aos][data-aos][data-aos-delay="450"], body[data-aos-delay="450"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="450"].aos-animate, body[data-aos-delay="450"] [data-aos].aos-animate {
      transition-delay: .45s
   }

   [data-aos][data-aos][data-aos-duration="500"], body[data-aos-duration="500"] [data-aos] {
      transition-duration: .5s
   }

   [data-aos][data-aos][data-aos-delay="500"], body[data-aos-delay="500"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="500"].aos-animate, body[data-aos-delay="500"] [data-aos].aos-animate {
      transition-delay: .5s
   }

   [data-aos][data-aos][data-aos-duration="550"], body[data-aos-duration="550"] [data-aos] {
      transition-duration: .55s
   }

   [data-aos][data-aos][data-aos-delay="550"], body[data-aos-delay="550"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="550"].aos-animate, body[data-aos-delay="550"] [data-aos].aos-animate {
      transition-delay: .55s
   }

   [data-aos][data-aos][data-aos-duration="600"], body[data-aos-duration="600"] [data-aos] {
      transition-duration: .6s
   }

   [data-aos][data-aos][data-aos-delay="600"], body[data-aos-delay="600"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="600"].aos-animate, body[data-aos-delay="600"] [data-aos].aos-animate {
      transition-delay: .6s
   }

   [data-aos][data-aos][data-aos-duration="650"], body[data-aos-duration="650"] [data-aos] {
      transition-duration: .65s
   }

   [data-aos][data-aos][data-aos-delay="650"], body[data-aos-delay="650"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="650"].aos-animate, body[data-aos-delay="650"] [data-aos].aos-animate {
      transition-delay: .65s
   }

   [data-aos][data-aos][data-aos-duration="700"], body[data-aos-duration="700"] [data-aos] {
      transition-duration: .7s
   }

   [data-aos][data-aos][data-aos-delay="700"], body[data-aos-delay="700"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="700"].aos-animate, body[data-aos-delay="700"] [data-aos].aos-animate {
      transition-delay: .7s
   }

   [data-aos][data-aos][data-aos-duration="750"], body[data-aos-duration="750"] [data-aos] {
      transition-duration: .75s
   }

   [data-aos][data-aos][data-aos-delay="750"], body[data-aos-delay="750"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="750"].aos-animate, body[data-aos-delay="750"] [data-aos].aos-animate {
      transition-delay: .75s
   }

   [data-aos][data-aos][data-aos-duration="800"], body[data-aos-duration="800"] [data-aos] {
      transition-duration: .8s
   }

   [data-aos][data-aos][data-aos-delay="800"], body[data-aos-delay="800"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="800"].aos-animate, body[data-aos-delay="800"] [data-aos].aos-animate {
      transition-delay: .8s
   }

   [data-aos][data-aos][data-aos-duration="850"], body[data-aos-duration="850"] [data-aos] {
      transition-duration: .85s
   }

   [data-aos][data-aos][data-aos-delay="850"], body[data-aos-delay="850"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="850"].aos-animate, body[data-aos-delay="850"] [data-aos].aos-animate {
      transition-delay: .85s
   }

   [data-aos][data-aos][data-aos-duration="900"], body[data-aos-duration="900"] [data-aos] {
      transition-duration: .9s
   }

   [data-aos][data-aos][data-aos-delay="900"], body[data-aos-delay="900"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="900"].aos-animate, body[data-aos-delay="900"] [data-aos].aos-animate {
      transition-delay: .9s
   }

   [data-aos][data-aos][data-aos-duration="950"], body[data-aos-duration="950"] [data-aos] {
      transition-duration: .95s
   }

   [data-aos][data-aos][data-aos-delay="950"], body[data-aos-delay="950"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="950"].aos-animate, body[data-aos-delay="950"] [data-aos].aos-animate {
      transition-delay: .95s
   }

   [data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos] {
      transition-duration: 1s
   }

   [data-aos][data-aos][data-aos-delay="1000"], body[data-aos-delay="1000"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1000"].aos-animate, body[data-aos-delay="1000"] [data-aos].aos-animate {
      transition-delay: 1s
   }

   [data-aos][data-aos][data-aos-duration="1050"], body[data-aos-duration="1050"] [data-aos] {
      transition-duration: 1.05s
   }

   [data-aos][data-aos][data-aos-delay="1050"], body[data-aos-delay="1050"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1050"].aos-animate, body[data-aos-delay="1050"] [data-aos].aos-animate {
      transition-delay: 1.05s
   }

   [data-aos][data-aos][data-aos-duration="1100"], body[data-aos-duration="1100"] [data-aos] {
      transition-duration: 1.1s
   }

   [data-aos][data-aos][data-aos-delay="1100"], body[data-aos-delay="1100"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1100"].aos-animate, body[data-aos-delay="1100"] [data-aos].aos-animate {
      transition-delay: 1.1s
   }

   [data-aos][data-aos][data-aos-duration="1150"], body[data-aos-duration="1150"] [data-aos] {
      transition-duration: 1.15s
   }

   [data-aos][data-aos][data-aos-delay="1150"], body[data-aos-delay="1150"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1150"].aos-animate, body[data-aos-delay="1150"] [data-aos].aos-animate {
      transition-delay: 1.15s
   }

   [data-aos][data-aos][data-aos-duration="1200"], body[data-aos-duration="1200"] [data-aos] {
      transition-duration: 1.2s
   }

   [data-aos][data-aos][data-aos-delay="1200"], body[data-aos-delay="1200"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1200"].aos-animate, body[data-aos-delay="1200"] [data-aos].aos-animate {
      transition-delay: 1.2s
   }

   [data-aos][data-aos][data-aos-duration="1250"], body[data-aos-duration="1250"] [data-aos] {
      transition-duration: 1.25s
   }

   [data-aos][data-aos][data-aos-delay="1250"], body[data-aos-delay="1250"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1250"].aos-animate, body[data-aos-delay="1250"] [data-aos].aos-animate {
      transition-delay: 1.25s
   }

   [data-aos][data-aos][data-aos-duration="1300"], body[data-aos-duration="1300"] [data-aos] {
      transition-duration: 1.3s
   }

   [data-aos][data-aos][data-aos-delay="1300"], body[data-aos-delay="1300"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1300"].aos-animate, body[data-aos-delay="1300"] [data-aos].aos-animate {
      transition-delay: 1.3s
   }

   [data-aos][data-aos][data-aos-duration="1350"], body[data-aos-duration="1350"] [data-aos] {
      transition-duration: 1.35s
   }

   [data-aos][data-aos][data-aos-delay="1350"], body[data-aos-delay="1350"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1350"].aos-animate, body[data-aos-delay="1350"] [data-aos].aos-animate {
      transition-delay: 1.35s
   }

   [data-aos][data-aos][data-aos-duration="1400"], body[data-aos-duration="1400"] [data-aos] {
      transition-duration: 1.4s
   }

   [data-aos][data-aos][data-aos-delay="1400"], body[data-aos-delay="1400"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1400"].aos-animate, body[data-aos-delay="1400"] [data-aos].aos-animate {
      transition-delay: 1.4s
   }

   [data-aos][data-aos][data-aos-duration="1450"], body[data-aos-duration="1450"] [data-aos] {
      transition-duration: 1.45s
   }

   [data-aos][data-aos][data-aos-delay="1450"], body[data-aos-delay="1450"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1450"].aos-animate, body[data-aos-delay="1450"] [data-aos].aos-animate {
      transition-delay: 1.45s
   }

   [data-aos][data-aos][data-aos-duration="1500"], body[data-aos-duration="1500"] [data-aos] {
      transition-duration: 1.5s
   }

   [data-aos][data-aos][data-aos-delay="1500"], body[data-aos-delay="1500"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1500"].aos-animate, body[data-aos-delay="1500"] [data-aos].aos-animate {
      transition-delay: 1.5s
   }

   [data-aos][data-aos][data-aos-duration="1550"], body[data-aos-duration="1550"] [data-aos] {
      transition-duration: 1.55s
   }

   [data-aos][data-aos][data-aos-delay="1550"], body[data-aos-delay="1550"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1550"].aos-animate, body[data-aos-delay="1550"] [data-aos].aos-animate {
      transition-delay: 1.55s
   }

   [data-aos][data-aos][data-aos-duration="1600"], body[data-aos-duration="1600"] [data-aos] {
      transition-duration: 1.6s
   }

   [data-aos][data-aos][data-aos-delay="1600"], body[data-aos-delay="1600"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1600"].aos-animate, body[data-aos-delay="1600"] [data-aos].aos-animate {
      transition-delay: 1.6s
   }

   [data-aos][data-aos][data-aos-duration="1650"], body[data-aos-duration="1650"] [data-aos] {
      transition-duration: 1.65s
   }

   [data-aos][data-aos][data-aos-delay="1650"], body[data-aos-delay="1650"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1650"].aos-animate, body[data-aos-delay="1650"] [data-aos].aos-animate {
      transition-delay: 1.65s
   }

   [data-aos][data-aos][data-aos-duration="1700"], body[data-aos-duration="1700"] [data-aos] {
      transition-duration: 1.7s
   }

   [data-aos][data-aos][data-aos-delay="1700"], body[data-aos-delay="1700"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1700"].aos-animate, body[data-aos-delay="1700"] [data-aos].aos-animate {
      transition-delay: 1.7s
   }

   [data-aos][data-aos][data-aos-duration="1750"], body[data-aos-duration="1750"] [data-aos] {
      transition-duration: 1.75s
   }

   [data-aos][data-aos][data-aos-delay="1750"], body[data-aos-delay="1750"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1750"].aos-animate, body[data-aos-delay="1750"] [data-aos].aos-animate {
      transition-delay: 1.75s
   }

   [data-aos][data-aos][data-aos-duration="1800"], body[data-aos-duration="1800"] [data-aos] {
      transition-duration: 1.8s
   }

   [data-aos][data-aos][data-aos-delay="1800"], body[data-aos-delay="1800"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1800"].aos-animate, body[data-aos-delay="1800"] [data-aos].aos-animate {
      transition-delay: 1.8s
   }

   [data-aos][data-aos][data-aos-duration="1850"], body[data-aos-duration="1850"] [data-aos] {
      transition-duration: 1.85s
   }

   [data-aos][data-aos][data-aos-delay="1850"], body[data-aos-delay="1850"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1850"].aos-animate, body[data-aos-delay="1850"] [data-aos].aos-animate {
      transition-delay: 1.85s
   }

   [data-aos][data-aos][data-aos-duration="1900"], body[data-aos-duration="1900"] [data-aos] {
      transition-duration: 1.9s
   }

   [data-aos][data-aos][data-aos-delay="1900"], body[data-aos-delay="1900"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1900"].aos-animate, body[data-aos-delay="1900"] [data-aos].aos-animate {
      transition-delay: 1.9s
   }

   [data-aos][data-aos][data-aos-duration="1950"], body[data-aos-duration="1950"] [data-aos] {
      transition-duration: 1.95s
   }

   [data-aos][data-aos][data-aos-delay="1950"], body[data-aos-delay="1950"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="1950"].aos-animate, body[data-aos-delay="1950"] [data-aos].aos-animate {
      transition-delay: 1.95s
   }

   [data-aos][data-aos][data-aos-duration="2000"], body[data-aos-duration="2000"] [data-aos] {
      transition-duration: 2s
   }

   [data-aos][data-aos][data-aos-delay="2000"], body[data-aos-delay="2000"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2000"].aos-animate, body[data-aos-delay="2000"] [data-aos].aos-animate {
      transition-delay: 2s
   }

   [data-aos][data-aos][data-aos-duration="2050"], body[data-aos-duration="2050"] [data-aos] {
      transition-duration: 2.05s
   }

   [data-aos][data-aos][data-aos-delay="2050"], body[data-aos-delay="2050"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2050"].aos-animate, body[data-aos-delay="2050"] [data-aos].aos-animate {
      transition-delay: 2.05s
   }

   [data-aos][data-aos][data-aos-duration="2100"], body[data-aos-duration="2100"] [data-aos] {
      transition-duration: 2.1s
   }

   [data-aos][data-aos][data-aos-delay="2100"], body[data-aos-delay="2100"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2100"].aos-animate, body[data-aos-delay="2100"] [data-aos].aos-animate {
      transition-delay: 2.1s
   }

   [data-aos][data-aos][data-aos-duration="2150"], body[data-aos-duration="2150"] [data-aos] {
      transition-duration: 2.15s
   }

   [data-aos][data-aos][data-aos-delay="2150"], body[data-aos-delay="2150"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2150"].aos-animate, body[data-aos-delay="2150"] [data-aos].aos-animate {
      transition-delay: 2.15s
   }

   [data-aos][data-aos][data-aos-duration="2200"], body[data-aos-duration="2200"] [data-aos] {
      transition-duration: 2.2s
   }

   [data-aos][data-aos][data-aos-delay="2200"], body[data-aos-delay="2200"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2200"].aos-animate, body[data-aos-delay="2200"] [data-aos].aos-animate {
      transition-delay: 2.2s
   }

   [data-aos][data-aos][data-aos-duration="2250"], body[data-aos-duration="2250"] [data-aos] {
      transition-duration: 2.25s
   }

   [data-aos][data-aos][data-aos-delay="2250"], body[data-aos-delay="2250"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2250"].aos-animate, body[data-aos-delay="2250"] [data-aos].aos-animate {
      transition-delay: 2.25s
   }

   [data-aos][data-aos][data-aos-duration="2300"], body[data-aos-duration="2300"] [data-aos] {
      transition-duration: 2.3s
   }

   [data-aos][data-aos][data-aos-delay="2300"], body[data-aos-delay="2300"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2300"].aos-animate, body[data-aos-delay="2300"] [data-aos].aos-animate {
      transition-delay: 2.3s
   }

   [data-aos][data-aos][data-aos-duration="2350"], body[data-aos-duration="2350"] [data-aos] {
      transition-duration: 2.35s
   }

   [data-aos][data-aos][data-aos-delay="2350"], body[data-aos-delay="2350"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2350"].aos-animate, body[data-aos-delay="2350"] [data-aos].aos-animate {
      transition-delay: 2.35s
   }

   [data-aos][data-aos][data-aos-duration="2400"], body[data-aos-duration="2400"] [data-aos] {
      transition-duration: 2.4s
   }

   [data-aos][data-aos][data-aos-delay="2400"], body[data-aos-delay="2400"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2400"].aos-animate, body[data-aos-delay="2400"] [data-aos].aos-animate {
      transition-delay: 2.4s
   }

   [data-aos][data-aos][data-aos-duration="2450"], body[data-aos-duration="2450"] [data-aos] {
      transition-duration: 2.45s
   }

   [data-aos][data-aos][data-aos-delay="2450"], body[data-aos-delay="2450"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2450"].aos-animate, body[data-aos-delay="2450"] [data-aos].aos-animate {
      transition-delay: 2.45s
   }

   [data-aos][data-aos][data-aos-duration="2500"], body[data-aos-duration="2500"] [data-aos] {
      transition-duration: 2.5s
   }

   [data-aos][data-aos][data-aos-delay="2500"], body[data-aos-delay="2500"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2500"].aos-animate, body[data-aos-delay="2500"] [data-aos].aos-animate {
      transition-delay: 2.5s
   }

   [data-aos][data-aos][data-aos-duration="2550"], body[data-aos-duration="2550"] [data-aos] {
      transition-duration: 2.55s
   }

   [data-aos][data-aos][data-aos-delay="2550"], body[data-aos-delay="2550"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2550"].aos-animate, body[data-aos-delay="2550"] [data-aos].aos-animate {
      transition-delay: 2.55s
   }

   [data-aos][data-aos][data-aos-duration="2600"], body[data-aos-duration="2600"] [data-aos] {
      transition-duration: 2.6s
   }

   [data-aos][data-aos][data-aos-delay="2600"], body[data-aos-delay="2600"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2600"].aos-animate, body[data-aos-delay="2600"] [data-aos].aos-animate {
      transition-delay: 2.6s
   }

   [data-aos][data-aos][data-aos-duration="2650"], body[data-aos-duration="2650"] [data-aos] {
      transition-duration: 2.65s
   }

   [data-aos][data-aos][data-aos-delay="2650"], body[data-aos-delay="2650"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2650"].aos-animate, body[data-aos-delay="2650"] [data-aos].aos-animate {
      transition-delay: 2.65s
   }

   [data-aos][data-aos][data-aos-duration="2700"], body[data-aos-duration="2700"] [data-aos] {
      transition-duration: 2.7s
   }

   [data-aos][data-aos][data-aos-delay="2700"], body[data-aos-delay="2700"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2700"].aos-animate, body[data-aos-delay="2700"] [data-aos].aos-animate {
      transition-delay: 2.7s
   }

   [data-aos][data-aos][data-aos-duration="2750"], body[data-aos-duration="2750"] [data-aos] {
      transition-duration: 2.75s
   }

   [data-aos][data-aos][data-aos-delay="2750"], body[data-aos-delay="2750"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2750"].aos-animate, body[data-aos-delay="2750"] [data-aos].aos-animate {
      transition-delay: 2.75s
   }

   [data-aos][data-aos][data-aos-duration="2800"], body[data-aos-duration="2800"] [data-aos] {
      transition-duration: 2.8s
   }

   [data-aos][data-aos][data-aos-delay="2800"], body[data-aos-delay="2800"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2800"].aos-animate, body[data-aos-delay="2800"] [data-aos].aos-animate {
      transition-delay: 2.8s
   }

   [data-aos][data-aos][data-aos-duration="2850"], body[data-aos-duration="2850"] [data-aos] {
      transition-duration: 2.85s
   }

   [data-aos][data-aos][data-aos-delay="2850"], body[data-aos-delay="2850"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2850"].aos-animate, body[data-aos-delay="2850"] [data-aos].aos-animate {
      transition-delay: 2.85s
   }

   [data-aos][data-aos][data-aos-duration="2900"], body[data-aos-duration="2900"] [data-aos] {
      transition-duration: 2.9s
   }

   [data-aos][data-aos][data-aos-delay="2900"], body[data-aos-delay="2900"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2900"].aos-animate, body[data-aos-delay="2900"] [data-aos].aos-animate {
      transition-delay: 2.9s
   }

   [data-aos][data-aos][data-aos-duration="2950"], body[data-aos-duration="2950"] [data-aos] {
      transition-duration: 2.95s
   }

   [data-aos][data-aos][data-aos-delay="2950"], body[data-aos-delay="2950"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="2950"].aos-animate, body[data-aos-delay="2950"] [data-aos].aos-animate {
      transition-delay: 2.95s
   }

   [data-aos][data-aos][data-aos-duration="3000"], body[data-aos-duration="3000"] [data-aos] {
      transition-duration: 3s
   }

   [data-aos][data-aos][data-aos-delay="3000"], body[data-aos-delay="3000"] [data-aos] {
      transition-delay: 0
   }

   [data-aos][data-aos][data-aos-delay="3000"].aos-animate, body[data-aos-delay="3000"] [data-aos].aos-animate {
      transition-delay: 3s
   }

   [data-aos][data-aos][data-aos-easing=linear], body[data-aos-easing=linear] [data-aos] {
      transition-timing-function: cubic-bezier(.25, .25, .75, .75)
   }

   [data-aos][data-aos][data-aos-easing=ease], body[data-aos-easing=ease] [data-aos] {
      transition-timing-function: ease
   }

   [data-aos][data-aos][data-aos-easing=ease-in], body[data-aos-easing=ease-in] [data-aos] {
      transition-timing-function: ease-in
   }

   [data-aos][data-aos][data-aos-easing=ease-out], body[data-aos-easing=ease-out] [data-aos] {
      transition-timing-function: ease-out
   }

   [data-aos][data-aos][data-aos-easing=ease-in-out], body[data-aos-easing=ease-in-out] [data-aos] {
      transition-timing-function: ease-in-out
   }

   [data-aos][data-aos][data-aos-easing=ease-in-back], body[data-aos-easing=ease-in-back] [data-aos] {
      transition-timing-function: cubic-bezier(.6, -.28, .735, .045)
   }

   [data-aos][data-aos][data-aos-easing=ease-out-back], body[data-aos-easing=ease-out-back] [data-aos] {
      transition-timing-function: cubic-bezier(.175, .885, .32, 1.275)
   }

   [data-aos][data-aos][data-aos-easing=ease-in-out-back], body[data-aos-easing=ease-in-out-back] [data-aos] {
      transition-timing-function: cubic-bezier(.68, -.55, .265, 1.55)
   }

   [data-aos][data-aos][data-aos-easing=ease-in-sine], body[data-aos-easing=ease-in-sine] [data-aos] {
      transition-timing-function: cubic-bezier(.47, 0, .745, .715)
   }

   [data-aos][data-aos][data-aos-easing=ease-out-sine], body[data-aos-easing=ease-out-sine] [data-aos] {
      transition-timing-function: cubic-bezier(.39, .575, .565, 1)
   }

   [data-aos][data-aos][data-aos-easing=ease-in-out-sine], body[data-aos-easing=ease-in-out-sine] [data-aos] {
      transition-timing-function: cubic-bezier(.445, .05, .55, .95)
   }

   [data-aos][data-aos][data-aos-easing=ease-in-quad], body[data-aos-easing=ease-in-quad] [data-aos] {
      transition-timing-function: cubic-bezier(.55, .085, .68, .53)
   }

   [data-aos][data-aos][data-aos-easing=ease-out-quad], body[data-aos-easing=ease-out-quad] [data-aos] {
      transition-timing-function: cubic-bezier(.25, .46, .45, .94)
   }

   [data-aos][data-aos][data-aos-easing=ease-in-out-quad], body[data-aos-easing=ease-in-out-quad] [data-aos] {
      transition-timing-function: cubic-bezier(.455, .03, .515, .955)
   }

   [data-aos][data-aos][data-aos-easing=ease-in-cubic], body[data-aos-easing=ease-in-cubic] [data-aos] {
      transition-timing-function: cubic-bezier(.55, .085, .68, .53)
   }

   [data-aos][data-aos][data-aos-easing=ease-out-cubic], body[data-aos-easing=ease-out-cubic] [data-aos] {
      transition-timing-function: cubic-bezier(.25, .46, .45, .94)
   }

   [data-aos][data-aos][data-aos-easing=ease-in-out-cubic], body[data-aos-easing=ease-in-out-cubic] [data-aos] {
      transition-timing-function: cubic-bezier(.455, .03, .515, .955)
   }

   [data-aos][data-aos][data-aos-easing=ease-in-quart], body[data-aos-easing=ease-in-quart] [data-aos] {
      transition-timing-function: cubic-bezier(.55, .085, .68, .53)
   }

   [data-aos][data-aos][data-aos-easing=ease-out-quart], body[data-aos-easing=ease-out-quart] [data-aos] {
      transition-timing-function: cubic-bezier(.25, .46, .45, .94)
   }

   [data-aos][data-aos][data-aos-easing=ease-in-out-quart], body[data-aos-easing=ease-in-out-quart] [data-aos] {
      transition-timing-function: cubic-bezier(.455, .03, .515, .955)
   }

   [data-aos^=fade][data-aos^=fade] {
      opacity: 0;
      transition-property: opacity, transform
   }

   [data-aos^=fade][data-aos^=fade].aos-animate {
      opacity: 1;
      transform: translateZ(0)
   }

   [data-aos=fade-up] {
      transform: translate3d(0, 100px, 0)
   }

   [data-aos=fade-down] {
      transform: translate3d(0, -100px, 0)
   }

   [data-aos=fade-right] {
      transform: translate3d(-100px, 0, 0)
   }

   [data-aos=fade-left] {
      transform: translate3d(100px, 0, 0)
   }

   [data-aos=fade-up-right] {
      transform: translate3d(-100px, 100px, 0)
   }

   [data-aos=fade-up-left] {
      transform: translate3d(100px, 100px, 0)
   }

   [data-aos=fade-down-right] {
      transform: translate3d(-100px, -100px, 0)
   }

   [data-aos=fade-down-left] {
      transform: translate3d(100px, -100px, 0)
   }

   [data-aos^=zoom][data-aos^=zoom] {
      opacity: 0;
      transition-property: opacity, transform
   }

   [data-aos^=zoom][data-aos^=zoom].aos-animate {
      opacity: 1;
      transform: translateZ(0) scale(1)
   }

   [data-aos=zoom-in] {
      transform: scale(.6)
   }

   [data-aos=zoom-in-up] {
      transform: translate3d(0, 100px, 0) scale(.6)
   }

   [data-aos=zoom-in-down] {
      transform: translate3d(0, -100px, 0) scale(.6)
   }

   [data-aos=zoom-in-right] {
      transform: translate3d(-100px, 0, 0) scale(.6)
   }

   [data-aos=zoom-in-left] {
      transform: translate3d(100px, 0, 0) scale(.6)
   }

   [data-aos=zoom-out] {
      transform: scale(1.2)
   }

   [data-aos=zoom-out-up] {
      transform: translate3d(0, 100px, 0) scale(1.2)
   }

   [data-aos=zoom-out-down] {
      transform: translate3d(0, -100px, 0) scale(1.2)
   }

   [data-aos=zoom-out-right] {
      transform: translate3d(-100px, 0, 0) scale(1.2)
   }

   [data-aos=zoom-out-left] {
      transform: translate3d(100px, 0, 0) scale(1.2)
   }

   [data-aos^=slide][data-aos^=slide] {
      transition-property: transform
   }

   [data-aos^=slide][data-aos^=slide].aos-animate {
      transform: translateZ(0)
   }

   [data-aos=slide-up] {
      transform: translate3d(0, 100%, 0)
   }

   [data-aos=slide-down] {
      transform: translate3d(0, -100%, 0)
   }

   [data-aos=slide-right] {
      transform: translate3d(-100%, 0, 0)
   }

   [data-aos=slide-left] {
      transform: translate3d(100%, 0, 0)
   }

   [data-aos^=flip][data-aos^=flip] {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transition-property: transform
   }

   [data-aos=flip-left] {
      transform: perspective(2500px) rotateY(-100deg)
   }

   [data-aos=flip-left].aos-animate {
      transform: perspective(2500px) rotateY(0)
   }

   [data-aos=flip-right] {
      transform: perspective(2500px) rotateY(100deg)
   }

   [data-aos=flip-right].aos-animate {
      transform: perspective(2500px) rotateY(0)
   }

   [data-aos=flip-up] {
      transform: perspective(2500px) rotateX(-100deg)
   }

   [data-aos=flip-up].aos-animate {
      transform: perspective(2500px) rotateX(0)
   }

   [data-aos=flip-down] {
      transform: perspective(2500px) rotateX(100deg)
   }

   [data-aos=flip-down].aos-animate {
      transform: perspective(2500px) rotateX(0)
   }

   @font-face {
      font-family: swiper-icons;
      src: url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");
      font-weight: 400;
      font-style: normal
   }

   :root {
      --swiper-theme-color: #007aff
   }

   .swiper-container {
      margin-left: auto;
      margin-right: auto;
      position: relative;
      overflow: hidden;
      list-style: none;
      padding: 0;
      z-index: 1
   }

   .swiper-container-vertical > .swiper-wrapper {
      flex-direction: column
   }

   .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      box-sizing: content-box
   }

   .swiper-container-android .swiper-slide, .swiper-wrapper {
      transform: translateZ(0)
   }

   .swiper-container-multirow > .swiper-wrapper {
      flex-wrap: wrap
   }

   .swiper-container-multirow-column > .swiper-wrapper {
      flex-wrap: wrap;
      flex-direction: column
   }

   .swiper-container-free-mode > .swiper-wrapper {
      transition-timing-function: ease-out;
      margin: 0 auto
   }

   .swiper-container-pointer-events {
      touch-action: pan-y
   }

   .swiper-container-pointer-events.swiper-container-vertical {
      touch-action: pan-x
   }

   .swiper-slide {
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      position: relative;
      transition-property: transform
   }

   .swiper-slide-invisible-blank {
      visibility: hidden
   }

   .swiper-container-autoheight, .swiper-container-autoheight .swiper-slide {
      height: auto
   }

   .swiper-container-autoheight .swiper-wrapper {
      align-items: flex-start;
      transition-property: transform, height
   }

   .swiper-container-3d {
      perspective: 1200px
   }

   .swiper-container-3d .swiper-cube-shadow, .swiper-container-3d .swiper-slide, .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top, .swiper-container-3d .swiper-wrapper {
      transform-style: preserve-3d
   }

   .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10
   }

   .swiper-container-3d .swiper-slide-shadow-left {
      background-image: linear-gradient(270deg, rgba(0, 0, 0, .5), transparent)
   }

   .swiper-container-3d .swiper-slide-shadow-right {
      background-image: linear-gradient(90deg, rgba(0, 0, 0, .5), transparent)
   }

   .swiper-container-3d .swiper-slide-shadow-top {
      background-image: linear-gradient(0deg, rgba(0, 0, 0, .5), transparent)
   }

   .swiper-container-3d .swiper-slide-shadow-bottom {
      background-image: linear-gradient(180deg, rgba(0, 0, 0, .5), transparent)
   }

   .swiper-container-css-mode > .swiper-wrapper {
      overflow: auto;
      scrollbar-width: none;
      -ms-overflow-style: none
   }

   .swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {
      display: none
   }

   .swiper-container-css-mode > .swiper-wrapper > .swiper-slide {
      scroll-snap-align: start start
   }

   .swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {
      -webkit-scroll-snap-type: x mandatory;
      -ms-scroll-snap-type: x mandatory;
      scroll-snap-type: x mandatory
   }

   .swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {
      -webkit-scroll-snap-type: y mandatory;
      -ms-scroll-snap-type: y mandatory;
      scroll-snap-type: y mandatory
   }

   :root {
      --swiper-navigation-size: 44px
   }

   .swiper-button-next, .swiper-button-prev {
      position: absolute;
      top: 50%;
      width: calc(var(--swiper-navigation-size) / 44 * 27);
      height: var(--swiper-navigation-size);
      margin-top: calc(0px - var(--swiper-navigation-size) / 2);
      z-index: 10;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--swiper-navigation-color, var(--swiper-theme-color))
   }

   .swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
      opacity: .35;
      cursor: auto;
      pointer-events: none
   }

   .swiper-button-next:after, .swiper-button-prev:after {
      font-family: swiper-icons;
      font-size: var(--swiper-navigation-size);
      text-transform: none !important;
      letter-spacing: 0;
      text-transform: none;
      font-variant: normal;
      line-height: 1
   }

   .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
      left: 10px;
      right: auto
   }

   .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
      content: "prev"
   }

   .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
      right: 10px;
      left: auto
   }

   .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
      content: "next"
   }

   .swiper-button-next.swiper-button-white, .swiper-button-prev.swiper-button-white {
      --swiper-navigation-color: #fff
   }

   .swiper-button-next.swiper-button-black, .swiper-button-prev.swiper-button-black {
      --swiper-navigation-color: #000
   }

   .swiper-button-lock {
      display: none
   }

   .swiper-pagination {
      position: absolute;
      text-align: center;
      transition: opacity .3s;
      transform: translateZ(0);
      z-index: 10
   }

   .swiper-pagination.swiper-pagination-hidden {
      opacity: 0
   }

   .swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
      bottom: 10px;
      left: 0;
      width: 100%
   }

   .swiper-pagination-bullets-dynamic {
      overflow: hidden;
      font-size: 0
   }

   .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
      transform: scale(.33);
      position: relative
   }

   .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active, .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
      transform: scale(1)
   }

   .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
      transform: scale(.66)
   }

   .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
      transform: scale(.33)
   }

   .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
      transform: scale(.66)
   }

   .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
      transform: scale(.33)
   }

   .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 50%;
      background: #000;
      opacity: .2
   }

   button.swiper-pagination-bullet {
      border: none;
      margin: 0;
      padding: 0;
      box-shadow: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none
   }

   .swiper-pagination-clickable .swiper-pagination-bullet {
      cursor: pointer
   }

   .swiper-pagination-bullet-active {
      opacity: 1;
      background: var(--swiper-pagination-color, var(--swiper-theme-color))
   }

   .swiper-container-vertical > .swiper-pagination-bullets {
      right: 10px;
      top: 50%;
      transform: translate3d(0, -50%, 0)
   }

   .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 6px 0;
      display: block
   }

   .swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
      top: 50%;
      transform: translateY(-50%);
      width: 8px
   }

   .swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
      display: inline-block;
      transition: transform .2s, top .2s
   }

   .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 0 4px
   }

   .swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap
   }

   .swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
      transition: transform .2s, left .2s
   }

   .swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
      transition: transform .2s, right .2s
   }

   .swiper-pagination-progressbar {
      background: rgba(0, 0, 0, .25);
      position: absolute
   }

   .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
      background: var(--swiper-pagination-color, var(--swiper-theme-color));
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: scale(0);
      transform-origin: left top
   }

   .swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
      transform-origin: right top
   }

   .swiper-container-horizontal > .swiper-pagination-progressbar, .swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
      width: 100%;
      height: 4px;
      left: 0;
      top: 0
   }

   .swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-container-vertical > .swiper-pagination-progressbar {
      width: 4px;
      height: 100%;
      left: 0;
      top: 0
   }

   .swiper-pagination-white {
      --swiper-pagination-color: #fff
   }

   .swiper-pagination-black {
      --swiper-pagination-color: #000
   }

   .swiper-pagination-lock {
      display: none
   }

   .swiper-scrollbar {
      border-radius: 10px;
      position: relative;
      -ms-touch-action: none;
      background: rgba(0, 0, 0, .1)
   }

   .swiper-container-horizontal > .swiper-scrollbar {
      position: absolute;
      left: 1%;
      bottom: 3px;
      z-index: 50;
      height: 5px;
      width: 98%
   }

   .swiper-container-vertical > .swiper-scrollbar {
      position: absolute;
      right: 3px;
      top: 1%;
      z-index: 50;
      width: 5px;
      height: 98%
   }

   .swiper-scrollbar-drag {
      height: 100%;
      width: 100%;
      position: relative;
      background: rgba(0, 0, 0, .5);
      border-radius: 10px;
      left: 0;
      top: 0
   }

   .swiper-scrollbar-cursor-drag {
      cursor: move
   }

   .swiper-scrollbar-lock {
      display: none
   }

   .swiper-zoom-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center
   }

   .swiper-zoom-container > canvas, .swiper-zoom-container > img, .swiper-zoom-container > svg {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain
   }

   .swiper-slide-zoomed {
      cursor: move
   }

   .swiper-lazy-preloader {
      width: 42px;
      height: 42px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -21px;
      margin-top: -21px;
      z-index: 10;
      transform-origin: 50%;
      animation: swiper-preloader-spin 1s linear infinite;
      box-sizing: border-box;
      border-radius: 50%;
      border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
      border-top: 4px solid transparent
   }

   .swiper-lazy-preloader-white {
      --swiper-preloader-color: #fff
   }

   .swiper-lazy-preloader-black {
      --swiper-preloader-color: #000
   }

   @keyframes swiper-preloader-spin {
      to {
         transform: rotate(1turn)
      }
   }

   .swiper-container .swiper-notification {
      position: absolute;
      left: 0;
      top: 0;
      pointer-events: none;
      opacity: 0;
      z-index: -1000
   }

   .swiper-container-fade.swiper-container-free-mode .swiper-slide {
      transition-timing-function: ease-out
   }

   .swiper-container-fade .swiper-slide {
      pointer-events: none;
      transition-property: opacity
   }

   .swiper-container-fade .swiper-slide .swiper-slide {
      pointer-events: none
   }

   .swiper-container-fade .swiper-slide-active, .swiper-container-fade .swiper-slide-active .swiper-slide-active {
      pointer-events: auto
   }

   .swiper-container-cube {
      overflow: visible
   }

   .swiper-container-cube .swiper-slide {
      pointer-events: none;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      z-index: 1;
      visibility: hidden;
      transform-origin: 0 0;
      width: 100%;
      height: 100%
   }

   .swiper-container-cube .swiper-slide .swiper-slide {
      pointer-events: none
   }

   .swiper-container-cube.swiper-container-rtl .swiper-slide {
      transform-origin: 100% 0
   }

   .swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-active .swiper-slide-active {
      pointer-events: auto
   }

   .swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-next, .swiper-container-cube .swiper-slide-next + .swiper-slide, .swiper-container-cube .swiper-slide-prev {
      pointer-events: auto;
      visibility: visible
   }

   .swiper-container-cube .swiper-slide-shadow-bottom, .swiper-container-cube .swiper-slide-shadow-left, .swiper-container-cube .swiper-slide-shadow-right, .swiper-container-cube .swiper-slide-shadow-top {
      z-index: 0;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden
   }

   .swiper-container-cube .swiper-cube-shadow {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: .6;
      z-index: 0
   }

   .swiper-container-cube .swiper-cube-shadow:before {
      content: "";
      background: #000;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      filter: blur(50px)
   }

   .swiper-container-flip {
      overflow: visible
   }

   .swiper-container-flip .swiper-slide {
      pointer-events: none;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      z-index: 1
   }

   .swiper-container-flip .swiper-slide .swiper-slide {
      pointer-events: none
   }

   .swiper-container-flip .swiper-slide-active, .swiper-container-flip .swiper-slide-active .swiper-slide-active {
      pointer-events: auto
   }

   .swiper-container-flip .swiper-slide-shadow-bottom, .swiper-container-flip .swiper-slide-shadow-left, .swiper-container-flip .swiper-slide-shadow-right, .swiper-container-flip .swiper-slide-shadow-top {
      z-index: 0;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden
   }

   @keyframes bounce {
      0%, 20%, 50%, 80%, to {
         transform: translateY(0)
      }
      40% {
         transform: translateY(-3rem)
      }
      60% {
         transform: translateY(-1.5rem)
      }
   }

   a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline
   }

   article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block
   }

   body {
      line-height: 1
   }

   ol, ul {
      list-style: none
   }

   blockquote, q {
      quotes: none
   }

   blockquote:after, blockquote:before, q:after, q:before {
      content: "";
      content: none
   }

   table {
      border-collapse: collapse;
      border-spacing: 0
   }

   main {
      display: block
   }

   [hidden] {
      display: none !important
   }

   button, input, select, svg, textarea {
      vertical-align: baseline;
      margin: 0;
      padding: 0;
      border: 0;
      font-family: inherit;
      font-size: 100%;
      outline: none
   }

   button, input, select, textarea {
      background: none;
      border-radius: 0;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none
   }

   textarea {
      overflow: auto
   }

   button {
      cursor: pointer
   }

   button::-moz-focus-inner {
      border: 0
   }

   input::-ms-clear, select::-ms-expand {
      display: none
   }

   template {
      display: none !important
   }

   body {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%
   }

   a {
      color: inherit
   }

   :focus, a, a:focus, a:hover {
      outline: 0;
      text-decoration: none
   }

   em {
      font-style: italic
   }

   strong {
      font-weight: 700
   }

   img {
      border: 0
   }

   [v-cloak] {
      display: none !important
   }

   @font-face {
      font-family: Gordita;
      src: url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Light.woff2) format("woff2"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Light.woff) format("woff"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Light.ttf) format("truetype");
      font-weight: 300;
      font-style: normal;
      font-display: swap
   }

   @font-face {
      font-family: Gordita;
      src: url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Regular.woff2) format("woff2"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Regular.woff) format("woff"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Regular.ttf) format("truetype");
      font-weight: 400;
      font-style: normal;
      font-display: swap
   }

   @font-face {
      font-family: Gordita;
      src: url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Medium.woff2) format("woff2"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Medium.woff) format("woff"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Medium.ttf) format("truetype");
      font-weight: 500;
      font-style: normal;
      font-display: swap
   }

   @font-face {
      font-family: Gordita;
      src: url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Bold.woff2) format("woff2"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Bold.woff) format("woff"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Bold.ttf) format("truetype");
      font-weight: 700;
      font-style: normal;
      font-display: swap
   }

   @font-face {
      font-family: Gordita;
      src: url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Black.woff2) format("woff2"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Black.woff) format("woff"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/Gordita/Gordita-Black.ttf) format("truetype");
      font-weight: 900;
      font-style: normal;
      font-display: swap
   }

   @font-face {
      font-family: icomoon;
      src: url(https://drowart.com/wp-content/themes/drowart/public/fonts/icons/icomoon.eot);
      src: url(https://drowart.com/wp-content/themes/drowart/public/fonts/icons/icomoon.woff2) format("woff2"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/icons/icomoon.woff) format("woff"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/icons/icomoon.eot#iefix) format("embedded-opentype"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/icons/icomoon.ttf) format("truetype"), url(https://drowart.com/wp-content/themes/drowart/public/fonts/icons/icomoon.svg#icomoon) format("svg");
      font-weight: 400;
      font-style: normal;
      font-display: block
   }

   .icon-full-size:before {
      content: "\E91E" !important
   }

   .icon-full-size:before, .icon-youtube:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-youtube:before {
      content: "\E91C" !important
   }

   .icon-twitter:before {
      content: "\E91D" !important
   }

   .icon-check:before, .icon-twitter:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-check:before {
      content: "\E91B" !important
   }

   .icon-full:before {
      content: "\E91A" !important
   }

   .icon-arrow-down:before, .icon-full:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-arrow-down:before {
      content: "\E914" !important
   }

   .icon-linkedin-bg:before {
      content: "\E913" !important
   }

   .icon-diamond:before, .icon-linkedin-bg:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-diamond:before {
      content: "\E916" !important
   }

   .icon-arrow-up-bold:before {
      content: "\E917" !important
   }

   .icon-arrow-down-long:before, .icon-arrow-up-bold:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-arrow-down-long:before {
      content: "\E918" !important
   }

   .icon-hexagon:before {
      content: "\E919" !important
   }

   .icon-hexagon:before, .icon-star:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-star:before {
      content: "\E915" !important
   }

   .icon-close:before {
      content: "\E912" !important
   }

   .icon-close:before, .icon-quot:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-quot:before {
      content: "\E911" !important
   }

   .icon-play:before {
      content: "\E910" !important
   }

   .icon-arrow-left:before, .icon-play:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-arrow-left:before {
      content: "\E90F" !important
   }

   .icon-dots:before {
      content: "\E90E" !important
   }

   .icon-chevron-left:before, .icon-dots:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-chevron-left:before {
      content: "\E90C" !important
   }

   .icon-chevron-right:before {
      content: "\E90D" !important
   }

   .icon-chevron-right:before, .icon-elements:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-elements:before {
      content: "\E90A" !important
   }

   .icon-triangle-left:before {
      content: "\E907" !important
   }

   .icon-triangle-left:before, .icon-triangle-right:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-triangle-right:before {
      content: "\E908" !important
   }

   .icon-drowart-logo:before {
      content: "\E909" !important
   }

   .icon-arrow-right:before, .icon-drowart-logo:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-arrow-right:before {
      content: "\E906" !important
   }

   .icon-skype:before {
      content: "\E903" !important
   }

   .icon-pinterest:before, .icon-skype:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-pinterest:before {
      content: "\E902" !important
   }

   .icon-instagram:before {
      content: "\E901" !important
   }

   .icon-behance:before, .icon-instagram:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-behance:before {
      content: "\E900" !important
   }

   .icon-linkedin:before {
      content: "\E905" !important
   }

   .icon-facebook:before, .icon-linkedin:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .icon-facebook:before {
      content: "\E904" !important
   }

   .icon-arrow-up:before {
      content: "\E90B" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none
   }

   *, .icon-arrow-up:before, :after, :before {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   *, :after, :before {
      box-sizing: border-box
   }

   html {
      font-size: 12px;
      line-height: 1;
      height: 100%
   }

   body {
      font-family: Gordita, sans-serif;
      font-weight: 400;
      color: #121416;
      overflow-x: hidden
   }

   body::-webkit-scrollbar {
      width: 8px;
      position: fixed
   }

   body::-webkit-scrollbar-track {
      background: transparent
   }

   body::-webkit-scrollbar-thumb {
      background-color: #ea2929;
      border-radius: 0;
      border: 0
   }

   html.fslightbox-open body {
      margin-right: 8px !important
   }

   .beer-slider {
      display: block
   }

   .beer-handle {
      width: 8.4rem;
      height: 5.2rem;
      background-color: unset;
      box-shadow: unset;
      background-image: url(https://drowart.com/wp-content/themes/drowart/public/img/coursor_comparision.svg);
      background-size: contain
   }

   .beer-handle:after, .beer-handle:before {
      display: none
   }

   .beer-range:focus ~ .beer-handle {
      background-color: unset;
      box-shadow: unset;
      background-image: url(https://drowart.com/wp-content/themes/drowart/public/img/coursor_comparision.svg);
      background-size: contain
   }

   .beer-reveal > img:first-child, .beer-slider > img {
      height: 100%;
      object-fit: cover
   }

   .beer-slider > img {
      width: 100%
   }

   [data-aos=fade-in-up-medium] {
      transform: translate3d(0, 50%, 0)
   }

   [data-aos=fade-in-up-medium].aos-animate {
      transform: translateZ(0)
   }

   [data-aos=fade-up] {
      transform: translate3d(0, 5rem, 0)
   }

   .lax {
      transition: transform 1s
   }

   .swiper-pagination {
      width: 100%
   }

   .swiper-pagination-bullet {
      opacity: 1;
      background-color: #fff;
      width: 1rem;
      height: 1rem;
      margin: 0 4px
   }

   .swiper-pagination-bullet-active {
      background-color: #ea2929
   }

   .swiper-pagination-progressbar {
      background-color: #cfd6da;
      opacity: 1
   }

   .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
      background-color: #121416
   }

   .button {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 3.5rem;
      border: 1px solid #cfd6da;
      font-size: 1.1rem;
      line-height: 1.1rem;
      font-weight: 700;
      letter-spacing: .01em;
      transition: border .3s
   }

   .button:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: #ea2929;
      transition: width .3s
   }

   .button__icon, .button__text {
      position: relative;
      z-index: 1;
      transition: color .3s
   }

   .button__icon {
      top: 1px;
      color: #ea2929;
      font-size: .3rem;
      padding-right: 2.5rem
   }

   .button:hover {
      border: 1px solid #ea2929
   }

   .button:hover:before {
      width: calc(100% + 1px)
   }

   .button:hover .button__icon, .button:hover .button__text {
      color: #fff
   }

   .button--lightWhite, .button--white {
      border: 1px solid rgba(207, 214, 218, .3)
   }

   .button--white {
      color: #fff
   }

   .container {
      width: 100%;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 15rem;
      padding-right: 15rem;
      box-sizing: border-box
   }

   .container:after, .container:before {
      content: "";
      display: block;
      clear: both
   }

   .container--fluid {
      width: 100%;
      max-width: 100%;
      padding-left: 0;
      padding-right: 0
   }

   .container .row {
      margin-left: -12px;
      margin-right: -12px
   }

   .container .row:after, .container .row:before {
      content: "";
      display: block;
      clear: both
   }

   .container .row--fluid {
      margin-left: 0;
      margin-right: 0
   }

   .container .row--fluid .col-1, .container .row--fluid .col-2, .container .row--fluid .col-3, .container .row--fluid .col-4, .container .row--fluid .col-5, .container .row--fluid .col-6, .container .row--fluid .col-7, .container .row--fluid .col-8, .container .row--fluid .col-9, .container .row--fluid .col-10, .container .row--fluid .col-11, .container .row--fluid .col-12 {
      padding-left: 0;
      padding-right: 0
   }

   .container .row--flex {
      display: flex;
      flex-wrap: wrap
   }

   .container .row--flex .col-1, .container .row--flex .col-2, .container .row--flex .col-3, .container .row--flex .col-4, .container .row--flex .col-5, .container .row--flex .col-6, .container .row--flex .col-7, .container .row--flex .col-8, .container .row--flex .col-9, .container .row--flex .col-10, .container .row--flex .col-11, .container .row--flex .col-12 {
      float: none;
      display: flex
   }

   .container .row .col-1, .container .row .col-2, .container .row .col-3, .container .row .col-4, .container .row .col-5, .container .row .col-6, .container .row .col-7, .container .row .col-8, .container .row .col-9, .container .row .col-10, .container .row .col-11, .container .row .col-12 {
      float: left;
      padding-left: 12px;
      padding-right: 12px;
      box-sizing: border-box
   }

   .container .row .col-1 {
      width: 8.33333333%
   }

   .container .row .col-2 {
      width: 16.66666667%
   }

   .container .row .col-3 {
      width: 25%
   }

   .container .row .col-4 {
      width: 33.33333333%
   }

   .container .row .col-5 {
      width: 41.66666667%
   }

   .container .row .col-6 {
      width: 50%
   }

   .container .row .col-7 {
      width: 58.33333333%
   }

   .container .row .col-8 {
      width: 66.66666667%
   }

   .container .row .col-9 {
      width: 75%
   }

   .container .row .col-10 {
      width: 83.33333333%
   }

   .container .row .col-11 {
      width: 91.66666667%
   }

   .container .row .col-12 {
      width: 100%
   }

   .container .row .offset-col-1 {
      margin-left: 8.33333333%
   }

   .container .row .offset-col-2 {
      margin-left: 16.66666667%
   }

   .container .row .offset-col-3 {
      margin-left: 25%
   }

   .container .row .offset-col-4 {
      margin-left: 33.33333333%
   }

   .container .row .offset-col-5 {
      margin-left: 41.66666667%
   }

   .container .row .offset-col-6 {
      margin-left: 50%
   }

   .container .row .offset-col-7 {
      margin-left: 58.33333333%
   }

   .container .row .offset-col-8 {
      margin-left: 66.66666667%
   }

   .container .row .offset-col-9 {
      margin-left: 75%
   }

   .container .row .offset-col-10 {
      margin-left: 83.33333333%
   }

   .container .row .offset-col-11 {
      margin-left: 91.66666667%
   }

   .container .row .offset-col-12 {
      margin-left: 100%
   }

   [data-cursor] {
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 100%;
      border: 1px solid #eceff0;
      position: fixed;
      z-index: 103;
      transform: translate(-50%, -50%);
      pointer-events: none;
      transition: all .2s ease-out;
      opacity: 0
   }

   [data-cursor]:after, [data-cursor]:before {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
      opacity: 0;
      transition: opacity .3s
   }

   [data-cursor]:before {
      left: -1.5rem;
      content: "\E907" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   [data-cursor]:after {
      right: -1.5rem;
      content: "\E908" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   [data-cursor] span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 2.2rem;
      color: #fff;
      opacity: 0;
      transition: opacity .3s
   }

   [data-cursor].swipe {
      width: 4.6rem;
      height: 4.6rem;
      border: 1px solid #fff
   }

   .errorPage {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      min-height: 100vh
   }

   .errorPage__image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none
   }

   .errorPage__inner {
      position: relative;
      z-index: 1;
      padding: 14rem 2rem;
      max-width: 64rem;
      text-align: center
   }

   .errorPage__number {
      font-size: 25.7rem;
      line-height: 28rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #fff;
      -webkit-text-fill-color: transparent
   }

   .errorPage__title {
      font-size: 4rem;
      line-height: 6.2rem;
      font-weight: 700;
      color: #fff
   }

   .errorPage__text {
      margin-bottom: 3rem;
      font-size: 2rem;
      line-height: 3.6rem;
      color: #fff
   }

   .footer__links {
      padding-top: 6rem
   }

   .footer__links--noBorderTop .footer__linksList {
      border-top: 0
   }

   .footer__links--noPadding {
      padding-top: 0
   }

   .footer__linksList {
      display: flex;
      border-top: 1px solid #cfd6da
   }

   .footer__linksListItem {
      flex: 0 0 33.333%;
      border-right: 1px solid #cfd6da
   }

   .footer__linksListItem:last-of-type {
      border-right: unset
   }

   .footer__linksListItemLink {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 7.4rem 4rem;
      font-size: 2.4rem;
      font-weight: 500;
      overflow: hidden;
      transition: color .3s
   }

   .footer__linksListItemLink:hover {
      color: #fff
   }

   .footer__linksListItemLink:hover:after {
      left: 0
   }

   .footer__linksListItemLink:hover .footer__linksListItemLinkIcon {
      right: -1rem
   }

   .footer__linksListItemLink:after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background-color: #ea2929;
      z-index: -1;
      transition: left .3s
   }

   .footer__linksListItemLinkIcon {
      position: relative;
      font-size: 1.2rem;
      right: 0;
      transition: right .3s
   }

   .footer__wrapper {
      padding: 7.5rem 0 8rem;
      background-color: #121416;
      color: #fff
   }

   .footer__top {
      display: flex;
      justify-content: space-between
   }

   .footer__topLogo {
      margin-bottom: 4.1rem
   }

   .footer__topScopeItem:last-of-type {
      margin-bottom: 0
   }

   .footer__topScopeLink {
      display: inline-block;
      margin-bottom: 1.8rem;
      font-size: 1.8rem;
      color: #fff;
      transition: color .3s
   }

   .footer__topScopeLink:hover {
      color: #ea2929
   }

   .footer__topRight {
      text-align: right
   }

   .footer__topRightTitle {
      margin-bottom: 2.1rem;
      font-size: 1.8rem;
      font-weight: 500
   }

   .footer__topRightLink {
      display: block;
      padding: .6rem 0;
      font-size: 1.8rem;
      line-height: 2.6rem;
      font-weight: 500;
      transition: color .3s, -webkit-text-decoration .3s;
      transition: color .3s, text-decoration .3s;
      transition: color .3s, text-decoration .3s, -webkit-text-decoration .3s
   }

   .footer__topRightLink--email {
      font-size: 2.4rem;
      line-height: 3rem
   }

   .footer__topRightLink--email, .footer__topRightLink:hover {
      color: #ff3f3d;
      text-decoration: underline
   }

   .footer__topRightSkype {
      display: inline-flex;
      align-items: center;
      color: #fff;
      padding: .5rem 0 1rem;
      transition: color .3s
   }

   .footer__topRightSkype:hover {
      color: #ea2929
   }

   .footer__topRightSkypeText {
      font-size: 2.4rem;
      line-height: 3rem;
      font-weight: 500;
      padding-left: .6rem;
      text-decoration: underline
   }

   .footer__topRightSkypeIcon {
      position: relative;
      font-size: 2.2rem;
      color: #ea2929
   }

   .footer__topRightSkypeIcon:after {
      content: "";
      height: 1.4rem;
      width: 1.2rem;
      position: absolute;
      background-color: #fff;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%)
   }

   .footer__topRightSkypeIcon:before {
      position: relative;
      z-index: 1
   }

   .footer__bottom {
      display: flex;
      align-items: center;
      padding-top: 11rem;
      font-size: 1.4rem;
      font-weight: 500
   }

   .footer__nav {
      padding-left: 14.5rem
   }

   .footer__navList {
      display: flex;
      align-items: center
   }

   .footer__navListLink {
      transition: color .3s
   }

   .footer__navListLink:hover {
      color: #ff3f3d
   }

   .footer__bottomRight {
      flex: 1;
      text-align: right
   }

   .footer__author a {
      text-decoration: underline;
      transition: color .3s
   }

   .footer__author a:hover {
      color: #ff3f3d
   }

   .footer__goTop {
      padding-left: 4rem
   }

   .footer__goTopIcon {
      font-size: 1.2rem;
      color: #fff
   }

   .header {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 100;
      padding: 2rem 0 1.5rem;
      box-shadow: 0 5px 25px 0 rgba(115, 121, 134, 0);
      pointer-events: none;
      transition: background-color .3s, padding .3s, box-shadow .3s
   }

   .header svg {
      fill: #fff;
      transition: fill .3s
   }

   .header__inner {
      display: flex;
      align-items: center;
      padding: 0 6rem
   }

   .header__logo {
      pointer-events: all;
      transition: opacity .3s
   }

   .header__logo svg {
      max-width: 13.5rem
   }

   .header__logo:hover {
      opacity: .7
   }

   .header__logoSvg--mobile {
      display: none
   }

   .header__actions {
      margin-left: auto;
      pointer-events: all
   }

   .header__link {
      color: #fff;
      font-size: 1.7rem;
      line-height: 2.8rem;
      font-weight: 500;
      transition: color .3s
   }

   .header__link span {
      padding-left: 1rem
   }

   .header__link:hover {
      color: #ea2929
   }

   .header__actions {
      display: flex;
      align-items: center
   }

   .header__button {
      margin-left: 2rem;
      padding-left: 1.1rem;
      border-left: 1px solid #fff;
      transition: border-left-color .3s
   }

   .header__buttonHamburger {
      padding: .5rem;
      width: 4.2rem;
      margin-right: -1rem
   }

   .header__buttonHamburger span {
      width: 2.6rem;
      height: .3rem;
      display: block;
      margin: .5rem;
      background-color: #fff;
      transition: width .3s, background-color .3s
   }

   .header__buttonHamburger span:last-child {
      width: 1.6rem
   }

   .header__buttonHamburger:hover span {
      background-color: #ea2929
   }

   .header__buttonHamburger:hover span:first-child {
      width: 1.4rem
   }

   .header__buttonHamburger:hover span:nth-child(2) {
      width: 1.8rem
   }

   .header__buttonHamburger:hover span:last-child {
      width: 2.2rem
   }

   .header--hideLogo .header__actions {
      pointer-events: all
   }

   .header--fixed {
      background-color: #121416;
      box-shadow: 0 5px 25px 0 rgba(115, 121, 134, .1)
   }

   .header--disableFixedBg {
      background-color: transparent;
      box-shadow: none
   }

   .header--initialDark:not(.header--fixed) .header__logo svg, .header--mobileDark .header__logo svg {
      fill: #121416
   }

   .header--initialDark:not(.header--fixed) .header__button {
      border-left: 1px solid #121416
   }

   .header--initialDark:not(.header--fixed) .header__link {
      color: #121416
   }

   .header--initialDark:not(.header--fixed) .header__buttonHamburger span {
      background-color: #121416
   }

   html:not(.fslightbox-open) .header:not(.header--fixed).header--headerShadow {
      background: linear-gradient(180deg, #000, transparent)
   }

   .headerHome {
      position: relative;
      margin-bottom: 4rem
   }

   .headerHome__container {
      height: 100vh;
      min-height: 40rem;
      overflow: hidden
   }

   .headerHome__slide {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      overflow: hidden
   }

   .headerHome__slide--active .headerHome__slideContent {
      opacity: 1;
      transform: translateY(0)
   }

   .headerHome__slideImage {
      pointer-events: none;
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
      animation: zb 20s ease infinite
   }

   .headerHome__slideContent {
      opacity: 0;
      position: relative;
      transform: translateY(6rem);
      transition: opacity .7s, transform .7s
   }

   .headerHome__slideBottom {
      pointer-events: none;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      height: 8rem;
      z-index: 2;
      padding-top: 1.8rem
   }

   .headerHome__slideName {
      font-size: 1.8rem;
      line-height: 2.6rem;
      font-weight: 500;
      padding-bottom: .2rem
   }

   .headerHome__slideCategory {
      font-size: 1rem;
      line-height: 2rem;
      letter-spacing: .05em;
      opacity: .5
   }

   .headerHome__small {
      margin-bottom: 3rem;
      font-size: 1.2rem;
      line-height: 2rem;
      text-transform: uppercase;
      font-weight: 700;
      color: #fff;
      letter-spacing: .2em
   }

   .headerHome__title {
      font-size: 5.6rem;
      line-height: 6.4rem;
      color: #fff;
      font-weight: 700;
      max-width: 75rem
   }

   .headerHome__bottom {
      position: absolute;
      z-index: 1;
      left: 0;
      bottom: 0;
      height: 8rem;
      width: 70vw;
      background-color: #fff
   }

   .headerHome__bottomLine {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateX(50%);
      width: 10.8rem;
      height: 1px;
      background-color: #fff
   }

   .headerHome__bottomLine:before {
      content: "";
      position: absolute;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: #ea2929
   }

   .headerHome__scroll {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: calc(70vw + 9rem);
      bottom: 2.5rem;
      z-index: 2;
      cursor: pointer;
      transition: opacity .3s
   }

   .headerHome__scroll:hover {
      opacity: .6
   }

   .headerHome__scrollIcon {
      position: relative;
      width: 2.2rem;
      height: 3rem;
      top: 50%;
      box-shadow: inset 0 0 0 2px #fff;
      border-radius: 2.5rem
   }

   .headerHome__scrollIcon:before {
      content: "";
      position: absolute;
      left: calc(50% - 1px);
      width: .2rem;
      height: .6rem;
      background: #fff;
      top: .5rem;
      border-radius: .4rem;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-name: scroll
   }

   .headerHome__scrollText {
      padding-top: .6rem;
      font-size: 1.6rem;
      line-height: 2rem;
      font-weight: 500;
      color: #fff;
      padding-left: 1.5rem
   }

   .headerHome__nav {
      display: flex;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 8rem;
      z-index: 1
   }

   .headerHome__navButton {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.5rem;
      height: 4.5rem;
      background-color: #fff;
      color: #76757a;
      opacity: .9;
      transition: color .3s, background-color .3s
   }

   .headerHome__navButton.swiper-button-disabled {
      cursor: default;
      opacity: .5
   }

   .headerHome__navButton:before {
      position: relative;
      z-index: 1
   }

   .headerHome__navButton--prev:before {
      font-size: 1.4rem;
      content: "\E90C" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .headerHome__navButton--next {
      border-left: 1px solid #cfd6da
   }

   .headerHome__navButton--next:before {
      font-size: 1.4rem;
      content: "\E90D" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .headerHome__navButton:hover {
      color: #fff;
      background-color: #ea2929
   }

   @keyframes scroll {
      0% {
         opacity: 1
      }
      to {
         opacity: 0;
         transform: translateY(1rem)
      }
   }

   @keyframes zb {
      50% {
         transform: scale(1.05)
      }
      to {
         transform: scale(1)
      }
   }

   .mainMenu {
      position: fixed;
      overflow: auto;
      z-index: 102;
      background-color: #121416;
      opacity: 0;
      pointer-events: none;
      transition: opacity .3s
   }

   .mainMenu, .mainMenu__inner {
      display: flex;
      width: 100%;
      height: 100%
   }

   .mainMenu__inner {
      flex-direction: column;
      justify-content: space-between
   }

   .mainMenu__header {
      padding: 2rem 6rem;
      display: flex;
      justify-content: space-between
   }

   .mainMenu__headerLogo svg {
      max-width: 13.5rem;
      fill: #fff
   }

   .mainMenu__logoSvg--mobile {
      display: none
   }

   .mainMenu__logo {
      transition: opacity .3s
   }

   .mainMenu__logo:hover {
      opacity: .7
   }

   .mainMenu__headerClose {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      line-height: 2.6rem;
      font-weight: 500;
      color: #fff;
      transition: color .3s
   }

   .mainMenu__headerClose:after {
      margin-left: 1.5rem;
      font-size: 1.8rem;
      line-height: 1.8rem;
      content: "\E912" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .mainMenu__headerClose:hover {
      color: #ea2929
   }

   .mainMenu__content {
      display: flex;
      align-items: center
   }

   .mainMenu__nav {
      margin-left: 20rem
   }

   .mainMenu__navLink {
      display: inline-flex;
      margin-bottom: 2.5rem;
      position: relative;
      font-size: 6rem;
      line-height: 9.8rem;
      color: #fff;
      font-weight: 700;
      white-space: nowrap;
      transition: color .3s
   }

   .mainMenu__navLink span {
      position: absolute;
      left: 0;
      color: #ea2929;
      width: 0;
      overflow: hidden;
      transition: width .3s;
      background: #121416;
      white-space: nowrap
   }

   .mainMenu__navLink--active span, .mainMenu__navLink:hover span {
      width: 100%
   }

   .mainMenu__contentSocials {
      margin-left: auto;
      padding-right: 16rem
   }

   .mainMenu__socialsTitle {
      margin-bottom: 2.6rem;
      font-size: 1.8rem;
      line-height: 3rem;
      font-weight: 700;
      color: #ea2929
   }

   .mainMenu--active {
      opacity: 1;
      pointer-events: all
   }

   .mainMenu__socialsLink {
      display: inline-flex;
      margin-bottom: 2rem;
      font-size: 1.6rem;
      line-height: 2.6rem;
      font-weight: 500;
      color: #fff;
      transition: color .3s
   }

   .mainMenu__socialsLink--icon {
      display: none
   }

   .mainMenu__socialsLink:hover {
      color: #ea2929
   }

   .mainMenu--fixed .mainMenu__header {
      padding: 2rem 6rem
   }

   .textPage {
      padding-top: 18rem
   }

   .textPage__title {
      margin-bottom: 1.5rem;
      font-size: 4rem;
      line-height: 5.5rem;
      font-weight: 700
   }

   .textPage__inner {
      max-width: 120rem;
      margin: 0 auto;
      padding: 0 2rem
   }

   .clockContact {
      position: relative;
      display: flex;
      align-items: center;
      margin-left: -1.8rem;
      margin-right: -1.8rem
   }

   .clockContact__col {
      padding-left: 1.8rem;
      padding-right: 1.8rem
   }

   .clockContact__col .contactClock {
      padding-top: .6rem;
      margin-left: 1.8rem
   }

   .clockContact__skype {
      font-size: 2rem;
      line-height: 4rem;
      letter-spacing: .02em;
      font-weight: 700;
      color: #121416;
      transition: color .3s
   }

   .clockContact__skype span {
      position: relative;
      top: 1px;
      padding-right: .8rem;
      color: #ea2929;
      font-size: 2.2rem
   }

   .clockContact__skype span:after {
      content: "";
      height: 1.4rem;
      width: 1.2rem;
      position: absolute;
      background-color: #fff;
      left: calc(50% - .4rem);
      top: calc(50% - .2rem);
      transform: translate(-50%, -50%)
   }

   .clockContact__skype span:before {
      position: relative;
      z-index: 2
   }

   .clockContact__skype:hover {
      color: #ea2929
   }

   .clockContact__location {
      border-top: 1px solid #cfd6da;
      padding-top: .6rem;
      margin-top: .4rem;
      font-size: 1.2rem;
      line-height: 2.6rem;
      color: rgba(18, 20, 22, .5)
   }

   .clockContact--light .clockContact__skype {
      color: #fff
   }

   .clockContact--light .clockContact__skype:hover {
      color: #ea2929
   }

   .clockContact--light .clockContact__location, .clockContact--light .contactClock__desc {
      color: hsla(0, 0%, 100%, .5)
   }

   .contactClock {
      display: inline-block;
      width: 6.8rem;
      vertical-align: middle
   }

   .contactClock__inner {
      position: relative
   }

   .contactClock__clockCircle {
      stroke-width: 2px;
      fill: transparent;
      stroke: #cfd6da
   }

   .contactClock__clockSmall {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .2);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fff
   }

   .contactClock__clockHour, .contactClock__clockMin, .contactClock__clockSec {
      stroke-width: 1px;
      fill: #a8acaf
   }

   .contactClock__clockSec {
      stroke: #f55
   }

   .contactClock__desc {
      padding-top: 1rem;
      left: 1.8rem;
      top: 100%;
      font-size: 1.4rem;
      line-height: 2rem
   }

   .contactClock__desc, .contactClock__icon {
      position: absolute;
      opacity: 0;
      transition: opacity .3s
   }

   .contactClock__icon {
      right: 8px;
      top: -3px;
      transform: translateX(50%)
   }

   .contactClock--close .contactClock__clockCircle {
      fill: rgba(234, 41, 41, .1)
   }

   .contactClock--close .contactClock__desc, .contactClock--close .contactClock__icon {
      opacity: 1
   }

   .cookiesBox {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 101;
      background-color: #fff;
      box-shadow: 0 5px 25px 0 rgba(115, 121, 134, .1)
   }

   .cookiesBox__inner {
      padding-top: 1.2rem;
      padding-bottom: 1.2rem
   }

   .cookiesBox__content, .cookiesBox__inner {
      display: flex;
      align-items: center
   }

   .cookiesBox__button {
      margin-left: auto
   }

   .cookiesBox__close {
      text-transform: uppercase;
      padding: 1.5rem 2.5rem;
      background-color: #ea2929;
      color: #fff;
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: .01em;
      transition: opacity .3s
   }

   .cookiesBox__close:hover {
      opacity: .6
   }

   .cookiesBox__text {
      font-size: 1.4rem;
      line-height: 2.5rem;
      color: rgba(18, 20, 22, .5);
      padding-left: 2rem;
      padding-right: 1rem
   }

   .cookiesBox__text a {
      display: inline-flex;
      align-items: center;
      color: #121416;
      transition: color .3s
   }

   .cookiesBox__text a:after {
      position: relative;
      top: 1px;
      padding-left: 1rem;
      font-size: 1rem;
      content: "\E90D" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .cookiesBox__text a:hover {
      color: #ea2929
   }

   [data-collapse-target] {
      height: 0;
      overflow: hidden;
      transition: max-height .3s ease-in-out, background-color .3s
   }

   [data-collapse-target].open {
      height: auto
   }

   .defaultForm__row {
      margin-left: -1.2rem;
      margin-right: -1.2rem;
      display: flex;
      flex-wrap: wrap
   }

   .defaultForm__group {
      position: relative;
      margin-bottom: 1rem;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      flex: 1
   }

   .defaultForm__group a {
      display: inline-block;
      position: relative;
      color: #121416;
      text-decoration: underline;
      transition: color .3s
   }

   .defaultForm__group a:hover {
      color: #121416
   }

   .defaultForm__group--select:before {
      content: "";
      position: absolute;
      right: 3rem;
      top: 6.2rem;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-color: #121416 transparent transparent;
      border-style: solid;
      border-width: .5rem .4rem 0
   }

   .defaultForm__groupTitle {
      font-size: 1.6rem;
      line-height: 3rem;
      margin-bottom: 1.2rem
   }

   .defaultForm__label {
      position: relative;
      display: block;
      font-size: 1.4rem;
      line-height: 3.6rem;
      color: #3e3e3e;
      font-weight: 400
   }

   .defaultForm__label.active .defaultForm__span {
      top: -1.2rem;
      transform: translateY(0);
      font-size: 1.2rem
   }

   .defaultForm__label--radioIcons {
      display: flex;
      flex-wrap: wrap;
      margin-left: -.5rem;
      margin-right: -.5rem;
      margin-bottom: 0
   }

   .defaultForm__label--radioIcons p {
      flex: 1;
      margin: 0 .5rem 1rem
   }

   .defaultForm__label--radioIcons p input {
      display: none
   }

   .defaultForm__label--radioIcons p:first-child {
      flex: 0 0 31%;
      max-width: 31%
   }

   .defaultForm__label--radioIcons p:nth-child(2) {
      flex: 0 0 28%;
      max-width: 28%
   }

   .defaultForm__label--radioIcons p:nth-child(3) .defaultForm__iconRadioIcon {
      font-size: 3rem !important
   }

   .defaultForm__label--radioIcons input:checked + label {
      background-color: #fff;
      border: 1px solid #76757a;
      box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, .1)
   }

   .defaultForm__label--radioIcons input:checked + label:before {
      background-color: #121416;
      border: 1px solid #121416
   }

   .defaultForm__label--radioIcons label {
      position: relative;
      height: 7rem;
      display: flex;
      align-items: center;
      background-color: #5e5e5e;
      border-radius: .3rem;
      border: 1px solid #5e5e5e;
      padding: 0 1.5rem;
      font-size: 1.6rem;
      color: #121416;
      transition: background-color .3s, border .3s
   }

   .defaultForm__label--radioIcons label:before {
      content: "";
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 2rem;
      height: 2rem;
      background-color: #fff;
      border: 1px solid #76757a;
      border-radius: .3rem;
      transition: background-color .3s, border .3s
   }

   .defaultForm__label--radioIcons label:after {
      position: absolute;
      right: 1.5rem;
      top: .9rem;
      font-size: .7rem;
      color: #fff
   }

   .defaultForm__iconRadioIcon {
      font-size: 4rem;
      color: #121416;
      margin-right: 1.5rem
   }

   .defaultForm__span {
      position: absolute;
      left: 0;
      top: 2rem;
      white-space: nowrap;
      font-size: 1.6rem;
      font-weight: 400;
      transition: all .3s
   }

   .defaultForm__input, .defaultForm__select, .defaultForm__textarea {
      display: block;
      margin-bottom: 1.2rem;
      width: 100%;
      min-height: 5.8rem;
      border: 0;
      border-bottom: 1px solid #cfd6da;
      box-shadow: 0 5px 3px rgba(115, 121, 134, 0);
      transition: box-shadow .3s;
      padding-left: 0;
      font-size: 1.4rem;
      line-height: 1.4rem;
      color: rgba(18, 20, 22, .8)
   }

   .defaultForm__input::-webkit-input-placeholder, .defaultForm__select::-webkit-input-placeholder, .defaultForm__textarea::-webkit-input-placeholder {
      color: rgba(62, 62, 62, .4)
   }

   .defaultForm__input:-ms-input-placeholder, .defaultForm__select:-ms-input-placeholder, .defaultForm__textarea:-ms-input-placeholder {
      color: rgba(62, 62, 62, .4)
   }

   .defaultForm__input::-ms-input-placeholder, .defaultForm__select::-ms-input-placeholder, .defaultForm__textarea::-ms-input-placeholder {
      color: rgba(62, 62, 62, .4)
   }

   .defaultForm__input::placeholder, .defaultForm__select::placeholder, .defaultForm__textarea::placeholder {
      color: rgba(62, 62, 62, .4)
   }

   .defaultForm__input:active ~ .defaultForm__span, .defaultForm__input:focus ~ .defaultForm__span, .defaultForm__select:active ~ .defaultForm__span, .defaultForm__select:focus ~ .defaultForm__span, .defaultForm__textarea:active ~ .defaultForm__span, .defaultForm__textarea:focus ~ .defaultForm__span {
      top: -1.2rem;
      transform: translateY(0);
      font-size: 1.2rem
   }

   .defaultForm__input--half, .defaultForm__select--half, .defaultForm__textarea--half {
      width: 50%
   }

   .defaultForm__textarea {
      min-height: 12rem;
      margin-bottom: 0;
      padding-top: 2rem
   }

   .defaultForm__error {
      padding: 5px 0 0;
      font-size: 1.2rem;
      line-height: 2rem;
      color: #ea2929
   }

   .defaultForm__submitError {
      color: #ea2929
   }

   .defaultForm__submitError, .defaultForm__submitSuccess {
      padding: 1.5rem 0 0;
      font-size: 1.6rem;
      line-height: 2.2rem
   }

   .defaultForm__submitSuccess {
      text-align: center;
      color: #28a745
   }

   .defaultForm__checkbox {
      padding-top: 1.4rem;
      width: 100%;
      opacity: 0
   }

   .defaultForm__checkbox:checked ~ label:after {
      opacity: 1
   }

   .defaultForm__checkbox ~ label {
      display: inline-block;
      position: relative;
      padding-left: 3.9rem;
      font-size: 1.6rem;
      line-height: 3.2rem;
      color: rgba(18, 20, 22, .8)
   }

   .defaultForm__checkbox ~ label:before {
      content: "";
      position: absolute;
      top: .6rem;
      left: 0;
      width: 2rem;
      height: 2rem;
      border: 1px solid #cfd6da
   }

   .defaultForm__checkbox ~ label:after {
      content: "";
      position: absolute;
      top: 1.6rem;
      left: 1rem;
      width: 1rem;
      height: 1rem;
      transform: translate(-50%, -50%);
      opacity: 0;
      background: #121416
   }

   .defaultForm__checkbox ~ label p {
      max-width: 52.5rem
   }

   .defaultForm__button {
      margin-top: 2.3rem
   }

   .extraHeading {
      position: relative;
      display: inline-flex;
      padding-bottom: 1.2rem;
      font-size: 4rem;
      font-weight: 700;
      line-height: 1.2
   }

   .extraHeading:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 9.2rem;
      height: .2rem;
      background-color: #ff3f3d
   }

   .extraHeading--centeredLine:after {
      left: 50%;
      transform: translateX(-50%)
   }

   .linkedinItem {
      display: flex;
      align-items: center;
      margin-bottom: 2rem
   }

   .linkedinItem:last-child {
      margin-bottom: 0
   }

   .linkedinItem__img {
      flex: 0 0 5.6rem;
      width: 5.6rem;
      height: 5.6rem;
      margin-right: 2.5rem
   }

   .linkedinItem__img img {
      width: 100%
   }

   .linkedinItem__desc {
      color: #fff
   }

   .linkedinItem__descName {
      font-size: 1.8rem;
      line-height: 2rem;
      font-weight: 700;
      transition: color .3s
   }

   .linkedinItem__descPosition {
      font-size: 1.4rem;
      line-height: 2rem;
      transition: color .3s
   }

   .linkedinItem:hover .linkedinItem__descName, .linkedinItem:hover .linkedinItem__descPosition {
      color: #ea2929
   }

   .wysiwyg h1, .wysiwyg h2, .wysiwyg h3, .wysiwyg h4, .wysiwyg h5, .wysiwyg h6 {
      font-weight: 500;
      line-height: 1.25
   }

   .wysiwyg h1 {
      font-size: 4rem
   }

   .wysiwyg h2 {
      font-size: 3rem
   }

   .wysiwyg h3 {
      font-size: 2.4rem
   }

   .wysiwyg h4 {
      font-size: 2.2rem;
      color: #3e3e3e
   }

   .wysiwyg h5 {
      font-size: 1.4rem
   }

   .wysiwyg h6 {
      font-size: 1.2rem
   }

   .wysiwyg ol li, .wysiwyg p, .wysiwyg ul li {
      font-weight: 400;
      color: rgba(18, 20, 22, .5);
      font-size: 1.6rem;
      line-height: 1.6875
   }

   .wysiwyg h1, .wysiwyg h2, .wysiwyg h3, .wysiwyg h4, .wysiwyg h5, .wysiwyg h6, .wysiwyg ol, .wysiwyg p, .wysiwyg ul {
      margin-top: 26px;
      overflow-wrap: break-word
   }

   .wysiwyg h1:first-child, .wysiwyg h2:first-child, .wysiwyg h3:first-child, .wysiwyg h4:first-child, .wysiwyg h5:first-child, .wysiwyg h6:first-child, .wysiwyg ol:first-child, .wysiwyg p:first-child, .wysiwyg ul:first-child {
      margin-top: 0
   }

   .wysiwyg h1 + ol, .wysiwyg h1 + p, .wysiwyg h1 + ul, .wysiwyg h2 + ol, .wysiwyg h2 + p, .wysiwyg h2 + ul, .wysiwyg h3 + ol, .wysiwyg h3 + p, .wysiwyg h3 + ul, .wysiwyg h4 + ol, .wysiwyg h4 + p, .wysiwyg h4 + ul, .wysiwyg h5 + ol, .wysiwyg h5 + p, .wysiwyg h5 + ul, .wysiwyg h6 + ol, .wysiwyg h6 + p, .wysiwyg h6 + ul {
      margin-top: 18px
   }

   .wysiwyg ol li {
      position: relative;
      margin-left: 30px;
      counter-increment: item;
      margin-bottom: 25px
   }

   .wysiwyg ol li:before {
      content: counter(item, decimal-leading-zero);
      font-weight: 500;
      font-size: 15px;
      color: #ea2929;
      position: absolute;
      left: -30px;
      top: 0
   }

   .wysiwyg ul li {
      position: relative;
      margin-left: 30px;
      margin-bottom: 25px
   }

   .wysiwyg ul li:before {
      position: absolute;
      color: #ea2929;
      font-size: 1.2rem;
      left: -30px;
      top: 3px;
      content: "\E91B" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .section + .section {
      margin-top: 2rem
   }

   .aboutUsHeader {
      margin-bottom: 6rem;
      position: relative;
      background-color: #121416;
      overflow: hidden
   }

   .aboutUsHeader:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 12rem;
      background-color: #fff
   }

   .aboutUsHeader__content {
      position: relative;
      z-index: 2;
      margin-top: 20.5rem
   }

   .aboutUsHeader__title {
      position: absolute;
      top: auto;
      left: 64rem;
      transform: translateY(-100%);
      margin-top: 1rem;
      font-size: 17rem;
      font-weight: 900;
      line-height: 12rem;
      white-space: nowrap;
      -webkit-text-stroke: 1px rgba(207, 214, 218, .4);
      -webkit-text-fill-color: #121416
   }

   .aboutUsHeader__heading {
      position: relative;
      max-width: 49rem;
      font-size: 5.6rem;
      font-weight: 700;
      line-height: 6.4rem;
      color: #fff;
      z-index: 1
   }

   .aboutUsHeader__arrow {
      position: absolute;
      z-index: 4;
      padding: 1rem;
      left: 14rem;
      bottom: 15.6rem;
      font-size: 4rem;
      color: #ea2929;
      animation: bounce 2s infinite
   }

   .aboutUsHeader__images {
      position: relative;
      display: flex;
      margin-top: -3.3rem;
      padding-left: 42.8rem;
      z-index: 1
   }

   .aboutUsHeader__image {
      position: relative;
      display: block;
      flex: 0 0 70%;
      max-width: 70%
   }

   .aboutUsHeader__image:first-of-type {
      margin-right: 4rem
   }

   .aboutUsHeader__imageWrapper {
      position: relative;
      padding-top: 57.53424658%;
      width: 100%
   }

   .aboutUsHeader__imageImg {
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%
   }

   .aboutUsHeader__imageImg--first {
      margin-right: 4rem
   }

   .centeredText {
      padding-top: 3rem;
      padding-bottom: 3rem;
      text-align: center
   }

   .centeredText__desc {
      font-size: 3rem;
      line-height: 4rem;
      max-width: 72rem;
      margin: 0 auto
   }

   .centeredText__desc b, .centeredText__desc strong {
      font-weight: 500;
      text-decoration: underline
   }

   .centeredText__button {
      position: relative;
      z-index: 2;
      margin-top: 4.5rem
   }

   .clientsLogosSlider {
      padding: 2.5rem 0 6.5rem
   }

   .clientsLogosSlider__slider:after, .clientsLogosSlider__slider:before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 100%;
      width: 2px;
      background-color: #fff;
      z-index: 2
   }

   .clientsLogosSlider__slider:before {
      left: 0
   }

   .clientsLogosSlider__slider:after {
      right: 0
   }

   .clientsLogosSlider__slide {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 2.5rem;
      min-height: 10rem;
      border-left: 1px solid #cfd6da
   }

   .clientsLogosSlider__slide img {
      max-width: 100%
   }

   .clientsSlider {
      padding: 15rem 0 2.5rem;
      position: relative
   }

   .clientsSlider__title {
      position: absolute;
      left: 60.25%;
      transform: translate(-50%, -50%);
      top: 9.7rem;
      font-size: 17rem;
      line-height: 12rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: #fff
   }

   .clientsSlider__slide {
      display: flex;
      flex-wrap: wrap;
      height: 54rem
   }

   .clientsSlider__left {
      flex: 0 0 51%;
      max-width: 51%;
      padding: 6rem 5.7rem 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #ea2929;
      color: #fff
   }

   .clientsSlider__opinionIcon {
      display: inline-flex;
      font-size: 4rem
   }

   .clientsSlider__opinionText {
      margin: 4.6rem 0 3.9rem;
      font-size: 2rem;
      font-weight: 700;
      line-height: 3.1rem
   }

   .clientsSlider__author {
      position: relative;
      padding-top: 3rem;
      display: flex;
      align-items: center
   }

   .clientsSlider__author:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 8rem;
      border-top: 1px solid #fff
   }

   .clientsSlider__authorImg {
      margin-left: -.6rem;
      width: 7.6rem;
      height: 7.6rem;
      border-radius: 50%
   }

   .clientsSlider__authorWrapper {
      padding-left: 2rem
   }

   .clientsSlider__authorName {
      margin-bottom: 1rem;
      font-size: 1.8rem;
      font-weight: 700
   }

   .clientsSlider__authorPosition {
      font-size: 1.4rem;
      line-height: 1.3
   }

   .clientsSlider__right {
      position: relative;
      flex: 0 0 49%;
      max-width: 49%
   }

   .clientsSlider__rightImg {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      object-fit: cover
   }

   .coFounders__inner {
      padding-top: 10.5rem;
      padding-bottom: 17.6rem
   }

   .coFounders__title {
      font-size: 17rem;
      line-height: 12rem;
      font-weight: 900;
      text-align: center;
      -webkit-text-stroke: .1rem #cfd6da;
      -webkit-text-fill-color: #fff
   }

   .coFounders__slider {
      margin-top: -3rem
   }

   .coFounders__slide {
      display: flex;
      align-items: center;
      justify-content: center
   }

   .coFounders__leftImg {
      width: 100%;
      max-width: 100%
   }

   .coFounders__right {
      padding-left: 28.4rem
   }

   .coFounders__rightNav {
      position: relative;
      display: flex;
      margin-bottom: 8rem;
      flex-direction: column;
      cursor: pointer
   }

   .coFounders__rightNav:last-of-type {
      margin-bottom: 0;
      margin-right: 0
   }

   .coFounders__rightNav:before {
      content: "";
      position: absolute;
      top: 1.2rem;
      left: -12.5rem;
      width: 8rem;
      height: 2px;
      background-color: rgba(18, 20, 22, .5);
      transition: background-color .3s
   }

   .coFounders__rightNav--active .coFounders__rightLinkIcon, .coFounders__rightNav--active .coFounders__rightLinkText, .coFounders__rightNav--active .coFounders__rightLinkText:after, .coFounders__rightNav--active .coFounders__rightName, .coFounders__rightNav--active .coFounders__rightTitle, .coFounders__rightNav:hover .coFounders__rightLinkIcon, .coFounders__rightNav:hover .coFounders__rightLinkText, .coFounders__rightNav:hover .coFounders__rightLinkText:after, .coFounders__rightNav:hover .coFounders__rightName, .coFounders__rightNav:hover .coFounders__rightTitle {
      opacity: 1
   }

   .coFounders__rightNav--active:before, .coFounders__rightNav:hover:before {
      background-color: #ea2929
   }

   .coFounders__rightName {
      margin-bottom: 1rem;
      font-size: 3.2rem;
      font-weight: 700;
      color: #121416;
      opacity: .5;
      transition: opacity .3s
   }

   .coFounders__rightTitle {
      font-size: 1.8rem;
      color: #76757a;
      opacity: .5;
      transition: opacity .3s
   }

   .coFounders__rightLink {
      display: inline-flex;
      margin-top: 2.8rem;
      align-items: center
   }

   .coFounders__rightLinkIcon {
      padding-right: 1.1rem;
      font-size: 1.8rem;
      color: #121416;
      opacity: .5;
      transition: opacity .3s
   }

   .coFounders__rightLinkText {
      position: relative;
      font-size: 1.6rem;
      color: #121416;
      opacity: .5;
      transition: opacity .3s
   }

   .coFounders__rightLinkText:after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: -1px;
      width: calc(100% + 2px);
      height: 1px;
      background-color: #121416;
      opacity: .5;
      transition: opacity .3s
   }

   .contactPage {
      overflow: hidden
   }

   .contactPage__contentSwiper {
      height: 100vh;
      height: calc(100vh - var(--vh-offset, 0px))
   }

   .contactPage__content {
      position: relative;
      z-index: 4;
      height: 100%
   }

   .contactPage__logo {
      display: inline-flex;
      transition: opacity .3s
   }

   .contactPage__logo:hover {
      opacity: .7
   }

   .contactPage__logo svg {
      fill: #121416;
      max-width: 13.5rem
   }

   .contactPage__logoSvg--mobile {
      display: none
   }

   .contactPage__intro {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;
      height: 100%;
      width: 70%
   }

   .contactPage__introLogo {
      padding: 4rem 6rem;
      opacity: 0
   }

   .contactPage__introContent {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin-top: auto;
      padding-left: 15rem;
      padding-right: 15rem
   }

   .contactPage__introOutline {
      margin-top: auto;
      margin-bottom: auto;
      position: relative;
      white-space: nowrap;
      font-size: 27rem;
      line-height: 15rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: transparent;
      pointer-events: none;
      transition: padding-left .3s
   }

   .contactPage__introOutline--form {
      position: absolute;
      left: 870px;
      top: 45%;
      transform: translateY(-50%);
      font-size: 24.1rem;
      line-height: 15rem
   }

   .contactPage__right {
      position: fixed;
      z-index: 2;
      top: 0;
      right: 0;
      height: 100%;
      width: 30%;
      display: flex;
      background-color: #121416;
      pointer-events: none
   }

   .contactPage__rightBg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none
   }

   .contactPage__rightContent {
      padding: 0 0 10rem 10rem;
      margin-top: auto;
      width: 100%
   }

   .contactPage__introBottom {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      padding-bottom: 8rem
   }

   .contactPage__introBottomCol {
      margin-bottom: 3rem;
      flex: 0 0 50%;
      max-width: 50%
   }

   .contactPage__introBottomCta {
      padding-bottom: .6rem
   }

   .contactPage__introBottomCtaTitle {
      margin-bottom: 2.6rem;
      font-size: 1.6rem;
      line-height: 2.6rem;
      font-weight: 700
   }

   .contactPage__email {
      display: inline-block;
      margin-bottom: 1.3rem;
      position: relative;
      font-size: 3rem;
      line-height: 4.2rem;
      color: #ea2929;
      font-weight: 700;
      transition: color .3s
   }

   .contactPage__email:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #ea2929;
      transition: background-color .3s
   }

   .contactPage__email:hover {
      color: #121416
   }

   .contactPage__email:hover:after {
      background-color: #121416
   }

   .contactPage__form {
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
      width: 70%;
      padding: 6rem 6rem 6rem 15rem
   }

   .contactPage__formInner {
      max-width: 600px
   }

   .contactPage__formInner h2 {
      margin-bottom: 2rem
   }

   .contactPage__list {
      pointer-events: all
   }

   .contactPage__fixedLinkedin {
      position: fixed;
      left: calc(70% + 10rem);
      bottom: 10rem;
      z-index: 5
   }

   .contactPage__mobileLinkedin {
      display: none;
      position: relative;
      background-color: #121416;
      padding: 5rem 2rem
   }

   .contactPage .swiper-slide {
      width: 100%;
      height: 100%
   }

   .contactPage .swiper-scrollbar {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 8px;
      background: #fff;
      border-radius: 0
   }

   .contactPage .swiper-scrollbar-drag {
      background-color: #ea2929;
      border-radius: 0
   }

   .faq {
      padding: 6.5rem 0
   }

   .faq__inner {
      margin: 0 auto;
      max-width: 92.7rem;
      text-align: center
   }

   .faq__items {
      margin-top: 5rem;
      text-align: left
   }

   .faq__item {
      margin-bottom: 1.5rem;
      border: 1px solid #cfd6da;
      border-radius: 5px;
      overflow: hidden
   }

   .faq__item:last-of-type {
      margin-bottom: 0
   }

   .faq__itemNav {
      position: relative;
      display: flex;
      padding: 3rem 3rem 2.5rem;
      justify-content: space-between;
      transition: padding-bottom .3s, background-color .3s
   }

   .faq__itemNav.open {
      padding-bottom: 2rem
   }

   .faq__itemNav.open .faq__itemTitle {
      font-weight: 500;
      color: #ea2929
   }

   .faq__itemNav.open .faq__itemIcon:after {
      background-color: #ea2929
   }

   .faq__itemNav.open .faq__itemIcon:before {
      opacity: 0
   }

   .faq__itemNav:not(.open):hover {
      cursor: pointer;
      background-color: #ea2929
   }

   .faq__itemNav:not(.open):hover:before {
      width: 100%
   }

   .faq__itemNav:not(.open):hover .faq__itemTitle {
      color: #fff
   }

   .faq__itemNav:not(.open):hover .faq__itemIcon:after, .faq__itemNav:not(.open):hover .faq__itemIcon:before {
      background-color: #fff
   }

   .faq__itemTitle {
      position: relative;
      z-index: 1;
      padding-right: 2rem;
      flex: 1;
      font-size: 1.8rem;
      line-height: 1.25;
      transition: color .3s, font-weight .3s
   }

   .faq__itemIcon {
      position: relative;
      width: 1.4rem;
      height: 1.4rem
   }

   .faq__itemIcon:after {
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: .2rem;
      transition: background-color .3s
   }

   .faq__itemIcon:after, .faq__itemIcon:before {
      content: "";
      position: absolute;
      background-color: #121416
   }

   .faq__itemIcon:before {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      width: .2rem;
      opacity: 1;
      transition: opacity .3s, background-color .3s
   }

   .faq__itemWrapper {
      padding: 0 3rem
   }

   .faq__itemContent {
      margin-bottom: 2rem;
      font-size: 1.6rem;
      line-height: 2.6rem;
      color: rgba(18, 20, 22, .5)
   }

   .galleryInterior {
      overflow: hidden;
      margin-top: -10rem
   }

   .galleryInterior__secondTitle, .galleryInterior__title {
      left: -4rem;
      font-size: 17rem;
      line-height: 17rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: transparent
   }

   .galleryInterior__title {
      position: relative;
      pointer-events: none
   }

   .galleryInterior__secondTitle {
      position: absolute;
      top: -13.2rem;
      width: 14rem;
      z-index: 4;
      overflow: hidden;
      pointer-events: none
   }

   .galleryInterior__slider {
      position: relative;
      margin-top: -3.8rem;
      padding-left: 10rem
   }

   .galleryInterior__slider:before {
      content: "";
      position: absolute;
      right: calc(100% - 10rem);
      top: 0;
      width: 9999px;
      height: 100%;
      z-index: 3;
      background-color: #fff
   }

   .galleryInterior__swiper {
      margin-bottom: 2rem;
      overflow: unset
   }

   .galleryInterior__slide {
      position: relative
   }

   .galleryInterior__slide--full {
      width: 100%
   }

   .galleryInterior__slide--full:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 44.52830189%
   }

   .galleryInterior__slide--half {
      width: 50%
   }

   .galleryInterior__slide--half:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 89.05660377%
   }

   .galleryInterior__slideImage {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%
   }

   .galleryInterior__slideImage img {
      width: 100%;
      height: 100%;
      object-fit: cover
   }

   .gallerySlider {
      padding-top: 16rem;
      padding-bottom: 9rem;
      position: relative;
      overflow: hidden
   }

   .gallerySlider:before {
      content: "";
      height: 40rem;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(191, 192, 192, 0), #bfc0c0);
      opacity: .15;
      pointer-events: none
   }

   .gallerySlider__inner {
      display: flex;
      flex-wrap: wrap
   }

   .gallerySlider__swiper {
      overflow: visible;
      margin-left: -12px;
      margin-right: -12px
   }

   .gallerySlider__desc {
      position: relative;
      z-index: 3;
      flex: 0 0 30.5%;
      max-width: 30.5%;
      padding-right: 3rem
   }

   .gallerySlider__slider {
      position: relative;
      flex: 0 0 61%;
      max-width: 61%
   }

   .gallerySlider__slider:before {
      height: calc(100% + 9rem);
      background-color: #fff;
      top: 0
   }

   .gallerySlider__slider:after, .gallerySlider__slider:before {
      content: "";
      position: absolute;
      width: 99999px;
      right: 100%;
      z-index: 2
   }

   .gallerySlider__slider:after {
      height: 40rem;
      bottom: -9rem;
      background: linear-gradient(180deg, rgba(191, 192, 192, 0), #bfc0c0);
      opacity: .15;
      pointer-events: none
   }

   .gallerySlider__descTitle {
      margin-bottom: 3.5rem
   }

   .gallerySlider__descDesc {
      margin-bottom: 3.2rem;
      font-size: 1.8rem;
      line-height: 3.2rem
   }

   .gallerySlider__outline {
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      top: -5.5rem;
      font-size: 17rem;
      line-height: 12rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: #fff
   }

   .gallerySlider__slide {
      padding-left: 12px;
      padding-right: 12px
   }

   .gallerySlider__slideDesc {
      text-align: right;
      padding-top: 1rem
   }

   .gallerySlider__slideName {
      font-size: 1.4rem;
      line-height: 2.2rem;
      font-weight: 500
   }

   .gallerySlider__slideCategory {
      font-size: 1rem;
      line-height: 2rem;
      opacity: .5;
      letter-spacing: .05em
   }

   .gallerySlider__slideImage {
      position: relative
   }

   .gallerySlider__slideImage:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 66.47887324%
   }

   .gallerySlider__slideImage img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover
   }

   .gallerySlider__nav {
      margin-top: -.5rem;
      display: flex;
      align-items: center
   }

   .gallerySlider__navButtons {
      flex: 0 0 7.5rem;
      max-width: 7.5rem;
      display: flex;
      align-items: center;
      margin-left: -1rem;
      padding-right: 1rem
   }

   .gallerySlider__navProgress {
      height: .2rem;
      position: relative;
      flex: 1;
      background-color: #cfd6da
   }

   .gallerySlider .swiper-pagination-progressbar-fill {
      background-color: #121416
   }

   .gallerySlider__navButton {
      width: 3.5rem;
      height: 3.5rem;
      opacity: .5;
      transition: color .3s, opacity .3s
   }

   .gallerySlider__navButton--prev:before {
      content: "\E90F" !important
   }

   .gallerySlider__navButton--next:before, .gallerySlider__navButton--prev:before {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .gallerySlider__navButton--next:before {
      content: "\E906" !important
   }

   .gallerySlider__navButton:not(.swiper-button-disabled) {
      opacity: 1
   }

   .gallerySlider__navButton:not(.swiper-button-disabled):hover {
      color: #ea2929
   }

   .globalMap {
      position: relative
   }

   .globalMap__outline {
      margin-bottom: -1.5rem;
      text-align: center;
      font-size: 17rem;
      line-height: 12rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: transparent
   }

   .globalMap__inner {
      position: relative;
      z-index: 1;
      padding-top: 15rem;
      padding-bottom: 12rem;
      background-color: #121416;
      color: #fff
   }

   .globalMap__top {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 8rem
   }

   .globalMap__title {
      position: relative;
      padding-top: 2.2rem;
      font-size: 4rem;
      line-height: 5rem;
      font-weight: 700
   }

   .globalMap__title:before {
      content: "";
      position: absolute;
      left: 2px;
      top: 0;
      width: 9rem;
      height: 2px;
      background-color: #ea2929
   }

   .globalMap__topLeft {
      flex: 0 0 28rem;
      max-width: 28rem
   }

   .globalMap__topRight {
      flex: 0 0 72rem;
      max-width: 72rem;
      padding-top: 2.2rem;
      font-size: 1.8rem;
      line-height: 3.2rem;
      margin-left: 13rem
   }

   .globalMap__map, .globalMap__mapWrapper {
      position: relative
   }

   .globalMap__mapText {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%)
   }

   .globalMap__mapSvg {
      width: calc(100% - 40rem)
   }

   .globalMap__mapSvg--absolute {
      position: absolute;
      left: 0;
      top: 50%;
      height: 100%;
      transform: translateY(-50%)
   }

   .globalMap__mapSvg--absolute circle {
      opacity: 1;
      transition: opacity .3s
   }

   .globalMap__mapSvg--absolute circle.hide {
      opacity: 0
   }

   .globalMap__mapNumberBig {
      margin-bottom: 3.6rem
   }

   .globalMap__mapNumberBigNumber {
      font-size: 17rem;
      line-height: 12rem;
      font-weight: 900;
      -webkit-text-stroke: 1px rgba(207, 214, 218, .3);
      -webkit-text-fill-color: transparent
   }

   .globalMap__mapDesc {
      position: absolute;
      left: 2rem;
      top: 4.5rem
   }

   .globalMap__mapDesc h3 {
      font-size: 3.5rem;
      line-height: 5rem;
      font-weight: 700
   }

   .globalMap__mapDesc p {
      font-size: 1.6rem;
      line-height: 3rem;
      color: rgba(196, 201, 204, .5)
   }

   .globalMap__mapButton {
      margin-left: 6px
   }

   .homeContact {
      top: 1px;
      padding-top: 7rem;
      overflow: hidden
   }

   .homeContact, .homeContact__inner {
      position: relative
   }

   .homeContact__wrapper {
      display: flex;
      align-items: center
   }

   .homeContact__info {
      position: absolute;
      width: 33.333%;
      height: 100%;
      left: 0;
      top: 0;
      padding: 8.7rem 9.9rem 7.7rem 15rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center
   }

   .homeContact__infoTop {
      position: relative;
      z-index: 1;
      margin-bottom: 4rem
   }

   .homeContact__infoTitle {
      margin-bottom: 3.7rem;
      font-size: 3.2rem;
      font-weight: 500;
      color: #fff;
      z-index: 1
   }

   .homeContact__infoImage {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover
   }

   .homeContact__infoBottom {
      margin-top: auto;
      border-left: 1px solid #c4c9cc
   }

   .homeContact__infoLinkIcon {
      margin-right: .2rem;
      color: #ea2929;
      font-size: 2.2rem
   }

   .homeContact__infoSocials {
      padding-top: 3rem;
      position: relative;
      display: flex;
      align-items: center;
      margin-left: -1.3rem
   }

   .homeContact__infoSocial {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.2rem;
      height: 4.2rem;
      font-size: 1.5rem;
      border-radius: 50%;
      background-color: transparent;
      transition: background-color .3s
   }

   .homeContact__infoSocial:hover {
      background-color: #ea2929
   }

   .homeContact__infoSocial:hover .homeContact__infoSocialIcon {
      color: #fff
   }

   .homeContact__infoSocialIcon {
      color: #76757a;
      transition: color .3s
   }

   .homeContact__form {
      flex: 0 0 60%;
      max-width: 60%;
      padding: 5rem 0 9rem 12.3rem;
      margin-left: auto
   }

   .homeContact__formHeading {
      margin-top: 1.2rem
   }

   .homeContact__formWrapper {
      padding-top: 4.5rem
   }

   .homeContact .clockContact--close {
      margin-bottom: 5rem
   }

   .imageBoxes__header {
      text-align: center
   }

   .imageBoxes__title {
      font-size: 17rem;
      line-height: 12rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: #fff
   }

   .imageBoxes__list {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      margin-top: -.6rem
   }

   .imageBoxes__item {
      display: block;
      position: relative;
      flex: 1;
      height: 80vh;
      overflow: hidden
   }

   .imageBoxes__item:before {
      content: "";
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .2);
      opacity: 1;
      transition: opacity .3s
   }

   .imageBoxes__item:hover .imageBoxes__itemOverlay, .imageBoxes__item:hover:before {
      opacity: 0
   }

   .imageBoxes__item:hover .imageBoxes__itemImg {
      transform: scale(1.04)
   }

   .imageBoxes__item:hover .imageBoxes__button {
      padding-left: 1rem
   }

   .imageBoxes__item:hover .imageBoxes__buttonIcon {
      background-color: #ea2929;
      border: 1px solid #ea2929
   }

   .imageBoxes__itemImg, .imageBoxes__itemVideo {
      position: absolute;
      left: 0;
      top: 0;
      width: 102%;
      height: 102%;
      object-fit: cover
   }

   .imageBoxes__itemImg {
      transform: scale(1);
      will-change: transform;
      transition: transform .7s
   }

   .imageBoxes__itemContent {
      position: absolute;
      z-index: 3;
      left: 6.5rem;
      bottom: 8rem
   }

   .imageBoxes__itemTitle {
      margin-bottom: 2.5rem;
      font-size: 3.2rem;
      line-height: 4.2rem;
      font-weight: 700;
      color: #fff
   }

   .imageBoxes__button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      line-height: 3rem;
      color: #fff;
      font-weight: 500;
      padding-left: 0;
      transition: padding-left .3s
   }

   .imageBoxes__buttonText {
      padding-top: .4rem
   }

   .imageBoxes__itemDesc {
      font-size: 1.8rem;
      line-height: 2.8rem;
      color: #fff;
      height: 0;
      overflow: hidden;
      transition: height .3s
   }

   .imageBoxes__itemDescInner {
      padding-bottom: 3rem;
      max-width: 70%
   }

   .imageBoxes__buttonIcon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1.5rem;
      flex: 0 0 3.8rem;
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 50%;
      border: 1px solid #ea2929;
      transition: background-color .3s, color .3s, border .3s
   }

   .imageBoxes__buttonIcon:before {
      font-size: 1rem;
      content: "\E906" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .photoStairs {
      overflow: hidden;
      max-width: 100%;
      background-color: #121416;
      padding-bottom: 9rem
   }

   .photoStairs__swiper {
      position: relative
   }

   .photoStairs__list {
      display: flex
   }

   .photoStairs__item:nth-child(2) .photoStairs__offset:before {
      padding-top: 27.98913043%
   }

   .photoStairs__item:nth-child(3) .photoStairs__offset:before {
      padding-top: 55.97826087%
   }

   .photoStairs__itemImage {
      position: relative
   }

   .photoStairs__itemImage:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 100%
   }

   .photoStairs__itemImage img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover
   }

   .photoStairs__itemTitle {
      padding-top: 1rem;
      font-size: 1.4rem;
      line-height: 2.4rem;
      font-weight: 500;
      color: #fff
   }

   .photoStairs__itemCategory {
      opacity: .5;
      color: #fff;
      font-size: 1rem;
      line-height: 1.8rem;
      letter-spacing: .05em;
      text-transform: unset
   }

   .photoStairs__offset {
      pointer-events: none
   }

   .photoStairs__offset:before {
      display: block;
      content: "";
      width: 100%
   }

   .photoStairs__desc {
      margin-top: -6rem;
      max-width: calc(50% + 10rem);
      padding-left: 10rem
   }

   .photoStairs__descTitle {
      margin-bottom: 2rem;
      font-size: 2.4rem;
      line-height: 3.4rem;
      color: #fff;
      font-weight: 700
   }

   .photoStairs__descDesc {
      font-size: 1.6rem;
      line-height: 2.8rem;
      color: #fff
   }

   .projectsGrid {
      background-color: #121416;
      padding-bottom: 10rem;
      overflow: hidden
   }

   .projectsGrid__list {
      display: inline-block;
      column-count: 4;
      column-gap: 2px;
      color: #fff
   }

   .projectsGrid__item {
      overflow: hidden;
      cursor: pointer;
      break-inside: avoid;
      page-break-inside: avoid;
      will-change: transform
   }

   .projectsGrid__item canvas, .projectsGrid__item img, .projectsGrid__item video {
      display: block;
      width: 100%;
      height: auto
   }

   .projectsGrid__item:hover .projectsGrid__itemFull {
      top: 1rem;
      opacity: 1
   }

   .projectsGrid__item:hover .projectsGrid__itemInner:after {
      opacity: 1
   }

   .projectsGrid__item:hover .projectsGrid__itemDesc {
      bottom: 2rem;
      opacity: 1
   }

   .projectsGrid__itemVideo {
      position: relative
   }

   .projectsGrid__itemVideo video {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1
   }

   .projectsGrid__itemInner {
      margin-bottom: 2px;
      position: relative
   }

   .projectsGrid__itemInner:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(18, 20, 22, .5);
      opacity: 0;
      z-index: 1;
      transition: opacity .3s
   }

   .projectsGrid__itemFull {
      position: absolute;
      z-index: 2;
      right: 1rem;
      top: -4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      line-height: 1.8rem;
      width: 3.4rem;
      height: 3.4rem;
      border-radius: 50%;
      opacity: 0;
      transition: opacity .3s, top .3s
   }

   .projectsGrid__itemDesc {
      position: absolute;
      z-index: 2;
      bottom: 0;
      left: 2rem;
      opacity: 0;
      transition: opacity .3s, bottom .3s
   }

   .projectsGrid__itemName {
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 500
   }

   .projectsGrid__itemCategory {
      font-size: 1rem;
      letter-spacing: .05em;
      color: hsla(0, 0%, 100%, .5)
   }

   .projectsGrid__footer {
      margin-top: 8.5rem;
      color: #fff;
      text-align: center
   }

   .projectsGrid__footerTitle {
      margin-bottom: 1rem;
      font-size: 4rem;
      line-height: 6.2rem;
      font-weight: 700
   }

   .projectsGrid__footerDesc {
      max-width: 68rem;
      margin: 0 auto
   }

   .projectsGrid__footerDesc p {
      font-size: 1.8rem;
      line-height: 3.2rem
   }

   .projectsGrid__footerDesc p a {
      font-weight: 500;
      text-decoration: underline;
      transition: color .3s
   }

   .projectsGrid__footerDesc p a:hover {
      color: #ea2929
   }

   .projectsGrid__popup {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 99;
      width: 100%;
      height: 100%;
      background-color: #121416;
      pointer-events: none;
      opacity: 0;
      transition: opacity .3s
   }

   .projectsGrid__popup--active {
      opacity: 1;
      pointer-events: all
   }

   .projectsGrid__popupSwiper {
      height: 100%
   }

   .projectsGrid__popupSlide:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      height: 10rem;
      width: 100%;
      background: linear-gradient(180deg, #000, transparent);
      opacity: .5
   }

   .projectsGrid__popupSlide img, .projectsGrid__popupSlide video {
      width: 100%;
      height: 100%;
      object-fit: contain
   }

   .projectsGrid__popupTitle {
      position: absolute;
      top: 2rem;
      z-index: 3;
      left: 0;
      width: 100%;
      text-align: center
   }

   .projectsGrid__popupTitleName {
      color: #fff;
      font-size: 2.4rem;
      line-height: 3.4rem;
      font-weight: 500
   }

   .projectsGrid__popupTitleDesc {
      font-size: 1.2rem;
      line-height: 2.2rem;
      text-transform: uppercase;
      letter-spacing: .05em;
      color: hsla(0, 0%, 100%, .5)
   }

   .projectsGrid__popupClose {
      position: absolute;
      z-index: 3;
      left: 6rem;
      top: 50%;
      transform: translateY(-50%)
   }

   .projectsGrid__button {
      width: 6rem;
      height: 6rem;
      border: 1px solid hsla(0, 0%, 100%, .2);
      border-radius: 50%;
      z-index: 3;
      color: #fff;
      font-size: 1.6rem;
      line-height: 1.6rem;
      transition: background-color .3s, border .3s
   }

   .projectsGrid__button--close:after {
      content: "\E912" !important
   }

   .projectsGrid__button--close:after, .projectsGrid__button--prev:after {
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .projectsGrid__button--prev:after {
      content: "\E90C" !important
   }

   .projectsGrid__button--next:after {
      content: "\E90D" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .projectsGrid__button:hover {
      background-color: #ea2929;
      border: 1px solid #ea2929
   }

   .projectsGrid__popupButtons {
      display: flex;
      flex-direction: column;
      z-index: 3;
      position: absolute;
      right: 6rem;
      top: 50%;
      transform: translateY(-50%)
   }

   .projectsGrid__popupButtons button:first-child {
      margin-bottom: 1rem
   }

   .projectsGrid__popupPagination {
      opacity: 0;
      pointer-events: none;
      bottom: 10.7rem !important
   }

   .projectsGrid__popupPagination .swiper-pagination-bullet {
      width: 15px;
      height: 5px;
      border-radius: 10px;
      background-color: #fff
   }

   .projectsGrid__popupPagination .swiper-pagination-bullet.swiper-pagination-bullet-active-next, .projectsGrid__popupPagination .swiper-pagination-bullet.swiper-pagination-bullet-active-prev {
      transform: scale(1);
      opacity: .6
   }

   .projectsGrid__popupPagination .swiper-pagination-bullet.swiper-pagination-bullet-active-next-next, .projectsGrid__popupPagination .swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev {
      transform: scaleX(1);
      opacity: .3
   }

   .servicesHeader {
      margin-bottom: 9rem;
      overflow: hidden;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      background-color: #121416;
      min-height: 65rem;
      height: 100vh
   }

   .servicesHeader__bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%
   }

   .servicesHeader__bg img {
      width: 100%;
      height: 100%;
      object-fit: cover
   }

   .servicesHeader__inner {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 10rem
   }

   .servicesHeader__title {
      flex: 0 0 50%;
      max-width: 50%;
      padding-right: 8rem
   }

   .servicesHeader__titleTitle {
      margin-bottom: 3rem;
      font-size: 5.6rem;
      line-height: 6.4rem;
      font-weight: 700;
      color: #fff
   }

   .servicesHeader__desc {
      flex: 0 0 50%;
      max-width: 50%;
      position: relative;
      padding-top: 4rem;
      margin-top: 1.5rem;
      padding-left: 13rem;
      padding-right: 10rem;
      font-size: 1.8rem;
      line-height: 3.2rem;
      color: #fff
   }

   .servicesHeader__desc:before {
      content: "";
      position: absolute;
      left: 13rem;
      top: 0;
      width: 8rem;
      height: 2px;
      background-color: #ea2929
   }

   .servicesHeader__links {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100%
   }

   .servicesHeader__link {
      position: relative;
      flex: 1
   }

   .servicesHeader__link:last-child .servicesHeader__linkImageWrapper {
      border-right: 0
   }

   .servicesHeader__link:hover .servicesHeader__linkContent {
      background-color: rgba(234, 41, 41, .9);
      border-top: 1px solid rgba(234, 41, 41, .9);
      border-bottom: 1px solid rgba(234, 41, 41, .9);
      color: #fff
   }

   .servicesHeader__link:hover .servicesHeader__linkImageWrapper {
      height: 500px
   }

   .servicesHeader__link:last-child .servicesHeader__linkContent {
      border-right: 0
   }

   .servicesHeader__linkContent {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4.2rem 10rem;
      background-color: #fff;
      color: #121416;
      font-size: 2.4rem;
      line-height: 3rem;
      font-weight: 500;
      border-right: 1px solid #cfd6da;
      border-top: 1px solid #cfd6da;
      border-bottom: 1px solid #cfd6da;
      transition: background-color .3s, color .3s, border .3s
   }

   .servicesHeader__linkIcon {
      font-size: 1.6rem;
      line-height: 1.6rem
   }

   .servicesHeader__linkImageWrapper {
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      overflow: hidden;
      border-right: 1px solid transparent;
      transition: height .3s
   }

   .servicesHeader__linkImage {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 500px
   }

   .servicesHeader__linkImage img {
      object-fit: cover;
      width: 100%;
      height: 100%
   }

   .servicesHeader__outline {
      font-size: 20rem;
      line-height: 14rem;
      position: absolute;
      left: 15rem;
      bottom: 11rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: transparent;
      opacity: .2
   }

   .sliderTwoPhotos {
      overflow: hidden;
      max-width: 100%;
      background-color: #121416;
      padding-top: 11rem;
      padding-bottom: 4rem;
      margin-top: 8rem
   }

   .sliderTwoPhotos__images:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 45%
   }

   .sliderTwoPhotos__image:after, .sliderTwoPhotos__images:after {
      display: none
   }

   .sliderTwoPhotos__title {
      font-size: 17rem;
      line-height: 17rem;
      text-align: center;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: transparent;
      opacity: .3;
      margin-bottom: -3rem
   }

   .sliderTwoPhotos__imageBg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%
   }

   .textGallery__inner {
      position: relative;
      padding: 2.5rem 0
   }

   .textGallery__slideContent:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 56.13577023%
   }

   .textGallery__slideContent img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover
   }

   .textGallery__progress {
      position: relative;
      display: none
   }

   .textGallery__progress .swiper-pagination-bullet {
      background-color: rgba(18, 20, 22, .4)
   }

   .textGallery__progress .swiper-pagination-bullet-active {
      background-color: #ea2929
   }

   .textGallery__button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 4rem;
      color: #ea2929;
      cursor: pointer;
      transition: left .3s, right .3s
   }

   .textGallery__button:after {
      content: "\E918" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .textGallery__button--prev {
      left: -8rem;
      transform: rotate(90deg)
   }

   .textGallery__button--prev:hover {
      left: -9rem
   }

   .textGallery__button--next {
      right: -8rem;
      transform: rotate(-90deg)
   }

   .textGallery__button--next:hover {
      right: -9rem
   }

   .textTwoColumn {
      padding-top: 5rem;
      padding-bottom: 4rem
   }

   .textTwoColumn__inner {
      display: flex;
      flex-wrap: wrap
   }

   .textTwoColumn__buttonRow, .textTwoColumn__titleRow {
      flex: 0 0 100%;
      max-width: 100%;
      padding-left: 10rem
   }

   .textTwoColumn__titleRow {
      margin-bottom: 3rem
   }

   .textTwoColumn__buttonRow {
      margin-top: 6rem
   }

   .textTwoColumn p {
      font-size: 1.8rem;
      line-height: 3.2rem;
      margin-bottom: 2rem
   }

   .textTwoColumn p:last-child {
      margin-bottom: 0
   }

   .textTwoColumn h2 {
      font-size: 4rem;
      line-height: 5.5rem;
      font-weight: 700;
      max-width: 560px
   }

   .textTwoColumn__big {
      flex: 0 0 50%;
      max-width: 50%;
      padding-right: 4rem
   }

   .textTwoColumn__big--offset {
      padding-left: 10rem
   }

   .textTwoColumn__small {
      position: relative;
      z-index: 2;
      padding-top: 3.4rem;
      flex: 0 0 50%;
      max-width: 50%;
      padding-left: 13rem
   }

   .textTwoColumn__small:before {
      content: "";
      position: absolute;
      left: 13rem;
      top: 0;
      width: 8rem;
      height: 2px;
      background-color: #ea2929
   }

   .textTwoColumn__small--noRedLine {
      padding-top: 0
   }

   .textTwoColumn__small--noRedLine:before {
      display: none
   }

   .textTwoColumn__button {
      margin-top: 4.7rem
   }

   .textTwoColumn--black {
      background-color: #121416;
      color: #fff
   }

   .textTwoColumn--noBottomPadding {
      padding-bottom: 0
   }

   .textTwoColumn--smallTitle h2 {
      font-size: 2.4rem;
      line-height: 3.4rem
   }

   .textVideo__inner {
      padding: 2.5rem 0
   }

   .textVideo__inner video {
      display: block;
      max-width: 100%;
      margin: 0 auto;
      height: auto
   }

   .textVideo__video {
      position: relative
   }

   .textVideo__play {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      position: absolute;
      right: 0;
      top: 50%;
      width: 10rem;
      height: 10rem;
      background-color: #ea2929;
      transform: translate(50%, -50%);
      font-size: 3.2rem;
      transition: opacity .3s
   }

   .textVideo__play:after {
      content: "\E910" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .textVideo__play.hide {
      opacity: 0;
      pointer-events: none
   }

   .textVideo__play:hover {
      opacity: .6
   }

   .textWysiwyg__inner {
      padding: 2.5rem 0
   }

   .threeImages {
      padding-top: 2.5rem;
      padding-bottom: 1rem;
      overflow: hidden
   }

   .threeImages__inner {
      position: relative;
      display: flex;
      margin-left: -2rem;
      margin-right: -2rem
   }

   .threeImages__box {
      padding-left: 2rem;
      padding-right: 2rem
   }

   .threeImages__box--left {
      flex: 0 0 41.666%;
      max-width: 41.666%;
      padding-top: 6vw
   }

   .threeImages__box--left .threeImages__boxInner:before {
      padding-top: 80.85106383%
   }

   .threeImages__box--center {
      position: relative;
      flex: 0 0 33.333%;
      max-width: 33.333%
   }

   .threeImages__box--center .threeImages__boxInner:before {
      padding-top: 109.41176471%
   }

   .threeImages__box--right {
      flex: 0 0 25%;
      max-width: 25%;
      padding-top: 13vw
   }

   .threeImages__box--right .threeImages__boxInner:before {
      padding-top: 116.78832117%
   }

   .threeImages__boxInner {
      position: relative;
      background-color: #bfc0c0
   }

   .threeImages__boxInner:before {
      display: block;
      content: "";
      width: 100%
   }

   .threeImages__boxInner a:hover .threeImages__img {
      transform: scale(1.04)
   }

   .threeImages__boxInner video, .threeImages__img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover
   }

   .threeImages__img {
      transition: transform .7s
   }

   .threeImages__boxPlay {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 6rem;
      height: 6rem;
      background-color: #fff;
      color: #121416;
      border-radius: 50%;
      transition: color .3s, background-color .3s
   }

   .threeImages__boxPlay:before {
      font-size: 1.4rem;
      content: "\E910" !important;
      font-family: icomoon !important;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale
   }

   .threeImages__boxPlay:hover {
      background-color: #ea2929;
      color: #fff
   }

   .threeImages__boxWrapper {
      position: relative
   }

   .threeImages__outline {
      font-size: 19rem;
      line-height: 16rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: transparent;
      pointer-events: none;
      position: absolute;
      right: 5rem;
      bottom: 3rem
   }

   .titleDesc {
      padding-top: 8rem;
      padding-bottom: 5rem
   }

   .titleDesc__inner {
      display: flex;
      flex-wrap: wrap;
      margin-left: -12px;
      margin-right: -12px
   }

   .titleDesc__title {
      position: relative;
      flex: 0 0 41.666%;
      max-width: 41.666%;
      padding-left: 12px;
      padding-right: 12px
   }

   .titleDesc__titleSmall {
      position: relative;
      z-index: 1;
      margin-bottom: 4rem;
      font-size: 4rem;
      line-height: 6.2rem;
      font-weight: 700
   }

   .titleDesc__titleSmall:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 7.7rem;
      height: .2rem;
      background-color: #ea2929
   }

   .titleDesc__titleBig {
      position: absolute;
      left: 1rem;
      top: -5.5rem;
      font-size: 17rem;
      line-height: 12rem;
      font-weight: 900;
      -webkit-text-stroke: .1rem #cfd6da;
      -webkit-text-fill-color: #fff
   }

   .titleDesc__desc {
      position: relative;
      padding-left: 12px;
      padding-right: 12px;
      z-index: 1;
      flex: 0 0 58.334%;
      max-width: 58.334%;
      font-size: 1.8rem;
      line-height: 3.2rem
   }

   .videoFull {
      padding-top: 9rem;
      padding-bottom: 4rem;
      overflow: hidden
   }

   .videoFull__title {
      margin-bottom: -4rem;
      text-align: center;
      font-size: 17rem;
      line-height: 17rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: transparent
   }

   .videoFull__video {
      position: relative
   }

   .videoFull__video:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 45%
   }

   .videoFull__video video {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: cover
   }

   .whyOurTeam {
      display: flex;
      position: relative;
      height: calc(100vh - 85px);
      min-height: 65rem;
      width: 100%
   }

   .whyOurTeam__background, .whyOurTeam__backgroundImg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover
   }

   .whyOurTeam__backgroundImg {
      pointer-events: none
   }

   .whyOurTeam__backgroundImg--second {
      opacity: 0;
      pointer-events: none;
      transition: opacity .3s
   }

   .whyOurTeam__backgroundImg--second.active {
      opacity: 1
   }

   .whyOurTeam__content {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 1;
      width: 100%
   }

   .whyOurTeam__contentCol {
      flex: 0 0 33.33333%;
      max-width: 33.33333%
   }

   .whyOurTeam__contentCol:first-child {
      border-right: 1px solid rgba(207, 214, 218, .4)
   }

   .whyOurTeam__contentCol--items {
      flex: 0 0 66.666%;
      max-width: 66.666%
   }

   .whyOurTeam__contentWrapper {
      padding: 7.9rem 5.7rem
   }

   .whyOurTeam__contentWrapper--items {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      height: 100%
   }

   .whyOurTeam__title {
      margin-top: .8rem;
      font-size: 12.5rem;
      line-height: 12.1rem;
      font-weight: 900;
      -webkit-text-stroke: 1px #cfd6da;
      -webkit-text-fill-color: transparent
   }

   .whyOurTeam__item {
      position: relative;
      display: flex;
      align-items: center;
      flex: 0 0 50%;
      max-width: 50%;
      padding: 4rem
   }

   .whyOurTeam__item:first-child {
      border-right: 1px solid rgba(207, 214, 218, .4)
   }

   .whyOurTeam__item:first-child, .whyOurTeam__item:nth-child(2) {
      border-bottom: 1px solid rgba(207, 214, 218, .4)
   }

   .whyOurTeam__item:nth-child(3) {
      border-right: 1px solid rgba(207, 214, 218, .4)
   }

   .whyOurTeam__item:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: #ea2929;
      opacity: 0;
      transition: opacity .3s
   }

   .whyOurTeam__item:hover:before {
      opacity: 1
   }

   .whyOurTeam__item:hover .whyOurTeam__itemIcon {
      background-color: #fff;
      color: #ea2929
   }

   .whyOurTeam__itemContent {
      position: relative;
      z-index: 1;
      display: flex;
      max-width: 350px
   }

   .whyOurTeam__itemIcon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background-color: #ea2929;
      color: #fff;
      transition: color .3s, background-color .3s
   }

   .whyOurTeam__itemIcon span {
      position: relative;
      top: 1px;
      font-size: 1.6rem
   }

   .whyOurTeam__itemHeading {
      margin: 1.2rem 0 2rem;
      font-size: 1.8rem;
      line-height: 1.3;
      font-weight: 500;
      color: #fff
   }

   .whyOurTeam__itemDesc {
      font-size: 1.8rem;
      line-height: 3.2rem;
      color: #fff
   }

   .whyOurTeam__itemLeft {
      margin-right: 2.5rem
   }

   @media (max-width: 2200px) {
      html {
         font-size: 10px
      }
   }

   @media (max-width: 1600px) {
      html {
         font-size: 10px
      }

      .container {
         padding-left: 10rem;
         padding-right: 10rem
      }

      .aboutUsHeader__title {
         left: 59rem;
         font-size: 16rem;
         line-height: 11rem
      }

      .aboutUsHeader__arrow {
         left: 9rem
      }

      .aboutUsHeader__images {
         padding-left: 37.8rem
      }

      .aboutUsHeader__image {
         flex: 0 0 60%;
         max-width: 60%
      }

      .aboutUsHeader__imageWrapper {
         padding-top: 60.4109589%
      }

      .coFounders__inner {
         padding-bottom: 10.5rem
      }

      .coFounders__title {
         font-size: 13rem;
         line-height: 10.5rem
      }

      .contactPage__introContent {
         padding-left: 10rem;
         padding-right: 10rem
      }

      .contactPage__introOutline {
         font-size: 19.5rem;
         line-height: 12rem
      }

      .contactPage__introOutline--form {
         left: 700px;
         font-size: 15rem;
         line-height: 12rem
      }

      .contactPage__form {
         padding-left: 10rem;
         padding-right: 10rem
      }

      .homeContact__info {
         padding: 7.7rem 0 6.7rem 10rem
      }

      .servicesHeader__link:hover .servicesHeader__linkImageWrapper, .servicesHeader__linkImage {
         height: 420px
      }

      .servicesHeader__outline {
         left: 10rem;
         font-size: 17rem;
         line-height: 12rem
      }

      .textGallery__button--prev {
         left: -4rem
      }

      .textGallery__button--prev:hover {
         left: -5rem
      }

      .textGallery__button--next {
         right: -4rem
      }

      .textGallery__button--next:hover {
         right: -5rem
      }

      .threeImages__outline {
         font-size: 13.9rem;
         line-height: 11.7rem
      }

      .whyOurTeam__title {
         font-size: 10.5rem;
         line-height: 10.1rem
      }
   }

   @media (max-width: 1366px) {
      .container .row.row-lgl-block {
         display: block
      }

      .container .row .col-lgl-1 {
         margin-left: 0;
         width: 8.33333333%
      }

      .container .row .col-lgl-2 {
         margin-left: 0;
         width: 16.66666667%
      }

      .container .row .col-lgl-3 {
         margin-left: 0;
         width: 25%
      }

      .container .row .col-lgl-4 {
         margin-left: 0;
         width: 33.33333333%
      }

      .container .row .col-lgl-5 {
         margin-left: 0;
         width: 41.66666667%
      }

      .container .row .col-lgl-6 {
         margin-left: 0;
         width: 50%
      }

      .container .row .col-lgl-7 {
         margin-left: 0;
         width: 58.33333333%
      }

      .container .row .col-lgl-8 {
         margin-left: 0;
         width: 66.66666667%
      }

      .container .row .col-lgl-9 {
         margin-left: 0;
         width: 75%
      }

      .container .row .col-lgl-10 {
         margin-left: 0;
         width: 83.33333333%
      }

      .container .row .col-lgl-11 {
         margin-left: 0;
         width: 91.66666667%
      }

      .container .row .col-lgl-12 {
         margin-left: 0;
         width: 100%
      }

      .container .row .offset-col-lgl-1 {
         margin-left: 8.33333333%
      }

      .container .row .offset-col-lgl-2 {
         margin-left: 16.66666667%
      }

      .container .row .offset-col-lgl-3 {
         margin-left: 25%
      }

      .container .row .offset-col-lgl-4 {
         margin-left: 33.33333333%
      }

      .container .row .offset-col-lgl-5 {
         margin-left: 41.66666667%
      }

      .container .row .offset-col-lgl-6 {
         margin-left: 50%
      }

      .container .row .offset-col-lgl-7 {
         margin-left: 58.33333333%
      }

      .container .row .offset-col-lgl-8 {
         margin-left: 66.66666667%
      }

      .container .row .offset-col-lgl-9 {
         margin-left: 75%
      }

      .container .row .offset-col-lgl-10 {
         margin-left: 83.33333333%
      }

      .container .row .offset-col-lgl-11 {
         margin-left: 91.66666667%
      }

      .container .row .offset-col-lgl-12 {
         margin-left: 100%
      }

      .whyOurTeam__itemHeading {
         font-size: 1.6rem
      }

      .whyOurTeam__itemDesc {
         font-size: 1.6rem;
         line-height: 2.6rem
      }
   }

   @media (max-width: 1280px) {
      .container {
         padding-left: 6rem;
         padding-right: 6rem
      }

      .container .row.row-lg-block {
         display: block
      }

      .container .row .col-lg-1 {
         margin-left: 0;
         width: 8.33333333%
      }

      .container .row .col-lg-2 {
         margin-left: 0;
         width: 16.66666667%
      }

      .container .row .col-lg-3 {
         margin-left: 0;
         width: 25%
      }

      .container .row .col-lg-4 {
         margin-left: 0;
         width: 33.33333333%
      }

      .container .row .col-lg-5 {
         margin-left: 0;
         width: 41.66666667%
      }

      .container .row .col-lg-6 {
         margin-left: 0;
         width: 50%
      }

      .container .row .col-lg-7 {
         margin-left: 0;
         width: 58.33333333%
      }

      .container .row .col-lg-8 {
         margin-left: 0;
         width: 66.66666667%
      }

      .container .row .col-lg-9 {
         margin-left: 0;
         width: 75%
      }

      .container .row .col-lg-10 {
         margin-left: 0;
         width: 83.33333333%
      }

      .container .row .col-lg-11 {
         margin-left: 0;
         width: 91.66666667%
      }

      .container .row .col-lg-12 {
         margin-left: 0;
         width: 100%
      }

      .container .row .offset-col-lg-1 {
         margin-left: 8.33333333%
      }

      .container .row .offset-col-lg-2 {
         margin-left: 16.66666667%
      }

      .container .row .offset-col-lg-3 {
         margin-left: 25%
      }

      .container .row .offset-col-lg-4 {
         margin-left: 33.33333333%
      }

      .container .row .offset-col-lg-5 {
         margin-left: 41.66666667%
      }

      .container .row .offset-col-lg-6 {
         margin-left: 50%
      }

      .container .row .offset-col-lg-7 {
         margin-left: 58.33333333%
      }

      .container .row .offset-col-lg-8 {
         margin-left: 66.66666667%
      }

      .container .row .offset-col-lg-9 {
         margin-left: 75%
      }

      .container .row .offset-col-lg-10 {
         margin-left: 83.33333333%
      }

      .container .row .offset-col-lg-11 {
         margin-left: 91.66666667%
      }

      .container .row .offset-col-lg-12 {
         margin-left: 100%
      }

      .footer__linksListItemLink {
         padding: 4rem 2rem;
         font-size: 2rem
      }

      .header--hideLogo {
         pointer-events: none
      }

      .header--hideLogo .header__logo {
         opacity: 0
      }

      .headerHome__title {
         font-size: 4.6rem;
         line-height: 5.4rem
      }

      .mainMenu__nav {
         margin-left: 0
      }

      .mainMenu__navLink {
         font-size: 4rem;
         line-height: 7.8rem;
         margin-bottom: 1.5rem
      }

      .mainMenu__socialsTitle {
         margin-bottom: 2rem
      }

      .mainMenu__socialsLink {
         margin-bottom: 1.5rem
      }

      .aboutUsHeader__content {
         margin-top: 18rem
      }

      .aboutUsHeader__title {
         left: 56rem;
         font-size: 12rem;
         line-height: 9rem
      }

      .aboutUsHeader__arrow {
         left: 5rem;
         bottom: 12rem
      }

      .aboutUsHeader__images {
         padding-left: 32.8rem
      }

      .aboutUsHeader__imageImg--first {
         margin-right: 2rem
      }

      .clientsSlider__slide {
         height: 49rem
      }

      .clientsSlider__left {
         flex: 0 0 50%;
         max-width: 50%
      }

      .clientsSlider__opinionText {
         font-size: 1.8rem;
         line-height: 2.6rem
      }

      .clientsSlider__right {
         flex: 0 0 50%;
         max-width: 50%
      }

      .coFounders__title {
         font-size: 12rem;
         line-height: 10rem
      }

      .coFounders__right {
         padding-left: 20rem
      }

      .coFounders__rightNav:before {
         left: -10.5rem;
         width: 6rem
      }

      .contactPage__introLogo {
         opacity: 1;
         padding: 2rem 2rem 0
      }

      .contactPage__introContent {
         padding-left: 6rem;
         padding-right: 6rem
      }

      .contactPage__introOutline {
         font-size: 19rem;
         line-height: 10rem
      }

      .contactPage__introOutline--form {
         left: 670px;
         font-size: 14rem;
         line-height: 10rem
      }

      .contactPage__rightContent {
         padding: 0 0 5rem 5rem
      }

      .contactPage__introBottom {
         justify-content: space-between;
         padding-bottom: 3rem
      }

      .contactPage__introBottomCol {
         flex: auto;
         max-width: 100%
      }

      .contactPage__form {
         padding-left: 6rem;
         padding-right: 6rem
      }

      .contactPage__fixedLinkedin {
         left: calc(70% + 6rem);
         bottom: 6.5rem
      }

      .galleryInterior {
         margin-top: -5rem
      }

      .galleryInterior__secondTitle {
         width: 4rem
      }

      .galleryInterior__slider:before {
         right: 100%
      }

      .galleryInterior__slider {
         padding-left: 0
      }

      .globalMap__inner {
         padding-top: 10rem;
         padding-bottom: 8rem
      }

      .globalMap__topRight {
         flex: 0 0 48rem;
         max-width: 48rem
      }

      .homeContact__info {
         padding: 7.7rem 0 6.7rem 6rem
      }

      .homeContact__form {
         padding: 5rem 0 5rem 6rem
      }

      .imageBoxes__title {
         font-size: 14rem;
         line-height: 9rem
      }

      .imageBoxes__list {
         margin-top: 0
      }

      .photoStairs {
         padding-bottom: 7rem
      }

      .photoStairs__desc {
         max-width: 50%;
         padding-left: 0
      }

      .servicesHeader {
         margin-bottom: 6rem
      }

      .servicesHeader__title {
         padding-right: 5rem
      }

      .servicesHeader__titleTitle {
         font-size: 4.6rem;
         line-height: 5.4rem
      }

      .servicesHeader__desc {
         padding-right: 5rem;
         padding-left: 8rem
      }

      .servicesHeader__desc:before {
         left: 8rem
      }

      .servicesHeader__link:hover .servicesHeader__linkImageWrapper {
         height: 360px
      }

      .servicesHeader__linkContent {
         font-size: 2rem;
         padding: 3rem 4rem
      }

      .servicesHeader__linkImage {
         height: 360px
      }

      .servicesHeader__outline {
         left: 6rem;
         bottom: 8.6rem;
         font-size: 15rem;
         line-height: 11rem
      }

      .sliderTwoPhotos {
         padding-top: 6rem;
         margin-top: 5rem
      }

      .textGallery__progress {
         display: inline-block;
         margin-top: 2.5rem
      }

      .textGallery__button {
         display: none
      }

      .textTwoColumn__big--offset, .textTwoColumn__buttonRow, .textTwoColumn__titleRow {
         padding-left: 0
      }

      .textTwoColumn__small {
         padding-left: 8rem
      }

      .textTwoColumn__small:before {
         left: 8rem
      }

      .textVideo__play {
         width: 8rem;
         height: 8rem;
         transform: translate(-50%, -50%);
         left: 50%;
         right: unset;
         font-size: 2.8rem
      }

      .threeImages__inner {
         margin-left: -1rem;
         margin-right: -1rem
      }

      .threeImages__box {
         padding-left: 1rem;
         padding-right: 1rem
      }

      .threeImages__outline {
         font-size: 12rem;
         line-height: 10rem
      }

      .videoFull {
         padding-top: 7rem
      }

      .whyOurTeam__contentWrapper {
         padding: 6rem 3rem
      }

      .whyOurTeam__contentWrapper--items {
         padding: 0
      }

      .whyOurTeam__title {
         font-size: 9rem;
         line-height: 8.6rem
      }

      .whyOurTeam__item {
         padding: 4rem 2rem
      }
   }

   @media (max-width: 1024px) {
      html.fslightbox-open body {
         margin-right: 0 !important
      }

      .container {
         width: 100%;
         max-width: 100%;
         padding-left: 2rem;
         padding-right: 2rem
      }

      .container .row.row-mdl-block {
         display: block
      }

      .container .row .col-mdl-1 {
         margin-left: 0;
         width: 8.33333333%
      }

      .container .row .col-mdl-2 {
         margin-left: 0;
         width: 16.66666667%
      }

      .container .row .col-mdl-3 {
         margin-left: 0;
         width: 25%
      }

      .container .row .col-mdl-4 {
         margin-left: 0;
         width: 33.33333333%
      }

      .container .row .col-mdl-5 {
         margin-left: 0;
         width: 41.66666667%
      }

      .container .row .col-mdl-6 {
         margin-left: 0;
         width: 50%
      }

      .container .row .col-mdl-7 {
         margin-left: 0;
         width: 58.33333333%
      }

      .container .row .col-mdl-8 {
         margin-left: 0;
         width: 66.66666667%
      }

      .container .row .col-mdl-9 {
         margin-left: 0;
         width: 75%
      }

      .container .row .col-mdl-10 {
         margin-left: 0;
         width: 83.33333333%
      }

      .container .row .col-mdl-11 {
         margin-left: 0;
         width: 91.66666667%
      }

      .container .row .col-mdl-12 {
         margin-left: 0;
         width: 100%
      }

      .container .row .offset-col-mdl-1 {
         margin-left: 8.33333333%
      }

      .container .row .offset-col-mdl-2 {
         margin-left: 16.66666667%
      }

      .container .row .offset-col-mdl-3 {
         margin-left: 25%
      }

      .container .row .offset-col-mdl-4 {
         margin-left: 33.33333333%
      }

      .container .row .offset-col-mdl-5 {
         margin-left: 41.66666667%
      }

      .container .row .offset-col-mdl-6 {
         margin-left: 50%
      }

      .container .row .offset-col-mdl-7 {
         margin-left: 58.33333333%
      }

      .container .row .offset-col-mdl-8 {
         margin-left: 66.66666667%
      }

      .container .row .offset-col-mdl-9 {
         margin-left: 75%
      }

      .container .row .offset-col-mdl-10 {
         margin-left: 83.33333333%
      }

      .container .row .offset-col-mdl-11 {
         margin-left: 91.66666667%
      }

      .container .row .offset-col-mdl-12 {
         margin-left: 100%
      }

      .errorPage__number {
         font-size: 20rem;
         line-height: 21rem
      }

      .errorPage__title {
         font-size: 3.6rem;
         line-height: 5.5rem
      }

      .errorPage__text {
         font-size: 1.8rem;
         line-height: 3.4rem
      }

      .footer__links {
         padding-top: 3rem
      }

      .footer__links--noPadding {
         padding-top: 0
      }

      .footer__bottom {
         justify-content: space-between
      }

      .footer__nav {
         padding-left: 0
      }

      .footer__bottomRight {
         flex: unset
      }

      .header__inner {
         padding: 0 2rem
      }

      .mainMenu--fixed .mainMenu__header, .mainMenu__header {
         padding: 2rem
      }

      .textPage {
         padding-top: 14rem
      }

      .textPage__title {
         font-size: 3.6rem;
         line-height: 5rem
      }

      .defaultForm__span {
         top: 1.2rem;
         font-size: 1.4rem
      }

      .defaultForm__input, .defaultForm__select, .defaultForm__textarea {
         min-height: 4.8rem;
         margin-bottom: .7rem
      }

      .defaultForm__textarea {
         min-height: 8rem
      }

      .defaultForm__error {
         padding-top: 0
      }

      .aboutUsHeader__title {
         left: 44rem;
         font-size: 8rem;
         line-height: 7rem
      }

      .aboutUsHeader__heading {
         font-size: 4.6rem;
         line-height: 5.4rem;
         max-width: 40rem
      }

      .aboutUsHeader__arrow {
         bottom: 0;
         left: 2rem
      }

      .aboutUsHeader__images {
         padding-left: 25.8rem
      }

      .aboutUsHeader__image:first-of-type {
         margin-right: 2rem
      }

      .clientsLogosSlider {
         padding-bottom: 2rem
      }

      .clientsSlider {
         padding-top: 13.3rem
      }

      .clientsSlider__title {
         top: 9rem;
         font-size: 14rem;
         line-height: 9rem
      }

      .clientsSlider__left {
         flex: 0 0 45%;
         max-width: 45%;
         padding: 5rem 4rem
      }

      .clientsSlider__opinionText {
         margin: 2.6rem 0 1.9rem;
         font-size: 1.6rem
      }

      .clientsSlider__right {
         flex: 0 0 55%;
         max-width: 55%
      }

      .coFounders__title {
         font-size: 10rem;
         line-height: 8.6rem
      }

      .coFounders__leftImg {
         width: 90%
      }

      .coFounders__right {
         padding-left: 10rem
      }

      .coFounders__rightNav:before {
         left: -6.5rem;
         width: 5rem
      }

      .coFounders__rightName {
         font-size: 2.6rem;
         line-height: 1.2
      }

      .coFounders__rightTitle {
         font-size: 1.6rem
      }

      .contactPage__intro {
         width: 65%
      }

      .contactPage__introContent {
         padding-left: 2rem;
         padding-right: 2rem
      }

      .contactPage__introOutline {
         font-size: 14.5rem;
         line-height: 8rem
      }

      .contactPage__introOutline--form {
         display: none
      }

      .contactPage__right {
         width: 35%
      }

      .contactPage__form {
         padding: 3rem 2rem;
         width: 65%
      }

      .contactPage__fixedLinkedin {
         left: calc(65% + 3rem);
         bottom: 6rem
      }

      .contactPage .swiper-scrollbar {
         display: none
      }

      .faq {
         padding: 3rem 0
      }

      .faq__items {
         margin-top: 4rem
      }

      .galleryInterior {
         margin-top: 0;
         padding-top: 0
      }

      .galleryInterior__secondTitle, .galleryInterior__title {
         font-size: 14rem;
         line-height: 14rem;
         left: 0;
         text-align: center
      }

      .galleryInterior__secondTitle {
         display: none
      }

      .galleryInterior__slider {
         margin-top: -3rem
      }

      .galleryInterior__slide--full:before {
         padding-top: 56.25%
      }

      .galleryInterior__slide--half:before {
         padding-top: 112.5%
      }

      .gallerySlider {
         padding-bottom: 7rem
      }

      .gallerySlider__desc {
         flex: 0 0 35%;
         max-width: 35%
      }

      .gallerySlider__slider {
         flex: 0 0 65%;
         max-width: 65%
      }

      .gallerySlider__outline {
         font-size: 14rem;
         line-height: 9rem;
         top: -4.5rem
      }

      .globalMap__topLeft {
         flex: 0 0 50%;
         max-width: 50%;
         padding-right: 9rem
      }

      .globalMap__topRight {
         flex: 0 0 50%;
         max-width: 50%;
         margin-left: 0
      }

      .globalMap__mapSvg {
         width: calc(100% - 27rem)
      }

      .globalMap__mapNumberBigNumber {
         font-size: 16rem;
         line-height: 10rem
      }

      .globalMap__mapDesc {
         top: 3.5rem
      }

      .globalMap__mapDesc p {
         font-size: 1.5rem;
         line-height: 2.8rem
      }

      .homeContact {
         padding-top: 5rem
      }

      .homeContact__info {
         width: calc(50% - 3rem);
         padding: 5.7rem 0 4.7rem 2rem
      }

      .homeContact__form {
         flex: 0 0 calc(50% + 3rem);
         max-width: calc(50% + 3rem)
      }

      .imageBoxes__title {
         font-size: 10rem;
         line-height: 7rem
      }

      .imageBoxes__list {
         margin-top: -.5rem
      }

      .imageBoxes__itemContent {
         left: 2.5rem;
         bottom: 4rem
      }

      .imageBoxes__itemTitle {
         font-size: 2.8rem;
         line-height: 3.8rem;
         margin-bottom: 2rem
      }

      .imageBoxes__button {
         font-size: 1.2rem;
         line-height: 2.6rem
      }

      .imageBoxes__buttonIcon {
         flex: 0 0 3rem;
         width: 3rem;
         height: 3rem;
         margin-right: 1rem
      }

      .imageBoxes__buttonIcon:before {
         font-size: .8rem
      }

      .projectsGrid__list {
         column-count: 3
      }

      .projectsGrid__popupClose {
         left: 2rem
      }

      .projectsGrid__popupButtons {
         right: 2rem
      }

      .servicesHeader {
         margin-bottom: 2rem
      }

      .servicesHeader__title {
         padding-right: 4rem
      }

      .servicesHeader__titleTitle {
         margin-bottom: 2.5rem;
         font-size: 3.6rem;
         line-height: 4.4rem
      }

      .servicesHeader__desc {
         flex: 0 0 50%;
         max-width: 50%;
         padding-right: 0;
         padding-left: 6rem
      }

      .servicesHeader__desc:before {
         left: 6rem
      }

      .servicesHeader__outline {
         left: 2rem;
         font-size: 13rem;
         line-height: 10rem
      }

      .sliderTwoPhotos {
         margin-top: 1rem;
         padding-top: 4rem;
         padding-bottom: 2rem
      }

      .sliderTwoPhotos__images:before {
         padding-top: 56.25%
      }

      .sliderTwoPhotos__title {
         font-size: 14rem;
         line-height: 14rem;
         margin-bottom: -2.6rem
      }

      .textTwoColumn__buttonRow {
         margin-top: 3rem
      }

      .textTwoColumn h2 {
         font-size: 3rem;
         line-height: 4rem
      }

      .textTwoColumn__small {
         padding-left: 6rem
      }

      .textTwoColumn__small:before {
         left: 6rem
      }

      .threeImages {
         padding-top: 0
      }

      .threeImages__outline {
         font-size: 10rem;
         line-height: 8.6rem
      }

      .titleDesc {
         padding-top: 6rem;
         padding-bottom: 4rem
      }

      .videoFull {
         padding-top: 4rem;
         padding-bottom: 2rem
      }

      .videoFull__title {
         font-size: 14rem;
         line-height: 14rem;
         margin-bottom: -3rem
      }

      .videoFull__video:before {
         padding-top: 56.25%
      }

      .whyOurTeam__contentWrapper {
         padding: 4rem 2rem
      }

      .whyOurTeam__contentWrapper--items {
         padding: 0
      }

      .whyOurTeam__title {
         font-size: 8rem;
         line-height: 7.6rem
      }

      .whyOurTeam__itemContent {
         flex-direction: column
      }

      .whyOurTeam__itemIcon {
         width: 4rem;
         height: 4rem
      }

      .whyOurTeam__itemLeft {
         margin-bottom: 1rem
      }
   }

   @media (max-width: 768px) {
      .container .row.row-md-block {
         display: block
      }

      .container .row .col-md-1 {
         margin-left: 0;
         width: 8.33333333%
      }

      .container .row .col-md-2 {
         margin-left: 0;
         width: 16.66666667%
      }

      .container .row .col-md-3 {
         margin-left: 0;
         width: 25%
      }

      .container .row .col-md-4 {
         margin-left: 0;
         width: 33.33333333%
      }

      .container .row .col-md-5 {
         margin-left: 0;
         width: 41.66666667%
      }

      .container .row .col-md-6 {
         margin-left: 0;
         width: 50%
      }

      .container .row .col-md-7 {
         margin-left: 0;
         width: 58.33333333%
      }

      .container .row .col-md-8 {
         margin-left: 0;
         width: 66.66666667%
      }

      .container .row .col-md-9 {
         margin-left: 0;
         width: 75%
      }

      .container .row .col-md-10 {
         margin-left: 0;
         width: 83.33333333%
      }

      .container .row .col-md-11 {
         margin-left: 0;
         width: 91.66666667%
      }

      .container .row .col-md-12 {
         margin-left: 0;
         width: 100%
      }

      .container .row .offset-col-md-1 {
         margin-left: 8.33333333%
      }

      .container .row .offset-col-md-2 {
         margin-left: 16.66666667%
      }

      .container .row .offset-col-md-3 {
         margin-left: 25%
      }

      .container .row .offset-col-md-4 {
         margin-left: 33.33333333%
      }

      .container .row .offset-col-md-5 {
         margin-left: 41.66666667%
      }

      .container .row .offset-col-md-6 {
         margin-left: 50%
      }

      .container .row .offset-col-md-7 {
         margin-left: 58.33333333%
      }

      .container .row .offset-col-md-8 {
         margin-left: 66.66666667%
      }

      .container .row .offset-col-md-9 {
         margin-left: 75%
      }

      .container .row .offset-col-md-10 {
         margin-left: 83.33333333%
      }

      .container .row .offset-col-md-11 {
         margin-left: 91.66666667%
      }

      .container .row .offset-col-md-12 {
         margin-left: 100%
      }

      .errorPage__number {
         font-size: 16rem;
         line-height: 17rem
      }

      .footer__wrapper {
         padding: 4rem 0
      }

      .footer__bottom {
         padding-top: 6rem;
         flex-direction: column
      }

      .footer__nav {
         margin-top: 2rem
      }

      .footer__bottomRight {
         margin-top: 4rem
      }

      .header {
         padding: .8rem 0 .6rem
      }

      .headerHome__slideBottom {
         display: none
      }

      .headerHome__title {
         font-size: 3.6rem;
         line-height: 4.4rem
      }

      .headerHome__bottom, .headerHome__bottomLine {
         display: none
      }

      .headerHome__scroll {
         left: auto;
         right: 50%;
         transform: translateX(50%);
         bottom: 2rem
      }

      .headerHome__nav, .headerHome__scrollText {
         display: none
      }

      .mainMenu__header {
         padding: .8rem 2rem 2rem
      }

      .mainMenu__contentSocials {
         padding-right: 0
      }

      .mainMenu--fixed .mainMenu__header {
         padding: .8rem 2rem
      }

      .textPage__title {
         font-size: 3rem;
         line-height: 4.4rem
      }

      .defaultForm__label--radioIcons {
         margin-left: 0;
         margin-right: 0
      }

      .defaultForm__label--radioIcons p:first-child, .defaultForm__label--radioIcons p:nth-child(2) {
         flex: 0 0 100%;
         max-width: 100%
      }

      .defaultForm__label--radioIcons p {
         flex: 0 0 100%;
         max-width: 100%;
         margin: 0 0 1rem
      }

      .defaultForm__input:active ~ .defaultForm__span, .defaultForm__input:focus ~ .defaultForm__span, .defaultForm__select:active ~ .defaultForm__span, .defaultForm__select:focus ~ .defaultForm__span, .defaultForm__textarea:active ~ .defaultForm__span, .defaultForm__textarea:focus ~ .defaultForm__span {
         min-height: 1rem;
         top: -1.4rem
      }

      .defaultForm__checkbox ~ label p {
         max-width: unset
      }

      .wysiwyg h1 {
         font-size: 3.6rem
      }

      .aboutUsHeader {
         margin-bottom: 3rem
      }

      .aboutUsHeader__content {
         margin-top: 12rem;
         margin-bottom: 10rem
      }

      .aboutUsHeader__title {
         left: 2rem;
         transform: translateY(-100%);
         width: 100%;
         margin-top: 3rem;
         line-height: 11rem
      }

      .aboutUsHeader__heading {
         font-size: 3.6rem;
         line-height: 4rem
      }

      .aboutUsHeader__arrow {
         display: none
      }

      .aboutUsHeader__images {
         padding-left: 0;
         margin-top: 0
      }

      .aboutUsHeader__image {
         flex: 0 0 calc(100% - 20px);
         max-width: calc(100% - 20px)
      }

      .aboutUsHeader__image:first-of-type {
         margin-right: 0;
         margin-left: 2rem
      }

      .aboutUsHeader__imageWrapper {
         padding-top: 60%
      }

      .centeredText {
         padding-top: 2rem
      }

      .centeredText__desc {
         font-size: 2.4rem;
         line-height: 3.2rem
      }

      .centeredText__button {
         margin-top: 2.5rem
      }

      .clientsSlider {
         padding-top: 12.3rem
      }

      .clientsSlider__inner {
         padding-left: 0;
         padding-right: 0
      }

      .clientsSlider__title {
         top: 8.7rem;
         left: 50%;
         font-size: 12rem;
         line-height: 7rem
      }

      .clientsSlider__slide {
         height: auto
      }

      .clientsSlider__left {
         flex: 0 0 100%;
         max-width: 100%;
         padding: 5rem 2rem
      }

      .clientsSlider__opinionText {
         margin: 3.6rem 0 3.2rem
      }

      .clientsSlider__author {
         padding-top: 2rem
      }

      .clientsSlider__right {
         display: none
      }

      .coFounders__inner {
         padding-top: 3rem;
         padding-bottom: 3rem
      }

      .coFounders__title {
         font-size: 8rem;
         line-height: 6.8rem
      }

      .coFounders__slide {
         flex-direction: column
      }

      .coFounders__leftImg {
         max-height: 45rem;
         width: 100%;
         object-fit: contain
      }

      .coFounders__right {
         display: flex;
         margin-top: 4rem;
         padding-left: 6.5rem;
         justify-content: space-between;
         width: 100%
      }

      .coFounders__rightNav {
         margin-bottom: 1rem
      }

      .contactPage__introLogo {
         padding: .8rem 2rem 0
      }

      .contactPage__introOutline {
         font-size: 10.8rem;
         line-height: 8rem
      }

      .contactPage__introBottomCol--clock {
         margin-bottom: 6rem
      }

      .contactPage__fixedLinkedin {
         left: calc(65% + 2rem);
         bottom: 6rem
      }

      .faq__itemNav {
         padding: 3rem 2rem 2.5rem
      }

      .faq__itemWrapper {
         padding: 0 2rem
      }

      .galleryInterior__secondTitle, .galleryInterior__title {
         font-size: 10rem;
         line-height: 10rem
      }

      .galleryInterior__slider {
         margin-top: -2.4rem
      }

      .gallerySlider {
         padding-top: 3rem;
         padding-bottom: 3.5rem
      }

      .gallerySlider__desc {
         margin-bottom: 8rem
      }

      .gallerySlider__desc, .gallerySlider__slider {
         flex: 0 0 100%;
         max-width: 100%
      }

      .gallerySlider__slider:before {
         height: calc(100% + 3.5rem)
      }

      .gallerySlider__slider:after {
         bottom: -3.5rem
      }

      .gallerySlider__outline {
         font-size: 12rem;
         line-height: 7rem;
         top: -3.8rem
      }

      .globalMap__outline {
         font-size: 14rem;
         line-height: 10rem
      }

      .globalMap__inner {
         padding-top: 5rem;
         padding-bottom: 5rem
      }

      .globalMap__title {
         font-size: 3.6rem;
         line-height: 4rem
      }

      .globalMap__topLeft {
         flex: 0 0 100%;
         max-width: 100%;
         padding-right: 0
      }

      .globalMap__topRight {
         flex: 0 0 100%;
         max-width: 100%;
         font-size: 1.6rem;
         line-height: 3rem
      }

      .globalMap__mapText {
         position: relative;
         top: 0;
         transform: translateY(0);
         text-align: center
      }

      .globalMap__mapSvg {
         width: 100%
      }

      .globalMap__mapDesc {
         width: 100%;
         left: 0
      }

      .homeContact {
         padding-top: 3rem
      }

      .homeContact__wrapper {
         flex-wrap: wrap
      }

      .homeContact__info {
         position: relative;
         width: 100%
      }

      .homeContact__infoTitle {
         margin-bottom: 2.3rem
      }

      .homeContact__form {
         flex: 0 0 100%;
         max-width: 100%;
         padding: 3rem 0 5rem
      }

      .homeContact__formWrapper {
         padding-top: 2rem
      }

      .imageBoxes__title {
         font-size: 8rem;
         line-height: 7rem
      }

      .imageBoxes__list {
         margin-top: -.8rem
      }

      .imageBoxes__item {
         flex: 0 0 100%;
         max-width: 100%;
         height: 35rem
      }

      .photoStairs {
         padding-top: 2rem;
         padding-bottom: 5rem
      }

      .photoStairs__swiper {
         padding-bottom: 4rem
      }

      .photoStairs__item:nth-child(2) .photoStairs__offset, .photoStairs__item:nth-child(3) .photoStairs__offset {
         display: none
      }

      .photoStairs__itemImage:before {
         padding-top: 75%
      }

      .photoStairs__desc {
         margin-top: 3rem;
         max-width: 100%
      }

      .projectsGrid__itemDesc, .projectsGrid__itemFull {
         display: none
      }

      .projectsGrid__popupSlide:before {
         height: 6.4rem
      }

      .projectsGrid__popupSlide img, .projectsGrid__popupSlide video {
         max-height: calc(100% - 7.6rem)
      }

      .projectsGrid__popupTitle {
         top: unset;
         bottom: 0;
         background-color: #121416;
         text-align: left;
         padding: 1.4rem 2rem 1.6rem;
         border-top: 1px solid rgba(196, 201, 204, .3)
      }

      .projectsGrid__popupTitleName {
         font-size: 2rem;
         line-height: 3rem
      }

      .projectsGrid__popupTitleDesc {
         font-size: 1rem;
         line-height: 1.6rem
      }

      .projectsGrid__popupClose {
         left: unset;
         right: 0;
         top: unset;
         transform: unset;
         bottom: 0
      }

      .projectsGrid__button {
         border: 0;
         height: 7.6rem;
         border-radius: 0;
         background-color: #121416
      }

      .projectsGrid__popupButtons {
         display: none
      }

      .projectsGrid__popupPagination {
         opacity: 1;
         pointer-events: all
      }

      .servicesHeader__bg {
         display: none
      }

      .servicesHeader__title {
         flex: 0 0 100%;
         max-width: 100%;
         padding-left: 0;
         padding-right: 0
      }

      .servicesHeader__titleTitle {
         font-size: 3.6rem;
         line-height: 4rem
      }

      .servicesHeader__desc {
         flex: 0 0 100%;
         max-width: 100%;
         padding-left: 0;
         padding-top: 2.5rem;
         font-size: 1.6rem;
         line-height: 2.8rem
      }

      .servicesHeader__desc:before {
         left: 0
      }

      .servicesHeader__outline {
         font-size: 10rem;
         line-height: 8rem
      }

      .sliderTwoPhotos__title {
         font-size: 12rem;
         line-height: 12rem;
         margin-bottom: -2.4rem
      }

      .textGallery__inner {
         padding: 2rem 0
      }

      .textTwoColumn {
         padding-top: 2rem;
         padding-bottom: 4rem
      }

      .textTwoColumn__titleRow {
         margin-bottom: 2rem
      }

      .textTwoColumn p {
         max-width: 100%;
         font-size: 1.6rem;
         line-height: 3rem
      }

      .textTwoColumn h2 {
         font-size: 2.4rem;
         line-height: 3.4rem
      }

      .textTwoColumn__big {
         flex: 0 0 100%;
         max-width: 100%;
         margin-bottom: 2rem;
         padding-right: 0
      }

      .textTwoColumn__small {
         flex: 0 0 100%;
         max-width: 100%;
         padding-left: 0;
         padding-top: 2.4rem
      }

      .textTwoColumn__small:before {
         left: 0
      }

      .textTwoColumn__small--noRedLine {
         padding-top: 0
      }

      .textTwoColumn__button {
         margin-top: 3rem
      }

      .textTwoColumn--noBottomPadding {
         padding-bottom: 3rem
      }

      .textVideo__inner {
         padding: 2rem 0
      }

      .textVideo__play {
         width: 6rem;
         height: 6rem;
         font-size: 2.2rem
      }

      .textWysiwyg__inner {
         padding: 2rem 0
      }

      .threeImages__outline {
         font-size: 8rem;
         line-height: 6.8rem;
         right: 2rem
      }

      .titleDesc {
         padding-top: 4rem;
         padding-bottom: 2rem
      }

      .titleDesc__title {
         flex: 0 0 100%;
         max-width: 100%
      }

      .titleDesc__titleBig {
         font-size: 12rem;
         line-height: 8rem;
         top: -3rem
      }

      .titleDesc__desc {
         flex: 0 0 100%;
         max-width: 100%;
         font-size: 1.6rem;
         line-height: 3rem
      }

      .videoFull__title {
         font-size: 10rem;
         line-height: 10rem;
         margin-bottom: -2.5rem
      }

      .whyOurTeam {
         height: auto;
         min-height: auto
      }

      .whyOurTeam__contentCol:first-child {
         border-right: 0
      }

      .whyOurTeam__contentCol {
         flex: 0 0 100%;
         max-width: 100%
      }

      .whyOurTeam__title {
         font-size: 7rem;
         line-height: 6.6rem;
         text-align: center;
         margin-bottom: .8rem
      }

      .whyOurTeam__item:first-child, .whyOurTeam__item:nth-child(2) {
         border-top: 1px solid rgba(207, 214, 218, .4)
      }

      .whyOurTeam__itemHeading {
         margin: .6rem 0 1.2rem
      }
   }

   @media (max-width: 600px) and (max-width: 600px) {
      .header--mobileDark.header--fixed .header__link {
         color: #fff
      }

      .header--mobileDark.header--fixed .header__buttonHamburger span {
         background-color: #fff
      }
   }

   @media (max-width: 600px) {
      .container .row.row-mds-block {
         display: block
      }

      .container .row .col-mds-1 {
         margin-left: 0;
         width: 8.33333333%
      }

      .container .row .col-mds-2 {
         margin-left: 0;
         width: 16.66666667%
      }

      .container .row .col-mds-3 {
         margin-left: 0;
         width: 25%
      }

      .container .row .col-mds-4 {
         margin-left: 0;
         width: 33.33333333%
      }

      .container .row .col-mds-5 {
         margin-left: 0;
         width: 41.66666667%
      }

      .container .row .col-mds-6 {
         margin-left: 0;
         width: 50%
      }

      .container .row .col-mds-7 {
         margin-left: 0;
         width: 58.33333333%
      }

      .container .row .col-mds-8 {
         margin-left: 0;
         width: 66.66666667%
      }

      .container .row .col-mds-9 {
         margin-left: 0;
         width: 75%
      }

      .container .row .col-mds-10 {
         margin-left: 0;
         width: 83.33333333%
      }

      .container .row .col-mds-11 {
         margin-left: 0;
         width: 91.66666667%
      }

      .container .row .col-mds-12 {
         margin-left: 0;
         width: 100%
      }

      .container .row .offset-col-mds-1 {
         margin-left: 8.33333333%
      }

      .container .row .offset-col-mds-2 {
         margin-left: 16.66666667%
      }

      .container .row .offset-col-mds-3 {
         margin-left: 25%
      }

      .container .row .offset-col-mds-4 {
         margin-left: 33.33333333%
      }

      .container .row .offset-col-mds-5 {
         margin-left: 41.66666667%
      }

      .container .row .offset-col-mds-6 {
         margin-left: 50%
      }

      .container .row .offset-col-mds-7 {
         margin-left: 58.33333333%
      }

      .container .row .offset-col-mds-8 {
         margin-left: 66.66666667%
      }

      .container .row .offset-col-mds-9 {
         margin-left: 75%
      }

      .container .row .offset-col-mds-10 {
         margin-left: 83.33333333%
      }

      .container .row .offset-col-mds-11 {
         margin-left: 91.66666667%
      }

      .container .row .offset-col-mds-12 {
         margin-left: 100%
      }

      .errorPage__number {
         font-size: 10rem;
         line-height: 12rem
      }

      .errorPage__title {
         font-size: 3rem;
         line-height: 4.4rem
      }

      .errorPage__text {
         font-size: 1.6rem;
         line-height: 3rem
      }

      .footer__linksList {
         flex-direction: column;
         border-top: unset
      }

      .footer__linksListItem {
         border-right: unset;
         border-top: 1px solid #cfd6da
      }

      .footer__top {
         flex-direction: column;
         justify-content: flex-start;
         align-items: center;
         text-align: center
      }

      .footer__topLeft {
         margin-bottom: 4rem
      }

      .footer__topRight {
         text-align: center
      }

      .header__logo svg {
         width: 3rem
      }

      .header__logoSvg--mobile {
         display: block
      }

      .header__logoLetters, .header__logoSvg--desktop {
         display: none
      }

      .header--hideLogo {
         pointer-events: all
      }

      .header--hideLogo .header__logo {
         opacity: 1
      }

      .header--disableFixedBg.header--fixed {
         background-color: #121416;
         box-shadow: 0 5px 25px 0 rgba(115, 121, 134, .1)
      }

      .header--mobileDark .header__button {
         border-left: 1px solid #121416
      }

      .header--mobileDark .header__link {
         color: #121416
      }

      .header--mobileDark .header__buttonHamburger span {
         background-color: #121416
      }

      .header--mobileDark.header--fixed .header__logo svg {
         fill: #fff
      }

      .headerHome__title {
         font-size: 3rem;
         line-height: 4rem
      }

      .mainMenu__headerLogo svg {
         width: 3rem
      }

      .mainMenu__logoSvg--mobile {
         display: block
      }

      .mainMenu__logoLetters, .mainMenu__logoSvg--desktop {
         display: none
      }

      .mainMenu__content {
         flex-direction: column;
         align-items: unset
      }

      .mainMenu__navLink {
         margin-bottom: .5rem;
         font-size: 3rem;
         line-height: 5rem
      }

      .mainMenu__contentSocials {
         margin-left: unset;
         padding-top: 2rem
      }

      .mainMenu__socialsTitle {
         margin-bottom: 1rem
      }

      .mainMenu__socials {
         display: flex;
         margin-left: -1rem;
         margin-right: -1rem
      }

      .mainMenu__socialsLink {
         padding: 1rem;
         font-size: 1.8rem
      }

      .mainMenu__socialsLink--text {
         display: none
      }

      .mainMenu__socialsLink--icon {
         display: inline-flex
      }

      .clockContact--close {
         margin-bottom: 4rem
      }

      .clockContact__col .contactClock {
         margin-left: 0
      }

      .cookiesBox__inner {
         flex-wrap: wrap
      }

      .cookiesBox__button {
         flex: 0 0 100%;
         max-width: 100%;
         margin-top: 1rem;
         margin-left: unset
      }

      .cookiesBox__close {
         padding: 1rem 2rem
      }

      .cookiesBox__text {
         padding-right: 0;
         padding-left: 1.5rem;
         font-size: 1.2rem;
         line-height: 2rem
      }

      .defaultForm__group {
         flex: 0 0 100%;
         max-width: 100%
      }

      .defaultForm__checkbox ~ label {
         padding-left: 3.4rem
      }

      .extraHeading {
         font-size: 3.2rem
      }

      .aboutUsHeader__title {
         font-size: 7rem;
         line-height: 10rem;
         margin-top: 3rem
      }

      .coFounders__title {
         font-size: 6rem;
         line-height: 5rem
      }

      .coFounders__slider {
         margin-top: -2rem
      }

      .coFounders__right {
         padding-left: 4.5rem
      }

      .coFounders__rightNav:before {
         left: -4.5rem;
         width: 3rem
      }

      .coFounders__rightName {
         font-size: 2.2rem
      }

      .contactPage__contentSwiper {
         height: auto
      }

      .contactPage__logo {
         opacity: 0
      }

      .contactPage__logo svg {
         width: 3rem
      }

      .contactPage__logoSvg--mobile {
         display: block
      }

      .contactPage__logoSvg--desktop {
         display: none
      }

      .contactPage__intro {
         width: 100%;
         height: auto;
         min-height: auto
      }

      .contactPage__introContent {
         padding-top: 6rem;
         padding-bottom: 2rem
      }

      .contactPage__introOutline {
         font-size: 8rem;
         line-height: 6rem;
         margin-bottom: 6rem;
         font-size: 5rem;
         line-height: 3rem
      }

      .contactPage__right {
         display: none
      }

      .contactPage__rightContent {
         padding: 4rem 2rem
      }

      .contactPage__introBottom {
         padding-bottom: 0
      }

      .contactPage__introBottomCol {
         flex: 0 0 100%
      }

      .contactPage__email {
         margin-bottom: 2rem;
         font-size: 2.8rem;
         line-height: 3.2rem
      }

      .contactPage__form {
         width: 100%;
         min-height: auto;
         padding: 4rem 2rem 6rem;
         padding: 5rem 2rem 6rem
      }

      .contactPage__fixedLinkedin {
         display: none
      }

      .contactPage__mobileLinkedin {
         display: block
      }

      .contactPage .swiper-slide {
         height: auto
      }

      .contactPage .swiper-wrapper {
         flex-wrap: wrap
      }

      .faq__itemTitle {
         font-size: 1.7rem
      }

      .faq__itemContent {
         font-size: 1.5rem;
         line-height: 1.5
      }

      .galleryInterior__secondTitle, .galleryInterior__title {
         font-size: 8rem;
         line-height: 8rem
      }

      .galleryInterior__slide--full:before {
         padding-top: 75%
      }

      .galleryInterior__slide--half {
         width: 100%
      }

      .galleryInterior__slide--half:before {
         padding-top: 75%
      }

      .globalMap__outline {
         font-size: 10rem;
         line-height: 8rem;
         margin-bottom: -1rem
      }

      .globalMap__mapNumberBigNumber {
         font-size: 14rem;
         line-height: 9rem
      }

      .globalMap__mapDesc {
         top: 2.5rem
      }

      .globalMap__mapDesc h3 {
         font-size: 3rem;
         line-height: 4rem
      }

      .imageBoxes__title {
         font-size: 6rem;
         line-height: 6rem
      }

      .imageBoxes__list {
         margin-top: -1.2rem
      }

      .projectsGrid__list {
         column-count: 2
      }

      .servicesHeader {
         min-height: auto;
         padding-top: 11rem;
         padding-bottom: 6rem;
         height: auto
      }

      .servicesHeader__inner {
         padding-bottom: 0
      }

      .servicesHeader__links {
         display: none
      }

      .servicesHeader__outline {
         position: relative;
         bottom: auto;
         left: auto;
         padding-left: 2rem;
         margin-bottom: 5rem;
         font-size: 8rem;
         line-height: 5rem
      }

      .sliderTwoPhotos__images:before {
         padding-top: 75%
      }

      .sliderTwoPhotos__title {
         font-size: 8rem;
         line-height: 8rem;
         margin-bottom: -1.5rem
      }

      .threeImages__box--left {
         display: none
      }

      .threeImages__box--center {
         flex: 0 0 100%;
         max-width: 100%
      }

      .threeImages__box--center .threeImages__boxInner:before {
         padding-top: 75%
      }

      .threeImages__box--right {
         display: none
      }

      .threeImages__outline {
         font-size: 6rem;
         line-height: 5rem;
         right: 50%;
         transform: translateX(50%)
      }

      .videoFull__title {
         font-size: 8rem;
         line-height: 8rem;
         margin-bottom: -2rem
      }

      .videoFull__video:before {
         padding-top: 75%
      }

      .whyOurTeam__title {
         font-size: 5.8rem;
         line-height: 5.4rem
      }

      .whyOurTeam__item:first-child {
         border-right: 0
      }

      .whyOurTeam__item:nth-child(2) {
         border-top: 0
      }

      .whyOurTeam__item:nth-child(3) {
         border-bottom: 1px solid rgba(207, 214, 218, .4);
         border-right: 0
      }

      .whyOurTeam__itemDesc {
         font-size: 1.4rem;
         line-height: 2.2rem
      }
   }

   @media (max-width: 480px) {
      .container .row.row-sml-block {
         display: block
      }

      .container .row .col-sml-1 {
         margin-left: 0;
         width: 8.33333333%
      }

      .container .row .col-sml-2 {
         margin-left: 0;
         width: 16.66666667%
      }

      .container .row .col-sml-3 {
         margin-left: 0;
         width: 25%
      }

      .container .row .col-sml-4 {
         margin-left: 0;
         width: 33.33333333%
      }

      .container .row .col-sml-5 {
         margin-left: 0;
         width: 41.66666667%
      }

      .container .row .col-sml-6 {
         margin-left: 0;
         width: 50%
      }

      .container .row .col-sml-7 {
         margin-left: 0;
         width: 58.33333333%
      }

      .container .row .col-sml-8 {
         margin-left: 0;
         width: 66.66666667%
      }

      .container .row .col-sml-9 {
         margin-left: 0;
         width: 75%
      }

      .container .row .col-sml-10 {
         margin-left: 0;
         width: 83.33333333%
      }

      .container .row .col-sml-11 {
         margin-left: 0;
         width: 91.66666667%
      }

      .container .row .col-sml-12 {
         margin-left: 0;
         width: 100%
      }

      .container .row .offset-col-sml-1 {
         margin-left: 8.33333333%
      }

      .container .row .offset-col-sml-2 {
         margin-left: 16.66666667%
      }

      .container .row .offset-col-sml-3 {
         margin-left: 25%
      }

      .container .row .offset-col-sml-4 {
         margin-left: 33.33333333%
      }

      .container .row .offset-col-sml-5 {
         margin-left: 41.66666667%
      }

      .container .row .offset-col-sml-6 {
         margin-left: 50%
      }

      .container .row .offset-col-sml-7 {
         margin-left: 58.33333333%
      }

      .container .row .offset-col-sml-8 {
         margin-left: 66.66666667%
      }

      .container .row .offset-col-sml-9 {
         margin-left: 75%
      }

      .container .row .offset-col-sml-10 {
         margin-left: 83.33333333%
      }

      .container .row .offset-col-sml-11 {
         margin-left: 91.66666667%
      }

      .container .row .offset-col-sml-12 {
         margin-left: 100%
      }

      .defaultForm__checkbox ~ label {
         font-size: 1.4rem;
         line-height: 2.6rem
      }

      .clientsSlider {
         padding-top: 10rem
      }

      .clientsSlider__title {
         top: 7.6rem;
         font-size: 8rem;
         line-height: 5rem
      }

      .coFounders__title {
         font-size: 4.6rem;
         line-height: 3.4rem
      }

      .coFounders__leftImg {
         max-height: 35rem
      }

      .coFounders__right {
         margin-top: 6rem;
         padding-left: 0
      }

      .coFounders__rightNav:before {
         top: -2rem;
         left: 0
      }

      .galleryInterior__secondTitle, .galleryInterior__title {
         font-size: 6rem;
         line-height: 6rem
      }

      .galleryInterior__slider {
         margin-top: -1rem
      }

      .gallerySlider__outline {
         font-size: 8rem;
         line-height: 5rem;
         top: -2.5rem
      }

      .globalMap__outline {
         font-size: 7rem;
         line-height: 6rem;
         margin-bottom: -1rem
      }

      .globalMap__mapNumberBigNumber {
         font-size: 11rem;
         line-height: 8rem
      }

      .globalMap__mapDesc h3 {
         font-size: 2.5rem;
         line-height: 3.5rem
      }

      .imageBoxes__title {
         font-size: 5rem;
         line-height: 6rem
      }

      .imageBoxes__item {
         height: 30rem
      }

      .projectsGrid__list {
         column-count: 1
      }

      .servicesHeader__outline {
         font-size: 6.5rem
      }

      .sliderTwoPhotos__title {
         font-size: 6rem;
         line-height: 6rem;
         margin-bottom: -1rem
      }

      .titleDesc__titleSmall {
         font-size: 3.2rem;
         line-height: 5.6rem;
         margin-bottom: 2rem
      }

      .titleDesc__titleBig {
         font-size: 8rem;
         line-height: 5rem;
         top: -2rem
      }

      .videoFull__title {
         font-size: 6rem;
         line-height: 6rem;
         margin-bottom: -1.5rem
      }

      .whyOurTeam__contentCol {
         flex: 0 0 100%;
         max-width: 100%
      }

      .whyOurTeam__title {
         font-size: 4.6rem;
         line-height: 4.2rem;
         text-align: center
      }

      .whyOurTeam__item {
         flex: 0 0 100%;
         max-width: 100%
      }
   }

   @media (max-width: 360px) {
      .container .row.row-sm-block {
         display: block
      }

      .container .row .col-sm-1 {
         margin-left: 0;
         width: 8.33333333%
      }

      .container .row .col-sm-2 {
         margin-left: 0;
         width: 16.66666667%
      }

      .container .row .col-sm-3 {
         margin-left: 0;
         width: 25%
      }

      .container .row .col-sm-4 {
         margin-left: 0;
         width: 33.33333333%
      }

      .container .row .col-sm-5 {
         margin-left: 0;
         width: 41.66666667%
      }

      .container .row .col-sm-6 {
         margin-left: 0;
         width: 50%
      }

      .container .row .col-sm-7 {
         margin-left: 0;
         width: 58.33333333%
      }

      .container .row .col-sm-8 {
         margin-left: 0;
         width: 66.66666667%
      }

      .container .row .col-sm-9 {
         margin-left: 0;
         width: 75%
      }

      .container .row .col-sm-10 {
         margin-left: 0;
         width: 83.33333333%
      }

      .container .row .col-sm-11 {
         margin-left: 0;
         width: 91.66666667%
      }

      .container .row .col-sm-12 {
         margin-left: 0;
         width: 100%
      }

      .container .row .offset-col-sm-1 {
         margin-left: 8.33333333%
      }

      .container .row .offset-col-sm-2 {
         margin-left: 16.66666667%
      }

      .container .row .offset-col-sm-3 {
         margin-left: 25%
      }

      .container .row .offset-col-sm-4 {
         margin-left: 33.33333333%
      }

      .container .row .offset-col-sm-5 {
         margin-left: 41.66666667%
      }

      .container .row .offset-col-sm-6 {
         margin-left: 50%
      }

      .container .row .offset-col-sm-7 {
         margin-left: 58.33333333%
      }

      .container .row .offset-col-sm-8 {
         margin-left: 66.66666667%
      }

      .container .row .offset-col-sm-9 {
         margin-left: 75%
      }

      .container .row .offset-col-sm-10 {
         margin-left: 83.33333333%
      }

      .container .row .offset-col-sm-11 {
         margin-left: 91.66666667%
      }

      .container .row .offset-col-sm-12 {
         margin-left: 100%
      }

      .coFounders__title {
         font-size: 3.8rem
      }

      .coFounders__leftImg {
         max-height: 30rem
      }

      .coFounders__right {
         margin-top: 5rem
      }

      .coFounders__rightNav {
         margin-right: 1rem
      }

      .coFounders__rightNav:before {
         top: -1rem
      }

      .coFounders__rightName {
         font-size: 1.8rem
      }

      .coFounders__rightLinkText {
         font-size: 1.4rem
      }

      .galleryInterior__secondTitle, .galleryInterior__title {
         font-size: 5rem;
         line-height: 5rem
      }

      .titleDesc__titleBig {
         font-size: 6rem;
         line-height: 4rem;
         top: 0
      }

      .videoFull__title {
         font-size: 5rem;
         line-height: 5rem;
         margin-bottom: -1rem
      }

      .whyOurTeam__title {
         font-size: 3.8rem
      }
   }

   @media (hover: hover) {
      [data-cursor].swipe, [data-cursor].swipe:after, [data-cursor].swipe:before, [data-cursor].swipe span {
         opacity: 1
      }
   }

</style>
