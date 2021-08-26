const Header = () => {

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Users</a>
            </div>
        </nav>
    )

}

const Footer = () => {

    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © 2014 Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    )

}



const Main = (props) => {
    console.log(props);
    const main = props.data;
    console.log(main);
    return (
        <div className="container">
        <div className="row">
            <List data={main} />
            </div>
        </div>
    )

}

const ListItem = (props) => {
    const { email, name, lastname, dob, picture } = props;

    const date = (dob) => {
        const date = new Date(dob);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        return `${year}-${month}-${day}`;
    }

    const emailDot = (email) =>{
      const monkey = email.indexOf('@');
      const string = email.substring(0,monkey) + '...';
      return string;
      
      

    }
    console.log(date(dob));

    console.log({ name });
    return (
        
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img src={picture}></img>
              <span className="card-title">{emailDot(email)}</span>
            </div>
            <div className="card-content">
              <p>Name: {name} {lastname}</p>
              <p>Date of Birth: {date(dob)}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
     

        // <ul className="collection">
        //     <li className="collection-item avatar">
        //         <img src={picture} alt="" className="circle"></img>
        //         <p><span>Name:</span> {name} {lastname}</p>
        //         <p><span>Email:</span> {email}</p>
        //         <p><span>date of birth:</span> {date(dob)}</p>
        //     </li>
        // </ul>
    )
}


const List = (props) => {
    const lists = props.data;
    return (
        <div>
            {lists.map((list, index) => <ListItem key={index} email={list.email} name={list.name.first} lastname={list.name.last} dob={list.dob} picture={list.picture.large} />)}
        </div>
    )


}

const App = (props) => {
    console.log(props);
    const app = props.data;
    console.log(app);
    return (
        <div>
            <Header />
            <Main data={app} />
            <Footer />
        </div>
    )

}








ReactDOM.render(<App data={usersData} />, document.querySelector(".root"));