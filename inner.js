const e = document.getElementById('parent')
console.log(e.innerHTML)
const l = '書き換えました'
e.innerHTML = `<p id="child">HTMLごと${l}</p>`
console.log(e.innerHTML)