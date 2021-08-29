<template>
 <split-pane v-on:resize="resize" :min-percent='20' :default-percent='30' split="horizontal">
      <template slot="paneT">
        <split-pane v-on:resize="resize" :min-percent='20' :default-percent='30' split="vertical">
          <template slot="paneL">
            <div>
              <Nuxt />
            </div>
          </template>
          <template slot="paneR">
            <div id="sidebarHome" class="sidebar-holder">
          <button class="sidebar-toggle" v-on:click="toggleSidebar()">Code Editor</button>

          <div v-if="sidebar_state===1">
              <div class="sidebar" ref="sidebar">
                  <Codemirror/>
                    </div>
                    </div>
            </div> 
          </template>
        </split-pane>
     </template>
     <templat slot="paneB">
        <div class="sticky-footer">
            <button class="secondary white" v-on:click="isReset()">
              Reset
            </button>

            <button class="primary"  v-on:click="isRun()">
              Continue
            </button>
        </div> 
    </split-pane>
  
</template>
<script>

import Codemirror from "../components/codemirror.vue";
export default {
    data () {
      var sidebar_state = 0; 
        return {
            sidebar_state
        }
    },
     methods: {
        toggleSidebar: function () {


      if (this.sidebar_state === 1){
        this.sidebar_state = 0;
      } else if (this.sidebar_state === 0) {
        this.sidebar_state = 1; 
      }
    console.log("this ran");
    }
  }

}

</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
