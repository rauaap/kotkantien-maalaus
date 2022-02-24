import styled from 'styled-components'

export const ImageGradient = styled.div`
    display: inline-block;
    mask-image: linear-gradient(
        90deg, transparent 0%, rgba(0,0,0,1) ${props => props.gwidth || 50}%,
        rgba(0,0,0,1) ${props => 100-props.gwidth || 50}%, transparent 100%
    )
`
