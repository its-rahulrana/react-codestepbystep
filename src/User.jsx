

function User (props){
    const userCss = {
        border: "1px solid yellow",
        borderRadius: "10px",
        width: "300px",
        textAlign: "left",
        padding: "5px",
        margin: "10px",
    }

    return(
        <div style={userCss}>
            <h3>ID: {props.user.id}</h3>
            <h3>Name: {props.user.name}</h3>
            <h3>Email: {props.user.email}</h3>
            <h3>City: {props.user.city}</h3>
        </div>
    )
}

export default User;