import * as GmapVue from 'gmap-vue';
import Vue from 'vue';


Vue.use(GmapVue, {
  load: {
    key: 'AIzaSyDbmT2dV1YxSu0U86qtvDStC-pym5jsq4Q',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
  installComponents: true
})

export { GmapVue }
