import React, { useState } from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputlist:"" , item:[]}

  }

  nchange = (event) => {
   const m = event.target.value;
   this.setState({inputlist:m});
  }

  btnClicked = () => {

    let input = this.state.inputlist;
    let list = this.state.item;
    list.push(input);
    this.setState({item:list});
    this.setState({inputlist:""});

  }

  del=(index)=>{
    let list = this.state.item;
    list.splice(index, 1);
    this.setState({item:list});
  }

  render() {
    return (
      <>
        <div className="main-div">
          <div className="child-div">
            <br />
            <h1>Todo List  </h1>
            <br />
            <div className="input-parent-div">
              <input type="text" placeholder="Add a items" value={this.state.inputlist}  onChange={this.nchange} />
              <button className="plus-btn" onClick={this.btnClicked}> + </button>
            </div>
            <ol>
                
               {
                this.state.item.map((interVal,index)=><li key={index}>
                    
                  {interVal}
                  <button onClick={()=>this.del(index)} className="delete-btn"> - </button>
                  </li>)
              } 
            </ol>
          </div>
        </div>
      
      </>
    )
  }
}