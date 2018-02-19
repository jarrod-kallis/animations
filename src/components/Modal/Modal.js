import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const modal = props => {
  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={{ enter: 500, exit: 1000 }}
    >
      {/* Method executed using the children property of Transition which gets state of the transition.
          eg. entering, entered, exiting, exited */
      state => {
        const cssClasses = [
          'Modal',
          state === 'entering'
            ? 'ModalOpen'
            : state === 'exiting' ? 'ModalClosed' : null
        ];

        return (
          <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
