var ui_Module =(()=>{
        //MAIN PAGE
        const createMainPage = (showsList)=>{
        const $mainRow = $('#main-row');
        
        
        showsList.forEach(({image,name,id}) => {
            const div= `<div class="col-md-4 col-show single-show" data-id="${id}"><img src="${image}" alt="show" /><h3 class="show-title">${name}</h3></div>`;
            $mainRow.append(div);
        });
    }

 
    //SEARCH PAGE
    const createSearchList = (searchList) =>{
        const $searchResults = $('.search-results');
        $searchResults.empty()
        searchList.forEach((element) =>{
           const li = `<li data-id="${element.id}">${element.name}</li>`;
           $searchResults.append(li);

        })
    }


    //SINGLE SHOW
    const createSingleShow = currentShow => {
                const imgDisplay = $(".single-show-img");
                const titleDisplay = $(".single-show-title");
                const summaryDisplay = $(".single-show-details");
                
                imgDisplay.append(`<img src="${currentShow.image.original}"/>`);
                titleDisplay.text(`${currentShow.name}`);
                summaryDisplay.html(`${currentShow.summary}`);
     }


    return {
        createMainPage,
        createSearchList,
        createSingleShow
    }     

})()




