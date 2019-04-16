import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Spinner,
  Alert
} from "reactstrap";
import axios from "axios";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
      authorName: "",
      startDate: "",
      endDate: "",
      addSuccessfull: false,
      addingBook: false
    };
    this.handleFidlChange = this.handleFidlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFidlChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit() {
    this.setState({ addingBook: true });
    axios
      .post("http://localhost:3000/books", {
        bookName: this.state.bookName,
        authorName: this.state.authorName,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      })
      .then(respose => {
        this.setState({
          addSuccessfull: true,
          addingBook: false,
          bookName: "",
          authorName: "",
          startDate: "",
          endDate: ""
        });
        setTimeout(() => this.setState({ addSuccessfull: false }), 2000);
      })
      .catch(respose => {
        debugger;
      });
  }

  render() {
    return (
      <div>
        Add your book to the shelf:
        <Form>
          <FormGroup>
            <Label for="bookName">Book Name : </Label>
            <Input
              type="text"
              name="bookName"
              id="bookName"
              value={this.state.bookName}
              onChange={this.handleFidlChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="authorName">AuthorName : </Label>
            <Input
              type="text"
              id="authorName"
              value={this.state.authorName}
              onChange={this.handleFidlChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="startDate">Reading start date : </Label>
            <Input
              type="date"
              name="startDate"
              id="startDate"
              value={this.state.startDate}
              placeholder=""
              onChange={this.handleFidlChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="endDate">Reading end date</Label>
            <Input
              type="date"
              name="endDate"
              id="endDate"
              value={this.state.endDate}
              placeholder=""
              onChange={this.handleFidlChange}
            />
          </FormGroup>
          {this.state.addSuccessfull && (
            <Alert color="primary">Book Added Successfully</Alert>
          )}
          {this.state.addingBook && <Spinner size="sm" color="primary" />}
          <FormGroup>
            <Button onClick={this.handleSubmit}>Add Book</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AddBook;
