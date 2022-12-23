<script>



// import VRuntimeTemplate from "vue3-runtime-template";

// export default {
//   data: () => ({
//     name: "Mellow",
//     template: `
//       <app-message>Hello {{ name }}!</app-message>
//     `
//   }),
//   components: {
//     // UxButton:UXButton,
//     VRuntimeTemplate
//   }
// };


/**
// IMPORTANT: you must import `compile` from this file! Standard Vue builds won't work
// import { compile } from 'vue/dist/vue.esm-bundler.js'
import { compile, ref, watch, watchEffect } from 'vue'
// Include custom components that are embedded in your HTML here
// import CustomComponent from './CustomComponent.vue'
import Image from '../../ui/image.vue'

export default {
  // The `content` prop should contain your HTML; you could alternately make it Markdown
  // or something and parse that in the `setup` method
  props: ['html'],
  components: {
    // CustomComponent,
    'ux-image':Image,
	// UxButton:UXButton,
	// UxLink:UXLink,
  },
  errorCaptured(e) {
        console.log('<compile> ERROR CAPTURED', e);
  },
  render(h) {
    if (this.html) {
      const parent = this.parent || this.$parent
      const {
        $data: parentData = {},
        $props: parentProps = {},
        $options: parentOptions = {}
      } = parent;
      const {
        components: parentComponents = {},
        computed: parentComputed = {},
        methods: parentMethods = {}
      } = parentOptions;
      const {
        $data = {},
        $props = {},
        $options: { methods = {}, computed = {}, components = {} } = {}
      } = this;
      const passthrough = {
        $data: {},
        $props: {},
        $options: {},
        components: {},
        computed: {},
        methods: {}
      };

      //build new objects by removing keys if already exists (e.g. created by mixins)
      Object.keys(parentData).forEach(e => {
        if (typeof $data[e] === "undefined")
          passthrough.$data[e] = parentData[e];
      });
      Object.keys(parentProps).forEach(e => {
        if (typeof $props[e] === "undefined")
          passthrough.$props[e] = parentProps[e];
      });
      Object.keys(parentMethods).forEach(e => {
        if (typeof methods[e] === "undefined")
          passthrough.methods[e] = parentMethods[e];
      });
      Object.keys(parentComputed).forEach(e => {
        if (typeof computed[e] === "undefined")
          passthrough.computed[e] = parentComputed[e];
      });
      Object.keys(parentComponents).forEach(e => {
        if (typeof components[e] === "undefined")
          passthrough.components[e] = parentComponents[e];
      });

      const methodKeys = Object.keys(passthrough.methods || {});
      const dataKeys = Object.keys(passthrough.$data || {});
      const propKeys = Object.keys(passthrough.$props || {});
      const templatePropKeys = Object.keys(this.templateProps);
      const allKeys = dataKeys.concat(propKeys).concat(methodKeys).concat(templatePropKeys);
      const methodsFromProps = buildFromProps(parent, methodKeys);
      const finalProps = merge([
        passthrough.$data,
        passthrough.$props,
        methodsFromProps,
        this.templateProps
      ]);
      const provide = this.$parent._provided;

      const dynamic = {
        template: this.html || "<div></div>",
        props: allKeys,
        computed: passthrough.computed,
        components: passthrough.components,
        provide: provide
      };

      return h(dynamic, { props: finalProps });
    }
  }
  // render() {
    // return compile(this.html)();
  // },
  // setup (props) {

  	// Add sanitization here.
    // const input = ref(props.html) 
    // const output = ref(compile(input.value));


  	
    // watchEffect(function() {
    //   output.value = compile(input.value);
    // })


    // // return output;
    // // // Setup accepts a reactive `props` object and can return a render function, so this
    // // // functionally allows us to compile arbitrary HTML into Vue components

    // // let string;
    // // try {
      
    // // } catch (e) {
    // //   console.log('Error', e, props.html);
    // //   string = JSON.stringify(e);
    // // }


    // return output;
    // return output.value;
  // },
}

/**/
</script>


