function appendInfo(val, div) {
    div.innerText = "";

    let p = document.createElement("p");
    p.innerText = val;

    div.append(p);
}

export { appendInfo };