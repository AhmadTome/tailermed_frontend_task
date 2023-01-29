import React, {useContext, useState} from 'react';
import {hospitalContext} from "../../App";


const CreateHospital = (props) => {

    const context = useContext(hospitalContext)


    return (
        <>
            <div className="row form-group">
                <label className="control-label col-sm-2" htmlFor="email">Hospital Name:</label>
                <div className="col-sm-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Hospital Name"
                        value={context.hospitalName}
                        onChange={context.hospitalChange}
                    />
                </div>

            </div>

        </>
    );
}

export default CreateHospital;