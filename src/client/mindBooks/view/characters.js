import React from "react";

import { Badge } from "reactstrap";
import editPng from "./../../assets/edit.png";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from "reactstrap";

import { makeRequest } from "./../../utils/request";

class ImportantCharacters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: "",
      characterDescription: "",
      openModal: false
    };
    this.handleAddCharacter = this.handleAddCharacter.bind(this);
  }
  toggleModal() {
    this.setState({ openModal: !this.state.openModal });
  }
  shouldComponentUpdate() {
    return true;
  }
  handleAddCharacter() {
    const chars = this.props.characters ? this.props.characters : [];
    chars.push({
      name: this.state.characterName,
      description: this.state.characterDescription
    });
    makeRequest("/books/" + this.props.bookId, {
      data: { ...this.props },
      method: "put"
    }).then(() => {
      this.setState({ openModal: false });
    });
  }
  render() {
    const words =
      (this.props.characters &&
        this.props.characters.map(word => (
          <div>
            {word.name} : {word.description}
          </div>
        ))) ||
      "No characters added";
    return (
      <div className="borderDarkClass">
        <div className="borderDarkClass">
          Characters
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
          <ModalHeader toggle={this.toggle}>Add Characters</ModalHeader>
          <ModalBody>
            <Input
              type="text"
              placeholder="Name"
              onChange={e => this.setState({ characterName: e.target.value })}
            />
            <br />
            <Input
              type="text"
              placeholder="Character Description"
              onChange={e =>
                this.setState({ characterDescription: e.target.value })
              }
            />
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleAddCharacter}>
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

export default ImportantCharacters;
