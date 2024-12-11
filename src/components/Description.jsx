import React from 'react';
import style from '../components/description.module.css';

function Description({ data }) {
    const { title, description } = data;

    return (
        <div>
            <h2 className={style.description}>{title}</h2>
            <p className={style.descriptionParaph}>{description}</p>
        </div>
    );
}

export default Description;