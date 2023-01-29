import React, {useEffect, useState} from 'react';
import axios from "axios";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
const HospitalHistory = (props) => {

    const [data, setData] = useState([]);
    const [logs, setLogs] = useState("");
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = (e) => {
        setBasicModal(!basicModal);
        setLogs(e.target.dataset.log);
    }

    const content = data.map((item) => {
        return <tr key={item.hospital_log_id}>
            <td>
                <button data-log={item.logs} onClick={toggleShow} className="btn btn-primary">show log details</button>
            </td>
            <td>{JSON.parse(item.logs).length}</td>
            <td>{item.created_at.substring(0,19)}</td>
        </tr>
    });


    const loadHistory = () => {
        (async function () {
            try {
                axios.get(`http://localhost:8080/hospitals/1/logs`)
                    .then(res => {
                        setData(res.data.result)
                    }).catch(err => {

                });
            } catch (e) {
                console.error(e)
            } finally {

            }
        })();
    }

    useEffect(() => {
        loadHistory();
    }, [])

    return (
        <div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Logs</th>
                    <th>number of Failed record</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>



            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {logs}
                        </MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn color='secondary' onClick={toggleShow}>
                                Close
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

export default HospitalHistory;