import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function NominatedList() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Movie Name</th>
                    <th>Remove?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>3 Idiots</td>
                    <td><Button variant="primary">Remove</Button>{' '}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default NominatedList
