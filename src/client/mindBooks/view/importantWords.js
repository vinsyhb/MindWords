import React from "react";
import { Alert, Card, CardDeck, CardTitle, CardText, Badge } from "reactstrap";
import editPng from "./../../assets/edit.png";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from "reactstrap";

import axios from "axios";

class ImportantWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      meaning: "",
      context: "",
      pageNo: "",
      openModal: false
    };
    this.handleAddWord = this.handleAddWord.bind(this);
  }
  toggleModal() {
    this.setState({ openModal: !this.state.openModal });
  }
  shouldComponentUpdate() {
    return true;
  }
  handleAddWord() {
    const words = this.props.words ? this.props.words : [];
    words.push({
      word: this.state.word,
      meaning: this.state.meaning,
      pageNo: this.state.pageNo,
      context: this.state.context
    });
    axios
      .patch(
        "https://mind-word-apis.herokuapp.com/books/" + this.props.bookId,
        { words }
      )
      .then(() => this.setState({ openModal: false }));
  }
  render() {
    const words =
      (this.props.words &&
        this.props.words.map(word => (
          <Badge color="primary" className="margin10">
            {word.word} = {word.meaning}
            <br />
            {word.context} {word.pageNo}
          </Badge>
        ))) ||
      "No words added";
    return (
      <div className="borderDarkClass">
        <div className="borderDarkClass">
          ImportantWords
          <img
            width={15}
            height={15}
            className="pullRight"
            src={editPng}
            onClick={() => this.toggleModal()}
          />
        </div>
        <div className="ml-2 mr-2 mt-2 mb-2">{words}</div>
        {/**Modal to add the word */}
        <Modal
          isOpen={this.state.openModal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Important words</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              placeholder="Word"
              onChange={e => this.setState({ word: e.target.value })}
            />
            <br />
            <Input
              type="text"
              placeholder="Meaning"
              onChange={e => this.setState({ meaning: e.target.value })}
            />
            <br />
            <Input
              type="text"
              placeholder="Context"
              onChange={e => this.setState({ context: e.target.value })}
            />
            <br />
            <Input
              type="text"
              placeholder="pageNo"
              onChange={e => this.setState({ pageNo: e.target.value })}
            />
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleAddWord}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={() => this.toggleModal()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ImportantWords;
