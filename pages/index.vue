<template>
  <div class="dev container diagram">
    <div class="dev column col-left">
      <button v-on:click="connect()">connect</button>
      <card
        id="start"
        class="dev card question-input takes-input"
      >
        <h6 class="dev box-title">User Question</h6>
        <textarea
          class="dev text-area"
          id="user-question"
          rows="4"
          cols="50"
          v-model="inputQuery"
        />
        <input type="button"
               value="Ask Question"
               @click.prevent="queryForRecommendations"
        />
      </card>
      <card
        id="takesInput"
        class="dev takes-input"
      >
        <h6 class="dev box-title">User Dietary Needs and Preferences</h6>

        <div class="custom-select">
          <select
            @change="selectPersona($event.target.value)">
            <option
              v-for="persona in personaList"
              :key="persona.persona"
              :value="persona.persona">
              Persona {{persona.persona}}
            </option>
          </select>
        </div>
        <form>
          <div style="width: 100%">
            <label
              style="width: 25%"
              for="AgeInYears"
            >Age</label>
            <input
              style="width: 70%"
              id="AgeInYears"
              type="number"
              v-model="personaParams.age"
            >
            <span style="margin-left: -23%;">yrs</span>
          </div>

          <div style="width: 100%">

            <label
              style="width: 25%"
              for="WeightInLbs"
            >Weight</label>
            <input
              id="WeightInLbs"
              style="width: 70%"
              type="number"
              label="Weight"
              v-model="personaParams.weight"
            />
            <span style="margin-left: -23%;">lbs</span>
          </div>

          <div style="width: 100%">

            <label
              style="width: 25%"
              for="HeightInIn"
            >Height</label>
            <input
              id="HeightInIn"
              style="width: 70%"
              type="number"
              label="height"
              v-model="personaParams.height"
            /> <span>in</span>

          </div>
        </form>

      </card>
    </div>
    <div class="dev col-centerd">
      <div class="dev center section1">
        <details
          id="end"
          class="dev static-entities"
        >
          <summary>
            Expanded User Question
          </summary>
          {{expandedQuery}}
        </details>
      </div>
      <div class="dev center section2">
        <div
          id="KBQA"
          class='dev KBQA'
        >
          <card class="dev static-entities">
            <h6 class="dev box-title">KBQA</h6>

          </card>
        </div>

        <div
          id="foodKG"
          class="foodKG"
        >
          <card class="dev static-entities">
            <h6 class="dev box-title"> Food KG</h6>

          </card>
        </div>
      </div>
    </div>
    <div class="dev column col-right">
      <card
        id="returned"
        class="dev was-returned"
      >
        <h6 class="dev box-title">Recommended Recipes</h6>
        <ul>
          <li v-for="recipe in recommendations" :key="recipe">
            {{recipe}}
          </li>
        </ul>
      </card>
    </div>
    <div
      id="sidebarHome"
      class="sidebar-holder"
    >
      <button
        class="sidebar-toggle"
        v-on:click="toggleSidebar()"
      >Code Editor</button>
      <div
        class="sidebar"
        ref="sidebar"
        v-show="sidebar_state > 0"
      >
        <client-only>
          <Codemirror />
        </client-only>
      </div>
    </div>
    <div class="sticky-footer">
      <button
        class="secondary white"
        v-on:click="isReset()"
      >
        Reset
      </button>

      <button
        class="primary"
        v-on:click="isRun()"
      >
        Continue
      </button>
    </div>

  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Accordion from "../components/Accordion.vue";
import Codemirror from "../components/codemirror.vue";
import LeaderLine from "leader-line-new";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex"

export default {
  data() {
    return {
      sidebar_state: 0,
      inputQuery: '',
      personaParams: {
        age: null,
        height: null,
        weight: null
      }
    };
  },
  computed: {
    ...mapState('persona', ['personaList', 'selectedPersonaId']),
    ...mapGetters('persona', ['selectedPersona']),
    ...mapState('kbqa', ['query', 'expandedQuery', 'recommendations']),
  },
  methods: {
    ...mapMutations('persona', ['selectPersona']),
    ...mapMutations('kbqa', ['setQuery']),
    ...mapActions('kbqa', ['queryForRecommendations']),
    connect: function() {
      new LeaderLine(
        document.getElementById("start"),
        document.getElementById("end"),
        {
          color: "black",
          path: "grid",
          startSocket: "right",
          endSocket: "left"
        }
      );
      new LeaderLine(
        document.getElementById("takesInput"),
        document.getElementById("end"),
        {
          color: "black",
          path: "grid",
          startSocket: "right",
          endSocket: "left"
        }
      );
      new LeaderLine(
        document.getElementById("end"),
        document.getElementById("KBQA"),
        {
          color: "black",
          path: "straight",
          startSocket: "right",
          endSocket: "left"
        }
      );
      new LeaderLine(
        document.getElementById("foodKG"),
        document.getElementById("KBQA"),
        {
          color: "black",
          path: "straight"
        }
      );
      new LeaderLine(
        document.getElementById("KBQA"),
        document.getElementById("returned"),
        {
          color: "black",
          path: "grid",
          startSocket: "right",
          endSocket: "left"
        }
      );
    },
    isReset: function() {},
    isRun: function() {},
    toggleSidebar: function() {
      if (this.sidebar_state === 1) {
        this.sidebar_state = 0;
      } else if (this.sidebar_state === 0) {
        this.sidebar_state = 1;
      }
      console.log("this ran");
    }
  },
  watch: {
    selectedPersonaId: {
      immediate: true,
      handler() {
        const {age, height, weight} = this.selectedPersona.personal_info
        let [ft, inches] = height.split("'").map(i => parseInt(i))
        inches += ft*12
        this.personaParams = {age, height: inches, weight}
      }
    },
    query() {
      if (this.query !== this.inputQuery) {
        this.inputQuery = this.query
      }
    },
    inputQuery() {
      if (this.query !== this.inputQuery) {
        this.setQuery(this.inputQuery)
      }
    }
  }
};
</script>

<style>
/*dev dashboard*/
.dev.container.diagram {
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-direction: row;
}

.container-lg,
.container-md,
.container-sm,
.container {
  max-width: none !important;
}

.dev.takes-input {
  box-shadow: -3px 6px 6px #00000019;

  /* box-shadow: inset 0px 0px 6px #00000029; */
}

.dev.was-returned {
  box-shadow: inset 0px 0px 9px #00000029;
}

.dev.static-entities {
  border: 1px solid #e5e5e5;
}

.dev.col-centerd {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 500px;
  justify-content: space-around;
}

.dev.center.section1 {
  width: 100%;
  max-width: 300px;
  margin-top: 14%;
}

.dev.center.section2 {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.dev.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.dev.col-left {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 80vh;
  justify-content: space-around;
  margin-bottom: 10%;
}

h6.box-title {
  text-align: left;
  padding-bottom: 0.5em;
  font-weight: 600;
}

/* form field styling */

select {
  width: 100%;
  padding: 6px;
  border-radius: 0;
  margin-bottom: 5%;
}

select:after {
  margin-right: 5px;
}

input {
  padding: 6px;
  border-radius: 0;
  margin-bottom: 10%;
  border: none;
  border-bottom: 2px solid;
}

input:active {
  border: none;
  border-bottom: 2px solid var(--RPI_Blue-75);
}

input:active {
  border: none;
  border-bottom: 2px solid var(--RPI_Blue-50);
  background: var(--RPI_Blue-25);
}

form span {
  padding: 6px;
  margin-left: -20%;
}

.dev input[type="text"] {
  width: 100%;
  background-color: var(--gray2);
}

.dev textarea {
  width: 100%;
  background-color: var(--gray1);
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: var(--gray4) solid 1px;
}

.dev.col-right {
  width: 100%;
  max-width: 300px;
  height: 100%;
  margin-top: -20%;
}

.card {
  width: 100%;
  text-align: left;
}

/*accordion item*/
.accordion-header {
  display: flex;
  justify-content: space-between;
}

.accordion-heading {
  width: 80%;
}

details {
  box-shadow: 0 0 3px #00000016;
  border-radius: 0;
  background: var(--cardBackground) 0% 0% no-repeat padding-box;
  width: 90%;
  /* height: 100%; */
  padding: 25px;
  margin: auto;
}

details[open] {
  box-shadow: inset 0px 0px 6px #00000029;
}

details {
  text-align: left;
}

summary {
  font-weight: 600;
}

details:hover {
  background-color: var(--Gray10);
}
/* details summary::marker {
  position: absolute;
  float: right;
} */
details summary::-webkit-details-marker,
details summary::marker {
  position: absolute;
  float: right;
  content: "";
}

div.accordian.left-side {
  width: 90%;
  display: inline-block;
}

summary::after {
  content: "▼";
  float: right;
  text-align: right;
  display: inline-block;
  vertical-align: middle;
  /* padding-top: 6px; */
  transform: scaleX(130%);
}

details[open] summary::after {
  content: "▲";
  text-align: right;
  display: inline-block;
  vertical-align: top;
  /* padding-top: 6px; */
  transform: scaleX(130%);
}

details[open] summary {
  padding-bottom: 4%;
}

/* details summary > div.accordian.open-close{
    content: "▼";
    height: 100%;
    width: 30px;
} */

/* summary:before {
    content: "\2714"; /* the new icon */
/* color: #696f7c;
    margin-right: 5px;
} */

/* Sticky footer styling*/
.sticky-footer {
  position: fixed;
  width: 100%;
  padding: 1%;
  background: white;
  /* margin-left: -3%; */
  bottom: 0;
  box-shadow: 0 -2px 12px #00000016;
  z-index: 300;
}

/* BUTTON styling*/
button {
  font-family: IBM Plex Sans, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  font: normal normal normal 14px/18px IBM Plex Sans;
  text-transform: capitalize;
  display: inline-block;
  padding: 16px 30px;
  line-height: 1;
  letter-spacing: 0.02px;
}
button.primary {
  background: var(--interactive-01);
  box-shadow: inset 0px 3px 6px #00000029;
  border-radius: 6px;
  border: none;
  font-weight: 400;
  color: var(--text-04);
  text-align: left;
  opacity: 1;
}

button.primary:hover {
  background-color: var(--hover-primary);
  font-weight: 600;
}

button.primary:active {
  background-color: var(--active-primary);
  font-weight: 400;
}

/* .storybook-button--primary:focus {
  background-color: #667BA2;
  border: 3px solid #A5B0CA;
} */

button.primary:disabled {
  background: var(--Disabled-01);
  color: var(--Disabled-02);
  font-weight: 400;
}

button.secondary {
  color: var(--black);
  background: var(--ui-02);
  box-shadow: inset 0px 0px 7px #00000029;
  border-radius: 6px;
  opacity: 1;
  color: var(--interactive-02);
  font-weight: 400;
}

button.secondary:hover {
  background-color: var(--hover-secondary);
  font-weight: 600;
}

button.secondary:active {
  background-color: var(--active-secondary);
  font-weight: 400;
}

/* button.secondary:focus {
  background-color: white;
  border: 3px solid #A5B0CA;
} */
button:disabled {
  background: var(--Disabled-01);
  color: var(--Disabled-02);
  font-weight: 400;
}

.blue {
  background-color: var(--RPI_Blue-75);
}

/*sidebar styling*/

.sidebar {
  width: 30%;
  min-width: 300px;
  height: 100vh;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--RPI_Blue-100);
}

.sidebar-toggle {
  background: var(--RPI_Blue-100);
  padding: 5px 9px;
  content: "Code Editor";
  color: white;
  transform: rotate(-90deg);
  position: absolute;
  top: 0;
  right: -33px;
  margin-top: 34px;
  border-radius: 0;
  font-weight: 600;
}

.CodeMirror {
  width: 100%;
  height: 90vh;
}
</style>
