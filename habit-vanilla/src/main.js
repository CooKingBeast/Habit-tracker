const modalTriggerSelector = document.querySelector('.modal-trigger')
const modalSelector = document.querySelector('.modal')
const modalInputSelector = document.getElementById('modal_input')
const modalButtonSelector = document.getElementById('modal_button')
const progressBarSelector = document.querySelector('.progress-bar')
const habitsSectionSelector = document.querySelector('.habits-section')

let totalDays = 0
let checkedDays = 0

const handleModal = () => {
	if (modalSelector.classList.contains('modal-disable')) {
		modalSelector.classList.remove('modal-disable')
	}
}

const handleAddHabit = () => {
	if (modalInputSelector.value.trim()) {
		modalSelector.classList.add('modal-disable')
		handleCreateHabit(modalInputSelector.value.trim())
	}
	modalInputSelector.value = ''
}

const handleCreateHabit = (habitName) => {
	habitsSectionSelector.insertAdjacentHTML(
		'afterbegin',
		`
						<div class="mb-6">
						<div class="flex items-center gap-4 mb-5">
							<img
								src="../assets/lifestyle.png"
								alt="lifestyle"
								width="80"
							/>
							<span class="font-bold text-2xl">${habitName}</span>
						</div>
						<div class="flex items-center gap-6">
							<button class="habit-buttons">M</button>
							<button class="habit-buttons">T</button>
							<button class="habit-buttons">W</button>
							<button class="habit-buttons">T</button>
							<button class="habit-buttons">F</button>
							<button class="habit-buttons">S</button>
							<button class="habit-buttons">S</button>
						</div>
					</div>`
	)
	totalDays += 7
	refreshProgressBar()
}

const handleChecked = (target) => {
	if (target.classList.contains('habit-buttons')) {
		target.classList.replace('habit-buttons', 'checked')
		checkedDays += 1
	} else {
		target.classList.replace('checked', 'habit-buttons')
		checkedDays -= 1
	}
	refreshProgressBar()
}

const refreshProgressBar = () => {
	const progress = Math.round((checkedDays / totalDays) * 100)
	progressBarSelector.style.width = `${progress}%`
	progressBarSelector.innerText = `${progress}%`
}

modalTriggerSelector.addEventListener('click', handleModal)
modalButtonSelector.addEventListener('click', handleAddHabit)
habitsSectionSelector.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		handleChecked(event.target)
	}
})
