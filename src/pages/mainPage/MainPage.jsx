import React from 'react';
import Description from '../../components/Description';
import style from '../mainPage/mainPage.module.css';

function MainPage() {
    const mainPageData = { title: 'Title', description: 'description' };

    return (
        <div>
            <h1 className={style.mainPage}>For Main Page</h1>
            <Description data={mainPageData}/>
        </div>
    );
}

export default MainPage;