
var app=new Vue({
    el:'#app',
    data:{
      message:'hello world',
      items:[],
      item:['','',''],

    },
    methods: 
    {
      add()
      {
        this.item = ["<label>"+(this.items.length+1)+"</label> ",
        "<label>"+this.name+"</label> ",
        "<label>"+this.course+"</label>",
        "<label>"+this.acceptancePeriod+"</label>",];
        this.items.push(this.item);
        this.deleteContent();
      },
      deleteContent(){
        this.name='';
        this.course='';
        this.acceptancePeriod='';
      }
     
    }
})