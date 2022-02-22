import {Container, Col, Row, Image} from 'react-bootstrap'
import styled from 'styled-components'
import img from '../assets/trend-color-3998739.jpg'
import loremipsum from '../loremipsum'



const Services = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col>
                    {loremipsum}
                </Col>
                <Col>
                    <Image fluid src={img} />
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Image fluid src={img} />
                </Col>
                <Col>
                    {loremipsum}
                </Col>
            </Row>
        </Container>
    )
}
export default Services
