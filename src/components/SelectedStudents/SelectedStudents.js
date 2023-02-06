import React, {useContext} from 'react';
import {SelectedStudentsContext} from "../../Context/SelectedStudentsContext";
import Student from "../Student/Student";


const SelectedStudent = () => {

    const [selectedStudents, setSelectedStudents] = useContext(SelectedStudentsContext);


    const handleUnselect = (id) => {
        setSelectedStudents(selectedStudents.filter(student => student.id !== id));
    };
    const studentsList = selectedStudents.map(student => {

        return <>
            <div>
                <Student
                    key={student.id}
                    id={student.id}
                    name={student.name}
                />
                <input type='button' value='Unselect' onClick={()=>handleUnselect(student.id)} />

            </div>
        </>
    });


    return studentsList;
}


export default SelectedStudent;




