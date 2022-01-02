import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './component/Posts';

class App extends React.Component {

  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()
    .then((response) => {
      console.log(response);
      this.setState({
        articles: response.items
      });
    })
    .catch(console.error);
  }
  render() {
    return (
      <div className="App">
        <Posts itents={this.state.articles} />
      </div>
    );

  }
}

export default App;
