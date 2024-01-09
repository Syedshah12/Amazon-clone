import Signin from './COMPONENTS/Signin'
import SlideScrollBar from './COMPONENTS/SlideScrollBar';
import Home from "./Modules/Home/Home";
import { Route,Routes} from "react-router-dom";

export default function App() {
  return (


<Routes>
<Route exact path='/' element={<Home/>}    />
<Route exact path='/signin' element={<Signin/>}    />
</Routes>



  )
}