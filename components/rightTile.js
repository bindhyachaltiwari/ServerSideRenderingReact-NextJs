import React, {Component} from 'react';
import Title from './title';


class RightTile extends Component {

  render() {
    return (
      <div>
      <style jsx>{`
        .app-meta {
  margin-bottom: 1.2rem; }
  .app-meta h3 {
    font-size: 2.6rem;
    margin-bottom: .5rem; }
  .app-meta .connector {
    padding-left: .5rem;
    vertical-align: middle; }
        .app-link a {
  margin-right: 2rem; }

.app-link a:last-of-type {
  margin-right: 0; }

  .btn {
  display: inline-block;
  border: 0;
  padding: 0 16px;
  height: 40px;
  line-height: 40px;
  font-size: .8235rem;
  font-weight: 500;
  border-radius: 3px;
  text-align: center;
  text-transform: uppercase;
  background: #06c;
  color: #fff;
  cursor: pointer; }

a.btn {
  color: #fff; }

.btn:hover,
.btn:active {
  opacity: .5; }

.content {
  background: whitesmoke; }

.app-card .btn {
  padding: 0 20px;
  border-radius: 50px;
  height: 2rem;
  line-height: 2.1rem;
  text-decoration: none;
  margin-top: 20px; }

      `}</style>
      <div className="col-right">
        <div className="app-meta">
           <Title name={this.props.name} publisher={this.props.app.projectAllocated}/>
           Role:<span className="app-lic">{this.props.app.profile}</span>
        </div>
        <div className="app-intro" dangerouslySetInnerHTML={{__html: this.props.app.desc}} />
         <div className="app-link">
          <a className="btn" href={this.props.app.profileLink} target="_blank">Linked In profile</a>
        </div>
      </div>
      </div>
    );
  }

}


export default RightTile;
