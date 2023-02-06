import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import axios from "axios";
import {endPoint} from "../Config/Api";
import CourseDetails from "../CourseDetails/CourseDetails";
import {SelectedStudentsContext} from "../../Context/SelectedStudentsContext";


const StudentDetails = (props) => {

    const {id} = useParams();
    const [studentDetails, setStudentDetails] = useState([]);
    const navigate = useNavigate();

    const [selectedStudents, setSelectedStudents] = useContext(SelectedStudentsContext);

    const handleSelect = () => {
        console.log("-- handleSelect---")
        setSelectedStudents([...selectedStudents, {
            id: studentDetails.id, name: studentDetails.name
        }]);

        console.log(selectedStudents);

    };


    const handleUnselect = () => {
        console.log("-- handle Un Select---")

        setSelectedStudents(selectedStudents.filter(student => student.id !== studentDetails.id));
    };


    const isSelected = () => {
        console.log("isSelected()-" + selectedStudents.some(student => student.id === studentDetails.id))
        if (selectedStudents.length === 0) return false;
        return selectedStudents.some(student => student.id === studentDetails.id);
    };


    const fetchByStudentId = () => {

        console.log("Fetch ById")

        axios.get(endPoint.getBaseUrl + id)
            .then(response => {
                setStudentDetails(response.data);


            })
            .catch(error => {
                console.error("Error: " + error);
            })
    }

    useEffect(fetchByStudentId, [id]);


    const deleteById = () => {

        axios.delete(endPoint.getBaseUrl + id)
            .then(response => {
                navigate('/')
                console.log(response);
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }


    return (<div className="Content" style={{"width": "100%"}}>
        <h1>Students Details</h1>
        <h3>{studentDetails.id}</h3>
        <h3>{studentDetails.name}</h3>
        <h3>{studentDetails.gpa}</h3>


        {studentDetails.courseList && studentDetails.courseList.length > 0 ? (<>

            <h1>Course Details</h1>
            {studentDetails.courseList.map(course => (<CourseDetails
                key={course.id}
                id={course.id}
                name={course.name}
                program={course.program}
            />))}
        </>) : <h1>Term Status: Inactive</h1>}

        <div style={{"margin": "3%"}}>

            <input type='button' value='Delete' onClick={deleteById}/><br/>
            <input
                type='button'
                value={!isSelected() ? 'Select' : 'UnSelect'}
                onClick={!isSelected() ? handleSelect : handleUnselect}
            /><br/>

            <input type='button' value='Back' onClick={() => navigate(-1)}/>
        </div>

    </div>);
}

export default StudentDetails;




