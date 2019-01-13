import * as React from "react";
import * as ReactDOM from "react-dom";
import {Levitate} from './Levitate';
import {Rotate} from './Rotate';
import Button from '@material-ui/core/Button';
import disableScroll from 'disable-scroll';
import SplitText from 'react-pose-text';
import {ButtonSlide} from './ButtonSlide';
import NavBar from './NavBar';
import './Pixel-font.scss';

export default class Menu extends React.Component<any> {
  state = { fontSize: 144, imgSize: 20, tvHeight: 0, smartphoneHeight: 0, levitationHeight: 20 } // 1/34 hauteur levitate

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.SetSize();
    this.forceUpdate();
  }

  SetSize() {
    if (window.innerWidth > window.innerHeight) { // isBrowser
      this.setState({fontSize: window.innerHeight / 10});
      this.setState({imgSize: window.innerWidth / 5});
      this.setState({tvHeight: 0});
      this.setState({smartphoneHeight: window.innerHeight - window.innerHeight / 3 - 50});
    }
    else { // isMobile
      this.setState({fontSize: window.innerWidth / 10});
      this.setState({imgSize: window.innerHeight / 5});
      this.setState({tvHeight: window.innerHeight / 10});
      this.setState({smartphoneHeight: window.innerHeight - window.innerHeight / 5});
    }
  }

  componentDidMount() {
    this.SetSize();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    disableScroll.on();

    const charPoses = {
      exit: { opacity: 0, y: 20 },
      enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 30
      }
    };
    return (
    <div>
      <NavBar {...this.props} backButton={false}/>
      <Rotate 
      src="./images/micro.png"
      style={{height: `${this.state.imgSize}px`, position: "absolute", top: "5%", left: "10%"}}
      />
      <Levitate
        src="./images/smartphone.png"
        style={{height: `${this.state.imgSize}px`, position: "absolute", top: `${this.state.smartphoneHeight}px`, left: "0%"}}
        randomDuration={Math.floor(Math.random()*1000) + 2000}
        randomPos={this.state.levitationHeight}
      />
      <Levitate
        src="./images/game_console.png"
        style={{height: `${this.state.imgSize}px`, position: "absolute", bottom: "5%", right: "5%"}}
        randomDuration={Math.floor(Math.random()*1000) + 2000}
        randomPos={this.state.levitationHeight}
      />
      <Levitate
        src="./images/tv.png"
        style={{height: `${this.state.imgSize}px`, position: "absolute", top: `${this.state.tvHeight}px`, right: "5%"}}
        randomDuration={Math.floor(Math.random()*1000) + 2000}
        randomPos={this.state.levitationHeight}
      />
      <div className="pixelFont" style={{fontSize: `${this.state.fontSize}px`, position: "absolute", top: "55%", transform: "translateY(-100%)", textAlign: "center", width: "100%"}}>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          Sell my stuff and make money
        </SplitText>
      </div>
      <ButtonSlide {...this.props} content={"STUFF"}/>
    </div>
    )
  }
}