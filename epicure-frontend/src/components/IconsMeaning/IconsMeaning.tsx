import './IconsMeaning.scss';
import IconsMeaningInfo from '../../constants/IconsMeaningInfo';


const IconsMeaning = () => {
    return (
        <>
            <div className='icons-meaning-container'>
                <h2 className='icons-title'>THE MEANING OF OUR ICONS:</h2>
                <div className='icons-container'>
                    {IconsMeaningInfo.map((icon, index) => (
                        <div className='icon-item' key={index}>
                            <img src={icon.image} alt={icon.name} />
                            <p>{icon.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default IconsMeaning;