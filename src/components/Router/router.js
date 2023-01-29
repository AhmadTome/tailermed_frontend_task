import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import HospitalHistory from "../history/hospitalHistory";
import Stepper from "../stepper";


function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HospitalHistory></HospitalHistory>} />
                <Route path="/hospital/add" element={<Stepper></Stepper>} />

                <Route path="*" element="404 Not Found" />

            </Routes>
        </div>
    );
}

export default Router;