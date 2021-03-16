let list = document.querySelector('.list');

let addButon = document.querySelector('.addButton');

let popupButton = document.querySelector('.popupButton');

let closeButton = document.querySelector('.close');

let inputCode = document.querySelector('.inputCode');

let inputDescription = document.querySelector('.inputDescription');

let code = document.querySelector('.code');

let product = document.querySelector('.product');

let cleanButton = document.querySelector('.cleanButton');

let productArr = [];



if(localStorage.getItem('code')){
    productArr = JSON.parse(localStorage.getItem('code'));
    diplayInfo();
}


cleanButton.addEventListener('click', function(){
    let con = confirm("Видалити всі товари?");
    if(con) {
        localStorage.clear();
        document.location.reload();
    }
})

popupButton.addEventListener('click', function(){
    document.querySelector('.input-box').style.top = '50%';
})

closeButton.addEventListener('click', function(){
    document.querySelector('.input-box').style.top = '-150%';
})

//Сорі, тут треба було поіншому вирішити цю таску, але мені тільки так прийшло в голову
inputCode.addEventListener('input', function(){
    if(inputCode.value.length > 7) {

        inputCode.style.borderColor="#000000";
        
        if(inputDescription.value.length > 2){
           addButon.disabled = false; 
           addButon.style.opacity = '1';
        }
        
        
    }else{
        addButon.disabled = true;
        inputCode.style.borderColor="#d1cfcf";
        addButon.style.opacity = '0.5';
    }
})

inputDescription.addEventListener('input', function(){
    if(inputDescription.value.length > 2 && inputCode.value.length > 7) {
        addButon.disabled = false;
        addButon.style.opacity = '1';
        inputDescription.style.borderColor="#000000";
    }else{
        addButon.disabled = true;
        inputDescription.style.borderColor="#d1cfcf";
        addButon.style.opacity = '0.5';
    }
})


addButon.addEventListener('click' , function(){ 

    let arrList = {
        list: inputCode.value,
        description: inputDescription.value
    };

    productArr.push(arrList);

    diplayInfo();
    localStorage.setItem('code', JSON.stringify(productArr));
    inputCode.value = '';
    inputDescription.value = '';
    inputDescription.style.borderColor="#d1cfcf";
    addButon.style.opacity = '0.5';
    inputCode.style.borderColor="#d1cfcf";
    addButon.disabled = true;
    document.querySelector('.input-box').style.top = '-150%';
})

function diplayInfo(){
    let diplayInfo = '';
    productArr.forEach( el => {
        diplayInfo += `
        <li class="list-item">Штрих-код: 
        </br> <span class="code">${el.list}</span> 
        </br> <span class="product">${el.description}</span>
        </li>
        `;

        list.innerHTML = diplayInfo;
    })
}
