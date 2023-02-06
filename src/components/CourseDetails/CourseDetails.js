
import React from 'react'


const CourseDetails = (props) => {


    return (
        <label className="Content" >
            {props.id} - {props.name} ({props.program})
        </label>
    );
}

export default CourseDetails;




