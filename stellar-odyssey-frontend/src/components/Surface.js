import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom";

export default function Overview() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/overview`);
    };

  return (
    <div style={{paddingTop: '30px'}}>
        <div style={{color:'white', fontSize: '60px', paddingTop:'60px', paddingBottom: '30px'}}>Overview of Edmund's Planet</div>
        <img src={require('./img/overview.png')} style={{height: '500px', width: '650px'}} />
        <button className='button3D' onClick={() => {handleClick()}} style={{fontSize: '30px', borderRadius: '15px'}}>Click me to view 3D model!</button>
    </div>
  );
}
