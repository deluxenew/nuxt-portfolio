<template>
   <transition
      name="expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      ref="slot"
   >
      <slot />
   </transition>
</template>

<script>
    export default {

        name: 'TransitionExpand',
        //        props:["expand"],
        methods: {
            afterEnter(element) {
                element.style.height = 'auto';
                this.$emit('endHeight', this.$parent.$el.clientHeight);
                this.$emit('elHeight', this.$el.clientHeight);
            },
            enter(element) {
                const { width } = getComputedStyle(element);
                element.style.width = width;
                element.style.position = 'absolute';
                element.style.visibility = 'hidden';
                element.style.height = 'auto';
                const { height } = getComputedStyle(element);
                element.style.width = null;
                element.style.position = null;
                element.style.visibility = null;
                element.style.height = 0;
                getComputedStyle(element).height;
                requestAnimationFrame(() => {
                    element.style.height = height;
                });

                this.$emit('finalHeight', this.$parent.$el.clientHeight + parseInt(height.split('px').shift()));
            },
            leave(element) {
                const { height } = getComputedStyle(element);
                element.style.height = height;
                getComputedStyle(element).height;
                requestAnimationFrame(() => {
                    element.style.height = 0;
                });

                this.$emit('finalHeight', this.$parent.$el.clientHeight - parseInt(height.split('px').shift()));
            },
        },
        render(createElement, context) {
            const data = {
                props: {
                    name: 'expand',
                },
                on: {},
            };
            return createElement('transition', data, context.children);
        },
    };
</script>

<style scoped>
   * {
      will-change: height;
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
   }
</style>

<style lang="scss">
   .expand-enter-active{
      animation: showTranslate 0.3s linear;
      transition: height 0.3s ease-in-out;
      overflow: hidden;
   }

   .expand-leave-active {
      animation: showTranslate 0.3s linear reverse;
      transition: height 0.3s ease-in-out;
      overflow: hidden;
   }

   .expand-enter {
      opacity: 1;
   }

   .expand-leave-to {
      opacity: 0;

   }

   @keyframes showTranslate {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
</style>
