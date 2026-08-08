import Student from "./Student";


function College({college}){
    return(
        <div style={{border: "1px solid grey", textAlign: "left", borderRadius: "10px", margin: "10px", padding: "10px"}}>
            <h3>College: {college.name}</h3>
            <h5>City: {college.city}</h5>
            <h5>Course: {college.course}</h5>
            <h5>Students:</h5>
            <table style={{border: "1px solid brown", margin:"10px", padding:"10px", borderRadius:"5px"}}>
                <thead>
                    <tr>
                        <th style={{margin:"10px", padding:"10px"}}>Roll No.</th>
                        <th style={{margin:"10px", padding:"10px"}}>Name</th>
                        <th style={{margin:"10px", padding:"10px"}}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        college.students.map((item, index)=>(
                            <Student key={index} student={item}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default College;