import addtask from './addtask.js';
import {format,addDays} from "date-fns";

export default function addproject(){
//selectors
let count=0
const deleted=document.querySelector('.project-delete')
const addbutton=document.querySelector('.project-newtask')
const sidebar=document.querySelector('.sidebar-projects')
const cancelbtn=document.createElement('button')
const confirmbtn=document.createElement('button')
const form=document.createElement('form')
const input=document.createElement('input')
const buttoncontainer=document.createElement('div')
const displays=document.querySelector('.display')
//date selectors
const today=document.querySelector('.sidebar-today')
const tommorow=document.querySelector('.sidebar-tommorow')
const month=document.querySelector('.sidebar-month')
const premierla=document.querySelector(`button[project-id='0']`)
premierla.addEventListener('click',()=>{
render(0);})



//eventlisteners
today.addEventListener('click',()=>{
    const date=new Date();
    const dateformat=format(date,"yyyy-MM-dd")
    const todaytasks=document.querySelectorAll('.inputdate')
    let buttonattribute=today.getAttribute('project-id')
    render(buttonattribute)
    const renderobjecttext=document.querySelector(`div[project-ids='${buttonattribute}']>.display-text`)
    const todayproject=document.querySelector(`div[project-ids='${buttonattribute}']`)
    renderobjecttext.textContent=today.textContent
    todaytasks.forEach((task)=>{
        if(task.value===dateformat){
            console.log(task.parentElement.parentElement.parentElement.parentElement.getAttribute("today"));
            if(task.parentElement.parentElement.parentElement.parentElement.getAttribute("today")==="true")return;
                task.parentElement.parentElement.parentElement.parentElement.setAttribute("today","true")
                const todayclone= task.parentElement.parentElement.parentElement.parentElement.cloneNode(true)
                todayproject.appendChild(todayclone)
            }
    })
})
tommorow.addEventListener('click',()=>{
    const date=new Date();
    const tommorowdate=addDays(date,1)
    const tommorowdateformat=format(tommorowdate,"yyyy-MM-dd")
    const tommorowtasks=document.querySelectorAll('.inputdate')
    let buttonattribute=tommorow.getAttribute('project-id')
    render(buttonattribute)
    const renderobjecttext=document.querySelector(`div[project-ids='${buttonattribute}']>.display-text`)
    renderobjecttext.textContent=tommorow.textContent
    const tommorowproject=document.querySelector(`div[project-ids='${buttonattribute}']`)
    tommorowtasks.forEach((task)=>{
        if(task.value===tommorowdateformat){
            if(task.parentElement.parentElement.parentElement.parentElement.getAttribute("tommorow")==="true")return;
            task.parentElement.parentElement.parentElement.parentElement.setAttribute("tommorow","true")
            const tommorowclone= task.parentElement.parentElement.parentElement.parentElement.cloneNode(true)
            tommorowproject.appendChild(tommorowclone)
        }
    })
    
})
month.addEventListener('click',()=>{
    const date=new Date();
    const dateformat=format(date,"yyyy-MM-dd")
    const monthdate=date.getMonth()
    const tommorowtasks=document.querySelectorAll('.inputdate')
    let buttonattribute=month.getAttribute('project-id')
    render(buttonattribute)
    const renderobjecttext=document.querySelector(`div[project-ids='${buttonattribute}']>.display-text`)
    renderobjecttext.textContent=month.textContent
    const tommorowproject=document.querySelector(`div[project-ids='${buttonattribute}']`)
    tommorowtasks.forEach((task)=>{
        task.value=new Date();
        if(task.value.getMonth() ===monthdate){
            if(task.parentElement.parentElement.parentElement.parentElement.getAttribute("month")==="true")return;
            task.parentElement.parentElement.parentElement.parentElement.setAttribute("month","true")
            const tommorowclone= task.parentElement.parentElement.parentElement.parentElement.cloneNode(true)
            tommorowproject.appendChild(tommorowclone)
        }
    })
})
addbutton.addEventListener('click',()=>{
    forms();
    addbutton.remove();
})
confirmbtn.addEventListener('click',()=>{

    if (input.value===''){cancelbtn.click();return;}
    createbuttons();
    sidebar.appendChild(addbutton);
    form.remove();
    projectcreate();
})
cancelbtn.addEventListener('click',()=>{
    sidebar.appendChild(addbutton);
    form.remove();
})


//functions
function forms(){
    input.setAttribute('type','text')
    buttoncontainer.classList.add('projectbuttons')
    confirmbtn.classList.add('confirm')
    cancelbtn.classList.add('cancel')
    confirmbtn.textContent='confirm'
    cancelbtn.textContent='cancel'
    confirmbtn.setAttribute('type','button')
    cancelbtn.setAttribute('type','button')
    sidebar.appendChild(form)
    form.appendChild(input)
    form.appendChild(buttoncontainer)
    buttoncontainer.appendChild(confirmbtn)
    buttoncontainer.appendChild(cancelbtn)
}
function createbuttons(){
const createbutton=document.createElement('button');
createbutton.textContent=input.value;
createbutton.classList.add('project-button')
let lastChildProjectId=Number(displays.lastElementChild.getAttribute("project-ids"))+1
createbutton.setAttribute("project-id",`${lastChildProjectId}`)
sidebar.appendChild(createbutton)
const projectbuttons =document.querySelectorAll('.project-button')

projectbuttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
    
     let buttonattribute=button.getAttribute('project-id')
     render(buttonattribute)
     const renderobjecttext=document.querySelector(`div[project-ids='${buttonattribute}']>.display-text`)
     renderobjecttext.textContent=button.textContent
    })
})}
function render(projectid){
    const projectss=document.querySelectorAll('.project')
    projectss.forEach((project)=>{
        project.setAttribute("style","display:none;")
    })
    const renderobject=document.querySelector(`div[project-ids='${projectid}']`)
    

    renderobject.setAttribute("style","display:block;")
}
function projectcreate(){
    let lastChildProjectId=Number(displays.lastElementChild.getAttribute("project-ids"))+1
    const project=document.createElement('div')
    const displaytext=document.createElement('div')
    const projectdelete=document.createElement('button')
    const formcreate=document.createElement('form')
    const inputcreate=document.createElement('input')
    const addtaska=document.createElement('button')
    project.classList.add("project")
    displaytext.classList.add("display-text")
    projectdelete.classList.add("project-delete")
    inputcreate.classList.add("taskinput")
    addtaska.classList.add("add-task")
    inputcreate.setAttribute("name","task")
    inputcreate.setAttribute("type","text")
    projectdelete.textContent="delete project"
    addtaska.textContent="Add new task"
    project.append(displaytext,projectdelete,formcreate)
    formcreate.append(inputcreate,addtaska)
    project.setAttribute("project-ids",`${lastChildProjectId}`)
    displays.appendChild(project)
    project.setAttribute("style","display:none;")
    projectdelete.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.path[1])
        const buttonremovedid=e.path[1].getAttribute('project-ids')
        console.log(buttonremovedid);
        const buttonremove=document.querySelector(`button[project-id='${buttonremovedid}']`)
        buttonremove.remove();
        e.path[1].remove();
    
    })
    addtask(lastChildProjectId);

}
}



/* <form >
<input type="text">
<div>
<button class="confirm">Confirm</button>
<button class="cancel">delete</button>
</div>
</form> */