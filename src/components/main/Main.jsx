import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withData from './withData';
import styles from './styles';
import AudioBook from '../book/AudioBook';
import Modal from '../modal/Modal';

const Main = (props) => {
    const { 
        audioBooks,
        data,
        onChangeFilter,
        onClickModal,
        onClickCancel } = props;
    return ( 
        <div className="lyt-main" {...styles}>
            <div className="lty-main__body">
                <div className="lty-main__nav">
                    <h1>Audiolibros</h1>
                    <FontAwesomeIcon 
                        icon={faBars}
                        onClick={onClickModal}
                    />
                </div>
                <div className="lty-main__content">
                    {audioBooks.map((audiobook) => (
                        <AudioBook 
                            key={audiobook.id}
                            audiobook={audiobook}
                        />
                    ))}
                </div>
                <Modal 
                    data={data}
                    onChangeFilter={onChangeFilter}
                    onClickCancel={onClickCancel}
                />
            </div>
        </div>
     );
}

export default withData(Main);