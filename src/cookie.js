/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующей cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если добавляемая cookie не соответсвует фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующей cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');
/*
const tableLine = document.createElement('tr');
const nameCookie = document.createElement('th');
const valueCookie = document.createElement('th');
const deleteButton = document.createElement('button');
*/
let replayName = [];

function plusElement(x) {

    replayName.push(x);

    return replayName;
}

filterNameInput.addEventListener('keyup', function() {
    // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie
});

addButton.addEventListener('click', () => {
    // здесь можно обработать нажатие на кнопку "добавить cookie"
    const tableLine = document.createElement('tr');
    const nameCookie = document.createElement('th');
    const valueCookie = document.createElement('th');
    const deleteButton = document.createElement('button');

    document.cookie = `${addNameInput.value}=${addValueInput.value}`;
    listTable.appendChild(tableLine);
    tableLine.setAttribute('id', 1 + addNameInput.value);



    let l = replayName.length;

    for (let i = 0; i <= l; i++) {
        if (replayName[i] !== addNameInput.value) {
            tableLine.appendChild(nameCookie);
            nameCookie.innerHTML = addNameInput.value;
            tableLine.appendChild(valueCookie);
            valueCookie.innerHTML = addValueInput.value;
            valueCookie.setAttribute('id', addNameInput.value);
            tableLine.appendChild(deleteButton);
            deleteButton.textContent = 'удалить cookie';
        } else {
            let elemValue = document.getElementById(addNameInput.value);
            let elemLine = document.getElementById(1 + addNameInput.value)
            console.log(elemLine);
            elemValue.innerHTML = addValueInput.value;

            tableLine.remove();
            //homeworkContainer.removeChild(elemLine);
            addNameInput.value = '';
            addValueInput.value = '';
        }
        //console.log('repeat');
    }


    replayName = plusElement(addNameInput.value);
    console.log(replayName);

    
    //nameCookie.innerHTML = addNameInput.value;
    let name = addNameInput.value;


    deleteButton.addEventListener('click', () => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        listTable.removeChild(tableLine);


    })

    addNameInput.value = '';
    addValueInput.value = '';

})
