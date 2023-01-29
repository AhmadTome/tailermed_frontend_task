import './App.css';
import {useState, createContext} from "react";
import axios from 'axios';
import {BrowserRouter, Link} from "react-router-dom";
import Router from "./components/Router/router";

export const hospitalContext = createContext();


function App() {

    const [hospitalName, setHospitalName] = useState("");

    const [patientMapping, setPatientMapping] = useState({
        patient_id: {
            type: "COLUMN",
            value: ""
        },
        full_name: {
            type: "COLUMN",
            value: ""
        },
        sex: {
            type: "COLUMN",
            value: ""
        },
        mrn: {
            type: "COLUMN",
            value: ""
        },
        date_of_birth: {
            type: "COLUMN",
            value: ""
        },
        is_deceased: {
            type: "COLUMN",
            value: ""
        },
        state: {
            type: "COLUMN",
            value: ""
        },
        city: {
            type: "COLUMN",
            value: ""
        },
        zip_code: {
            type: "COLUMN",
            value: ""
        },
        address: {
            type: "COLUMN",
            value: ""
        }
    });

    const [treatmentMapping, setTreatmentMapping] = useState({
        treatment_id: {
            type: "COLUMN",
            value: ""
        },
        patient_id_treatment: {
            type: "COLUMN",
            value: ""
        },
        name: {
            type: "COLUMN",
            value: ""
        },
        status: {
            type: "COLUMN",
            value: ""
        },
        diagnoses: {
            type: "COLUMN",
            value: ""
        },
        start_date: {
            type: "COLUMN",
            value: ""
        },
        end_date: {
            type: "COLUMN",
            value: ""
        },
        days_cycle: {
            type: "COLUMN",
            value: ""
        }
    });

    const HospitalNameChange = (e) => {
        setHospitalName(e.target.value);
    }

    const PatientMappingChange = (colName, attr, e) => {
        const {value} = e.target;

        setPatientMapping(prevState => (
            {
                ...prevState,
                [colName]: {
                    ...prevState[colName],
                    [attr]: value
                }

            }
        ));
    }

    const TreatmentMappingChange = (colName, attr, e) => {
        const {value} = e.target;

        setTreatmentMapping(prevState => (
            {
                ...prevState,
                [colName]: {
                    ...prevState[colName],
                    [attr]: value
                }

            }
        ));
    }

    const addNewHospital = () => {

        const patientKeys = Object.keys(patientMapping);
        console.log(patientKeys);
        const treatmentKeys = Object.keys(treatmentMapping);
        const dataToInsert = [];


        dataToInsert.push({
            hospitalName: hospitalName
        });

        patientKeys.forEach((key) => {
            let obj = {};
            obj[key] = {};
            obj[key]['value'] = patientMapping[key]['value']
            obj[key]['type'] = patientMapping[key]['type']

            dataToInsert.push(obj)

        })

        treatmentKeys.forEach((key) => {
            let obj = {};
            obj[key] = {};
            obj[key]['value'] = treatmentMapping[key]['value']
            obj[key]['type'] = treatmentMapping[key]['type']
            dataToInsert.push(obj)

        });

        (async function () {
            try {
                axios.post(`http://localhost:8080/mapping`, dataToInsert)
                    .then(res => {
                        alert("mapping added successfully")
                    }).catch(err => {
                    alert("Error, check the network")
                });
            } catch (e) {
                console.error(e)
            } finally {

            }
        })();


    }


    const context = {
        hospitalName: hospitalName,
        hospitalChange: HospitalNameChange,
        patientMapping: patientMapping,
        patientMappingChange: PatientMappingChange,
        treatmentMapping: treatmentMapping,
        treatmentMappingChange: TreatmentMappingChange,
        addNewHospital: addNewHospital
    };

    return (
        <BrowserRouter>

            <hospitalContext.Provider value={context}>
                <div className="App">

                    <div className="p-5 ">
                        <Link to={'/hospital/add'}>add Hospital</Link>
                        <span className="px-2"></span>
                        <Link to={'/'}>Logs</Link>
                    </div>

                    <Router />

                </div>
            </hospitalContext.Provider>
        </BrowserRouter>

    );
}

export default App;
