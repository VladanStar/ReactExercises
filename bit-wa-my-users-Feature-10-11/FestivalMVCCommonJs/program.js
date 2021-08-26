

// Kreiramo konstrutor za Program

function Program(date) {
    this.date = date;
    this.moviesList = [];

    this.addMovie = function (movie) {
        this.moviesList.push(movie);
    }
    this.getNumOfMovies = function () {
        return this.moviesList.length;

    }
    this.programLength = function () {
        var length = 0;
        for (var i = 0; i < this.moviesList.length; i++) {
            var movie = this.moviesList[i];
            length += movie.length;

        }
        return length;
    }
    this.getData = function () {
        var myDate = this.date;
        var dayProgram = '\t';
        // DNEVNI PROGRAM DAN,MESEC,GODINA SA UKUPNOM DUZINOM POZIVAMO METODU DUZINA FILMA
        dayProgram += this.date.getDate() + '.' + this.date.getMonth() + '.' + this.date.getYear() + ',' + ' program length from ' + this.programLength() + ' min  from all movies \n';
        for (var i = 0; i < this.moviesList.length; i++) {
            var movie = this.moviesList[i]
            dayProgram += '\t\t\t' + movie.getDataMovie() + '\n';
        }
        return dayProgram;
    }

}

module.exports ={
 
    Program
   
}