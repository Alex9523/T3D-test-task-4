import React from 'react';
import  "./Answer.scss"

function Answ(props) {

    const data = props.answ;


    const listItems = data.map((data, items) =>
        <li key={items} className="list__item">
            <img className="list__img" src={`http://api.t3d.live/${data.icon}`} alt={data.name} />
            <h3 className="list__name">{`Name - ${data.name}`}</h3>
            <p className="list__description">Description {data.description}</p>
        </li>
    );

    return (
        <ul className="list">{listItems}</ul>
    );
}


export default Answ