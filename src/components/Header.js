import './styles/Header.css'
import logo from './images/leaf.png'
// import Recommendation from './Recommendation';


function Header(){

    const title = 'Jungle House';
    // const month = new Date().getMonth();
    // const isSpring = month >= 2 && month <= 5;
    // const recommendation = isSpring ? (
    //     <div>It's time to repot 🥦</div>
    // ): (
    //     <div>It's not time to repot</div>
    // )
    // console.log(month);


    return (
        <div className = 'jh-big-header'>
            <div className = 'jh-header'>
                <img src={logo} alt='jungle house' className='jh-logo'/>
                <h1 className='jh-title'>{title}</h1>
            </div>
            {/* {recommendation} */}
            {/* <Recommendation/> */}
        </div>
    )
}

export default Header;