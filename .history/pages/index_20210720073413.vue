<template>
  <div class="container diagram">
    <div class="column col-left">
      <card class="question-input takes-input">
        <h6 class="box-title">User Question</h6>
        <textarea class="text-area" id="user-question" rows="4" cols="50"/> 
        <button onClick="">Submit</button>
      </card>
      <card class="takes-input">
        </card> 
    </div>
  <div class="col-centerd">
    <div class="center section1">
      <card class="static-entities">
        Expanded User Question
        </card>
      </div>
    <div class = "center section2">
       <div class='KBQA'>
         <card class="static-entities">
     
      
      </card>
      </div>
    
      <div class="foodKG">
        <card class="static-entities">
          </card> 
        </div>
    </div>
  </div>
  <div class="column col-right">
    <card class="was-returned">
    Recommended Recipes
    </card>
  </div>

</div>
</template>

<script>
import '../assets/style.css';
import Card from "../components/Card.vue";


export default {}
</script>

<style>



</style>
