import {Children} from 'react'
import {Fade} from 'react-bootstrap'

const FadeInContainer = ({children}) => {
    return (
        <Fade appear={true} in={true}>
            <div style={{transitionDuration: '0.7s'}}>
                {Children.only(children)}
            </div>
        </Fade>
    )
}
export default FadeInContainer
