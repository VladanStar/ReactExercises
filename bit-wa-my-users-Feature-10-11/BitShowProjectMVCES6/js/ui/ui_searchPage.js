//SEARCH PAGE
const createSearchList = (searchList) =>{
    const $searchResults = $('.search-results');
    $searchResults.empty()
    searchList.forEach((element) =>{
       const li = `<li data-id="${element.id}">${element.name}</li>`;
       $searchResults.append(li);

    })
}
export {
    createSearchList
}