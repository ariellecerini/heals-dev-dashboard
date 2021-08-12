<template>
  <div class="dev container diagram">
    <div class="dev column col-left">
      <card class="dev card question-input takes-input">
        <h6 class="dev box-title">User Question</h6>
        <textarea class="dev text-area" id="user-question" rows="4" cols="50"/> 
      </card>
      <card class="dev takes-input">
                <h6 class="dev box-title">User Dietary Needs and Preferences</h6>

        </card> 
    </div>
  <div class="dev col-centerd">
    <div class="dev center section1">
      <accordion class="dev static-entities" title="Expanded User Question" desc="insert desc" content="insert the content here">
        </accordion>
      </div>
    <div class = "dev center section2">
       <div class='dev KBQA'>
         <card class="dev static-entities">
     <h6 class="dev box-title">KBQA</h6>
        
      </card>
      </div>
    
      <div class="foodKG">
        <card class="dev static-entities">
               <h6 class="dev box-title"> Food KG</h6>

         
          </card> 
        </div>
    </div>
  </div>
  <div class="dev column col-right">
    <card class="dev was-returned">
           <h6 class="dev box-title">Recommended Recipes</h6>

    </card>
  </div>

</div>
</template>

<script>
import '../assets/style.css';
import Card from "../components/Card.vue";
import Accordion from "../components/Accordion.vue"; 


export default {}
</script>

<style>


/*dev dashboard*/
.dev.container.diagram{
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%; 
  padding: 4% 3%;
  flex-direction: row;

}

.dev.takes-input{
  box-shadow: -3px 6px 6px #00000019;

  /* box-shadow: inset 0px 0px 6px #00000029; */
}

.dev.was-returned{
  box-shadow: inset 0px 0px 9px #00000029;
}

.dev.static-entities{
  border: 1px solid #E5E5E5;
}

.dev.col-centerd{
  display: flex;
  flex-direction: row;
  width: 100%; 
  max-width: 500px;
  justify-content: space-around; 
}

.dev.center.section1{
  width: 100%; 
  max-width: 300px; 
}

.dev.center.section2{
  height: 100%; 
  display: flex; 
  flex-direction: column;
  justify-content: space-around; 
  
}

.dev.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

/* .diagram{
  display: flex; 
  flex-direction: row; 
} */

.dev.col-left{
  max-width: 300px;
  display: flex; 
  flex-direction: column; 
  height: 100%; 
  min-height: 80vh; 
  justify-content: space-around;
}

h6.box-title{
  text-align: left;
  padding-bottom: 1.7em;
}

.dev input[type=text]{
  width: 100%;
  background-color: var(--gray2);
}

.dev textarea{
  width: 100%; 
  background-color: var(--gray1);
  border-top: none;
  border-left: none; 
  border-right: none;
  border-bottom: var(--gray4) solid 1px; 
}

.dev.col-right{
  width: 100%; 
  max-width: 300px; 
  height: 100%;
}



</style>
