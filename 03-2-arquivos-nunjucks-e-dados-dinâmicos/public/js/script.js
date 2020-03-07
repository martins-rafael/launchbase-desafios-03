const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card-item')

for (let card of cards) {
    card.addEventListener('click', function(){
        const curso = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${curso}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})
