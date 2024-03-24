import './Hero.scss';
import SearchIcon from '../../assets/images/search-icon.svg'
import { Slide } from "react-awesome-reveal";


const Hero = () => {
    return (
        <>
            <div className='hero-container' >
                <Slide>
                    <div className='hero-overlay'>
                        <div className='hero-content'>
                            <div className='hero-text'>Epicure works with the top chef restaurants in Tel Aviv</div>
                            <div className='search-bar'>
                                <button>
                                    <img src={SearchIcon} alt='Search Logo' />
                                </button>
                                <input
                                    type='text'
                                    placeholder='Search for restaurant cuisine, chef'
                                />
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </>
    );
};

export default Hero;