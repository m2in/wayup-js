console.log('add js');
const prev = document.getElementById('btn-prev'),
			next = document.getElementById('btn-next'),
			slides = document.querySelectorAll('.slide'),
			dots = document.querySelectorAll('.dot');
let index = 0;

const activeSlide = n => {
	for(slide of slides){
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const activeDot = n => {
	for(dot of dots){
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const prepareCurrentSlider = int => {
	activeSlide(index);
	activeDot(index);}



const nextSlide = () => {
	if(index == (slides.length - 1)){
		index = 0;
		 prepareCurrentSlider(index);}
	else{
	index++;
	prepareCurrentSlider(index);}
}
const prevSlide = () => {
	if(index == 0){
		index = slides.length - 1;
		prepareCurrentSlider(index);
	}
	else{
		index--;
		prepareCurrentSlider(index);}

}

dots.forEach((item, indexDot) =>{
	//console.log(item);
	//console.log(indexDot);
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlider(index);
	})
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);