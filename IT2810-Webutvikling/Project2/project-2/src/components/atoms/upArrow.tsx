import React from 'react';
import '../components-style/upArrow.css';
import arrow from '../media/arrow.png';
import { slideUp } from '../pages/homePage';


// Arrow component for hiding drop down menu
class UpArrow extends React.Component {
    render() {
        return (
            <img id="upArrow" onClick={slideUp} src={arrow} alt="arrow" width="50" />
        );
    }
}

export default UpArrow;