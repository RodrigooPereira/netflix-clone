const question = document.getElementsByClassName('question');

for(let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

