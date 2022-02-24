import {useState} from 'react'
import {Button, Container} from 'react-bootstrap'
import styled from 'styled-components'
import {ImageGradient} from '../Generic'
import colors from './colors'
import imgInterior from '../../assets/interior.png'

const ButtonContainer = styled(Container)`
    border-radius: 0.5rem;
    overflow: hidden;
    @media screen and (max-width: 991px) {
        width: 28rem;
    }

    @media screen and (min-width: 992px) {
        width: 56rem;
    }

    @media screen and (max-width: 576px) {
        width: 14rem;
    }
`

const ColorButton = styled(Button)`
    width: 7rem;
    height: 4rem;
    border: 0;
    border-radius: 0;
`

const BigPicture = styled.img`
    transition-duration: 1s;
    max-height: 50vh;
    max-width: 75vw;
`

const TryView = ({buttons, color}) => {
    return (
        <>
        <div className="d-flex justify-content-center">
            <ImageGradient gwidth="5" className="mx-auto">
                <BigPicture style={{backgroundColor: color}}
                className="my-2"
                alt="interior"
                src={imgInterior}>
                </BigPicture>
            </ImageGradient>
        </div>
            <ButtonContainer className="px-0">
                {buttons.map(v => v)}
            </ButtonContainer>
        </>
    )
}

const Try = () => {
    const [color, setColor] = useState(Object.values(colors)[0].hex)

    const getBrightness = (hex) => {
        const hexStripped = hex.slice(1)
        return [0,2,4].map(
            i => parseInt(hexStripped.slice(i, i+2), 16)
        ).reduce((t,c) => t+=c, 0)
    }

    const colorButtons = Object.values(colors).map(({name, hex}) =>
        <ColorButton
        key={hex}
        onClick={() => setColor(hex)}
        className={`shadow-none
            ${getBrightness(hex) > 335 ? "text-dark" : "text-light"}
        `}
        style={{backgroundColor: hex}}>
            {name}
        </ColorButton>
    )

    return (
        <TryView color={color} buttons={colorButtons} />
    )
}

export default Try
