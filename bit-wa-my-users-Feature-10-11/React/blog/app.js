


const App = (props) => {
    console.log('App', props);
    const app = props.data
    console.log(app);
    return (
        <div>
            <Header />
            <Main app={app} />
        </div>

    )
}
const Header = () => {
    return (
        <div>
            <nav>
                <div className="nav-wraper center">
                
                    <a href="#" className="brand-logo">Blog</a>
                </div>
            </nav>

        </div>
    )
}


const Main = (props) => {
    console.log('Main', props);
    const main = props.app
    console.log(posts);


    return (
        <div className="container">
            <PostList main={main} />
        </div>

    )
}


const PostList = (props) => {
    console.log('PostList', props)
    const postList = props.main
    console.log(posts)

    return (
        <div className="row">
            {postList.map((post, index) => <PostItem key={index} title={post.title} body={post.body} />)}
        </div>
    )
}

const PostItem = (props) => {
    console.log('Post Item',props);
    
    const { title, body } = props
    console.log(props);
    
    return (
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text" >
                    <span className="card-title">{title}</span>
                    <p>{body}</p>
                </div>

            </div>
        </div>
    )
}

const root = document.querySelector('.root')
ReactDOM.render(<App data={posts} />, root);