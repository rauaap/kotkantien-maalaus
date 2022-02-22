import {Image, Container} from 'react-bootstrap'
import styled from 'styled-components';
import {StyledContainer} from './Generic'
import loremipsum from '../loremipsum'
import img from '../assets/trend-color-3998736.jpg'

const StyledImage = styled(Image)`
    max-height: 60vh;
`

const Home = () => {
    return (
        <>
            <StyledContainer className="mt-5 w-75">
                {loremipsum}
            </StyledContainer>
            <Container>
                <div style={{
                    display: 'inline-block',
                    maskImage: `linear-gradient(
                        90deg, transparent 0%, rgba(0,0,0,1) 50%,
                        rgba(0,0,0,1) 50%, transparent 100%
                    )`
                }}>
                    <StyledImage fluid src={img} className="my-4"/>
                </div>
            </Container>
        </>
    )
}
export default Home
