
export default function addtask(projectid){
    //selectors
    const display=document.querySelector(`div[project-ids='${projectid}']`)
    const addtaskbutton=document.querySelector(`div[project-ids='${projectid}']>form>.add-task`)
    addtaskbutton.setAttribute('type','button')
    const inputtext=document.querySelector(`div[project-ids='${projectid}']>form>.taskinput`)

    //eventlisteners
   
    addtaskbutton.addEventListener('click',addappend)
    //functions
    function addappend(){
        console.log(inputtext.value);
        if(inputtext.value==='')return;
        const task=document.createElement('div')
        const top=document.createElement('div')
        const taskoptions=document.createElement('div')
        const bottom=document.createElement('divasdassa')
        const descriptiontext=document.createElement('div')
        const tasktitle=document.createElement('div')
        const ultop=document.createElement('ul')
        const ulbottom=document.createElement('ul')
        const li1=document.createElement('li')
        const li2=document.createElement('li')
        const li3=document.createElement('li')
        const lidescription=document.createElement('li')
        const liduedate=document.createElement('li')
        const trash=document.createElement('button')
        const completed=document.createElement('button')
        const edit=document.createElement('button')

        task.classList.add('task')
        top.classList.add('top')
        taskoptions.classList.add('task-options')
        bottom.classList.add('bottom')
        descriptiontext.classList.add('description-text')
        tasktitle.classList.add('task-title')
        lidescription.classList.add('description')
        liduedate.classList.add('due-date')    
        trash.classList.add('trash')
        trash.textContent='trash'
        completed.textContent='completed'
        edit.textContent='edit'
        completed.classList.add('completed')
        edit.classList.add('edit')
        lidescription.textContent='how to do'
        task.append(top,bottom)
        top.append(tasktitle,taskoptions)   
        taskoptions.appendChild(ultop)
        ultop.append(li1,li2,li3)
        li1.appendChild(trash)
        li2.appendChild(completed)
        li3.appendChild(edit)
        bottom.appendChild(ulbottom)
        ulbottom.append(lidescription,liduedate)
        lidescription.appendChild(descriptiontext)
        tasktitle.textContent=inputtext.value
        liduedate.textContent='12/06/03'
        descriptiontext.textContent='click edit to change text and edit when you are done'
        display.appendChild(task)
        trash.addEventListener('click',(e)=>{
            e.path[5].remove();
        })
        edit.addEventListener('click',(e)=>{
            console.log(e.path[5].children[1].children[0].children[0].getAttribute('contenteditable'))
            if(e.path[5].children[1].children[0].children[0].children[0].getAttribute('contenteditable')==='true'){
                e.path[5].children[1].children[0].children[0].children[0].setAttribute('contenteditable','false')
                e.path[5].children[0].children[0].setAttribute('contenteditable','fa')
                e.path[5].children[1].children[0].children[1].setAttribute('contenteditable','false')
                return;
            }
            e.path[5].children[1].children[0].children[0].children[0].setAttribute('contenteditable','true')
            e.path[5].children[0].children[0].setAttribute('contenteditable','true')
            e.path[5].children[1].children[0].children[1].setAttribute('contenteditable','true')
        })
    }
}
