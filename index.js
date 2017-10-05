var nav = document.getElementsByClassName('nav')

function changeColor() {
	this.hover('nav-color')
}

nav.addEventListener('click', changeColor)
