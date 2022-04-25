const buttonHolder=document.querySelector("#pickbuns");
let picked="";
const change=document.querySelector("#change");
const box=document.querySelector("#box");
const box2=document.querySelector("#box2");
const submitted=document.querySelector("#finish");
function doFirst(e){
    const activeElement= e.target;
	const siblings=document.querySelectorAll(".button");
	if(activeElement.classList.contains("button")){
		activeElement.classList.toggle("active");
	}
	for(let i =0; i < siblings.length; i++){
		if (siblings[i] !==activeElement){
			siblings[i].classList.remove("active");
		}
	}
		picked=activeElement.innerText;
		console.log(picked);
}

const nextPage= () => {
	console.log("i was clicked");
	box.classList.add("none");
	box2.classList.remove("none");
change.innerText="you selected " + picked + " out of 5";
};
buttonHolder.addEventListener("click", doFirst,false);
submitted.addEventListener("click", nextPage);
