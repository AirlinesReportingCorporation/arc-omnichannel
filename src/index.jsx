require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import Omnichannel from './app';

var mountNode = document.getElementById('app');

ReactDOM.render(<Omnichannel/>, mountNode); 