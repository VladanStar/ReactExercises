// Kreiramo konstruktor za Zanr.

function Genre(name) {
    this.name = name;
    //UZIMAMO PRVO I ZADNJE SLOVA ZANRA I RADIMO UPPER U METODI
    this.getData = function () {
        var firstLetter = this.name.charAt(0);
        var lastLetter = this.name.charAt(name.length - 1);
        var result = firstLetter + lastLetter;
        return result.toUpperCase();
    }
}


module.exports ={
 
    Genre
}