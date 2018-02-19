import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

class List extends Component {
  state = {
    items: [{ id: 1, value: 1 }, { id: 2, value: 2 }, { id: 3, value: 3 }]
  };

  addItemHandler = () => {
    this.setState(prevState => {
      return {
        items: prevState.items.concat({
          id: Math.random(),
          value: prevState.items.length + 1
        })
      };
    });
  };

  removeItemHandler = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      };
    });
  };

  render() {
    const listItems = this.state.items.map(item => (
      <CSSTransition key={item.id} classNames="ListItem-Fade" timeout={500}>
        <li
          className="ListItem"
          onClick={() => this.removeItemHandler(item.id)}
        >
          {item.value}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup className="List" component="ul">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
