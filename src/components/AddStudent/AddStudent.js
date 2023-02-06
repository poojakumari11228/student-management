import axios from "axios";
import './AddStudent.css';
import {useRef} from "react";
import {endPoint} from "../Config/Api";
import {useNavigate} from "react-router";

const NewProductHook = (props) => {

    const newStudentRef = useRef();
    const navigate = useNavigate();

    const addNewStudent= () =>{

        const ref = newStudentRef.current;
        const data = {
            name: ref['name'].value,
            gpa: ref['gpa'].value
        };

        axios.post(endPoint.getBaseUrl, data)
            .then(response =>{
                console.log(response);

            } )
            .catch(error=>{
                console.error(error);
            })

        navigate('/');

    }


    return (
        <div className="NewProduct">

            <form  ref={newStudentRef}>
                <h1>Add a Student</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                />

                <label>GPA</label>
                <input type="text"
                    label={'gpa'}
                    name={'gpa'}
                />
                <button onClick={addNewStudent}>Add Student </button>
            </form>

        </div>
    );

}

export default NewProductHook;