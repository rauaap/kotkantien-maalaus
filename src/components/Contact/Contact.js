import {Container, Form, Row, Col, Button, Image} from 'react-bootstrap'
import styled from 'styled-components'
import instagramLogo from '../../assets/instagram.png'
import youtubeLogo from '../../assets/youtube.png'

const LogoImage = styled(Image)`
    height: 4rem;
    width: auto;
`

const Contact = () => {
    const formFields = [
        {label: "Nimi", type: "email"},
        {label: "Sähköposti", type: "text"},
        {label: "Puh. nro.", type: "text"},
        {label: "Viesti", as: "textarea"}
    ]

    const contactInfo = [
        {label: 'Osoite', info: 'Kotkantie 3, 90100 Oulu'},
        {label: 'Puhelin:', info: '044 999 888 99'},
        {label: 'Sähköposti:', info: 'info@kotkantienmaalaus.fi'},
    ]

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Row className="mb-4">
                        Ota meihin suoraan yhteyttä soittamalla, lähettämällä sähköpostia, lähettämällä viestiä meille sosiaalisessa mediassa tai jättämällä yhteydenottopyyntö vieressä näkyvällä lomakkeella.
                    </Row>
                    {contactInfo.map(({label, info}) =>
                        <Row lg={3} xl={3} >
                            <Col>
                                {label}
                            </Col>
                            <Col>
                                {info}
                            </Col>
                        </Row>
                    )}
                    <div className="my-5 d-flex justify-content-center">
                        <a className="mx-5" href="https://www.instagram.com/">
                            <LogoImage src={instagramLogo} />
                        </a>
                        <a className="mx-5" href="https://www.youtube.com/">
                            <LogoImage src={youtubeLogo} />
                        </a>
                    </div>
                </Col>
                <Col>
                    <Form>
                        {formFields.map(({label, type, as}) =>
                            <Form.Group key={label}>
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
