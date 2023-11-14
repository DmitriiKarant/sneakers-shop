import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainButton.module.scss'

const MainButton = ({ width, height, text, backgroundColor, color }) => {
    return (
        <button className={styles.mainButton} style={{width: width, height: height, color: color, backgroundColor: backgroundColor}}>
            {text}
        </button>
    );
};

MainButton.propTypes = {

};

export default MainButton;