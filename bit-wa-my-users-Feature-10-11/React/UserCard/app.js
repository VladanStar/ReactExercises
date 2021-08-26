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
            <List data={main} />
        </div>
    )

}

const ListItem = (props) => {
 const {email, name , lastname, dob, picture} = props;
 console.log({name});
    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <img src={picture} alt="" className="circle"></img>
                <p><span>Name:</span> {name} {lastname}</p>
                <p><span>Email:</span> {email}</p>
                <p><span>date of birth:</span> {dob}</p>
            </li>
        </ul>
    )
}


const List = (props) => {
    const lists = props.data;
    return (
        <div className="row">
            {lists.map((list, index) => <ListItem key={index} email={list.email} name={list.name.first} lastname={list.name.last} dob={list.dob} picture={list.picture.thumbnail} />)}
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