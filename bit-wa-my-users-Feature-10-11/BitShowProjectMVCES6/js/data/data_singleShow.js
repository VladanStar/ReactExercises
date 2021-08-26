import {Show,createShow,createSearchShow} from './data_show.js'

class SingleShow extends Show {
    constructor(id, name, image, summary) {
        super("", name, image);
        this.summary = summary;
    }
}
const createSingleShow = show => {
    const currentShow = new SingleShow("", show.name, show.image, show.summary);
    return currentShow
}

export{
    SingleShow,
    createSingleShow

}