import * as React from 'react';
import '../../../styles/button.css';

class Button extends React.Component<any, any> {
  render() {
    return (
      <button className="button">{this.props.text}</button>
    );
  }
}

export default Button;