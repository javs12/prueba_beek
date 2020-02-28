import React, { useState } from 'react';
import { DATA } from '../../utils/audioBooks';

const sortArray = (key) => {
    return (a, b) => {
        let keyA;
        let keyB;
        let type = 1;
        if (key === 'lastPlayedDate' || key === 'purchasedDate') {
            keyA = new Date(a[key]);
            keyB = new Date(b[key]);
            type = -1;
        } else {
            keyA = a[key];
            keyB = b[key];
        }
        let comparison = 0;
        if (keyA > keyB) {
            comparison = (1 * type);
        } else if (keyA < keyB) {
            comparison = (-1 * type);
        }
        return comparison;
    }
}

const withData = Component => (props) => {
    const { audiobooks } = DATA;
    const [data, setData] = useState({
        filter:'title',
        status: false,
    });
    const [audioBooks, sortAudioBooks] = useState(audiobooks.sort(sortArray(data.filter)));

    const onChangeFilter = (e) => {
        const key = e.target.value;
        setData({
            ...data,
            filter: key,
            status:false,
        })
        sortAudioBooks(
            audioBooks.sort(sortArray(key))
        );
    }

    const onClickModal = () => {
        setData({
            ...data,
            status:true,
        });
    }

    const onClickCancel = () => {
        setData({
            ...data,
            status:false,
        })
    }

    return ( 
        <Component
            audioBooks={audioBooks}
            data={data}
            onChangeFilter={onChangeFilter}
            onClickModal={onClickModal}
            onClickCancel={onClickCancel}
        />
     );
}
 
export default withData ;