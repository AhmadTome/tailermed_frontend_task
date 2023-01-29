import React, {useState} from 'react';

const TreatmentMappingItem = (props) => {

    const {
        treatmentMapping,
        colName,
        onChange,
    } = props;

    if (!colName || !treatmentMapping || !treatmentMapping[colName]) {
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
                            value={treatmentMapping[colName].type}
                            onChange={(event) => onChange(colName, 'type', event)}
                            className="form-control">
                            <option value="COLUMN">COLUMN</option>
                            <option value="FUNCTION">FUNCTION</option>
                        </select>
                    </div>

                    {
                        (treatmentMapping[colName].type === "COLUMN") &&
                        <div className="col-7">
                            <input type="text"
                                   value={treatmentMapping[colName].value}
                                   onChange={(event) => onChange(colName, 'value', event)}
                                   className="form-control"/>
                        </div>
                    }

                    {
                        (treatmentMapping[colName].type === "FUNCTION") &&
                        <div className="col-7">
                            <textarea className="form-control" rows={5}
                                      onChange={(event) => onChange(colName, 'value', event)}
                            >
                                {treatmentMapping[colName].value}
                            </textarea>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default TreatmentMappingItem;