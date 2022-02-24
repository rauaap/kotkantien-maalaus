import {Image, Container} from 'react-bootstrap'
import styled from 'styled-components';
import {mainText} from './text'
import img from '../../assets/homeImg.jpg'
import {ImageGradient} from '../Generic'

const StyledImage = styled(Image)`
    max-height: 60vh;
`

const StyledContainer = styled(Container)`
    margin-left: 2rem;
`

const Home = () => {
    return (
        <>
            <StyledContainer className="mt-5 w-75">
                {mainText}
            </StyledContainer>
            <Container>
                <ImageGradient>
                    <StyledImage fluid src={img} className="my-4"/>
                </ImageGradient>
            </Container>
        </>
    )
}
export default Home
