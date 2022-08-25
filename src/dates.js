import {format,addDays} from "date-fns";
export default function datefunc(){
    //selectors
    // const randomdate=new Date("2222-04-09");
    const date=new Date();
    const tommorowdate=addDays(date,1)
    const today=document.querySelector('.sidebar-today')
    const tommorow=document.querySelector('.sidebar-tommorow')
    const month=document.querySelector('.sidebar-month')
    const dateformat=format(date,"yyyy-MM-dd")
    const tommorowdateformat=format(tommorowdate,"yyyy-MM-dd")
    //eventlisteners
    // today.addEventListener('click',()=>{
    //     console.log(typeof dateformat)
    // })
    tommorow.addEventListener('click',()=>{
        console.log(tommorowdateformat)
        
    })
    month.addEventListener('click',()=>{
        
    })
    //functions
    
}