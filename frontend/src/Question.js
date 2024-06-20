import React from 'react';
import Ide from './Ide';

const Question = () => {
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '50%', height: '50vh' }}>
                <Ide />
            </div>
            <div style={{ width: '50%', height: '50vh' }}>
                <Ide />
            </div>
        </div>
    );
};

export default Question;