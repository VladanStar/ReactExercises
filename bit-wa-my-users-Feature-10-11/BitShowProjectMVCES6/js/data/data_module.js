
    const showUrl = {
        url: "https://api.tvmaze.com/shows",
        urlSearch: "http://api.tvmaze.com/search/shows?q="
    }
    
    import { Show,createShow,createSearchShow} from './data_show.js';
    import { addToStorage,getFromStorage} from './data_utilite.js'
    import { SingleShow, createSingleShow} from './data_singleShow.js';

   export {
    addToStorage,
    getFromStorage,
    Show,
    createShow,
    createSearchShow,
    SingleShow, 
    createSingleShow,
    showUrl
   }
  