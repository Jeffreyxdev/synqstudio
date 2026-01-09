import Navbar from './Components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6">
       <Home/>
      </div>
    </div>
  )
}

export default App