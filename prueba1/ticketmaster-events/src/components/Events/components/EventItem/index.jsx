import styles from './Eventitem.module.css'

import { Link } from 'react-router-dom';

const EventItem = ({info, id, name, image, onEventClick}) => {
    const handleSeeMoreClick =  (evt) => {
        evt.stopPropagation();
        onEventClick(id);

    }
    return (
        <div onClick={() => console.log('padre clickeado')} className={`${styles.eventItemContainer} ${styles.eventItemContainerOther}`}>
            <img src={image} alt={name} width='200' height='200' />
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>Ver Mas
                    {/* <Link to={`detail/${id}`}>
                        Ver Mas
                    </Link> */}
                </button>
            </div>
        </div>
    )
}

export default EventItem