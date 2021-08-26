
import User from '.././ent/User'

class UserService {
   
    fetchUsers() {
        return fetch("https://randomuser.me/api/?results=15")
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log(data);
                let usersData = data.results;
                // console.log(usersData);
                // console.log(usersData[0].gender);
                    

                    return usersData.map((user) => {
                        
                            return new User(user.id,user.email, user.name, user.dob, user.picture,user.gender)
                        })

              
                        
                  
                
            });
    }


}

export const userService = new UserService();