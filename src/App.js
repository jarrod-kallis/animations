import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal/Modal';
import CssTransitionModal from './components/Modal/CssTransitionModal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false,
    cssTransitionModalIsOpen: false
  };

  showModal = show => {
    this.setState({ modalIsOpen: show });
  };

  showCssTransitionModal = show => {
    this.setState({ cssTransitionModalIsOpen: show });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal
          show={this.state.modalIsOpen}
          closed={() => this.showModal(false)}
        />
        <CssTransitionModal
          show={this.state.cssTransitionModalIsOpen}
          closed={() => this.showCssTransitionModal(false)}
        />
        <Backdrop
          show={this.state.modalIsOpen || this.state.cssTransitionModalIsOpen}
          closed={() => {
            this.showModal(false);
            this.showCssTransitionModal(false);
          }}
        />
        <button
          className="Button"
          style={{ marginRight: 10 }}
          onClick={() => this.showModal(!this.state.modalIsOpen)}
        >
          Open Modal
        </button>
        <button
          className="Button"
          onClick={() =>
            this.showCssTransitionModal(!this.state.cssTransitionModalIsOpen)
          }
        >
          Open CSS Transition Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
