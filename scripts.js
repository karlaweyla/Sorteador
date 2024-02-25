function generateNumber() {

    const min = Math.ceil(document.querySelector('.placeone').value)
    const max = Math.floor(document.querySelector('.placetwo').value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

  alert(result)


}
