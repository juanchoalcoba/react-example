import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ImagenAnimada from './components/ImagenAnimada.jsx'
import Navbar from './components/Navbar.jsx'
import VideoFondo from './components/Video'
import SobreUruguay from './components/SobreUruguay'
import Seccion3 from './components/Seccion3'
import Utec from './components/Utec.jsx'
import Departamentos from './components/Departamentos.jsx'
import CardsInformation from './components/CardsInformation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <Navbar />
    <VideoFondo />
    <ImagenAnimada />
    <SobreUruguay />
    <Seccion3 />
    <Utec />
    <Departamentos />
    <CardsInformation />
    </div>
  </React.StrictMode>,
)
