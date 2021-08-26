import { userService } from "../service/usersService";



class User {
    constructor(id, email, name,  dob, picture,gender) {
        this.id = id.value;
        this.email = email;
        this.name = name.first.charAt(0).toUpperCase()+name.first.slice(1);
        this.last = name.last.charAt(0).toUpperCase()+name.last.slice(1);
        this.fullName = this.name +' '+ this.last
        this.dob = dob;
        this.picture = picture;
        this.gender = gender;
    }
    getDate(dob) {
            const date = new Date(this.dob);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
    
            return `Birth date: ${day}.${month}.${year}`;
        
    }
    getEmail (email) {
        // const monkey = this.email.indexOf('@')-3;
        const string = this.email.substring(0,2) + '...' + this.email.substring(5, this.email.length) ;
        return string;
    }
    getGender() {
        if (this.gender === 'female') {
            return 'red lighten-5';
        } 
    }


  
}

export  default User;