

//Glavna tabela body
var tb = document.getElementById('mainbody');
//Dugme Add Accounts
var addAcc = document.getElementById('addAcc');
//Forma za Add Contacts
var formRow = document.getElementById('formrow');
//Glavna tabela naslovni row
var mainRow = document.getElementById('mainrow');
//Dugme za Accounts
var acc = document.getElementById('acc');
//Dugme unutar forme za dodavanje usera
var adduser = document.getElementById('adduser');
//Dugme za Edit Accounts
var editacc = document.getElementById('editAcc');
//Dugme za brisanje unutar Edit Accounts (crveno)
var deletebtn;
//Dugme za brisanje unutar Edit Accounts(zuto)
var editbtn;
//Dugme za izmene unutar Edit Accounts(plavo)
var edituser = document.getElementById('edituser')
var findplace;



adduser.addEventListener('click', insertUser);
addAcc.addEventListener('click', showForm);
acc.addEventListener('click', showAcc);
editacc.addEventListener('click', editTable);
edituser.addEventListener('click', inputEditUser);




var db;
fetch('http://localhost:3000/users/')
  .then((response) => {
    return response.json();
  }).then((response) => {
    db = response;
    createTable()
  })


//Napravi tabelu.
function createTable() {
  var text = '';
  for (var i = 0; i < db.length; i++) {
    text += '<tr><td>' + db[i].id + '</td><td>' + db[i].name + '</td><td>' + db[i].deposit + '</td><td>' + db[i].cCard + '</td></tr>';

  }
  tb.innerHTML = text;
}

//Prikazi formu za input.
function showForm() {

  formRow.style.display = "block";
  mainRow.style.display = "none";
  editformrow.style.display = "none";
}


//Prikazi tabelu.
function showAcc() {

  formRow.style.display = "none";
  mainRow.style.display = "block";
  editformrow.style.display = "none";


  createTable()
}


var x;
//Ubaci novogo usera meni.
function insertUser() {
  var iduser = document.querySelector('input[name="id"]');
  var nameuser = document.querySelector('input[name="name"]');
  var deposit = document.querySelector('input[name="deposit"]');
  var ccard = document.querySelector('input[name="ccard"]');

  var newUser = {
    name: nameuser.value,
    deposit: deposit.value,
    cCard: ccard.value

  }

  var url ='http://localhost:3000/users';
  var option = {
    method: 'POST',
    mode: 'cors',
    body:  JSON.stringify(newUser),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
 

  fetch(url,option).then(function (data) {
    return data.json()
    console.log(data);

  }).then(function (data) {
    console.log(data);

  })

  showAcc();
}


//Izmeni postojece usera meni
function editTable() {
  showAcc()


  var text = '';
  for (var i = 0; i < db.length; i++) {
    text += '<tr><td>' + db[i].id + '</td><td>' + db[i].name + '</td><td>' + db[i].deposit + '</td><td>' + db[i].cCard + '</td> <td><button id="' + db[i].id + '" class="btn btn-sm btn-danger delete" value="Delete">Delete</button></td> <td><button class="btn btn-sm btn-warning edit" value="Edit" data-pos="' +i + '">Edit</button></td></tr>';

  }

  tb.innerHTML = text;
  //Uzimamo oba dugmeta iz Edit Acc i dodeljumeo  slusace.
  deletebtn = document.getElementsByClassName('delete');
  editbtn = document.getElementsByClassName('edit')


  for (var i = 0; i < deletebtn.length; i++) {
    deletebtn[i].addEventListener('click', deleteUser)
  }
  for (var i = 0; i < editbtn.length; i++) {
    editbtn[i].addEventListener('click', editUser);
  }



}

//Brisanje BAS TOG elementa. this.id poziva deletebtn[i]
function deleteUser() {
  
  var url ='http://localhost:3000/users/' + this.id;
  var option = {
  method: 'DELETE',
  mode: 'cors',
  headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
 

  fetch(url,option).then(function (data) {
    return data.json()
    console.log(data);

  }).then(function (data) {
    console.log(data);

  })


}
//Editovanje BAS TOG elementa. this.getAttribute('data-pos') poziva editbtn[i]
function editUser() {
  mainRow.style.display = "none";
  editformrow.style.display = "block";

  fetch('http://localhost:3000/users/')
  .then((response) => {
    return response.json();
  }).then((response) => {
    db = response;
    
  })

  console.log(db);
  
  var editid = document.querySelector('input[name="editid"]');
  var editname = document.querySelector('input[name="editname"]');
  var editdeposit = document.querySelector('input[name="editdeposit"]');
  var editccard = document.querySelector('input[name="editccard"]');
  findplace = this.getAttribute('data-pos');

  //Pravljenje sticky form  odnosno dodeljivanje vrednosti iz baze
  editid.value = db[findplace].id;
  editname.value = db[findplace].name;
  editdeposit.value = db[findplace].deposit;
  editccard.value = db[findplace].cCard;

}
//Dugme da se ubaci izmenjeni user na isto mesto.
function inputEditUser() {

  var editid = document.querySelector('input[name="editid"]');
  var editname = document.querySelector('input[name="editname"]');
  var editdeposit = document.querySelector('input[name="editdeposit"]');
  var editccard = document.querySelector('input[name="editccard"]');


  var newUser = {
    id: editid.value,
    name: editname.value,
    deposit: editdeposit.value,
    cCard: editccard.value

  }
  var url ='http://localhost:3000/users/' + editid.value;
  var option = {
    method: 'PUT',
    mode: 'cors',
    body:  JSON.stringify(newUser),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }

  fetch(url,option).then(function (data) {
    return data.json()
    console.log(data);

  }).then(function (data) {
    console.log(data);

  })


  createTable()
  showAcc();

}


var date = document.getElementById('date');

var timer = document.getElementById('time');
setInterval(time, 1000)
setInterval(day, 1000)
function time() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  timer.innerHTML = h + 'h:' + m + 'm:' + s + 's';
};

function day() {
  var now = new Date();
  var d = now.getDate();
  var m = now.getMonth() + 1;
  var y = now.getFullYear();

  date.innerHTML = d + '.' + m + '.' + y;
}






















  // var pos = document.getElementsByTagName('h1')[0]
//  console.log(pos.getAttribute('data-pos'));
