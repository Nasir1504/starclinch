import React from 'react';

//styles
import './styles.scss';

import App from './App';

// import CanvasComp from './components/Canvas-Comp/CanvasComp';

export default function MainPage() {
    return (
        <div className="main-section">
            {/* <CanvasComp /> */}
            <App />
        </div>
    )
}
