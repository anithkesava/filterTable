let tbody = document.getElementById('tbody');
let th = document.getElementsByTagName('th');
let btn = document.getElementById('btn');

let language = document.getElementById('languageId');
let framework = document.getElementById('frameworkId');
let years = document.getElementById('YearsId');

function clearTextBox() {
        language.value = '';
        framework.value = '';
        years.value = '';
    }
btn.addEventListener('click', () => {

    let content = { Language: language.value, Framework: framework.value, Years: years.value };
        if (content.Language.trim() !== "" && content.Framework.trim() !== "" && content.Years.trim() !== "") {

        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
    
        td1.textContent = language.value;
        td2.textContent = framework.value;
        td3.textContent = years.value;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
        clearTextBox();
    } else {
        alert("some fields are empty");
        return;
    }
})

let search = document.getElementById('search');
search.addEventListener('input', () => {
    let text = search.value.trim();
    let alltr = document.querySelectorAll('#tbody tr');
    alltr.forEach((c) => {
        let row = c.textContent.toLowerCase();
        c.style.display = row.includes(text) ? '' : 'none';
    })
   
})

