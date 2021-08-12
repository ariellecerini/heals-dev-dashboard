<template>
  <div class="container diagram">
    <div class="column col-left">
      <div class="question-input">
        <input type="text" /> 
        <button onClick="">Submit</button>
      </div>
      <div class="user-profile">
      </div>
    </div>
  <div class="col-center">
    <div class="center section1">
        Expanded User Question
      </div>
    <div class = "center section2">
      <div class='KBQA'>
      </div>
      <div class="foodKG">
        </div>
    </div>
  </div>
  <div class="column col-right">
    Recommended Recipes
  </div>

</div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
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

.diagram{
  display: flex; 
  flex-direction: row; 
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.col-left{
  display: flex; 
  flex-direction: column; 
}

div{
  border: grey; 
}


</style>
