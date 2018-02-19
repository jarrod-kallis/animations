import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

const cssModal = props => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={{ enter: 500, exit: 1000 }}
      classNames="Modal-Fade-Slide" // Define the base of the css class name.
      // CSSTransition will append the leaf part of the name. Eg. -enter, -enter-active, -exit, -exit-active
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default cssModal;
