

function Wrapper({children, color="blue"}) {
    return(
        <div style={{color:color, border: "1px solid red", width:"300px", borderRadius: "20px", margin: "10px"}}>
            <h2>Wrapper Component</h2>
            {children}
            <p>Closing Wrapper</p>
        </div>
    )
}

export default Wrapper;