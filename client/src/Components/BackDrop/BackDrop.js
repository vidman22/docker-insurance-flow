import React from 'react';

import './BackDrop.css';

const backdrop = (props) => {
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={cssClasses.join(' ')} onClick={props.togglemodal}></div>;
};

export default backdrop;