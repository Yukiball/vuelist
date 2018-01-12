<template>
  <div class="vtext">
     <ul>
       <li @click.stop="click(item.value)" v-for="item in row" :key="item.id">{{item.value}}</li>
     </ul>
  </div>
</template>

<script>
export default {
  name:'vtext',
  data(){
    return{
    }
  },
  props:{
    row:{
      type:Array,
      required: true
    }
  },
  methods:{
    click(text){
      this.$emit('changetext',text)
    }
  },
  watch:{
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vtext{
    background-color: white;
    position: absolute;
    border:1px solid goldenrod;
    z-index: 888;
    right: 0;
  }
  .vtext li{
    font-size: 1.5rem;
    line-height: 3rem;
    height: 3rem;
    width: 15rem;
  }
  .vtext li:hover{
    background-color: wheat;
    cursor: pointer;
  }

</style>
