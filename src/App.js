import React from 'react';
import { connect } from 'react-redux';

import {
  incrementA,
  incrementB
} from './actions/action-type';

import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  handleCounterA = () => {
    this.props.incrementA();
  }

  handleCounterB = () => {
    this.props.incrementB();
  }

  render() {
    const { counterA, counterB } = this.props;

    return (
      <div className="container App_btn">
        <div className="row">
          <div className="col-md-12 btn-increment">
            <p>
              <button onClick={this.handleCounterA} type="button" className="btn btn-secondary">Increment +1</button>
              <button type="button" class="btn btn-light">{counterA.count}</button>
            </p>
            <p>
              <button  onClick={this.handleCounterB} type="button" className="btn btn-secondary">Increment +2</button>
              <button type="button" class="btn btn-light">{counterB.count}</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    incrementA: () => dispatch(
      incrementA()
    ),
    incrementB : () => dispatch(
      incrementB()
    )
  }
};

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
