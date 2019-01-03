import * as React from "react";
import * as ReactDOM from "react-dom";
import Gallery from './Gallery';
import SplitText from 'react-pose-text';
import posed from 'react-pose';

export default class Stuff extends React.Component<any> {
  state = {fontSize: 144, changeOpacity: false, isMobile: false}

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.SetSize();
    this.forceUpdate();
  }

  SetSize() {
    if (window.innerWidth > window.innerHeight) { // isBrowser
      this.setState({isMobile: false});
      this.setState({fontSize: window.innerHeight / 10});
    }
    else { // isMobile
      this.setState({isMobile: true});
      this.setState({fontSize: window.innerWidth / 10});
    }
  }

  componentDidMount() {
    this.SetSize();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    setTimeout(() => {
      this.setState({changeOpacity : true})
    }, 500);
  }

  render() {
    const charPoses = {
      exit: { opacity: 0, y: 0 },
      enter: {
        opacity: 1,
        y: 20,
        delay: ({ charIndex }) => charIndex * 30
      },
      invisible: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 1000
        }
      }
    };

    const Fade = posed.div({
      invisible: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 2000
        }
      }
    })
    return (
    <div>
      <div className="pixelFont" style={{fontSize: `${this.state.fontSize}px`, position: "absolute", textAlign: "center", width: "100%", fontWeight: "bold"}}>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          Item of the week
        </SplitText>
      </div>
      <div className="pixelFont" style={{fontSize: `${this.state.fontSize / 1.5}px`, position: "absolute", top: "20%", textAlign: "center", width: "100%"}}>
        <SplitText pose={this.state.changeOpacity ? "visible" : "invisible"} charPoses={charPoses}>
          I want 1500 SEK from this product, what about you sell it for 2000 SEK and keep 500 SEK ? :)
        </SplitText>
      </div>
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translateX(-50%)", width: this.state.isMobile ? "100%" : `${window.innerHeight * 0.664}px`}}>
        <Gallery/>
      </div>
      <div className="pixelFont" style={{fontSize: `${this.state.fontSize / 3}px`, position: "absolute", top: "95%", textAlign: "center", width: "100%"}}>
        <SplitText pose={this.state.changeOpacity ? "visible" : "invisible"} charPoses={charPoses}>
          If you are interested, you can contact me at herve.tchikladze@epitech.eu
        </SplitText>
      </div>
      {/* <img src="./images/face.png" style={{position: "absolute", left:"17%", top: "6%", zIndex: 1}}/> */}
      {/* <div style={{position: "absolute", top: "4%", left: "8%", height: "27%", width: "84%", background: "#75CECD", borderRadius: "23px", border: "20px", zIndex: -1}}/> */}
      {/* <div style={{position: "absolute", top: "4%", left: "8%", height: "27%", width: "84%", background: "#ababab", borderRadius: "23px", border: "20px"}}/> */}
    </div>
    )
  }
}