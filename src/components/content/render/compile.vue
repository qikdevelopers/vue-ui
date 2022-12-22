<script>

// IMPORTANT: you must import `compile` from this file! Standard Vue builds won't work
// import { compile } from 'vue/dist/vue.esm-bundler.js'
import { compile } from 'vue'
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
  setup (props) {

  	// Add sanitization here.
  	
    // Setup accepts a reactive `props` object and can return a render function, so this
    // functionally allows us to compile arbitrary HTML into Vue components
    const string = compile(props.html)
    // const string = compile(`<strong>Hello</strong> <em>There</em>`)
    return string;
  },
}


</script>


