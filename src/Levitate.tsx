import * as React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';

export class Levitate extends React.Component<any> {
  state = { changePos: true, isFalling: false, src: this.props.src };

  ChangeIsFalling() {
    this.setState({src: this.props.src.replace(".png", "-hit.png")})
    setTimeout(() => {
      this.setState({isFalling : true})
      this.setState({src: this.props.src.replace(".png", "-fall.png")})
    }, 250);
  }

  public Image = posed.img({
    up: {
      y: - this.props.randomPos,
      transition: {
        duration: this.props.randomDuration
      }
    },
    down: {
      y: this.props.randomPos,
      transition: {
        duration: this.props.randomDuration
      }
    },
    fall: {
      y: 5000,
      transition: {
        duration: 6000
      }
    },
    
  });
  EmbeddedImg = () => (
    <div>
      <this.Image pose={this.state.isFalling ? 'fall' : this.state.changePos ? 'up' : 'down'} src={this.state.src} style={this.props.style} onClick={() => this.ChangeIsFalling()}/>
    </div>
  )

  componentDidMount() {
    this.setState({ changePos: !this.state.changePos });
    setInterval(() => {
      this.setState({ changePos: !this.state.changePos });
    }, this.props.randomDuration);
  }

  render() {
    const { changePos } = this.state;
    return <this.EmbeddedImg />
  }
}