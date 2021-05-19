const featureLinksAll = document.querySelectorAll('.feature__link');
const featureSubsAll = document.querySelectorAll('.feature-sub')

featureLinksAll.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    featureLinksAll.forEach((featureLink, i) => {
      i === index ? featureLink.classList.toggle('feature__link_active') : featureLink.classList.remove('feature__link_active')
    })

    featureSubsAll.forEach((featureSub, i) => {
      i === index ? featureSub.classList.toggle('hidden') : featureSub.classList.add('hidden')
    })
  })
})  

featureLinkElems.forEach((btn, index) => {
  btn.addEventListener('click', () => {
      featureSubElems.forEach((featureSubElem, i) => {
          console.log(i, index);
          i === index ? featureSubElem.classList.toggle('hidden') : featureSubElem.classList.add('hidden');
      })
      featureLinkElems.forEach((featureLinkElem, i) => {
          i === index ? featureLinkElem.classList.toggle('feature__link_active') : featureLinkElem.classList.remove('feature__link_active');
      })   
  })
})