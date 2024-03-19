import './Card.scss';
import { cardProps } from '../../models/types';
import ilsImage from '../../assets/images/ils-image.svg';

const Card: React.FC<cardProps> = ({ title, image, subtitle, description, iconMeaning, price, rating, className }) => {
    return (
        <div className={`card ${className || ""}`}>
            <img src={image} alt={title} className="card-img" />
            <div className="card-body">
                <div className='card-title-description'>
                    <h2 className="card-title">{title}</h2>
                    {subtitle && <p className="card-subtitle">{subtitle}</p>}
                </div>
                <div className='description-meaning-container'>
                    {description && <p className="card-description">{description}</p>}
                    <div className='card-iconmeaning'>
                        {iconMeaning && <img src={iconMeaning} alt='Icon meaning' className='icon-meaning' />}
                    </div>

                </div>
                <div className='card-rating'>
                    {rating && <img src={rating} className="icon-rating" alt='stars-rating' />}
                </div>
                {price &&
                    <div className='card-price'>
                        <div className='price-line'></div>
                        <img src={ilsImage} alt='ils' className='ils-image' />
                        <span className='price-value'>{price} </span>
                        <div className='price-line'></div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Card;