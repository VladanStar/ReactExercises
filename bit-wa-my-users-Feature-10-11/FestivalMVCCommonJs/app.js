

const {Festival}  = require('./festival')
const {Program}  = require('./program')
const {Movie}  = require('./movie')
const {Genre}  = require('./genre')

    /***KREIRAMO INSTANCU ZANRA UBACUJEMO ARGUMENT IMENA ***/
    var genre1 = new Genre("Action");
    var genre2 = new Genre("Comedy");
    // console.log(g1.getData());
    // console.log(g2.getData());


    /*** KREIRAMO INSTANCU FILMA UBACUJEMO  NAZIV FILMA, VREDNOST ZANRA. DUZINU U MIN ***/
    var movie1 = new Movie("Berba cvaraka u Makedoniji", genre1.getData(), 150)
    var movie2 = new Movie("Indijanci kolju kupus", genre2.getData(), 130)
    var movie3 = new Movie("Suva krpa na dnu mora", genre2.getData(), 67)
    var movie4 = new Movie("Australijski lubencicar", genre2.getData(), 96)
    // console.log(m1.getDataMovie());
    // console.log(m2.getDataMovie());

    /*** KREIRAMO INSTANCU PROGRAMA UBACUJEM DATUM U FORMI YYYY, M, DD ***/
    var program1 = new Program(new Date(2018, 2, 21));
    var program2 = new Program(new Date(2018, 2, 22));

    /** U PROGRAMU POZIVAMO METODU addMovie SA ARGUMENTOM KOJI PROSLEDUJE FILM ***/
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program2.addMovie(movie1);
    program2.addMovie(movie2);
    program2.addMovie(movie4);

    console.log(program1.getData());


    var festival1 = new Festival('Weekend Festival')
    var festival2 = new Festival('Weekend Festival')
    festival1.programFestival(program1.getData())
    festival1.programFestival(program2.getData())
    console.log(festival1.getDataFestival());