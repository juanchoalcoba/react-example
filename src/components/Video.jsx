import './Video.css'
function VideoFondo() {
  return (
    
    <video autoPlay muted loop id="video-fondo" style={{opacity: "0.4"}}>
      <source src="/video.mp4" type="video/mp4" />
      Tu navegador no soporta videos en HTML5.
    </video>
    
  );
}

export default VideoFondo;