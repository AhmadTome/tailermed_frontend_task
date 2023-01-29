import React, {useState, useContext} from 'react';
import PatientMappingItem from "../patient/patientMappingItem";
import {hospitalContext} from "../../App";
import TreatmentMappingItem from "./treatmentMappingItem";

const TreatmentMapping = (props) => {

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


                    <TreatmentMappingItem
                        treatmentMapping={context.treatmentMapping}
                        onChange={context.treatmentMappingChange}
                        colName={'treatment_id'}
                        title={"Treatment ID"}
                    />


                    <TreatmentMappingItem
                        treatmentMapping={context.treatmentMapping}
                        onChange={context.treatmentMappingChange}
                        colName={'patient_id_treatment'}
                        title={"Patient ID"}
                    />


                    <TreatmentMappingItem
                        treatmentMapping={context.treatmentMapping}
                        onChange={context.treatmentMappingChange}
                        colName={'name'}
                        title={"Name"}
                    />

                    <TreatmentMappingItem
                        treatmentMapping={context.treatmentMapping}
                        onChange={context.treatmentMappingChange}
                        colName={'status'}
                        title={"Status"}
                    />

                    <TreatmentMappingItem
                        treatmentMapping={context.treatmentMapping}
                        onChange={context.treatmentMappingChange}
                        colName={'diagnoses'}
                        title={"Diagnoses"}
                    />

                    <TreatmentMappingItem
                        treatmentMapping={context.treatmentMapping}
                        onChange={context.treatmentMappingChange}
                        colName={'start_date'}
                        title={"Start Date"}
                    />

                    <TreatmentMappingItem
                        treatmentMapping={context.treatmentMapping}
                        onChange={context.treatmentMappingChange}
                        colName={'end_date'}
                        title={"End Date"}
                    />

                    <TreatmentMappingItem
                        treatmentMapping={context.treatmentMapping}
                        onChange={context.treatmentMappingChange}
                        colName={'days_cycle'}
                        title={"Days Cycle"}
                    />

                </div>
            </div>

            <div className="row p-3" dir="rtl">
                <div className=" col-sm-2">
                    <button className="btn btn-primary" onClick={context.addNewHospital}> add Hospital</button>
                </div>
            </div>

        </>
    );
}

export default TreatmentMapping;