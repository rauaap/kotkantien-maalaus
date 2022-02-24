import {Outlet, Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import styled from 'styled-components'
import {routes} from '../App'
import logo from '../assets/logo.png'

const NavbarLink = styled(Link)`
    text-decoration: none;
`

const Logo = styled.img`
    height: 2rem;
`

const Layout = () => {
    return (
        <div className="vh-100">
            <Navbar
            variant="dark"
            collapseOnSelect
            expand="sm"
            className="apply-primary">
            <Navbar.Brand className="mx-3"><Logo src={logo} /></Navbar.Brand>
            <Navbar.Toggle
            bsPrefix=""
            className="mx-3"
            aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                {routes.map(({name, url}) =>
                <Nav.Link as='div' key={name} href="#">
                    <NavbarLink
                    key={name}
                    className={`px-3 text-light`}
                    to={`${process.env.PUBLIC_URL}/${url}`}>
                        {name}
                    </NavbarLink>
                </Nav.Link>
                )}
            </Navbar.Collapse>
            </Navbar>
            <Outlet />
        </div>
    )
}
export default Layout
