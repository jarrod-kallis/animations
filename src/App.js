import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false
  };

  showModal = show => {
    this.setState({ modalIsOpen: show });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.modalIsOpen}
          timeout={300}
        >
          {/* Method executed using the children property of Transition which gets state of the transition.
              eg. entering, entered, exiting, exited */
          state => <Modal show={state} closed={() => this.showModal(false)} />}
        </Transition>
        <Backdrop
          show={this.state.modalIsOpen}
          closed={() => this.showModal(false)}
        />
        <button
          className="Button"
          onClick={() => this.showModal(!this.state.modalIsOpen)}
        >
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
