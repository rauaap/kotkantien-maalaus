import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import Gallery from './components/Gallery/Gallery'
import Services from './components/Services/Services'
import Try from './components/Try/Try'
import Contact from './components/Contact/Contact'
import FadeInContainer from './components/FadeIn'

export const routes = [
    {name: 'Etusivu', url: '', Element: Home},
    {name: 'Palvelut', url: 'palvelut', Element: Services},
    {name: 'Kokeile', url: 'kokeile', Element: Try},
    {name: 'Galleria', url: 'galleria', Element: Gallery},
    {name: 'Yhteystiedot', url: 'yhteystiedot', Element: Contact},
]

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Layout />}>
                    <Route index element={<FadeInContainer key='home'><Home /></FadeInContainer>} />
                    {routes.map(({name, Element}) =>
                        <Route
                        key={name}
                        path={name}
                        element={
                            <FadeInContainer key={name}>
                                <Element />
                            </FadeInContainer>
                        }/>
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
