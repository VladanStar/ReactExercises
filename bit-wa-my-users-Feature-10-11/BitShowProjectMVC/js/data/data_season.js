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

export {
    Season,
    createSeason
}