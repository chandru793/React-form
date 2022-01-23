import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:"",
      yearPassed:"",
      monthPassed:"",
      show:false
    }
    this.handleClick=this.handleClick.bind(this);
  }
  firstName = (event) =>{
    this.setState({
      firstName: event.target.value
    })
  }
  lastName = (event) =>{
    this.setState({
      lastName: event.target.value
    })
  }
  email = (event) =>{
    this.setState({
      email: event.target.value
    })
  }
  password = (event) =>{
    this.setState({
      password:event.target.value
    })
  }
  confirmPassword = (event) =>{
    this.setState({
      confirmPassword:event.target.value
    })
  }
  yearPassed = (event) =>{
    this.setState({
      yearpassed:event.target.value
    })
  }
  monthpassed = (event) => {
    this.setState({
      monthPassed:event.target.value
    })
  }
  handleClick = (event) =>{
    event.preventDefault();
    this.setState({
      show:true
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleClick}>

        <div className='innerContainer'>

          <div className='h1 div'>
            <h1 className='h1Ele'>Registration Form</h1>
          </div>

          <div className='div1 div'>
            <div>
              <label>First name</label>
            </div>

            <div className='inputFirstName'>
              <input type={"text"} className='input' required="true" value={this.state.firstName} onChange={this.firstName}/>
            </div>

            <div className='divRight'>
              <label>Last name</label>
            </div>

            <div className='inputLastName'>
              <input type={"text"} className='input' required="true" value={this.state.lastName} onChange={this.lastName}/>
            </div>

          </div>

          <div className='div2 div'>

            <div>
              <label>Email</label>
            </div>

            <div className='inputEmail'>
              <input type={"text"} className='input' id='emailInput' required="true" value={this.state.email} onChange={this.email}/>
            </div>

          </div>

          <div className='div3 div'>

            <div>
              <label>Password</label>
            </div>

            <div className='inputPassword'>
              <input type={"password"} className='input' required="true" value={this.state.password} onChange={this.password}/>
            </div>

            <div className='divRight'>
              <label>Confirm Password</label>
            </div>

            <div className='inputConfirmPassword'>
              <input type={"password"} className='input' required="true" value={this.state.confirmPassword} onChange={this.confirmPassword}/>
            </div>

          </div>

          
          <div className='div4 div'>
            <div>
              <label>Year Passed out</label>
            </div>

            <div className='inputYear'>
              <select id="mySelect" className='input select' required="true" onChange={this.yearPassed}>
                <option value="--select--" selected>--Select-- </option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
            </div>

            <div className='divRight month'>
              <label>Month Passed</label>
            </div>

            <div className='inputMonth'>
              <select id="mySelect" className='input select' required="true" onChange={this.monthPassed}>
                <option value="--select--" selected>--Select--</option>
                <option value="Jan">Jan</option>
                <option value="feb">Feb</option>
                <option value="mar">Mar</option>
                <option value="apr">Apr</option>
                <option value="may">May</option>
                <option value="Jun">Jun</option>
                <option value="july">July</option>
                <option value="aug">Aug</option>
                <option value="sept">Sept</option>
                <option value="nov">Nov</option>
                <option value="dec">Dec</option>
              </select>
            </div>

          </div>

          <div className='div5 div'>
            <input type={"submit"} value={"Register"} className='register'/>
          </div>
          <div style={{whiteSpace:"pre"}}>
            {this.state.show && JSON.stringify(this.state,null,2)}
          </div>

        </div>
        
      </form>
    );
  }
}

export default App;
