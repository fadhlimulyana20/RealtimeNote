import React, { Component } from 'react';

class App extends Component {
  state = {  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="d-flex justify-content-between py-4">
            <div className="title">
              <h3>Realtime <span className="font-weight-bold">NoteApp</span></h3>
            </div>
            <div className="action-button">
              <button className="btn btn-secondary rounded-pill px-4 font-weight-bold">Create New Note</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;