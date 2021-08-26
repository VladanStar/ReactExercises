var data_Module = (() => {
    const showUrl = {
        url: "https://api.tvmaze.com/shows",
        urlSearch: "http://api.tvmaze.com/search/shows?q="
    }

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


    const addToStorage = (key, value) => { // Method to put instance in local Storage.
        localStorage.setItem(key, value);
    }

    const getFromStorage = (key) => { // Method to retrive instance from storage
        return localStorage.getItem(key);
    }


    return {
        showUrl,
        createShow,
        createSearchShow,
        addToStorage,
        getFromStorage,
        createSingleShow

    }
})()






































