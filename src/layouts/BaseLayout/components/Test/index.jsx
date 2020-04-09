import React from "react";
import { connect } from 'react-redux';
function Test(props) {
  return <h1>這是測試子組件{props.num}</h1>;
}
//需要渲染什么数据
function mapStateToProps(state) {
    return {
        num:state
    }
  }
export default Test;
