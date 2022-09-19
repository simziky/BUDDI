import './index.scss'
import Flogo from '../../images/buddi1.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <>
            <footer>
                    <address>
                        <section>
                            <div className='address'>
                                <h1>Address</h1>
                           <p> PLOT, 7 HERITAGE ESTATE IGBE LAARA .IKORODU,LAGOS.</p>
                            </div>

                            <div className='socials'>
                              
                                <div className='contacts'>
                                <a target= 'whatsapp' href='https://yukiport.netlify.app/'> <div className='whatsapp'><WhatsAppIcon /></div></a>
                                <a target= 'instagram' href='https://yukiport.netlify.app/'> <div className='insta'><InstagramIcon /></div> </a>
                                </div>
                            </div>

                            <div className='logo-footer'>
                                    <img src = {Flogo} alt = 'LOGO' />
                            </div>

                        </section>
                        
                        <div className='email'>
                        <a href=''> buddicustomer@gmail.com </a>
                        </div>
                    </address>
            </footer>
        </>
    )
}

export default Footer