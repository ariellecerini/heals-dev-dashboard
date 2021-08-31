
<template>
  <section class="container">
    <client-only>
      <codemirror
        v-model="code"
        :options="cmOption"
        @cursorActivity="onCmCursorActivity"
        @ready="onCmReady"
        @focus="onCmFocus"
        @blur="onCmBlur"
      >
      </codemirror>
    </client-only>
  </section>
</template>

<script>
import { codemirror } from "vue-codemirror";
import defaultCode from "~/assets/codemirror-default"
export default {
  data() {
    return {
      code: defaultCode,
      cmOption: {
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        keyMap: "sublime",
        mode: "text/x-vue",
        theme: "base16-dark",
        extraKeys: {
          F11(cm) {
            cm.setOption("fullScreen", !cm.getOption("fullScreen"));
          },
          Esc(cm) {
            if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
          }
        }
      }
    };
  },
  components: {
    codemirror
  },
  methods: {
    onCmCursorActivity(codemirror) {
      console.log("onCmCursorActivity", codemirror);
    },
    onCmReady(codemirror) {
      console.log("onCmReady", codemirror);
    },
    onCmFocus(codemirror) {
      console.log("onCmFocus", codemirror);
    },
    onCmBlur(codemirror) {
      console.log("onCmBlur", codemirror);
    }
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.CodeMirror.cm-s-base16-dark {
  height: 100%;
}
.vue-codemirror {
  width: 100%;
  height: 100%;
}
</style>
