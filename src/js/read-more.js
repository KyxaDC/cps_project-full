const btnReadMore = document.querySelector('.info__btn-read-more')
const infoParagraph = document.querySelector('.info__paragraph-two')
const infoText = document.querySelector('.info__text')




if(window.innerWidth >= 1440) {
    
}

btnReadMore.addEventListener('click', ()=>{
    btnReadMore.classList.toggle('info__btn-read-more--pressed')
    btnReadMore.classList.contains('info__btn-read-more--pressed')?
    btnReadMore.innerHTML = 'Скрыть': btnReadMore.innerHTML = 'Читать далее';
    infoParagraph.classList.toggle('info__paragraph-two--visible')
    infoText.classList.toggle('info__text--visible')
})

