<template>
  <div class="vbtn" >
    <transition name="custom-classes-transition"
    :enter-active-class="enter"
    :leave-active-class="leave">
      <div :class="classObject" v-if="ok"><span style="background-color:blue;"></span></div>
    </transition>
    <transition name="custom-classes-transition"
    :enter-active-class="enter"
    :leave-active-class="leave">
      <div :class="classObject" v-if="ok && show" ><span style="background-color:pink"></span></div>
    </transition>
    <transition name="custom-classes-transition"
    :enter-active-class="enter"
    :leave-active-class="leave">
      <div :class="classObject" v-if="ok && show" ><span style="background-color:yellow"></span></div>
    </transition>
    <transition name="custom-classes-transition"
    :enter-active-class="enter"
    :leave-active-class="leave">
      <div :class="classObject" v-if="ok"><span style="background-color:black"></span></div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'vbtn',
  data(){
    return{
      enter:'',
      leave:'',
      show:true,
      classObject: {
        middle: true,
        'middle-around':false,
        left:false,
        right:false,
        left2:false,
        right2:false,
        middle2:false,
      },
    }
  },
  props:{
    ok:{
      type:Boolean,
    }
  },
  methods:{ 

  },
  computed: {
    listentype() {
      return this.$store.state.typetext+','+this.$store.state.numbertext 
    } ,
    listenname() {
      return this.$store.state.animatetext
    } ,
    listennumber() {
      return this.$store.state.numbertext
    }
  },
  watch:{
    listentype:function(newVal,oldVal){
      if(newVal == 'left,4' || newVal == 'left,'){
        this.classObject.middle=false;
        this.classObject.left=true;
        this.classObject.right=false;
        this.classObject.middleAround=false;
        this.classObject.left2=false;
        this.classObject.right2=false;
        this.classObject.middle2=false;
      }else if(newVal == 'right,4' || newVal == 'right,'){
        this.classObject.middle=false;
        this.classObject.left=false;
        this.classObject.right=true;
        this.classObject.middleAround=false;
        this.classObject.left2=false;
        this.classObject.middle2=false;
        this.classObject.right2=false;
      }else if(newVal == 'middle-around,4' ||  newVal == 'middle-around,'){
        this.classObject.middle=false;
        this.classObject.left=false;
        this.classObject.right=false;
        this.classObject.middleAround=true;
        this.classObject.left2=false;
        this.classObject.right2=false;
        this.classObject.middle2=false;
      }else if(newVal == 'middle-around,2'){
        this.classObject.middle=false;
        this.classObject.left=false;
        this.classObject.right=false;
        this.classObject.middleAround=false;
        this.classObject.left2=false;
        this.classObject.right2=false;
        this.classObject.middle2=true;
      }
      else if(newVal == 'left,2'){
        this.classObject.middle=false;
        this.classObject.left=false;
        this.classObject.right=false;
        this.classObject.middleAround=false;
        this.classObject.left2=true;
        this.classObject.right2=false;
        this.classObject.middle2=false;
      }else if(newVal == 'right,2'){
        this.classObject.middle=false;
        this.classObject.left=false;
        this.classObject.right=false;
        this.classObject.middleAround=false;
        this.classObject.left2=false;
        this.classObject.right2=true;
        this.classObject.middle2=false;
      }else if(newVal == 'middle,2' || newVal == ',2'){
        this.classObject.middle=false;
        this.classObject.left=false;
        this.classObject.right=false;
        this.classObject.middleAround=false;
        this.classObject.left2=false;
        this.classObject.right2=false;
        this.classObject.middle2=true;
      }else {
        this.classObject.middle=true;
        this.classObject.left=false;
        this.classObject.right=false;
        this.classObject.middleAround=false;
        this.classObject.left2=false;
        this.classObject.right2=false;
        this.classObject.middle2=false;
      }
      
    },
    listenname:function(newVal,oldVal){
       if (newVal == 'animated flip') {
        this.enter = 'animated flipInY'
        this.leave = 'animated flipOutY';
       }else if(newVal == 'animated fade'){
        this.enter = 'animated fadeIn'
        this.leave = 'animated fadeOut';
       }else if(newVal == 'animated flash'){
        this.enter = this.leave = 'animated flash';
       }else if(newVal == 'animated bounce'){
        this.enter = 'animated bounceIn'
        this.leave = 'animated bounceOut';
       }else{
        this.enter = this.leave = '';
       }
    },
    listennumber:function(newVal,oldVal){
      if (newVal === '2') {
        this.show = false
      }else{
        this.show = true
      }
    }
  },
  mounted(){

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../assets/css/vbtn.css');
  @import url('../assets/css/phonebtn.css');
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .shake-enter-active {
    animated: shake;
  }
  .shake-leave-active {
    animat: shake reverse;
  }
  
  
</style>
