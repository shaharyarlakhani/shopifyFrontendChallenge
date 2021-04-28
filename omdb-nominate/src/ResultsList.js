import React from 'react';
import { Table } from 'react-bootstrap';

function ResultsList() {
    return (
        <div>
            <h1>Results</h1>
            <h4>This is where results should be.</h4>
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
                    <tr>
                        <td>Wolf of Wall Street</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Slumdog Millionaire</td>
                        <td>No</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default ResultsList;
