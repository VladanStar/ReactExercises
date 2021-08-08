let accountsTableBody = document.querySelector("#accounts-table-body");
// let accountsViewBtn = document.querySelector('[href="accounts-view"]');
// let addAccountsViewBtn = document.querySelector('[href="add-account-view"]');
let allLinks = document.querySelectorAll(".nav-link");
let accountsView = document.querySelector("#accounts-view");
let addAccountView = document.querySelector("#add-account-view");
let views = document.querySelectorAll(".view");
let idInput = document.querySelector('[placeholder="id"]');
let nameInput = document.querySelector('[placeholder="name"]');
let lastNameInput = document.querySelector('[placeholder="lastname"]');
let emailInput = document.querySelector('[placeholder="email"]');
let phoneInput = document.querySelector('[placeholder="phone"]');
let saveBtn = document.querySelector("#save");

saveBtn.addEventListener("click", saveAccount);
function saveAccount() {
  const newAccount = {
    id: idInput.value,
    name: nameInput.value,
    lastname: lastNameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
  };
  db.push(newAccount);
  idInput.value ="";
  nameInput.value="";
  lastNameInput.value="";
  emailInput.value="";
  phoneInput.value="";
  createAccountsTable();
  showView("#accounts-view");
}

// iz nekog razloga mora da bude ovde inace ne povezuje sa db
console.log(db);

// // Add accounts button
// addAccountsViewBtn.addEventListener('click', function(e){
//     e.preventDefault();
// addAccountView.style.display ="block";
// accountsView.style.display ="none";
// });

// // Accounts button

// accountsViewBtn.addEventListener('click', function(e){
//     e.preventDefault();
// // mora da se obrne redosled, ukoliko se samo prekopira i zameni ne radi
// accountsView.style.display ="block";
// addAccountView.style.display ="none";
// });

for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener("click", showView);
}

function showView(e) {
  for (let i = 0; i < views.length; i++) {
    views[i].style.display = "none";
  }

  if (e instanceof Event) {
    e.preventDefault();
    let id = `#${this.getAttribute("href")}`;
    document.querySelector(id).style.display = "block";
  } else {
    document.querySelector(e).style.display = "block";
  }
}

createAccountsTable();

function createAccountsTable() {
  let htmlAccounts = "";
  for (let i = 0; i < db.length; i++) {
    const account = db[i];
    htmlAccounts += `
        <tr>
        <td>${account.id}</td>
        <td>${account.name}</td>
        <td>${account.lastname}</td>
        <td>${account.email}</td>
        <td>${account.phone}</td>
    </tr>
    `;
  }
  accountsTableBody.innerHTML = htmlAccounts;
}
