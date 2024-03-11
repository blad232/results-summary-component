let rightCard = document.getElementsByClassName("right__card");
let boton = document.getElementById("boton");
fetch("./data.json")
    .then(res => {
        return res.json();
    })


    .then(response => {

        for (let i = 0; i < response.length; i++) {
            console.log(response);
            // crearElem(response[i].icon);
            crearElem2(response[i], i);
        }
    })
function crearElem(i) {
    let img = document.createElement("img");

    img.setAttribute("class", "icon");
    img.src = i;
    document.body.append(img);
}
function crearElem2(e, num) {
    let div = document.createElement("div");
    div.setAttribute("class", "row");
    div.innerHTML += `<p class="text${num}"><img class="images" id="imagen-${num}" src="${e.icon}" alt="icon">${e.category}</p> <p class="text">${e.score} / 100</p>`;
    // rightCard[0].appendChild(div);
    boton.insertAdjacentElement("beforebegin", div);

}