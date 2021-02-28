app.component('photo-search',{
    props:['searchtext','search'],
    template:
    /*html*/
    `
     <div class="flex justify-center">
     <div class="inline">
     <input type="text" :value="searchtext"  v-on:input="searchChange" placeholder="Please enter text for searching photos" v-show="search" 
     />
     </div>
  
     <button type="submit" v-if="search === true" @click="this.$emit('searchgs')" @click="this.$emit('cancelt')"  class="bg-red-500 hover:bg-red-700">Cancel</button> 
     <span class="material-icons  search inline" @click="this.$emit('searchg')" v-if="search === false">
        search
     </span>
    </div>  
     `
    
     ,
     methods:{
        searchChange: function(searchtext){
                      this.$emit("searchtext2", searchtext);
        
  }
}}
  )
  