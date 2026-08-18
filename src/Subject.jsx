import { useContext } from "react";
import { SubjectContext } from "./ContextData";

    const Subject = () => {
        const subject = useContext(SubjectContext)
        return(
            <div style={{border: "1px solid yellow"}}>
                <h5>Subject</h5>
                <p>Subject is: {subject}</p>
            </div>
        )
    }

    export default Subject;