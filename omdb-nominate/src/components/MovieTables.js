import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AllMoviesList from './AllMoviesList'
import NominatedList from './NominatedList'

function MovieTables() {
    return (
        <Container>
            <Row>
                <Col><AllMoviesList /></Col>
                <Col><NominatedList /></Col>
            </Row>
        </Container>
    )
}

export default MovieTables
