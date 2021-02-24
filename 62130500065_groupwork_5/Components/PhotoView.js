app.component('photo-view',{
    props:['backupitem'],
    template:
    /*html*/
    `
    <div>
    <ul v-for="(item,index) in backupitem "class="justify-self-stretch text-center m-4">
    <li class="inline p-10 py-28" @click="this.$emit('love',index)"
    >
    <img v-bind:src="item.img" class="inline">
    <p class="inline" v-html="item.message"  class="space-x-4">{{ item.message}}</p>
    <span class="material-icons inline" @click="this.$emit('imge',index) ">search</span>
    <img class="heart inline" src="./images/heart.png" v-show="item.Love"></li>     
  </ul></div>
  
  `,
    
}
    
)




