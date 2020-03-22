import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home'
import ContactUs from './pages/contactUs'
import AboutUs from './pages/aboutUs'
import Navigation from './components/navigation'


const Routes = () => {
    return (
        <Router>
            <Navigation />
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={ContactUs} />
            </div>
        </Router>
    )
}

export default Routes