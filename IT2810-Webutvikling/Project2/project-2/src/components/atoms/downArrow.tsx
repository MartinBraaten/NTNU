import arrow from '../media/arrow.png';
import '../components-style/downArrow.css';
import { slideDown } from '../pages/homePage';
import React from 'react';


// Arrow component for showing drop down menu
class DownArrow extends React.Component {
    render() {
        return (
            <img id='downArrow' onClick={slideDown} src={arrow} alt="arrow" width="50" />
        );
    }
}

export default DownArrow;