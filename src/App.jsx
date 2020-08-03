import React from 'react';
import './App.scss';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.onChangefullname = this.onChangefullname.bind(this);
    this.onChangeplantname = this.onChangeplantname.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.Submit = this.Submit.bind(this);
    this.state={
      fullname: "",
      plantname: "",
      description: "",
      plantprice: 0,
      plantimage: null
    }
  }
  Submit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('fullname', this.state.fullname)
    formdata.append('plantname', this.state.plantname)
    formdata.append('description', this.state.description)
    formdata.append('plantprice', this.state.plantprice)
    formdata.append('plantimage', this.state.plantimage)
    // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    // axios.defaults.xsrfCookieName = "csrftoken";
    await axios.post('http://127.0.0.1:8000/app/api/plants/',formdata).then(res => console.log(res)).catch(err=> console.log(err))
  }
  onChangefullname(e){
    this.setState({
      fullname: e.target.value
    })
  }
  onChangeplantname(e){
    this.setState({
      plantname: e.target.value
    })
  }
  onChangedescription(e){
    this.setState({
      description: e.target.value
    })
  }
  onChangeprice(e){
    this.setState({
      plantprice: e.target.value
    })
  }
  onChangeFile(e){
    let file = e.target.files[0];
    console.log(file);
    this.setState({
      plantimage: file
    })
  }

  render(){
  return (
    <div className="App">
      <form onSubmit={this.Submit}>
        <label htmlFor="fullname"></label>
        <input value={this.state.fullname} name="fullname" onChange={this.onChangefullname} type="text" placeholder="Full Name" id="fullname"/>
        <label htmlFor="plantname"></label>
        <input value={this.state.plantname} name="plantname" onChange={this.onChangeplantname} type="text" placeholder="Plant Name" id="plantname"/>
        <label htmlFor="description"></label>
        <textarea value={this.state.description} name="description" onChange={this.onChangedescription} id="description" cols="30" rows="10"></textarea>
        <label htmlFor="price"></label>
        <input value={this.state.plantprice} name="price" onChange={this.onChangeprice} type="text" placeholder="Price" id="price"/>
        <label htmlFor="plantimage"></label>
        <input onChange={this.onChangeFile} name="file" type="file" id="plantimage"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
  }
}

export default App;