
const AddUser = ({setUser}) => {
    return(
        <div>
            <input onChange={e=>setUser(e.target.value)} type="text"/>
            <button>Add</button>
        </div>
    )
}

export default AddUser;