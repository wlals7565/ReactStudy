import React from 'react';
import One from './first';
import Two from './Two';
import Three from './Third.js';
import Four from './Safour.js';

const App = () => {
  return (
    <One>
      <Two>
        <Three>
          <Four />
        </Three>
      </Two>
    </One>
  );
};
/*
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick =() => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
        <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
      
    ); 
  }
}
*/
//함수형 컴포넌트
// function App() {
//   const name = `IJH`;
//   return <div className="nick">{name}</div>
// }

//클래스형 컴포넌트
// class App extends Component {
//   render() {
//     const name = `IJH`;
//     return <div className="nick">{name}</div>
//   }
// }

/*클래스형 컴포넌트의 경우 state기능 및 라이프 사이클 기능을 이용할 수 있다 그리고 임의 메서드 지정이 가능하다.
**클래스형 컴포넌트는 무조건 render()함수를 가져야 한다.
*/


export default App;
