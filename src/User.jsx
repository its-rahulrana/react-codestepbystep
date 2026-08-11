
const User = props => {
    return(
        <div>
            {/* <button onClick={props.userHandler}>Click me</button> */}
            {/* <button onClick={()=>props.userHandler("Rahul")}>Click me</button> */}
            <button onClick={()=>props.userHandler(props.name)}>Click me</button>
        </div>
    )
}

export default User;