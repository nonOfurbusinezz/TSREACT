import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx'
import App from "./App.tsx"
import About from './About.tsx'
const MyRoutes = () => {

    return(
        <Router>
            <Routes>
                <Route index element={<App/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>

        </Router>
    )
}

export default MyRoutes;