import React, {Component} from 'react';

class LeftTile extends Component {

  render() {
    return (
      <div>
      <style jsx>{`
        .col-left {
        margin-right: 1.45rem;
        position: relative; }
        .app-no {
  color: #F42;
  line-height: 1;
  margin-bottom: 1.2rem;
  position: absolute;
  top: 0;
  left: -13px; }
  .app-icon {
  max-width: none !important;
  border: 4px solid white;
  border-radius: 1rem; }

      `}</style>
      <div className="col-left">
        <div className="app-no">
         
         <span>{this.props.appno}</span>
        </div>

        <img className="app-icon" src={this.props.img.src} alt={this.props.img.alt} height="120" width="120"/>
      </div>
      </div>
    );
  }

}


export default LeftTile;
