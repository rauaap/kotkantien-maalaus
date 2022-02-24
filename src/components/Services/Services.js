import {Container, Col, Row, Image} from 'react-bootstrap'
import paintingImg from '../../assets/servicesPaintImg.jpg'
import wallpaperImg from '../../assets/servicesWallpaperImg.jpg'
import {paintingText, wallpaperText} from './text'
import {ImageGradient} from '../Generic'

const Services = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col>
                    <div className="h-100 d-flex flex-column justify-content-center">
                        <h2>Maalus</h2>
                        {paintingText}
                    </div>
                </Col>
                <Col>
                    <ImageGradient>
                        <Image fluid src={paintingImg} />
                    </ImageGradient>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <ImageGradient>
                        <Image fluid src={wallpaperImg} />
                    </ImageGradient>
                </Col>
                <Col>
                    <div className="h-100 d-flex flex-column justify-content-center">
                        <h2>Tapetointi</h2>
                        {wallpaperText}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Services
