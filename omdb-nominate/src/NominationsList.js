import React from 'react';
import { Table } from 'react-bootstrap';

function NominationsList() {
    return (
        <div>
            <h1>Nominations</h1>
            <h4>This is where nominations should be.</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Movie Name</th>
                        <th>Nominated</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3 Idiots</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default NominationsList;
