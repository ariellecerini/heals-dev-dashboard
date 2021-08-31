<template> 
    <multipane class="custom-resizer" layout="vertical">
        <div class="pane full-width" style="overflow-y: scroll;">
            <div class="dev full-width container diagram" >
                <div class="dev full-width">
                    <button  v-on:click="connect()">connect</button> 
                        <div class="flex full-width flex-row space-between">

                            <card id="takesInput" class="dev takes-input margin-left-base" >
                                <details class="user-info">
                                    <summary>
                                    <h6 class="dev box-title">User Dietary Needs and Preferences</h6>
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
                            </card> 
                            
                            <card id="start" class="dev card question-input takes-input margin-right-base" >
                                <h6 class="dev box-title">User Question</h6>
                                <textarea class="dev text-area" id="user-question" rows="4" cols="50"/> 
                            </card>
                    </div>
                </div>
                <div class="dev full-width">
                    <div class="dev " style="width: 100%;">
                        <details id="end" class="dev static-entities" style="width: 100%; max-width: 500px;">
                            <summary>
                            Expanded User Question
                            </summary>
                            Insert content here  
                        </details>
                    </div>
                </div>
                <div class="dev full-width">
                    <div class="flex full-width flex-row space-around">
                        <div id="KBQA" class='dev KBQA'>
                            <card class="dev static-entities">
                                <h6 class="dev box-title">KBQA</h6>
                            </card>
                        </div>  
                        <div id="foodKG" class="foodKG">
                            <card class="dev static-entities">
                                <h6 class="dev box-title"> Food KG</h6>
                            </card> 
                        </div>
                    </div>
                </div> 
                <div class="dev">
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
.details.user-info{
    dropshadow: none; 
}
.dev.full-width{
    width: 100%; 
}
.flex{
    display: flex;
}

.flex-row{
    flex-direction: row;
}

.flex-col{
    flex-direction: column;
}

.space-between{
    justify-content: space-between;
}

.space-around{
    justify-content: space-around; 
}

.margin-left-base{
    margin-left: 16px; 
}

.margin-right-base{
    margin-right: 16px; 
}

</style> 