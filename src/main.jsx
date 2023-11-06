import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ImagenAnimada from './components/ImagenAnimada.jsx'
import Navbar from './components/Navbar.jsx'
import VideoFondo from './components/Video'
import SobreUruguay from './components/SobreUruguay'
import Seccion3 from './components/Seccion3'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <Navbar />
    <VideoFondo />
    <ImagenAnimada />
    <SobreUruguay />
    <Seccion3 />
    </div>
  </React.StrictMode>,
)