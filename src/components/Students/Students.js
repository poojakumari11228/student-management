import axios from "axios";
import {endPoint} from "../Config/Api";
import { useEffect, useRef, useState} from "react";
import Student from "../Student/Student";
import {Link} from "react-router-dom";

const Students = () => {

    const [students, setStudents] = useState([]);

    const filterRef = useRef();


    const fetchStudents = () => {
        console.log("fetchAll");
        axios.get(endPoint.getBaseUrl)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error("Error: " + error)
            })
    }

    const filterStudents = () => {

        let type = filterRef.current['dropdown'].value;
        let search = filterRef.current['search-text'].value;
        console.log("FIlter by")
        console.log(type);
        console.log(search);

        if (type === '0' || search === '')
            fetchStudents();
        else {

            axios.get(endPoint.getBaseUrl, {
                params: {
                    filter: type,
                    input: search
                }
            }).then(response => {
                setStudents(response.data);
            })
                .catch(error => {
                    console.error("Error: " + error);
                })

        }
    }

    useEffect(fetchStudents, []);

    const studentsList = students.map(student => {

        return <>
            <Link to={`${student.id}`}>
                <div>
                    <Student
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        gpa={student.gpa}
                    />
                </div>
            </Link>
        </>



    });


    return <>
        <div className='content' style={{"width": "100%"}}>

            <form ref={filterRef}>
                <h1>Filter</h1>
                <select name='dropdown'>
                    <option value="0">N/A</option>
                    <option value="gpa">Less than gpa</option>
                    <option value="program">program</option>
                </select>
                <input type='text' name='search-text' placeholder='enter to search'/>
                <input type='button' value='Apply Filter' onClick={filterStudents}/>


            </form>
        </div>
        <>
            {studentsList}
        </>
    </>


}

export default Students;