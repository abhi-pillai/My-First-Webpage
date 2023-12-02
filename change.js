const sentence ={
    "Designation" :[
            {
                "quote": "I'm a Web",
			"source": "Developer"
            },
            {
                "quote": "I'm a UI/UX",
			"source": "Designer"
            },
            {
                "quote": "I'm a Tech",
                "source": "Enthusiast"
            }
    ]
};
const Designation = sentence.Designation;
function getRandomDesignation() {
	arraysize = Designation.length;
	random = Math.random() * arraysize;
	randomnumber = Math.floor(random);
	console.log(arraysize);
	console.log(random);
	console.log(randomnumber);
	return Designation[randomnumber];
}

function printOutput() {
	var Desig = getRandomDesignation();
	let dContainer = document.getElementsByClassName("head2")[0];
    let d2Container = document.getElementsByClassName("head3")[0];
	dContainer.innerHTML = Desig.quote;
    d2Container.innerHTML =Desig.source;
	console.log(d2Container);
    console.log(dContainer);

}
setInterval(printOutput, 1000);