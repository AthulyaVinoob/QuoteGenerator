import React, { Component } from 'react';
import { random } from 'lodash';
import './App.css';
import QuoteComponent from './component/QuoteComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }
/*
Selects the new quote
*/
  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }
/*
generates random index for quote
*/
  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

/*
Updates state by passing new index
*/
  assignNewQuoteIndex(){
    this.setState({selectedQuoteIndex : this.selectQuoteIndex()});
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <QuoteComponent selectedQuote={this.selectedQuote}
                        assignNewQuoteIndex ={this.assignNewQuoteIndex}
        />
      </div>
    );
  }
}

export default App;