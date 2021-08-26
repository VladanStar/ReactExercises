

class Cast {
    constructor(person) {
        this.person = person;
    }
}
const createCast = cast => {
    let castList = [];

    cast.forEach((element, index) => {
        castList.push(new Cast(element.person));
    });

    return castList

}

export{ 
    Cast,
    createCast
}
