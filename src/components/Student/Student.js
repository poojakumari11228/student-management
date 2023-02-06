
import React from 'react';


const Student = (props) => {

    return (


        <div className="Content" >
            <h1>{props.name}</h1>
            <h3>{props.id}</h3>
            <h3>{props.gpa}</h3>
        </div>

    );
}

export default Student;




