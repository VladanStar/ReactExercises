class Show {
    constructor(id, name, image = "") {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}
const createShows = shows => {
    let listOfShows = [];

    shows.forEach((element, index) => {
        if (element.rating.average > 7) {
            if (index < 50) {
                listOfShows.push(new Show(element.id, element.name, element.image.medium));
            }
        }
    });

    return listOfShows
}

const searchShow = showList => {
    let show10 = [];

    showList.forEach(({ show }, index) => {
        if (index < 10) {
            let showName = new Show(show.id, show.name);
            show10.push(showName);
        }
    })

    return show10
}

const addToStorage = (key, value) => {
    localStorage.setItem(key, value);
}

const getSingleShowID = (key) => {
    return localStorage.getItem(key);
}

export{
    Show,
    createShows,
    searchShow,
    addToStorage,
    getSingleShowID


}