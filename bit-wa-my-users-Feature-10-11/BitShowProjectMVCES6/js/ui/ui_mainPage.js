    //MAIN PAGE
    const createMainPage = (showsList)=>{
        const $mainRow = $('#main-row');
  
        showsList.forEach(({image,name,id}) => {
            const div= `<div class="col-md-4 col-show single-show" data-id="${id}"><img src="${image}" alt="show" /><h3 class="show-title">${name}</h3></div>`;
            $mainRow.append(div);
           
            
        });
    }

    export{
        createMainPage
    }