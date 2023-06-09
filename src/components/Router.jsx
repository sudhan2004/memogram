import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login1 from './Login1'
import Signup from './Signup'
import Forgotpass1 from './Forgotpass1'
import Forgotpass2 from './Forgotpass2'
import Forgotpass3 from './Forgotpass3'
import Forgotpass4 from './Forgotpass4'
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import Search from './Search'
import Profile from './Profile'
import './style/Loginst.css'
import './style/Signupst.css'
import './style/Forgotpass1st.css'
import './style/Forgotpass2st.css'
import './style/Forgotpass3st.css'
import './style/Forgotpass4st.css'

export default function Router() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login1/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>
          <Route path='forgotpass1' element={<Forgotpass1/>}></Route>
          <Route path='forgotpass2' element={<Forgotpass2/>}></Route>
          <Route path='forgotpass3' element={<Forgotpass3/>}></Route>
          <Route path='forgotpass4' element={<Forgotpass4/>}></Route>
          <Route path='home1' element={<Home1/>}></Route>
          <Route path='home2' element={<Home2/>}></Route>
          <Route path='home3' element={<Home3/>}></Route>
          <Route path='Search' element={<Search/>}></Route>
          <Route path='Profile' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}
