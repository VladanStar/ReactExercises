

const App = ({data}) => {
    
 
    // const data = props.data

    
    return (
        <div>
            <Header />
            <Main posts={data} />
        </div>

    )
}
const Header = () => {
    return (
        <div>
            <nav>
                <div className="nav-wraper">
                    <a href="#" className="brand-logo">Logo</a>
                </div>
            </nav>
           
        </div>
    )
}


const Main = ({posts}) => {
   
    // const { posts } = props
    return (
        <div className="container">
            <PostList posts={posts} />
        </div>

    )
}


const PostList = (props) => {
    console.log(props);
    
    const posts = props.posts
    console.log(posts);
    
    return (
        <div className="row">
            {posts.map((post, index) => <PostItem  key={index} title={post.title} body={post.body} />)}
        </div>
    )
}

const PostItem = (props) => {
    const { title, body } = props
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