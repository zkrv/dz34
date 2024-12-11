import React from 'react';
import Description from '../../components/Description';
import styles from '../aboutPage/aboutPage.module.css';

function AboutPage() {
    const aboutPageData = { title: 'Title 2', description: 'description 2' };

    return (
        <div>
            <h1 className={styles.aboutPage}>For about</h1>
            <Description data={aboutPageData} />
        </div>
    );
}

export default AboutPage;