import React, {useState, useContext} from 'react';
import PatientMappingItem from "./patientMappingItem";
import {hospitalContext} from "../../App";

const PatientMapping = (props) => {

    const context = useContext(hospitalContext)

    return (
        <>
            <div className="row px-4">
                <div className="col-4">
                    <h3>Our Columns</h3>
                </div>

                <div className="col-8">
                    <h3>Mapping Columns</h3>
                </div>
            </div>

            <div className="card">
                <div className="card-body">

                    <PatientMappingItem
                        patientMapping={context.patientMapping}
                        onChange={context.patientMappingChange}
                        colName={'patient_id'}
                        title={"Patient ID"}
                    />

                    <PatientMappingItem
                        patientMapping={context.patientMapping}
                        onChange={context.patientMappingChange}
                        colName={'full_name'}
                        title={"Name"}
                    />

                    <PatientMappingItem
                        patientMapping={context.patientMapping}
                        onChange={context.patientMappingChange}
                        colName={'sex'}
                        title={"Sex"}
                    />

                    <PatientMappingItem
                        patientMapping={context.patientMapping}
                        onChange={context.patientMappingChange}
                        colName={'mrn'}
                        title={"MRN"}
                    />

                    <PatientMappingItem
                        patientMapping={context.patientMapping}
                        onChange={context.patientMappingChange}
                        colName={'date_of_birth'}
                        title={"Date Of Birthday"}
                    />

                    <PatientMappingItem
                        patientMapping={context.patientMapping}
                        onChange={context.patientMappingChange}
                        colName={'is_deceased'}
                        title={"Is Deceased"}
                    />

                    <PatientMappingItem
                        patientMapping={context.patientMapping}
                        onChange={context.patientMappingChange}
                        colName={'address'}
                        title={"Address"}
                    />

                    <PatientMappingItem
                        patientMapping={context.patientMapping}
                        onChange={context.patientMappingChange}
                        colName={'city'}
                        title={"City"}
                    />

                    <PatientMappingItem
                        patientMapping={context.patientMapping}
                        onChange={context.patientMappingChange}
                        colName={'zip_code'}
                        title={"Zip Code"}
                    />

                    <PatientMappingItem
                        patientMapping={context.patientMapping}
                        onChange={context.patientMappingChange}
                        colName={'state'}
                        title={"State"}
                    />
                </div>
            </div>


        </>
    );
}

export default PatientMapping;