function setValues() {
    document.getElementById("shop-name-editable").innerHTML = document.getElementById("shop-name-input").value;
    document.getElementById("shop-description-editable").innerHTML = document.getElementById("shop-description-input").value;
}

function showHideMenu() {
    if (window.getComputedStyle(document.getElementById("interaction-menu")).left == "10px") {
        document.getElementById("interaction-menu").style.left = "-300px";
        document.getElementById("menu-show-hide-button").innerHTML = "➡";
    }
    else {
        document.getElementById("interaction-menu").style.left = "10px";
        document.getElementById("menu-show-hide-button").innerHTML = "⬅";
    }
}

function countItems() {
    return document.getElementsByClassName("item-editable").length;
}

function addItem() {
    var itemIndex = countItems() + 1;
    
    var itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "item-editable");
    var idValue = "item" + itemIndex.toString() + "-editable";
    itemDiv.setAttribute("id", idValue);

    var itemHeader = document.createElement("h5");
    itemHeader.innerHTML = "Przedmiot " + itemIndex.toString();
    itemDiv.appendChild(itemHeader);

    var itemImg = document.createElement("img");
    itemImg.setAttribute("src", "tel.jpg");
    itemImg.setAttribute("alt", "telefon");
    itemDiv.appendChild(itemImg);

    document.getElementById("items-container-editable").appendChild(itemDiv);
}
