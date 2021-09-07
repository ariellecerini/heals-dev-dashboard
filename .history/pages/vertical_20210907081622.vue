<template> 
<div>
    <multipane class="custom-resizer" layout="vertical">
        <div class="pane full-width" style="overflow-y: scroll;">
            <div class="dev full-width container diagram" >
                <div class="dev full-width section">
                    <button  v-on:click="connect()">connect</button> 
                        <div class="flex full-width flex-row space-between">

                            <!-- <card id="takesInput" class="dev details takes-input margin-right-base" > -->
                                <details class="full-width takes-input margin-right-base user-input" style="margin-top: 0;">
                                    <summary>
                                    <h6 class="dev text-align-left inline-block margin-none padding-bottom-sm fit-content">User Dietary Needs and Preferences</h6>
                                    </summary> 
                            
                                    <div class="custom-select">
                                        <select>
                                            <option value="0">Use Predefined Persona</option>
                                            <option value="1">Persona 1</option>
                                            <option value="2">Persona 2</option>
                                        </select>
                                    </div>
                            
                                    <input-form/>
                                </details>
                            <!-- </card>  -->
                            
                            <card id="start" class="dev card question-input takes-input user-input margin-left-base" >
                                <h6 class="dev box-title">User Question</h6>
                                <textarea class="dev text-area" id="user-question" rows="4" cols="50"/> 
                            </card>
                    </div>
                </div>
                <div class="dev full-width section">
                        <details id="end" class="dev static-output" style="width: 100%; max-width: 500px;">
                            <summary>
                            Expanded User Question
                            </summary>
                            Insert content here  
                        </details>
                    
                </div>
                <div class="dev full-width section">
                    <div class="flex full-width flex-row space-around">
                        <div id="KBQA" class='dev KBQA' style="width: 20%;">
                            <card class="dev static-entities">
                                <h6 class="dev box-title">KBQA</h6>
                            </card>
                        </div>  
                        <div id="foodKG" class="foodKG" style="width: 80%;">
                            <card class="dev static-entities" style="width: 100%; max-width: 250px; margin-right: auto;">
                                <h6 class="dev box-title"> Food KG</h6>
                            </card> 
                        </div>
                    </div>
                </div> 
                <div class="dev full-width section">
                    <card id="returned" class="dev was-returned">
                        <h6 class="dev box-title">Recommended Recipes</h6>
                    </card>
                </div>
            </div>
        </div>
        <multipane-resizer></multipane-resizer>
        <div class="pane" :style="{ flexGrow: 1 }">
            <div>
                <div> 
                    <h2>Placeholder</h2> 
                </div>
            </div>
        </div>
    </multipane>

     <div class="sticky-footer">
    <button class="secondary white" v-on:click="isReset()">
          Reset
        </button>

        <button class="primary"  v-on:click="isRun()">
          Continue
        </button>
    </div> 
    </div>
</template> 

<script> 

import { Multipane, MultipaneResizer } from 'vue-multipane';
import Card from "../components/Card.vue";
import Accordion from "../components/Accordion.vue"; 
import Codemirror from "../components/codemirror.vue";
import LeaderLine from "leader-line-new"; 
import InputForm from "../components/InputForm.vue";
import "../assets/dev.css"
export default {
  components: {
    Multipane,
    MultipaneResizer,
    

    Codemirror,
    InputForm  },

   data () {
      var sidebar_state = 0; 
        return {
            sidebar_state
        }
    },
  methods: {
    connect: function (){
      new LeaderLine(
        document.getElementById('start'),
        document.getElementById('end'), {
          color: 'black',
          path: 'grid',
          startSocket:'right',
          endSocket: 'left'
        }

        );
      new LeaderLine(
        document.getElementById('takesInput'),
        document.getElementById('end'), {
          color: 'black',
          path: 'grid',
          startSocket:'right',
          endSocket: 'left'
        }
        );
      new LeaderLine(
        document.getElementById('end'),
        document.getElementById('KBQA'), {
          color: 'black',
          path: 'straight',
          startSocket:'right',
          endSocket: 'left'
        }
        );
      new LeaderLine(
        document.getElementById('foodKG'),
        document.getElementById('KBQA'), {
          color: 'black',
          path: 'straight'
        }
        );
      new LeaderLine(
        document.getElementById('KBQA'),
        document.getElementById('returned'), {
          color: 'black',
          path: 'grid',
          startSocket:'right',
          endSocket: 'left'
        }
        );
    }, 
    isReset: function (){

    },
    isRun: function (){

    }, 
    toggleSidebar: function () {


      if (this.sidebar_state === 1){
        this.sidebar_state = 0;
      } else if (this.sidebar_state === 0) {
        this.sidebar_state = 1; 
      }
    console.log("this ran");
    }
  },
  mounted() {
  
  }

};

</script> 

<style> 



</style> 