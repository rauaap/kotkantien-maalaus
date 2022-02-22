import {Container} from 'react-bootstrap'
import styled from 'styled-components'

export const BigPicture = ({src}) => {
    return (
        <img src={src}
        className="w-75 img-fluid mx-auto d-block my-2"
        alt="main-focus"
        />
    )
}

export const StyledContainer = styled(Container)`
    margin-left: 2rem;
`
