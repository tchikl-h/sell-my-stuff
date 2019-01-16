import * as React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

export class ButtonSlide extends React.Component<any> {
  state = { changePos: false, fontSize: 100, width: 0, height: 0 };
  public Slide;
  
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.BuildItem();
  }

  SetSize() {
    if (window.innerWidth > window.innerHeight) { // isBrowser
      this.setState({fontSize: window.innerHeight / 15});
      this.setState({width: window.innerWidth / 6});
      this.setState({height: window.innerHeight / 7});
    }
    else { // isMobile
      this.setState({fontSize: window.innerWidth / 15});
      this.setState({width: window.innerWidth / 3});
      this.setState({height: window.innerHeight / 10});
    }
  }

  BuildItem() {
    this.SetSize();
    this.Slide = posed.div({
      exit: { opacity: 0, y: window.innerHeight / 2 + window.innerHeight / 10 + window.innerHeight / 10 },
      enter: {
          opacity: 1,
          y: window.innerHeight / 2 + window.innerHeight / 10,
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.BuildItem();
    this.forceUpdate();
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    setTimeout(() => {
      this.setState({changePos : true})
    }, 1000);
  }

  render() {
    return (
      <div>
        <this.Slide pose={this.state.changePos ? "enter" : "exit"}>
          <Button style={{fontFamily: "Pixel", fontSize: `${this.state.fontSize+5}px`, width: `${this.state.width}px`, height: `${this.state.height}px`, backgroundColor: "#FFFFFF", color: "#000000", position: "absolute", top: "60%", left: "50%", transform: "translateX(-50%)"}} variant="contained" onClick={() => {this.props.history.push(`/stuff`)}}>
            {this.props.content}
          </Button>
        </this.Slide>
      </div>
    )
  }
}