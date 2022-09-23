//import Logo from '../../components/logo'
import './index.scss'
import Shopping from '../../images/shopping-cart.png'
import Paw from '../../images/paw.png'
import Care from '../../images/pet-care.png'

const Description = () => {
    return (
        <>
        <div className='Desc-Main'>
            <div className='main'>
                <section className='desc'>
                    <h1>Description</h1>
                        <p>
                        This is an online commercial platform with a
                        network of dog breeders, sellers etc.
                        It an online market place for pets (dogs,
                        cat, rabbit etc) and to make it easy for people
                        to be able to have a pets.
                        we stand in making more solutions to problem that both 
                            buyer and seller encounter, we offer a wide range of
                            service.
                        </p>
                </section>

                <div className='desc-list'>

                <section className='shopping'>
                    <span>
                    <img src={Shopping} alt='shopping' />
                    Shopping
                    </span>
                    
                            <p>
                            Make an order going through our 
                            category of products and get 
                            notified of the delivery date.
                            </p>
                </section>

                <section className='vet'>
                <span>
                <img src={Paw} alt='Paw' />
                Vet
                </span>
                
                            <p>
                            Get quick response on  
                            how to apply firstaid,
                            and know the nearest and best
                            vet clinic in your area
                            </p>
                </section>

                <section className='grooming'>
                <span>
                <img src={Care} alt='Care' />
                    Grooming/Daycare
                </span>
                
                            <p>
                            Get the best care and training for 
                            your pet, you can finally take a 
                            vacation with peace of mind
                            </p>
                </section>
                            {/*
                <section className='footer'>
                    <div className='footer-inner'>
                            <p>
                            we stand in making more solutions to problem that both 
                            buyer and seller encounter, we offer a wide range of
                            service.
                            </p>

                    </div>
                </section>
                */}

                </div>
            </div>

        </div>
        </>
    )
}

export default Description