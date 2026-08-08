

function Student ({student}){
    return(
        <tr>
            <td style={{padding: "5px"}}>{student.rollNo}</td>
            <td style={{padding: "5px"}}>{student.name}</td>
            <td style={{padding: "5px"}}>{student.email}</td>
        </tr>
    )
}

export default Student;