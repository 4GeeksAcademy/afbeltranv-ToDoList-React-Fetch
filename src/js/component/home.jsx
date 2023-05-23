import React, { useState, useEffect } from "react";


const Home = () => {	



function traerLista(){	
	fetch('https://assets.breatheco.de/apis/fake/todos/user/afbeltranv')
	.then(res => res.json())
	.then(response => { console.log(response) })
}
// traerLista();
function postearLista(){
		fetch('https://assets.breatheco.de/apis/fake/todos/user/afbeltranv',{
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ label: 'React PUT Request Example', done: false })
		})
	
	
}
postearLista();
return(
	<h1>Fetch  y Put API</h1>
)

	

}


export default Home;
