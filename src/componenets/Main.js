import React from 'react';
import axios from "axios";
import "../styles/Main.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    let code;
    code = e.target.message.value;
    axios.get(`https://morse-code-be.vercel.app/api/results?code=${code}`)
    .then(result => {
    this.setState({
      message : result.data
    })})
    console.log(this.state.message)

  }


  render() {
    return (
      <div className="body">
        <h1>WELCOME TO MORSE ENCODE</h1>
        <h3>Enter your message below</h3>
        <Form className="form" onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control name="message" as="textarea" rows={4} />
      </Form.Group>
      <Button className="subbtn" variant="primary" type="submit">
        Encode
      </Button>
    </Form>
    <h4>{this.state.message}</h4>
      </div>
    );
  }
}

export default Main;