import React, { Component } from 'react';
import { Button } from 'antd';
import request from 'request'
import './App.css';

class App extends Component {
  sendLine = () => {
    request({
      method: 'POST',
      uri: 'https://notify-api.line.me/api/notify',
      header: {
        'Access-Control-Allow-Origin': 'https://notify-api.line.me/api/notify',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        bearer: '8zH7O77Fjpj3UZxv28qIylbQr7CB0PqMrfx8yLnZzbl',
      },
      form: {
        message: 'ทดสอบ', 
      },
    }, (err, httpResponse, body) => {
      if (err) {
        alert(err)
      } else {
        alert('Send success')
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Button onClick={this.sendLine} type="primary">Primary</Button>
      </div>
    );
  }
}

export default App;
