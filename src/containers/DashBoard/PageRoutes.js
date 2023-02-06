import { Route, Routes, Navigate } from "react-router";
import AddStudent from "../../components/AddStudent/AddStudent";
import Students from "../../components/Students/Students";
import StudentDetails from "../../components/StudentDetails/StudentDetails";
import SelectedStudent from "../../components/SelectedStudents/SelectedStudents";



export default function PageRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/students" />} />
            <Route path="add-students" element={<AddStudent/>} />

            <Route path="students" element={<Students />}>
            </Route>

            <Route path="students/:id" element={<StudentDetails />}/>
            <Route path="selected-students" element={<SelectedStudent/>} />


        </Routes>
    );
}

