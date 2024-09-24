// elements:
const likeButton = document.querySelectorAll('.like-icon');
const addFileButton = document.querySelectorAll('.add-file-icon');
const slider = document.querySelectorAll('.comment');
const arrowLeft = document.querySelector('.slide-left');
const arrowRight = document.querySelector('.slide-right');
const paginationRectangle = document.querySelectorAll('.pagination-rectangle')

// functions-like:
likeButton.forEach( likeButton => {
	likeButton.addEventListener( 'click', () => {
		likeButton.classList.toggle('like-effect');
	} )
} );

// function-addFile:
addFileButton.forEach( addFileButton => {
	addFileButton.addEventListener( 'click', () => {
		addFileButton.classList.toggle('add-file-effect');
	} )
} );

// function-slider:
let currentSlideIndex = 0;

function showSlider () {
	slider[currentSlideIndex].classList.add('flex', 'move-in')
	paginationRectangle[currentSlideIndex].classList.add('is-current');
}

function hideSlider () {
	slider[currentSlideIndex].classList.remove('flex', 'move-out');
	paginationRectangle[currentSlideIndex].classList.remove('is-current');
}

function nextSlider () {
	hideSlider()
	
	currentSlideIndex++;
	
	if ( currentSlideIndex > slider.length - 1 ) {
		currentSlideIndex = 0;
	}

	showSlider();
};

function previeousSlider () {
	hideSlider()
	
	currentSlideIndex--;
	
	if ( currentSlideIndex < 0 ) {
		currentSlideIndex = slider.length - 1;
	}
	
	showSlider();
};

arrowRight.addEventListener( 'click', nextSlider );
arrowLeft.addEventListener( 'click', previeousSlider );