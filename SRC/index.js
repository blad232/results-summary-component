let rightCard = document.getElementsByClassName("right__card");
let boton = document.getElementById("right-card__boton");
fetch("./SRC/data.json")
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
    div.setAttribute("class", "right-card__row");
    div.setAttribute("id", `right-card__row-${num}`)
    div.innerHTML += `<p class="right-card__text" id="icon__text${num}"><img class="right-card__icons" id="imagen-${num}" src="${e.icon}" alt="icon">${e.category}</p> <p class="right-card__text-score"><span class="span-score">${e.score}</span>   /   100</p>`;
    // rightCard[0].appendChild(div);
    boton.insertAdjacentElement("beforebegin", div);

}
