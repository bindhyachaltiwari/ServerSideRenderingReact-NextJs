import React, {Component} from 'react';
import LeftTile from './leftTile';
import RightTile from './rightTile';

class Tile extends Component {

  Tiles(props){

    let tiles = [], tileNumber = 1

    for(let app of props.apps){
      tiles.push(
        <div>
        <style jsx>{`
         .app-card {
  margin-bottom: 60px;
  padding: 36px;
  background: lightgrey; 
  display: flex;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08); }

      `}</style>
           <div className="app-card" key={app.name}>
                <LeftTile img={app.img} appno={tileNumber} totalapps={props.totalapps}/>
                <RightTile name={app.name} app={app}/>
           </div>
           </div>
         )
      tileNumber++
    }

    return ( <div> {tiles} </div> )

  }


  render() {

    return (
      <div>
      
      <this.Tiles apps={this.props.apps} totalapps={this.props.totalapps}/>
      </div>
    );
  }

}


export default Tile;
