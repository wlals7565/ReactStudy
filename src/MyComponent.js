//props와 children예시 App.js에서 어떻게 값 주는지 볼 것
import PropTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {
  static defaultProps = {
    name: "IJH"
  } 
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  render() {
    const { name, children } = this.props;
    return (
      <div>
        내 이름 {name}
        자식 값 {children}
      </div>
    );
  }
}

// const MyComponent = (props) => {
//     return <div>Component {props.name} 와 {props.children}</div>
// }

// MyComponent.defaultProps = {
//     name: "YJM"

// };

// MyComponent.propTypes = {
//     name: PropTypes.string.isRequired
// };

//export default를 통해 내보내고 있다.
export default MyComponent;
