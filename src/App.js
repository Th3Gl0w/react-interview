import React, { Component } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import CardDisplay from './CardDisplay'
import { movies$ } from './movies';

class App extends Component {
  
  state = {
    result : [],
    categories: [],
    valueSelector : undefined,
    value : [],
    page : 1
  }

  getData = async() => {
    const arr = []
    const arrTest = []
   this.setState({
     result : await movies$,
   })
   this.state.result.map(e => {
     if(arr.includes(e.category)===false){
       arr.push(e.category)
     }
   })
   arr.map(e => arrTest.push({ key: e, text: e, value: e }))
   this.setState({
     categories : arrTest
   })
   console.log(this.state.categories)
  }
  
 
  deleteFunc = m => {
    this.setState({
      result : this.state.result.filter(f => (f.id !== m))
    })
   
  }
  handleChange = (e, { value }) => this.setState({ value })

  handlePrev = (e) => {
    if(this.state.page !== 1){
        this.setState({
            page : this.state.page -1
        })
    }       
}

  handleNext = (e) => {
    if(this.state.page !== 3){
        this.setState({
            page : this.state.page +1
        })
    }       
}
 numPage = (e) => {
  this.setState({
      valueSelector : e.target.value,
      page : 1
    })
 }
  componentDidMount(){
    this.getData()
  }
  render() {

    const countPage = [4,8,10]
   
    const filtered = this.state.result.filter(f => f.category.indexOf(this.state.value.map(e => e)) !== -1)
    

   
    return (
     
      <div className="App">
      
        {/* <select onChange={this.handleChange}>
          <option>GENRE</option>
          {this.state.categories.map((e,i) => <option key={i}value={e}>{e}</option>)}
        </select> */}
        <Dropdown 
        value={this.state.value} 
        placeholder='Choose a category ... ' 
        fluid multiple 
        selection options={this.state.categories}
        onChange={this.handleChange} />
     
        
        <div className="contentShow">
        
        {filtered.slice((this.state.page-1)*(this.state.valueSelector || this.state.result.length), this.state.page*(this.state.valueSelector || this.state.result.length)).map((e,i) => {
          return(
            
          
            <CardDisplay
            key={i}
            title = {e.title}
            category= {e.category}
            likes= {e.likes}
            dislikes= {e.dislikes}
            id= {e.id}
            urlimg={e.url}
            deleteFunc ={this.deleteFunc}/>
           
          )
        })}
        </div>
        
        <div className="pageNav">

          
          <Icon className="spacebtn"name='chevron left' size="big" onClick={this.handlePrev} />
           
          <Icon className="spacebtn" name='chevron right' size="big" onClick={this.handleNext} />
               <select name="Choose category" onChange={this.numPage}>
                <option value={this.state.result.length}>All</option>
                {countPage.map((e,i) => <option key={i}value={e}>{e}</option>)}
              </select>
              
              <button onClick={() => window.location.reload()}>RESET</button>
            </div>
      </div>
    );
  }
}

export default App;
