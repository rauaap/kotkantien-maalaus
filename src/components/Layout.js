import {Outlet, Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import styled from 'styled-components'

const NavbarLink = styled(Link)`
    text-decoration: none;
`

const Layout = () => {
    const links = [
        {name: 'Etusivu', url: ''},
        {name: 'Galleria', url: 'gallery'},
        {name: 'Palvelut', url: 'services'},
        {name: 'Kokeile', url: 'try'},
        {name: 'Yhteystiedot', url: 'contact'},
    ]

    return (
        <div className="vh-100">
            <Navbar
            variant="dark"
            collapseOnSelect
            expand="sm"
            className="apply-primary">
            <Navbar.Brand className="mx-3">Maalaamo</Navbar.Brand>
            <Navbar.Toggle
            bsPrefix=""
            className="mx-3"
            aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                {links.map(({name, url}) =>
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
