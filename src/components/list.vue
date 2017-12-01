<template>
  <div class="list">
     <ul class="listbox">
      <li class="li-list type" @click.stop="typeclick()">
        <span>type</span> 
        <span class="text typetext" >{{ typetext }}</span>
        <vtext @changetext="changetypetext" :row="type" v-show="typeshow"></vtext>
        <i>&gt</i>
      </li>
      <li class="li-list number" @click.stop="numberclick()">
        <span>number</span> 
        <span class="text numbertext">{{ numbertext }}</span>
        <vtext @changetext="changenumbertext" :row="number" v-show="numbershow"></vtext>
        <i>&gt</i>
      </li>
      <li class="li-list mask" @click.stop="maskclick()">
        <span>mask</span> 
        <vtext @changetext="changemasktext" :row="mask" v-show="maskshow"></vtext>
        <span class="text masktext">{{ masktext }}</span>
        <i>&gt</i>
      </li>
      <li class="li-list animate" @click.stop="animateclick()">
        <span>animate</span>
        <vtext @changetext="changeanimatetext" class="anima" :row="animate" v-show="animateshow"></vtext>
        <span class="text animatetext">{{ animatetext }}</span>
        <i>&gt</i>
      </li>
      <li class="li-list btn">btnStyle
        <input type="checkbox" class="toggle" v-model="checked" @click="check()">
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
      typetext:"middle-around",
      numbertext:"4",
      masktext:"无",
      animatetext:"无",
      list:[{id:0,value:'middle-around'},{id:1,value:'middle'},{id:2,value:'left'},{id:3,value:'right'}],
      typeshow:'',
      numbershow:'',
      maskshow:'',
      animateshow:'',
      type:[{id:0,value:'middle-around'},{id:1,value:'middle'},{id:2,value:'left'},{id:3,value:'right'}],
      number:[{id:0,value:'2'},{id:1,value:'3'},{id:2,value:'4'}],
      mask:[{id:0,value:'无'},{id:1,value:'white'},{id:2,value:'black'}],
      animate:[{id:0,value:'无'},{id:1,value:'animated rubberBand'},{id:2,value:'animated jello'},{id:3,value:'animated flash'},{id:2,value:'animated jello'},{id:2,value:'animated bounce'}],
      checked:true
    }
  },
  methods:{
    all(){
      this.typeshow = false;
      this.numbershow = false;
      this.maskshow = false;
      this.animateshow = false;
    },
    typeclick(){
      this.typeshow = true;
      this.numbershow = false;
      this.maskshow = false;
      this.animateshow = false;
    },
    numberclick(){
      this.typeshow = false;
      this.numbershow = true;
      this.maskshow = false;
      this.animateshow = false;
    },
    maskclick(){
      this.typeshow = false;
      this.numbershow = false;
      this.maskshow = true;
      this.animateshow = false;
    },
    animateclick(){
      this.typeshow = false;
      this.numbershow = false;
      this.maskshow = false;
      this.animateshow = true;
    },
    changetypetext(text){
      this.typetext = text;
      this.all()
    },
    changenumbertext(text){
      this.numbertext = text;
      this.all()
    },
    changemasktext(text){
      this.masktext = text;
      this.all()
    },
    changeanimatetext(text){
      this.animatetext = text;
      this.all()
    },
    check(){
      this.$emit('changeclass',!this.checked);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../assets/css/list.css');
  .anima{
    position:absolute;
    bottom:5rem;
  }
</style>
