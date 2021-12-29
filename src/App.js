import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get } from "firebase/database";

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("Trivia Question Console Log");

    return (
      <div>
        <h1>Hello-World!</h1>
      </div>
    )
  }
}

export default App;
