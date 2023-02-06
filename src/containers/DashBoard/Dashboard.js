
import React, { useState} from 'react';
import '../Headers/Header.css'
import Header from "../Headers/Header";
import PageRoutes from "./PageRoutes";
import {SelectedStudentsContext} from "../../Context/SelectedStudentsContext";

export default function Dashboard() {

    const [selectedStudents, setSelectedStudents] = useState([]);


    return (
        <React.Fragment>
             <SelectedStudentsContext.Provider value={[selectedStudents, setSelectedStudents]}>
                 <div className='header'>
                    <Header />
                </div>
                <div className="Product">
                     <PageRoutes />
                </div>
             </SelectedStudentsContext.Provider>

        </React.Fragment>

    )

}