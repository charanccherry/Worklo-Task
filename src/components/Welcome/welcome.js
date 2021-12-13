import {Component} from 'react'

import './welcome.css'

const image1 = 'https://res.cloudinary.com/dpnobkqmw/image/upload/v1639302556/images_tsrpq0.jpg'
const image2 = 'https://res.cloudinary.com/dpnobkqmw/image/upload/v1639302555/images_1_lstbr3.jpg'
const image3 = 'https://res.cloudinary.com/dpnobkqmw/image/upload/v1639302555/images_2_vxddf0.jpg'


class Welcome extends Component {
    render() {
        return(
            <>
              <div className='welcome-page'>
                  <h1 className='head'>Welcome to our Community</h1>
                  <p className='para'>Fuse helps developers to build organized and well
                      coded dashboards full of beautiful and rich modules.
                      Join us and start building your application today.
                  </p>
                  <div className='bottom'>
                      <div>
                      <img src={image1} className='icon' alt='img'/>
                      <img src={image2} className='icon' alt='img'/>
                      <img src={image3} className='icon' alt='img'/>
                      <img src={image2} className='icon' alt='img'/>
                      </div>
                      <p className='para'>More than 17K people joined us</p>
                  </div>
                  </div>  
            </>
        )
    }
}
export default Welcome