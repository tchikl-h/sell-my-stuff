import * as React from "react";
import * as ReactDOM from "react-dom";
import Gallery from './Gallery';

export default class Stuff extends React.Component<any> {
  state = {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      {/* <img src="./images/face.png" style={{position: "absolute", left:"17%", top: "6%", zIndex: 1}}/> */}
      <div style={{position: "absolute", top: "4%", left: "8%", height: "27%", width: "84%", background: "#75CECD", borderRadius: "23px", border: "20px", zIndex: -1}}/>
      <div style={{position: "absolute", top: "4%", left: "8%", height: "27%", width: "84%", background: "#ababab", borderRadius: "23px", border: "20px"}}/>
      <div style={{position: "absolute", top: "5%", left: "10%", height: "30%", width: "80%"}}>
        <Gallery/>
      </div>
    </div>
    )
  }
}