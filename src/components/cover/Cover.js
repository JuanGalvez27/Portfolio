
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4'

export default function Cover(){
  return (
    <div className='cover-container'>
      <video className='video' src={coverVideo} autoPlay loop muted></video>
      <h1>Juan Gálvez Parra</h1>
      <p>Desarrollador Full Stack</p>
    </div>
  )
}
