import * as DATA from './data/data_module.js';
import * as UI from './ui/ui_module.js';
        const init = () => {
            const singleID = DATA.getFromStorage("showID");
            displaySingleShow(parseInt(singleID));
        }
        const displaySingleShow = (id) => {
            $.get(`${DATA.showUrl.url}/${id}`).done(function (response) {
                const currentShow = DATA.createSingleShow(response);
                UI.createSingleShow(currentShow);
            })
        }
        export {
            init,
            
        }
    $(init())



























    

