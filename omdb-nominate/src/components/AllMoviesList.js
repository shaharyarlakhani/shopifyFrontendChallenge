import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function AllMoviesList() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Movie Name</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>3 Idiots</td>
                    <td><Button variant="primary">Nominate</Button>{' '}</td>
                    </tr>
                    <tr>
                    <td>Guardians of the Galaxy</td>
                    <td><Button variant="primary">Nominate</Button>{' '}</td>
                    </tr>
                    <tr>
                    <td>Harry Potter</td>
                    <td><Button variant="primary">Nominate</Button>{' '}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default AllMoviesList
