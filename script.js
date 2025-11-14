//your JS code here. If required.
const divElement = document.querySelector(".container");

const boxes = 800;
for(let i=0;i<boxes;i++){
	const dElement = document.createElement("div");
	dElement.classList.add("square");

	dElement.addEventListener("mouseenter" , ()=>{
		const randomColor = getRandomColor();
		dElement.style.backgroundColor = randomColor;

		setTimeout(()=>{
			dElement.style.backgroundColor = "#222";
		},1000);		
});
		divElement.appendChild(dElement);
}

function getRandomColor(){
	return `hsl(${Math.random() * 360}, 100%, 50%)`;
}