"use strict";

let mainTextAddY = document.getElementById("mainTextAddY");
let mainTextAddN = document.getElementById("mainTextAddN");
let mainText = document.getElementById("mainText");

const onMainTextYClick = () => mainText.removeAttribute('disabled');


mainTextAddY.addEventListener('click', onMainTextYClick);

mainTextAddN.addEventListener('click', onMainTextNClick);


function getData() {
    let newHTML;
    //приём данных из формы
    let title = document.getElementById('title').value; // название
    let description = document.getElementById('description').value;// слоган
    let menu = document.getElementsByName('menu').value;// меню навигации
    let LogoImg = document.getElementById('logoImg').value;// логотип
    let mainText = document.getElementsByName('mainTextAdd').value;// основной текст
    let colorTheme = document.getElementById('colorTheme').value;// цветовая тема
    let colorText = document.getElementById('colorText').value;// цвет текста

    document.body.style.backgroundColor = colorTheme;

    //cоздание итоговой строки
    newHTML = `<div id="main"><header><img src="${LogoImg}" alt="logo"></div>`;
    newHTML += `<h1>${title}</h1>`;
    newHTML += `<h2>${description}</h2></header>`;

    //создание строки пунктов меню
    let list = document.getElementsByName('list');
    let li = '';

    for (let i = 0; i < list.length; i++) {
        if(list[i].checked) {
            li += `<li><a href = "#">${list[i].value}</a></li>`;
        };
    };
    newHTML += li;
    
    let menuItem;

    //выбор шаблона
    switch(menu) {
        case 'horizontal':
            menuItem = `<section class="finalPlacementVertical"><nav id="navHorizontal">${menu}</nav>`;
            break;
        case 'verticalLeft':
            menuItem = `<section class="finalPlacementLeft"><nav id="navVerticalLeft">${menu}</nav>`;
            break;
        case 'verticalRight':
            menuItem = `<section class="finalPlacementRight"><nav id="navVerticalRight">${menu}</nav>`;
            break;
        default:
            menuItem = `<section class="finalPlacement"><nav id="navHorizontal">${menu}</nav>`;
    };
    newHTML += menuItem;

    //основной текстовый блок
    let p = `<p class = "paragraph" style="color:'${colorText}'">${mainText}</p></section></div>`;
    newHTML += p;

    document.body.innerHTML = newHTML;
};