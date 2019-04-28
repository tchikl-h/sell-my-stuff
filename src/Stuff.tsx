import * as React from "react";
import * as ReactDOM from "react-dom";
import Gallery from './Gallery';
import SplitText from 'react-pose-text';
import posed from 'react-pose';
import NavBar from './NavBar';
import Button from '@material-ui/core/Button';

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
      <div>
        <NavBar {...this.props} backButton={true}/>
      </div>
      <div className="pixelFont" style={{fontSize: `${this.state.fontSize}px`, position: "absolute", textAlign: "center", top: "10%", width: "100%", fontWeight: "bold"}}>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          Item of the week
        </SplitText>
      </div>
      <div className="pixelFont" style={{fontSize: `${this.state.fontSize / 1.5}px`, position: "absolute", top: "30%", textAlign: "center", width: "100%"}}>
        <SplitText pose={this.state.changeOpacity ? "visible" : "invisible"} charPoses={charPoses}>
          Sell this smartphone for more than $100 and keep the change
        </SplitText>
      </div>
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translateX(-50%)", width: this.state.isMobile ? "90%" : `${window.innerHeight * 0.664}px`}}>
        <Gallery/>
      </div>
      <div className="pixelFont" style={{fontSize: `${this.state.fontSize / 3}px`, position: "absolute", top: "95%", textAlign: "center", width: "100%"}}>
        <SplitText pose={this.state.changeOpacity ? "visible" : "invisible"} charPoses={charPoses}>
          If you are interested to sell this product, you can contact me at herve.tchikladze@epitech.eu
        </SplitText>
      </div>
    </div>
    )
  }
}