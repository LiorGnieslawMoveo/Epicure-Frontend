import './IconsMeaning.scss';
import IconsMeaningInfo from '../../constants/IconsMeaningInfo';
import { JackInTheBox } from 'react-awesome-reveal';


const IconsMeaning = () => {
    return (
        <>
            <div className='icons-meaning-container'>
                <h2 className='icons-title'>THE MEANING OF OUR ICONS:</h2>
                <div className='icons-container'>
                    {IconsMeaningInfo.map((icon, index) => (
                        <JackInTheBox key={index}>
                            <div className='icon-item' key={index}>
                                <img src={icon.image} alt={icon.name} />
                                <h3>{icon.name}</h3>
                            </div>
                        </JackInTheBox>
                    ))}
                </div>
            </div>
        </>
    );
};

export default IconsMeaning;
