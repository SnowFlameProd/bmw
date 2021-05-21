const featureLinkElems = document.querySelectorAll('.feature__link');
const featureSubElems = document.querySelectorAll('.feature-sub')

featureLinkElems.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    featureLinkElems.forEach((featureLink, i) => {
      i === index ? featureLink.classList.toggle('feature__link_active') : featureLink.classList.remove('feature__link_active')
    })

    featureSubElems.forEach((featureSub, i) => {
      i === index ? featureSub.classList.toggle('hidden') : featureSub.classList.add('hidden')
    })
  })
})