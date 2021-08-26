// import * as data_module from './data/data_module.js';
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

///////IMPORT FROM UI//////
//UI.
//createMainPage
//createSearchList
//createSingleShow
///////////////////////////


var ctrlModule = ((DATA, UI) => {
     //MAIN PAGE
    function mainPage() { //Fetch from Web service and get Json data with Jquery Ajax
        const requet = $.get(DATA.showUrl.url).done((response) => { //Response is JSON object 
            const shows = DATA.createShow(response); //Create Shows
            UI.createMainPage(shows) //Append show to Page


        }).fail(() => {
            alert("Your request failed");
        })

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
        
                let requestSearch = $.get(searchShowName).done((response) => { //Response is JSON object 
                    const shows = DATA.createSearchShow(response); //Create Shows
                    UI.createSearchList(shows) //Append show to Page
                    //Click on list 
                    $('li').on("click", function () {
                        const currentID = this.getAttribute("data-id");
                        DATA.addToStorage("showID", currentID);
                        window.location.href = './show.html';
                    });
                }).fail(() => {
            alert("Your request failed");
        })
    }

    //SINGLE SHOW
        $(document).on("click", ".single-show", function () {
        const currentID = this.getAttribute("data-id");
        DATA.addToStorage("showID", currentID);
        window.location.href = './show.html';
    });

    return {
        mainPage,
        
    }

})(data_Module, ui_Module)



