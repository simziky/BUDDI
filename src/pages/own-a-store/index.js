// import styling
import './index.scss'
import StoreImg from '../../images/store (1).png'
import Mega from '../../images/megaphone.png'
import Community from '../../images/communities.png'

const Store = () => {
    return(
        <>
        <div className='store-main'>

            <main>
                <section className='own-a-store'>

                        <div className='sec1'>
                            <span>
                            <img src={StoreImg} alt='' />
                            </span>
                            
                            <h1>Own A Store</h1>
                            <p>
                            You can create your own store as a
                            seller/vendor
                            </p>
                        </div>

                        <div className='sec2'>
                        <span>
                            <img src={Community} alt='' />
                            </span>
                            
                            <p>
                            We increase your customer base 
                            by giving you the ability to get 
                            large outreach and help manage 
                            your customer.
                            </p>
                        </div>

                        <div className='sec3'>
                        <span>
                            <img src={Mega} alt='' />
                            </span>

                                <p>
                                Free marketing and opportunity for 
                                advertisement on various social
                                media platform.
                                </p>
                        </div>
                </section>

            </main>
        </div>
        </>
    )
}

export default Store