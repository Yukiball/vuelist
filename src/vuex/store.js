import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const store = new Vuex.Store({
	state : {
		typetext:"",
	    numbertext:"",
	    masktext:"",
	    animatetext:"",
	    t1:'',
	    t2:'',
	},
	mutations: {
	    changetype (state,val) {
	      	state.typetext = val
	    },
	    changenumber (state,val) {
	    	state.numbertext = val
	    },
	    changemask (state,val) {
	    	state.masktext = val
	    },
	    changeanima (state,val) {
	    	state.animatetext = val
	    },
	    changet1 (state,val) {
	    	state.t1 = val
	    },
	    changet2 (state,val) {
	    	state.t2 = val
	    },
	 } 
})

export default store