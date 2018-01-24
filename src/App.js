import React, { Component } from 'react';

import './App.css';
import ListItem from './components/ListItem/listItem';
import RecommItem from './components/RecommItem/recommItem';
import data from './data.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mylist : data.mylist,
      recommendations : data.recommendations
    };
    this.add=this.add.bind(this);
    this.remove=this.remove.bind(this);
  }

  add(id){

      this.setState(

        (prev)=>{
        return{
          recommendations:prev.recommendations.filter(
          (item)=>{
            return item.id !==id;
          }
        ),
          mylist:[...prev.mylist,prev.recommendations.find(
            (item)=>{
                    return item.id ===id;
                  }
          )]
        }
      })
  //  }
  }

  remove(id){

    this.setState(
      (prev)=>{
      return {
        mylist:prev.mylist.filter(
        (item)=>{
          return item.id !==id;
        }
      ),
        recommendations:[...prev.recommendations,prev.mylist.find(
          (item)=>{
                  return item.id ===id;
                }
        )]
      }
    })
    //console.log(id);
  }
  render() {
    const {mylist,recommendations} = this.state;

    return (

    <div>
      <div id="header">
        <h1 className="logo">Netflix</h1>
      </div>
      <h2 className="title">My List</h2>
      <div className="slider">

        {
          !mylist?"No Item":mylist.map((item)=>{
            return (
              <ListItem
              data={item}
              key={item.id}
              remove={this.remove}
              />
            )
          })
        }
      </div>
      <h2 className="title">Recommendations</h2>
      <div className="slider">

        {
          !recommendations?"No Item":recommendations.map((item)=>{
            return (
              <RecommItem
              data={item}
              key={item.id}
              add={this.add}
              />
              )
            })
        }
      </div>
      <h2 className="title">Titles in My List</h2>
      <div className="slider">

        {
          mylist.map((item)=>{
            return (
              <div className="sliderList" key={item.id}>
                <h3>{item.title}</h3>
              </div>)
            })
        }
      </div>
    </div>
    );
  }
}

export default App;
