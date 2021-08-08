let accountsTableBody = document.querySelector("#accounts-table-body");
let accountsViewBtn = document.querySelector('[href="accounts-view"]');
let addAccountsViewBtn = document.querySelector('[href="add-account-view"]');
let accountsView = document.querySelector('#accounts-view');
let addAccountView = document.querySelector('#add-account-view');

console.log(db);
addAccountsViewBtn.addEventListener('click', function(e){
    e.preventDefault();
addAccountView.style.display ="block";
accountsView.style.display ="none";
});


createAccountsTable();


function createAccountsTable(){
    let htmlAccounts = '';
    for(let i = 0; i<db.length;i++){
        const account = db[i];
        htmlAccounts +=`
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