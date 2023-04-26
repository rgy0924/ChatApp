import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { render } from 'react-dom'

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

ReactDOM.createRoot(document.getElementById("chatApp")).render(<App />,);