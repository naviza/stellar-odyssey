import Spline from '@splinetool/react-spline';

export default function Overview() {
  return (
    <div style={{paddingTop: '30px'}}>
        <div style={{color:'white', fontSize: '60px', paddingTop:'60px', paddingBottom: '30px'}}>Overview of Edmund's Planet</div>
        <Spline scene="https://prod.spline.design/6Tv0g2gt7U6yoovs/scene.splinecode" style={{marginLeft: '180px', height: '504px'}} />
    </div>
  );
}
