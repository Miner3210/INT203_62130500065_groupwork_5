const app = {
    data() {
        return {
            items: [
                { message: 'KoreaTown1',Love:true,img:"./images/1.jpg"}, 
            {  message: 'KoreaTown2',Love:true,img:"./images/2.jpg"  },
            {  message: 'KoreaTown3',Love:false,img:"./images/3.jpg"  }]
            ,search:false,
            backupitems : [
                { message: 'KoreaTown1',Love:true,img:"./images/1.jpg"}, 
            {  message: 'KoreaTown2',Love:true,img:"./images/2.jpg"  },
            {  message: 'KoreaTown3',Love:false,img:"./images/3.jpg"  }],
            searchText:'',
            imageshow: [{img:''
            ,Check:false,index:''}]
        }},
        


        
        methods:{
            toogleLove(index){
                this.backupitems[index].Love = !this.backupitems[index].Love},
            SearchG(){
                this.search = !this.search
                this.backupitems = [...this.items]
            },
            CancelT(){
                this.searchText =''
                this.backupitems = this.items
                console.log(this.backupitems[0])
                console.log(this.items[0])
            },
            toogleImage(index){ 
                if(this.imageshow.index == index){
                    this.imageshow.Check = false 
                    this.imageshow.img = this.items[index].img;     
                    this.imageshow.index = -1  
                }
                else{
                    this.imageshow.Check = true
                    this.imageshow.index = index
                    this.imageshow.img = this.items[index].img;
                }
               
            },
            toFlase(){
                    this.imageshow.Check = false;
                    this.imageshow.index = -1 
            }
        }
        ,
        computed:{
            countUnLove(){
                return this.backupitems.filter( t => t.Love ).length
            },
            letbitem(){
                
            }

        },
        watch : {
            searchText : function() {
                this.backupitems = this.items
                console.log(this.searchText)
                const query =  this.searchText.toLowerCase()
                this.backupitems = this.backupitems.filter(backupitems => backupitems.message.toLowerCase().search(query) > -1)
                this.haveResult = this.backupitems.length > 0 
            }
        },
        }   
      
        
        
    


Vue.createApp(app).mount('#app')