import React,{Fragment} from 'react'
import { BrowserRouter , Route, Link,Switch, } from 'react-router-dom'
import Navbar from './Navbar'
import Missions from './Missions'
import Launches from './Launches'
import Home from './Home'
const Router = () => (
    <BrowserRouter>
       <>
      
       <Navbar/>
       
     
      <Switch>
            <Route path="/missions" component={Missions} />
            <Route path="/launches" component={Launches} />
            <Route path="/" exact component={Home} />
        </Switch>
        </>
    </BrowserRouter>
)

export default Router

