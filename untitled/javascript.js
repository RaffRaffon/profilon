// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function changeHeaders(){
    document.getElementById('yup').innerHTML=document.getElementById('headerInput').value
    document.getElementById('text').innerHTML=document.getElementById('textInput').value
}

function createItem() {

    // 1. need to get values from the input inside the document
    var itemName = document.getElementById('item-name').value;
    var itemQuantity = document.getElementById('item-quantity').value;

    // 2. create a new object with the relevant properties
    var item = {};
    item.name = itemName;
    item.quantity = itemQuantity;

    // 3. add the new object to the array (container)
    insertToStorage(item)

    // 4. clear the old values from the document inputs
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';

    // 5. update the table with the new object
    readItems();
}

function readItems() {
    var itemsArr = getFromStorage();

    if (itemsArr == null) {
        return;
    }

    // 1. select the table body
    var tableSelector = document.querySelector('#items-table > tbody');

    // 2. create the html code that represent the *rows* of the table body
    var tbody = '';
    for (var i = 0; i < itemsArr.length ; i++) {
        var item = itemsArr[i];

        var tr = '<tr>' + '<td>' +item.name + '</td>' + '<td>' +item.quantity + '</td>' +'<td></td>' + '</tr>'
        tbody = tbody + tr;
    }

    // 3. inject the html's table body to the tableSelector
    tableSelector.innerHTML = tbody;
}

function insertToStorage(item) {
    // 1. need to get the data from the storage

    var parsedData = getFromStorage();
    // 2. need to insert the new item to the data

    if (parsedData==null) {
        parsedData=[]
    }
    parsedData.push(item);

    // 3. need to store the data in the storage
    localStorage.setItem('itemsTable', JSON.stringify(parsedData));
}

function getFromStorage() {
    // 1. need to get the data from the storage
    var data = localStorage.getItem('itemsTable')
    var parsedData = JSON.parse(data);
    return parsedData;
}

readItems();

var counter=0
function makeIcon(){
    if (counter===0) {
        document.getElementById("buttonsTest").innerHTML = "<a class=\"column3\" href=\"https://www.instagram.com/\"><img height=\"32\" id=\"instagram\" src=\"photos/instagram-new.png\"\n" +
            "                                                                    width=\"32\"></a>"
    }
    if (counter===1) {
        document.getElementById("buttonsTest").innerHTML = "<a class=\"column3\" href=\"https://www.instagram.com/\"><img height=\"32\" id=\"instagram\" src=\"photos/instagram-new.png\"\n" +
            "                                                                    width=\"32\"></a><img height=\"32\" src=\"photos/facebook-new.png\" width=\"32\">"
    }
    if (counter===2) {
        document.getElementById("buttonsTest").innerHTML = "<a class=\"column3\" href=\"https://www.instagram.com/\"><img height=\"32\" id=\"instagram\" src=\"photos/instagram-new.png\"\n" +
            "                                                                    width=\"32\"></a><img height=\"32\" src=\"photos/facebook-new.png\" width=\"32\"><img height=\"32\" src=\"photos/whatsapp.png\" width=\"32\">"
    }
    counter++
}

num1=30
num2=40

for (var i=10;i>1;i-5) {
    console.log(i)
}