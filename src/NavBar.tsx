import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import './Pixel-font.scss';

class NavBar extends React.Component<any, any> {
  state = {fontSize: 144, iconHeight: 5, pictureSize: 20}

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
      this.setState({iconHeight: 10});
      this.setState({pictureSize: 10});
      this.setState({fontSize: 40});
    }
    else { // isMobile
      this.setState({iconHeight: 5});
      this.setState({pictureSize: 20});
      this.setState({fontSize: 90});
    }
  }

  componentDidMount() {
    this.SetSize();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <AppBar
          style={{ background: '#FFFFFF', height: `${this.state.iconHeight}%` }}
          position="fixed"
        >
        {this.props.backButton &&
        <IconButton style={{position: "absolute", top: "0px", left: "0px", height: window.innerHeight / this.state.pictureSize, width: window.innerHeight / this.state.pictureSize}} onClick={() => {this.props.history.push(`/`)}}>
          <NavigateBefore style={{height: (window.innerHeight / this.state.pictureSize) / 2, width: (window.innerHeight / this.state.pictureSize) / 2}}/>
        </IconButton>
        }
        <div className="pixelFont" style={{fontSize: `${this.state.fontSize}px`, color: "#000000", position: "absolute", top: "10%", textAlign: "center", width: "100%"}}>
          Sell my stuff
        </div>
        <IconButton style={{position: "absolute", left: `${window.innerWidth - window.innerHeight / this.state.pictureSize}px`, height: window.innerHeight / this.state.pictureSize, width: window.innerHeight / this.state.pictureSize, backgroundImage: `url(${"./images/moi.jpg"})`, backgroundSize: window.innerHeight / this.state.pictureSize}} onClick={() => {this.props.history.push(`/bio`)}}/>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;