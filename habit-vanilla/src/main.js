const modalSelector = document.querySelector('.modal')
const modalTriggerSelector = document.querySelector('.modal-trigger')
const modalInputSelector = document.getElementById('modal_input')
const modalButtonSelector = document.getElementById('modal_button')
const habitsSectionSelector = document.querySelector('.koko')
console.log(modalButtonSelector)

const handleModal = () => {
	if (modalSelector.classList.contains('modal-disable')) {
		modalSelector.classList.remove('modal-disable')
	}
	// else modalSelector.classList.add('modal-disable')
}

const handleAddHabit = () => {
	modalSelector.classList.add('modal-disable')
	handleCreateHabit(modalInputSelector.value.trim())
}

const handleCreateHabit = (test = '') => {
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
							<span class="font-bold text-2xl">${test}</span>
						</div>

						<div class="flex items-center gap-6">
							<button
								class="h-12 w-12 flex items-center justify-center"
							>
								<img
									src="../assets/checked.png"
									alt="check-mark"
									width="50"
								/>
							</button>
							<button
								class="h-12 w-12 flex items-center justify-center"
							>
								<img
									src="../assets/checked.png"
									alt="check-mark"
									width="50"
								/>
							</button>
							<button class="habit-buttons">W</button>
							<button class="habit-buttons">T</button>
							<button class="habit-buttons">F</button>
							<button class="habit-buttons">S</button>
							<button class="habit-buttons">S</button>
						</div>
					</div>`
	)
}

modalTriggerSelector.addEventListener('click', handleModal)
modalButtonSelector.addEventListener('click', handleAddHabit)
