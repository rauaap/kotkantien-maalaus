import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Try from './components/Try/Try'
import Contact from './components/Contact'
import FadeInContainer from './components/FadeIn'

function App() {
    const routes = [
        {name: 'gallery', Element: Gallery},
        {name: 'services', Element: Services},
        {name: 'try', Element: Try},
        {name: 'contact', Element: Contact}
    ]
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
