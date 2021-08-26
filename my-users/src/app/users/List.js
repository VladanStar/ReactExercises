import React from 'react';
import ListThumb from './ListIThumb'
import ListCard from './ListCard'

const List = (props) => {

    const { data, displayCard } = props
    // console.log(props.data);
    

    const listCard = data.map((user, index) => <ListCard key={index} data={user} />)
    const listThumb = data.map((user, index) => <ListThumb key={index} data={user} />)

    const listCardFun = () => {
        return (
            <div className="row"  >
             <ul className="collection"  >
                {listCard}
                </ul>
            </div>
        )
    }

    const listThumbFun = () => {
        return (
            <ul className="collection"  >
                {listThumb}
            </ul>
        )
    }
    return (
        <div>
            {displayCard ? listCardFun() : listThumbFun()}
        </div>
    )
}

export default List