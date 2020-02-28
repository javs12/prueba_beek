import React from 'react';
import styles from './styles';

const Modal = ({ data, onChangeFilter, onClickCancel }) => {

    const { filter, status } = data;
    return (
        <div className="modal" {...styles(status)}>
            <div className="modal__no__content"></div>
            <div className="modal__content">
                <div>
                    <input
                        type="radio"
                        name="filter"
                        value="title"
                        checked = {filter === 'title' }
                        onChange={onChangeFilter}
                    />
                    <label>Titulo</label>
                </div>
                <div>
                    <input 
                        type="radio"
                        name="filter"
                        value="lastPlayedDate"
                        checked = {filter === 'lastPlayedDate' }
                        onChange={onChangeFilter}
                    />
                    <label>Últimos escuchados</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="filter"
                        value="purchasedDate"
                        checked = {filter === 'purchasedDate' }
                        onChange={onChangeFilter}
                    />
                    <label>Agregados recientemente</label>
                </div>
                <div className="cancel">
                    <button onClick={onClickCancel} className="btn__cancel"> Cancelar </button>
                </div>
            </div>
        </div>
      );
}
 
export default Modal;
