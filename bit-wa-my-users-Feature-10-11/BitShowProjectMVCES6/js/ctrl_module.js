import * as DATA from './data/data_module.js';
///////IMPORT FROM DATA////
// DATA.
// showUrl  
// Show,
// createShow,
// createSearchShow,
// addToStorage,
// getFromStorage
// createSingleShow
///////////////////////////
import * as UI from './ui/ui_module.js';
///////IMPORT FROM UI//////
//UI.
//createMainPage
//createSearchList
//createSingleShow
///////////////////////////

     //MAIN PAGE
    function mainPage() { //Fetch from Web service and get Json data with Fetch

        fetch(DATA.showUrl.url).then( (response)=> {//Response is Promise object
            return response.json();
        }).then(function (myJson) {
            const shows = DATA.createShow(myJson); //Create Shows
            UI.createMainPage(shows) //Append show to Page
        }).catch((myJsonError)=>{
            alert("Your request failed",myJsonError);
        });
    }
    //SEARCH INPUT
    const searchInput = $(".form-control");
    searchInput.on("keyup", searchPage);

    function searchPage() {
                let searchLink = DATA.showUrl.urlSearch;
                let searchVal = searchInput.val();
                let searchShowName = `${searchLink}${searchVal}`;
        
                if (searchInput.val().length < 3) {
                    return;
                }
                fetch(searchShowName).then( (response)=> {//Response is Promise object
                    return response.json();
                }).then(function (myJson) {
                    const shows = DATA.createSearchShow(myJson); //Create Shows
                    UI.createSearchList(shows) //Append show to Page

                    $('li').on("click", function () {
                        const currentID = this.getAttribute("data-id");
                        DATA.addToStorage("showID", currentID);
                        window.location.href = './show.html';
                    });
                }).catch((myJsonError)=>{
                    alert("Your request failed",myJsonError);
                });        
    }
    //SINGLE SHOW
        $(document).on("click", ".single-show", function () {
        const currentID = this.getAttribute("data-id");
        DATA.addToStorage("showID", currentID);
        window.location.href = './show.html';
    });
    
    export {
        mainPage,
        
    }
$(mainPage())


