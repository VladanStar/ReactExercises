class Show {
    constructor(id, name, image = '') {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}

const createShow = (shows) => { //Recive argument from controler response.
    let listOfShows = [];

    shows.forEach((element, index) => { //Now is single element from response.
        if (element.rating.average > 7) {
            if (index < 50) {
                listOfShows.push(new Show(element.id, element.name, element.image.medium)) //We push instance in array.
            }
        }
    });
    return listOfShows;

}

const createSearchShow = (show) => { //Recive argument from controler response from search.
    let listOfSearchShow = [];

    show.forEach((element, index) => { //Now is single element from response.
        if (index < 10) {
            listOfSearchShow.push(new Show(element.show.id, element.show.name)) //We push instance in array.
        }
    });

    return listOfSearchShow;
}


export{
    Show,
    createShow,
    createSearchShow
}