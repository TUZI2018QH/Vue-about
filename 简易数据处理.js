Vue.filter("timeFormat",(value) =>{
    // console.log(value);
    let time = new Date(value);
    // console.log(time);
    let year = time.getFullYear();
    let month = time.getMonth() +1+"";
    let day = time.getDate()+"";
    let hour = time.getHours()+"";
    let minute = time.getMinutes()+"";
    let second = time.getSeconds()+"";

    value = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")} ${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}`;
    return value;
});
new Vue({
    el:"#app",
    data:{
        isDisabled:true,
        isShow:false,
        persons:[{
            id:"1",
            name:"嫄",
            score:"99",
            time:Date.now()
        },
        {
            id:"2",
            name:"嫄嫄",
            score:"999",
            time:Date.now()
        }],
        person:{
            id:"",
            name:"",
            score:""
        }
    },
    methods:{
        edit(){
            this.isDisabled = !this.isDisabled
        },
        del(index){
            this.persons.splice(index,1);
        },
        more(){
            this.isShow = ! this.isShow
        },

        add(){
            this.person.time = Date.now();
            this.persons.push(this.person);
            this.person = {
                id:"",
                name:"",
                score:""
            }
        },
        query(){
            let newPersons = this.persons.filter((person) => {
                if(person.score === this.person.score){
                    return true;
                }
            });
            this.persons = newPersons;
        }
    }
});