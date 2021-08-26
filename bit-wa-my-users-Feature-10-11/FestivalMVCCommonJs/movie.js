// Kreiramo konstruktor Movie

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    // PRAVIMO NAZIV FILMA SA ZANROM I DUZINOM
    this.getDataMovie = function () {

        return this.title + ' ' + this.genre + ' ' + this.length + "min, ";
    }
}

module.exports ={

    Movie
 
}