//your JS code here. If required.
const divElement = document.querySelector(".container");

const boxes = 800;
for(let i=0;i<boxes;i++){
	const dElement = document.createElement("div");
	dElement.classList.add("square");

	dElement.addEventListener("mouseover" , ()=>{
		const randomColor = getRandomColor();
		dElement.style.backgroundColor = randomColor;

		setTimeout(()=>{
			dElement.style.backgroundColor = #ddd;
		},1000);		
});
		divElement.appendChild(dElement);
}

function getRandomColor(){
	return `hsl(${Math.random() * 360}, 100%, 50%)`;
}