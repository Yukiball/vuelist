<template>
  <div class="list">
     <ul class="listbox">
      <li class="li-list type" @click="typeclick()">
        <span>type</span> 
        <span class="text typetext">{{ typetext }}</span>
        <vtext></vtext>
        <i>&gt</i>
      </li>
      <li class="li-list number" @click="numberclick()">
        <span>number</span> 
        <span class="text numbertext">{{ numbertext }}</span>
        <i>&gt</i>
      </li>
      <li class="li-list mask" @click="maskclick()">
        <span>mask</span> 
        <span class="text masktext">{{ masktext }}</span>
        <i>&gt</i>
      </li>
      <li class="li-list animate" @click="animateclick()">
        <span>animate</span>
        <span class="text animatetext">{{ animatetext }}</span>
        <i>&gt</i>
      </li>
      <li class="li-list btn">btn
        <input type="checkbox" class="toggle" >
        </li>
    </ul>
  </div>
</template>

<script>
import vtext from './text'
export default {
  name:'list',
  components:{
    vtext,
  },
  data(){
    return{
      typetext:"typetext",
      numbertext:"numbertext",
      masktext:"masktext",
      animatetext:"animatetext",
      list:[{id:0,value:'middle-around'},{id:1,value:'middle'},{id:2,value:'left'},{id:3,value:'right'}]
    }
  },
  methods:{
    typeclick(){

    },
    numberclick(){

    },
    maskclick(){

    },
    animateclick(){

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../assets/css/list.css');

</style>
