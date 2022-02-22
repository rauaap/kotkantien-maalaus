import {Container, Form, Row, Col, Button} from 'react-bootstrap'
import loremipsum from '../loremipsum'

const Contact = () => {
    const formFields = [
        {label: "Nimi", type: "email"},
        {label: "Sähköposti", type: "text"},
        {label: "Puh. nro.", type: "text"},
        {label: "Viesti", as: "textarea"}
    ]

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <div>
                        {loremipsum}
                    </div>
                </Col>
                <Col>
                    <Form>
                        {formFields.map(({label, type, as}) =>
                            <Form.Group>
                                <Form.Label>{label}</Form.Label>
                                <Form.Control
                                className="shadow-none"
                                type={type}
                                as={as}/>
                            </Form.Group>
                        )}
                        <Form.Group>
                            <Button variant="styled"
                            className="mt-1"
                            >Lähetä</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact
