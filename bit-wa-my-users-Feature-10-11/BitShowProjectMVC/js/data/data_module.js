//var data_module = (() => {

    const showAll = {
        url: "https://api.tvmaze.com/shows",
        urlSearch: "http://api.tvmaze.com/search/shows?q="
    }

    import {Cast,createCast} from './data_cast.js';
    import {Season,createSeason } from './data_season.js';
    import {Show,createShows,searchShow,addToStorage,getSingleShowID} from './data_show.js';
    import {singleShow,createSingleShow} from './data_singleShow.js';

   export {
    Cast,
    createCast,
    Season,
    createSeason, 
    Show,
    createShows,
    searchShow,
    addToStorage,
    getSingleShowID,
    singleShow,
    createSingleShow,
    showAll
   }
   /* class Show {
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

    class singleShow extends Show {
        constructor(id, name, image, summary) {
            super("", name, image);
            this.summary = summary;
        }
    }

    const createSingleShow = show => {
        const currentShow = new singleShow("", show.name, show.image, show.summary);
        return currentShow
    }

    class Cast {
        constructor(person) {
            this.person = person;
        }
    }
    const createCast = cast => {
        let castList = [];

        cast.forEach((element, index) => {
            castList.push(new Cast(element.person));
        });

        return castList
    }

    class Season {
        constructor(premiereDate, endDate) {
            this.premiereDate = premiereDate;
            this.endDate = endDate;
        }
    }
    const createSeason = seasons => {
        const seasonsList = [];

        seasons.forEach(season => {
            seasonsList.push(new Season(season.premiereDate, season.endDate));
        })

        return seasonsList;
    }
    
    return {
        createShows,
        showAll,
        searchShow,
        addToStorage,
        getSingleShowID,
        createSingleShow,
        createCast,
        createSeason
    }

})()
*/