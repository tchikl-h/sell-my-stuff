import * as React from "react";
import * as ReactDOM from "react-dom";
import SplitText from 'react-pose-text';
import posed from 'react-pose';
import {Levitate} from './Levitate';
import NavBar from './NavBar';

export default class Bio extends React.Component<any> {
  state = {fontSize: 144, changeOpacity: false, imgSize: 20}

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
      this.setState({imgSize: window.innerWidth / 5});
      this.setState({fontSize: window.innerHeight / 10});
    }
    else { // isMobile
      this.setState({imgSize: window.innerHeight / 5});
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
      <NavBar {...this.props} backButton={true}/>
      <div className="pixelFont" style={{fontSize: `${this.state.fontSize}px`, position: "absolute", textAlign: "center", top: "10%", width: "100%", fontWeight: "bold"}}>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          About me
        </SplitText>
      </div>
      <div className="pixelFont" style={{fontSize: `${this.state.fontSize / 1.5}px`, position: "absolute", top: "30%", textAlign: "center", width: "100%"}}>
        <SplitText pose={this.state.changeOpacity ? "visible" : "invisible"} charPoses={charPoses}>
          I am just a lazy student who wants his stuff to be sold by others
        </SplitText>
      </div>
      <Levitate
        src="./images/moi-ballons.png"
        style={{height: `${this.state.imgSize}px`, position: "absolute", top: "50%", left: "40%"}}
        randomDuration={Math.floor(Math.random()*1000) + 2000}
        randomPos={20}
      />
      <div className="pixelFont" style={{fontSize: `${this.state.fontSize / 3}px`, position: "absolute", top: "95%", textAlign: "center", width: "100%"}}>
        <SplitText pose={this.state.changeOpacity ? "visible" : "invisible"} charPoses={charPoses}>
          If you are interested, you can contact me at herve.tchikladze@epitech.eu
        </SplitText>
      </div>
    </div>
    )
  }
}