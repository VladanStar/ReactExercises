let accountTableBody = document.querySelector('#accounts-table-body');

createAccountsTable();
function createAccountsTable(){
    let htmlAccounts = "";
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
    `
    }
   accountTableBody.innerHTML = htmlAccounts;

}