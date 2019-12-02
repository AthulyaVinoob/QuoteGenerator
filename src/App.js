import React ,{Component} from 'react';
import './App.css';
import Button from './component/Button';



class  App extends Component {
 clickAction(){
  console.log("Button clicked")
 }
  render(){
  return (
    <div className="App" id="quote-box">
      <Button buttonText="Next Quote" clickHandler={this.clickAction}/>
    </div>
  );
  }
}

export default App;
