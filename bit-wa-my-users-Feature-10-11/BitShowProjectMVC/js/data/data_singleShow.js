
import {Show,
    createShows,
    searchShow,
    addToStorage,
    getSingleShowID
 } from "./data_show.js"
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

export {
    singleShow,
    createSingleShow
}