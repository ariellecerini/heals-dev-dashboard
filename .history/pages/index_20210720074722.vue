<template>
  <div class="dev container diagram">
    <div class="dev column col-left">
      <card class="dev question-input takes-input">
        <h6 class="dev box-title">User Question</h6>
        <textarea class="dev text-area" id="user-question" rows="4" cols="50"/> 
      </card>
      <card class="dev takes-input">
                <h6 class="dev box-title">User Dietary Needs and Preferences</h6>

        </card> 
    </div>
  <div class="dev col-centerd">
    <div class="dev center section1">
      <card class="dev static-entities">
                <h6 class="dev box-title">Expanded User Question</h6>

        </card>
      </div>
    <div class = "dev center section2">
       <div class='dev KBQA'>
         <card class="dev static-entities">
     <h6 class="dev box-title">KBQA</h6>
        
      </card>
      </div>
    
      <div class="foodKG">
        <card class="static-entities">
               <h6 class="dev box-title"> Food KG</h6>

         
          </card> 
        </div>
    </div>
  </div>
  <div class="dev column col-right">
    <card class="was-returned">
           <h6 class="dev box-title">Recommended Recipes</h6>

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
