import './Friend.css';

const Friend = (props) => {
    console.log(props);
    const {name,phone,address,company} = props.friend;
    return (
        <div className="friend-container">
            <h3>Name: {name}</h3>
            <h3>Phone:{phone}</h3>
            <p>Address: {address.street}</p>
            <p>Company: {company.name}</p>
        </div>
    );
};

export default Friend;