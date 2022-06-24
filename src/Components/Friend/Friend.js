import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    console.log(props);
    const {name,phone,address,company,id} = props.friend;
    const url = `/friend/${id}`;
    return (
        <div className="friend-container">
            <h3>Name: {name}</h3>
            <h3>Phone:{phone}</h3>
            <p>Address: {address.street}</p>
            <p>Company: {company.name}</p>
            <Link to={url}>Detail</Link>
        </div>
    );
};

export default Friend;