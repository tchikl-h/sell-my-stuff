import * as React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import { spring, tween, styler } from 'popmotion';

export class Rotate extends React.Component<any> {
  state = { changePos: true };
  public rotateTransitionConfig = ({key, from, to}) => {
    switch(key) {
      case "originX":
        return tween({from, to});
      case "originY":
        return tween({from, to});
      case "rotate":
        return spring({from, to, velocity: 2, mass: 30});
    }
  }
  public Image = posed.img({
    default: {
      rotate: 40,
      originX: '0%',
      originY: '0%',
      transition: this.rotateTransitionConfig
    },
    rotated: { 
      rotate: 50, 
      originX: '0%',
      originY: '0%',
      transition: this.rotateTransitionConfig
    }
  });
  EmbeddedImg = () => (
    <div>
      <this.Image pose={this.state.changePos ? 'default' : 'rotated'} src={this.props.src} style={this.props.style}/>
    </div>
  )

  componentDidMount() {
    this.setState({ changePos: !this.state.changePos });
    setInterval(() => {
      this.setState({ changePos: !this.state.changePos });
    }, 2000);
  }

  render() {
    const { changePos } = this.state;
    return <this.EmbeddedImg/>;
  }
}