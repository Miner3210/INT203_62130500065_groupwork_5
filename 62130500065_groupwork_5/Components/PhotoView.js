app.component('photo-view',{
  props:['imageshow'],
  template:
  /*html*/
  `
  <div v-if="imageshow.Check"  class="justify-self-stretch text-center p-10 bg-black">
  <img v-bind:src="imageshow.img" class="inline">
  <span @click="this.$emit('toflase')" class="material-icons inline bg-white hover\:bg-gray-100">
    clear
    </span>
  </div>

`,
  
}
  
)
// <div class="flex justify-center">
    // <div class="inline">
    // <input type="text" v-model="searchText"   placeholder="Please enter text for searching photos" v-show="search" 
    // />
    // </div>
  
    // <button type="submit" v-if="search === true" @click="$this.$emit('searchgs')" @click="this.$emit('canclet')" class="bg-red-500 hover:bg-red-700">Cancel</button> 
    // <span class="material-icons  search inline" @click="this.$emit('searchg')" v-if="search">
    //     search
    // </span>
    // </div>  
    // `,
    // :search="search" @searchg="SearchG"
    // @searchgs="SearchG" @canclet="CancelT"