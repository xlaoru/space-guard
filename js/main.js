let modalBtn = document.querySelector('.login')
let modal = document.querySelector('.modal')
let modalClose = document.querySelector('.close')

modalBtn.addEventListener('click', function() {
	modal.classList.add('active')
})

modalClose.addEventListener('click', function() {
	modal.classList.remove('active')
})

let img = document.querySelector('.img')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let index = 0


const imgAttr = [
	'img/sample1.png',
	'img/sample2.png',
	'img/sample3.png'
]

next.addEventListener('click', function () {
	index++
	if (index >= imgAttr.length) {
		index = 0
	}
	img.src = imgAttr[index]
})

prev.addEventListener('click', function () {
	index--
	if (index < 0) {
		index = imgAttr.length - 1
	}
	img.src = imgAttr[index]
})