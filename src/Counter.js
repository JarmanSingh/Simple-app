import React from "react";
import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "./store/counter";

function Counter(props) {
  const { count, increaseCounter, decreaseCounter } = props;

  return (
    <div>
      <div>I was clicked {count} times</div>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => {
      dispatch(increaseCounter());
    },
    decreaseCounter: () => {
      dispatch(decreaseCounter());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
