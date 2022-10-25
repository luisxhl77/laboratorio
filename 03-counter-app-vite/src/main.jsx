import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { Helloword } from './Helloword';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<Helloword title="hello word" name="goku"/>*/}
        <CounterApp value={1} name="luis"/>
    </React.StrictMode>
)


