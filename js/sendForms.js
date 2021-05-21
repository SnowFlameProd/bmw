const server = 'https://jsonplaceholder.typicode.com/posts'

const sendData = (data, callBack, falseCallBack) => {
  const request = new XMLHttpRequest();
  request.open('POST', server);

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    if (request.status === 200 || request.status === 201) {
      const response = JSON.parse(request.responseText)
      callBack(response.id);
    } else {
      falseCallBack(request.status)
      throw new Error(request.status)
    }
  })

  request.send(data)
}

const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {};
    for (const elem of form.elements) {
      if (elem.name) {
        data[elem.name] = elem.value.trim()
      }
    }

    const smallElem = document.createElement('small');
    const formButton = form.elements[form.elements.length - 1];
    
    sendData(JSON.stringify(data),
    (id) => {
      formButton.disabled = true;
      formButton.style.cursor = 'not-allowed';
      smallElem.innerHTML = 'Ваша заявка №' + id + '!<br>В ближайшее время с вами свяжемся!';
      smallElem.style.color = 'green';
      form.append(smallElem)
      setTimeout(() => {
        smallElem.remove();
        formButton.disabled = false;
        formButton.style.cursor = 'pointer';
      }, 5000)
    },
    () => {
      formButton.disabled = true;
      formButton.style.cursor = 'not-allowed';
      smallElem.innerHTML = 'Технические неполадки. Попробуйте оставить заявку позже.'
      smallElem.style.color = 'red';
      form.append(smallElem)
      setTimeout(() => {
        smallElem.remove();
        formButton.disabled = false;
        formButton.style.cursor = 'pointer';
      }, 5000)
    });

    form.reset();
  })
}

formElems.forEach(formHandler)