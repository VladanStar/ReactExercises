//SINGLE SHOW
const createSingleShow = currentShow => {
    const imgDisplay = $(".single-show-img");
    const titleDisplay = $(".single-show-title");
    const summaryDisplay = $(".single-show-details");

    imgDisplay.append(`<img src="${currentShow.image.original}"/>`);
    titleDisplay.text(`${currentShow.name}`);
    summaryDisplay.html(`${currentShow.summary}`);
}

export{
    createSingleShow
}