<template>
   <div>
      <h2>Todos:</h2>
      <div @click="todos++">+</div>
      <div @click="todos--">-</div>
      <input type="text" v-model.number="todos">
         <transition-group name="fade-x" tag="div" class="group-wrap" :style="`height: ${this.height}px; transition-duration: ${todos/10}s`">
            <div ref="item" v-for="(todo, index) in todos" :key="todo" :style="`transition-delay: .1s`">
               {{todo}}
            </div>
         </transition-group>

      {{height}}
   </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'TransitionGroupExpand',
        data() {
            return {
                todos: 3,
                height: 0,
            }
        },
        watch: {
            async todos() {
               await this.setHeight()
            },
        },
        methods: {
           async setHeight() {
                await Vue.nextTick();
                this.height = this.$refs.item.reduce((acc, el) => {
                    acc += el.clientHeight
                    return acc
                }, 0)
            },
        },
        async mounted() {
            await this.setHeight()
        }
    }
</script>

<style>
   body {
      background: #20262E;
      padding: 20px;
      font-family: Helvetica;
   }

   #app {
      background: #fff;
      border-radius: 4px;
      padding: 20px;
      transition: all 0.2s;
   }

   li {
      margin: 8px 0;
   }

   h2 {
      font-weight: bold;
      margin-bottom: 15px;
   }

   .group-wrap {
      transition: height 0.5s;
      overflow: hidden;
   }

   .fade-x-enter-active {
      transition: all .3s;
   }

   .fade-x-leave-active {
      transition: all .3s;
   }

   .fade-x-enter {
      opacity: 0;
      transform: translateX(20px)
   }

   .fade-x-leave-to {
      opacity: 0;
      transform: translateX(20px)
   }
</style>
