import {Children, useState} from 'react'
import {Carousel} from 'react-bootstrap'
import styled from 'styled-components'

const importAll = (r) => r.keys().map((key) => r(key))
const images = importAll(require.context('../assets/gallery', false, /\.(png|jpeg|jpg)$/))

const ImageContainer = ({children}) => {
    return (
        <div style={{height: '75vh', width: '75vw'}}
        className="d-flex justify-content-center align-items-center p-0 mx-auto d-block my-2 bg-black">
            {Children.only(children)}
        </div>
    )
}

const GalleryImage = ({src}) => {
    return (
        <img
        className="d-block mh-100 mw-100"
        alt="interior"
        src={src} />
    )
}

const ThumbnailContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
`

const StyledThumbnail = styled.img`
    max-height: 80%;
    max-width: 80%;
    cursor: pointer;
`

const Thumbnail = ({src, onClick}) => {
    return (
        <StyledThumbnail onClick={onClick} src={src} />
    )
}

const GalleryView = ({slide, setSlide}) => {
    return (
        <>
            <Carousel
            variant="dark"
            activeIndex={slide}
            onSelect={setSlide}
            indicators={false}
            fade={true}>
                {images.map((v) =>
                    <Carousel.Item key={v}>
                        <ImageContainer>
                            <GalleryImage src={v} />
                        </ImageContainer>
                    </Carousel.Item>
                )}
            </Carousel>
            <div className="d-flex justify-content-center">
            {images.map((v, i) =>
                <ThumbnailContainer key={v}>
                <Thumbnail
                onClick={() => setSlide(i)}
                src={v} />
                </ThumbnailContainer>
            )}
            </div>
        </>
    )
}

const Gallery = () => {
    const [slide, setSlide] = useState(0)

    return (
        <GalleryView slide={slide} setSlide={setSlide} />
    )
}
export default Gallery
