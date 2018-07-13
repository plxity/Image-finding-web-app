import React, { Component } from 'react'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchImg} from 'A:\\pixabay\\src\\actions\\index.js';

 class Search extends Component {
    
    constructor(props){
        super(props);
        this.state={
            term:'',
        
        };
        this.onFormSubmit=this.onFormSubmit.bind(this);
        this.onTextChange=this.onTextChange.bind(this);

    }
   
    onTextChange(event){
        this.setState({
            term:event.target.value
        
        });


        
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchImg(this.state.term);
        this.setState({
            term:''
        });
    }
  render() {
    return (
      
          <form onSubmit={this.onFormSubmit}>
          <input
          name="searchtext"
          value={this.state.term}
          onChange={this.onTextChange}
          />
          <br/>
          
          </form>
        
      
    );
  }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchImg},dispatch);
}
export default connect(null, mapDispatchToProps)(Search);
