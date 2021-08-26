const products =['apples', 'oranges', 'bananas'];

const createProducts = () => {
    const myProducts = [];
    products.forEach((product,index) => {
        myProducts.push(<Product name={product} key={index} />)
    }) 
    return myProducts;
}

const App = () => {
    return (
        <div>
            <h1>Hi from React</h1>
            <ShoppingList />
        </div>
    )
}

const ShoppingList = () => {
    return (
        <ul>
            {createProducts()}
        </ul>
    )
}

const Product = (props) => {

    const {name,index} =props
    return <li key={index}>{name}</li>
}

const reactElement = document.querySelector('.root');
ReactDOM.render(<App />, reactElement)