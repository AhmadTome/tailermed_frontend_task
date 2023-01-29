import React, {useState} from 'react';
import PatientMapping from './patient/patientMapping';
import TreatmentMapping from "./treatment/tretmentMapping";
import CreateHospital from "./hospital/createHospital";
const Stepper = (props) => {
    return (
        <>
        <div class="container">
            <div class="accordion" id="accordionExample">
                <div class="steps">
                    <progress id="progress" value="0" max="100" ></progress>
                <div class="step-item">
                    <button class="step-button text-center" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        1
                    </button>
                    <div class="step-title">
                        First Step
                    </div>
                </div>
                <div class="step-item">
                    <button class="step-button text-center collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        2
                    </button>
                    <div class="step-title">
                        Second Step
                    </div>
                </div>
                <div class="step-item">
                    <button class="step-button text-center collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        3
                    </button>
                    <div class="step-title">
                        Third Step
                    </div>
                </div>
            </div>

            <div class="card">
                <div  id="headingOne">
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                     data-bs-parent="#accordionExample">
                    <div class="card-body">
                        <CreateHospital></CreateHospital>
                    </div>
                </div>
            </div>
            <div class="card">
                <div  id="headingTwo">

                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="card-body">
                        <PatientMapping></PatientMapping>
                    </div>
                </div>
            </div>
            <div class="card">
                <div  id="headingThree">

                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                     data-bs-parent="#accordionExample">
                    <div class="card-body">
                        <TreatmentMapping></TreatmentMapping>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Stepper;