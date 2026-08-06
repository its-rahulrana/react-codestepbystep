

function User(props) {
    console.log(props);
    return(
        <div style={{border: "1px solid red", margin: "10px", padding: "10px", borderRadius: "20px"}}>
            <h3>Name: {props.userData.name}</h3>
            <p>Email: {props.userData.email}</p>
            <p>City: {props.userData.city}</p>
        </div>
    )
}

export default User;