<template>
   <section class="threeImages section">
      <div class="container">
         <div class="threeImages__inner">
            <div class="threeImages__box threeImages__box--left aos-init aos-animate" data-aos="fade-up"
                 data-aos-delay="100">
               <div class="threeImages__boxInner"><img class="threeImages__img lazy entered loaded"
                                                       data-src="https://drowart.com/wp-content/uploads/2021/05/Pawel_1_FF.jpg"
                                                       alt="" data-ll-status="loaded"
                                                       src="https://drowart.com/wp-content/uploads/2021/05/Pawel_1_FF.jpg">
               </div>
            </div>
            <div class="threeImages__box threeImages__box--center aos-init aos-animate" data-aos="fade-up"
                 data-aos-delay="200">
               <div class="threeImages__boxWrapper">
                  <div class="threeImages__boxInner">
                     <video class="lazy entered loaded" disablepictureinpicture=""
                            data-poster="https://drowart.com/wp-content/uploads/2021/03/1-1000x1000.jpg" muted=""
                            loop="" autoplay="" playsinline="" data-ll-status="loaded"
                            poster="https://drowart.com/wp-content/uploads/2021/03/1-1000x1000.jpg">
                        <source data-src="https://drowart.com/wp-content/uploads/2021/03/about_us_film-1-1.mp4"
                                type="video/mp4"
                                src="https://drowart.com/wp-content/uploads/2021/03/about_us_film-1-1.mp4">
                        Your browser does not support the video tag.
                     </video>
                  </div>
                  <div class="threeImages__outline">drowart</div>
               </div>
            </div>
            <div class="threeImages__box threeImages__box--right aos-init aos-animate" data-aos="fade-up"
                 data-aos-delay="300">
               <div class="threeImages__boxInner"><img class="threeImages__img lazy entered loaded"
                                                       data-src="https://drowart.com/wp-content/uploads/2021/05/Vladimir_4_FF.jpg"
                                                       alt="" data-ll-status="loaded"
                                                       src="https://drowart.com/wp-content/uploads/2021/05/Vladimir_4_FF.jpg">
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
    export default {
        name: "ThreeImages"
    }
</script>
