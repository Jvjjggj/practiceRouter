import {Route, Switch} from 'react-router-dom'

import Header from './components/Header/index'

import Contact from './components/Contact'

import About from './components/About'

import Home from './components/Home'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="mainn">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
