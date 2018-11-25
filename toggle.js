var toggle1btn=document.querySelector('#toggle1')
var toggle2btn=document.querySelector('#toggle2')
var addbtn=document.querySelector('#add')
var removebtn=document.querySelector('#remove')
var boxpanel=document.querySelector('.box')

addbtn.onclick=function(){boxpanel.classList.add('active')}

removebtn.onclick=function(){boxpanel.classList.remove('active')}

toggle1btn.onclick=function(){
  if(boxpanel.classList.contains('active')){
  boxpanel.classList.remove('active')  
  }else{
    boxpanel.classList.add('active') 
  }
}

toggle2btn.onclick=function(){
  boxpanel.classList.toggle('active')} 
  