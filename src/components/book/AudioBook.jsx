import React from 'react';
import { faCheckCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment';
import styles from './styles';

const AudioBook = ({ audiobook }) => { 
    const {
        title,
        authors,
        narrators,
        runtime,
        cover_url,
        isDownloaded,
        progress,
    } = audiobook;

    const time = moment(runtime,'HH:mm:ss');
    const stringTime = `${time.hour()}h ${time.minute()}m`;

    return ( 
        <div className="book" {...styles(progress)}>
            <div className="book__img">
                <img src={cover_url} alt="portada de libro"/>
            </div>
            <div className="book_content">
                <div className="book__content__title">
                    <p>
                        <span>{title}</span>
                    </p>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
                <p className="book__content__author"><span>{authors}</span></p>
                <p className="book__content__narrator"><span>{ narrators }</span></p>
                <div className="book__content__progress">
                    <label>{`${progress}%`}</label>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div className="book__content__download">
                        {isDownloaded 
                        ?   <>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <label>Descargado</label>
                            </>
                        : null}
                        <label id="str_progress">{(progress === 100) ? 'Terminado' : stringTime}</label>
                </div>
            </div>
        </div>
     );
}
 
export default AudioBook;