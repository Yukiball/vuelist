import Vue from 'vue';

var vm = Vue.component('vbtn',{
	template:`
		<div class="vbtn" >
		    <div ref="mask" v-show="ok" class="mask" :class="{white:white,black:black}" @click="maskclick()"></div>
		    <span class="btnfather" :class="btnfather" @click="appear()"><slot name="button"></slot></span>
		    <transition name="custom-classes-transition"
		    :enter-active-class="enter"
		    :leave-active-class="leave">
		        <div :class="classObject" v-if="ok"><span style="background-color:blue;"><slot name="item1"></slot></span></div>
		    </transition>
		    <transition name="custom-classes-transition"
		    :enter-active-class="enter"
		    :leave-active-class="leave">
		        <div :class="classObject" v-if="ok && show" ><span style="background-color:pink"><slot name="item2"></slot></span></div>
		    </transition>
		    <transition name="custom-classes-transition"
		    :enter-active-class="enter"
		    :leave-active-class="leave">
		        <div :class="classObject" v-if="ok && show" ><span style="background-color:yellow"><slot name="item3"></slot></span></div>
		    </transition>
		    <transition name="custom-classes-transition"
		    :enter-active-class="enter"
		    :leave-active-class="leave">
		        <div :class="classObject" v-if="ok"><span style="background-color:black"><slot name="item4"></slot></span></div>
		    </transition>
		</div>
	`,
	data(){
    return{
      white:false,
      black:false,
      ok:false,
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
      btnfather:{
        isCircle:true,
        left:false,
        right:false,
        middle:true,
      }
    }
  },
  props:{
    type:{
      type:String,
      default:'middle'
    },
    number:{
      type:String,
      default:'4'
    },
    btnStyle:{
      type:Boolean,
      default:false
    },
    mask:{
      type:String,
      default:''
    },
    animate:{
      type:String,
      default:''
    }
  },
  methods:{ 
    appear(){
      var that = this;  
      this.ok = !this.ok;
      if (that.mask !== ''|| that.mask !== '无') {
        that.white = that.mask === 'white' ? true : false;
        that.black = that.mask === 'black' ? true : false;
      }
    },
    maskclick(){
      var that = this
      setTimeout(function(){
        if (that.$refs.mask.getAttribute('class') !== 'mask') {
          that.ok = !that.ok;
        }
      },0)
    }
  },
  computed: {
    listentype() {
      return this.type+','+this.number
    } ,
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
    animate:function(newVal,oldVal){
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
    number:function(newVal,oldVal){
      if (newVal === '2') {
        this.show = false
      }else{
        this.show = true
      }
    },
    btnStyle:function(newVal,oldVal){
      this.btnfather.isCircle = newVal;
    },
    type:function(newVal,oldVal){
      if(newVal == 'left'){
        this.btnfather.left = true;
        this.btnfather.right = false;
        this.btnfather.middle = false;
      }else if(newVal == 'right'){
        this.btnfather.left = false;
        this.btnfather.right = true;
        this.btnfather.middle = false;
      }else{
        this.btnfather.left = false;
        this.btnfather.right = false;
        this.btnfather.middle = true;
      }
    },
  },
  mounted(){

  }
})

export default vm