const cards = document.querySelectorAll('.card-item')

for (let card of cards) {
    card.addEventListener('click', function(){
        const curso = card.getAttribute('id')
        window.location.href=`/courses/${curso}`
    })
}