import React, { useEffect, useState } from 'react'

export default function App() {

  const [segundos,setsegundos]=useState("00")
  const [minutos,setminutos]=useState("00")  
  const [horas,sethoras]=useState("00")
  const [tempo,settempo]=useState(false)
  const [pausa,setpausa]=useState(false)



let loop


const substituição=(n)=>{
if(n<10){
return "0"+n
}else{
return n
}
}

const segundou=()=>{
settempo(true)
if(tempo && !pausa){
if(pausa==true){
setpausa(pausa==false)
}

clearInterval(loop)
loop=setInterval(()=>{
setsegundos(substituição(+segundos+1))

if(segundos==60){
setsegundos("00")
setminutos(substituição(+minutos+1))
}
else if(minutos==60){
setminutos("00")
setsegundos("00")
sethoras(substituição(+horas+1))
}
clearInterval(loop)
},900)
}

}

const parei=()=>{
if(segundos>0){
clearInterval(loop)
settempo(false)
setsegundos("00")
setminutos("00")
sethoras("00")
if(pausa==true){
setpausa(pausa==false)
}
}
}


const Pausei=()=>{
if(segundos>0){
setpausa(!pausa)
clearInterval(loop)
}




}
useEffect(()=>{
segundou()


},[segundos,pausa])


  return (
  <div className="max-clock">
  <h1>{horas}:{minutos}:{segundos}
 
  </h1>
  <div className='clock' >
  <button onClick={segundou} className=' tempo segundos' >Iniciar</button> 
  <button 
  style={{opacity:pausa?"0.3":"1"}}
  
  onClick={Pausei}  className=' tempo minutos' >Pausar</button> 
  <button onClick={parei} className=' tempo horas' >Parar</button> 
   </div>
   
   
  </div>
  )
}
