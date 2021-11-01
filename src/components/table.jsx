import React, { useState } from "react";
import mock_data from "../MOCK_DATA.json"

export default function TableComp() {
    const [data, setdata] = useState(mock_data);
    return (
        <div>
            <table class="table table-striped table-bordered table-hover">
                <thead>
                    <th>Claimed Through</th>
                    <th>Total Claims</th>
                    <th>New Claims</th>
                    <th>Billed</th>
                    <th>Paid</th>
                    <th>Errors</th>
                </thead>
                <tbody>

                    {
                        data.map((d) => (
                            <tr key={d.id}>
                                <td>{d.claim_via}</td>
                                <td>{d.total_claims}</td>
                                <td>{d.new_claims}</td>
                                <td>${d.billed}</td>
                                <td>${d.paid}</td>
                                <td>{d.errors}</td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}