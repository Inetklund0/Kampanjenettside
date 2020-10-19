let elementList = document.querySelectorAll('.vismer');

elementList.forEach((element) => {

	// Get html elements
	let titleElm = element.querySelector('h4');
	let textElm = element.querySelector('p');

	// Store size of p
	let rects = textElm.getClientRects();
	textElm.setAttribute('start-height', rects[0].height);
	textElm.style.height = 0; // hide box

	// handle click
	titleElm.addEventListener('click', (event) => {
		element.classList.toggle('open');
		if(element.classList.contains('open')) {
			textElm.style.height = textElm.getAttribute("start-height") +"px";
		} else{
			textElm.style.height = 0;
		}
	});
});
