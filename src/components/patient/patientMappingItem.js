import React, {useState} from 'react';

const PatientMappingItem = (props) => {

    const {
        patientMapping,
        colName,
        onChange,
    } = props;

    if (!colName || !patientMapping || !patientMapping[colName]) {
        return null;
    }

    return (
        <>
            <div className="row px-4 p-1">
                <div className="col-4">
                    <label>{props.title}</label>
                </div>

                <div className="row col-8">

                    <div className="col-5">
                        <select
                            value={patientMapping[colName].type}
                            onChange={(event) => onChange(colName, 'type', event)}
                            className="form-control">
                            <option value="COLUMN">COLUMN</option>
                            <option value="FUNCTION">FUNCTION</option>
                        </select>
                    </div>

                    {
                        (patientMapping[colName].type === "COLUMN") &&
                        <div className="col-7">
                            <input type="text"
                                   value={patientMapping[colName].value}
                                   onChange={(event) => onChange(colName, 'value', event)}
                                   className="form-control"/>
                        </div>
                    }

                    {
                        (patientMapping[colName].type === "FUNCTION") &&
                        <div className="col-7">
                            <textarea className="form-control" rows={5}
                                      onChange={(event) => onChange(colName, 'value', event)}
                            >
                                {patientMapping[colName].value}
                            </textarea>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default PatientMappingItem;