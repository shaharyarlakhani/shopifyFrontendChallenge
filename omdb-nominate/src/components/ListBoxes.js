import React from 'react'

function ListBoxes() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <table>
                <tr>
                    <th>Movie Name</th>
                    <th>Info</th>
                    <th>Nominate Status</th>
                </tr>
                <tr>
                    <td>3 Idiots</td>
                    <td>Great</td>
                    <td>Nominated</td>
                </tr>
                <tr>
                    <td>Bad Movie</td>
                    <td>Bad</td>
                    <td>Nominate?</td>
                </tr>
            </table>

            <table>
                <tr>
                    <th>Movie Name</th>
                    <th>Info</th>
                    <th>Nominate Action</th>
                </tr>
                <tr>
                    <td>3 Idiots</td>
                    <td>Great</td>
                    <td>Remove</td>
                </tr>
            </table>
        </div>
    )
}

export default ListBoxes
