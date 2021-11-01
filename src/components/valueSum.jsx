import React, { useState } from "react";
import mock_data from "../MOCK_DATA.json"

export default function TableSumComp() {
    const [data, setdata] = useState(mock_data);
    var tClaims = 0;
    var tNewClaims = 0;
    var tBilled = 0;
    var tPaid = 0;
    var tErrors = 0;
    for (let i = 0; i < mock_data.length; i++) {
        tClaims += mock_data[i].total_claims;
        tNewClaims += mock_data[i].new_claims;
        tBilled += mock_data[i].billed;
        tPaid += mock_data[i].paid;
        tErrors += mock_data[i].errors;
    }
    tBilled = Math.round(tBilled * 100) / 100
    return (
        <div>
            <table class="table table-dark table-bordered" >

                <tbody>


                    <tr>
                        <td>Total Claims : {tClaims}</td>


                        <td>Total New Claims : {tNewClaims}</td>


                        <td>Total Billed : ${tBilled}</td>


                        <td>Total Paid : ${tPaid}</td>


                        <td>Total Errors : {tErrors}</td>

                    </tr>


                </tbody>
            </table>
        </div>
    )
}