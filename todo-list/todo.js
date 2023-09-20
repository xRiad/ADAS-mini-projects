const inp = document.querySelector('input')
const list = document.querySelector('.list-elems')

var elemIndex = 0

var elems = []

function load () {
    if (localStorage.el) {
        elems = JSON.parse(localStorage.el)
        elems.forEach(el => {
            list.insertAdjacentHTML("beforeend", el.markup)
        })
    }
}

inp.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        console.log(inp.value)
        list.insertAdjacentHTML("beforeend", `<div class="elem"><div>${inp.value}</div><div class="close"><i onclick="remove(event)" class="fa-sharp fa-solid fa-xmark"></i><div></div>`)
        elems.push({ index: elems.length, markup: `<div class="elem ${elems.length}"><div>${inp.value}</div><div class="close"><i onclick="remove(event)" class="fa-sharp fa-solid fa-xmark"></i><div></div>` })
        localStorage.setItem("el", JSON.stringify(elems))
    }
})

function remove (e) {
    e.currentTarget.parentElement.parentElement.remove()
    let found = elems.find(({ index }) => {
        return index === parseInt(e.currentTarget.parentElement.parentElement.classList[1])
    });
    elems.indexOf(found)
    elems.splice(elems.indexOf(found), 1)
    localStorage.setItem("el", JSON.stringify(elems))
}

function removeAll () {
    const els =  document.querySelectorAll('.elem')
    els.forEach((el) => {
        el.remove()
    })
    localStorage.clear()
}