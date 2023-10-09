import Spline from '@splinetool/react-spline';
import { React, useState } from "react";


export default function Overview() {

    const [loaded, setLoaded] = useState(false)

    function onLoad() {
        setLoaded(true)
      }


  return (
    <div style={{paddingTop: '30px', paddingBottom: '200px'}}>
        {!loaded && <div><div style={{paddingTop: '30px', paddingLeft: '45%'}}><div className='loading' ></div></div>
        </div>}
        <Spline scene="https://prod.spline.design/6Tv0g2gt7U6yoovs/scene.splinecode" onLoad={onLoad} style={{marginLeft: '180px', height: '504px'}} />
    </div>
  );
}
