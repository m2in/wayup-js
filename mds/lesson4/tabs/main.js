console.log('add js');
const tabs = document.getElementById('tabs');
const contents = document.querySelectorAll('.content');
const tabs3 = document.getElementById('tabs3');
const contents3 = document.querySelectorAll('.content3');

//console.log(tabs.children);

const changeClass = el => {
	for(let i = 0; i < tabs.children.length; i++){
		tabs.children[i].classList.remove('active');
	}
	el.classList.add('active');
}

const changeClass3 = el => {
	for(let i = 0; i < tabs3.children.length; i++){
		tabs3.children[i].classList.remove('active');
	}
	el.classList.add('active');
}

tabs.addEventListener('click', e => {
	const currTab = e.target.dataset.btn;
	//console.log(currTab);
	changeClass(e.target);
	for(let i = 0; i < contents.length; i++){
		contents[i].classList.remove('active');
		if(contents[i].dataset.content === currTab){
			contents[i].classList.add('active');
		}
	}
});

tabs3.addEventListener('click', e => {
	const currTab3 = e.target.dataset.btn;
	//console.log(currTab);
	changeClass3(e.target);
	for(let i = 0; i < contents3.length; i++){
		contents3[i].classList.remove('active');
		if(contents3[i].dataset.content === currTab3){
			contents3[i].classList.add('active');
		}
	}
});