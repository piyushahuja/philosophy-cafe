'use strict';


class EventContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {enrolled: false };
  }

  render() {
    if (this.state.enrolled) {
      return 'You're attending.';
    }

    return React.createElement(
      'button',
      { onClick: () => this.setState({ enrolled: true }) },
      'Attend'
    );
  }
}



const domContainer = document.querySelector('#event_container');
ReactDOM.render(React.createElement(EventContainer), domContainer);
