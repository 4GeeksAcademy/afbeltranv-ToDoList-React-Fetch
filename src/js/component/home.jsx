import React, { useState, useEffect } from "react";


const Home = () => {	

let list=[{label: "tarea1", done:false}, {label:"tarea2", done:false} ]

function traerLista(){	
	fetch('https://assets.breatheco.de/apis/fake/todos/user/afbeltranv')
	.then(res => res.json())
	.then(response => { console.log(response) })
}
 traerLista();
function postearLista(){
		fetch('https://assets.breatheco.de/apis/fake/todos/user/afbeltranv',{
			method: "PUT",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(list)
		})	
}

postearLista();
return(
	<h1>Fetch  y Put API</h1>
)

	

}


export default Home;
