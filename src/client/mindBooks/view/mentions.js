import React from "react";
import editPng from "./../../assets/edit.png";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Label
} from "reactstrap";
import { makeRequest } from "../../utils/request";
class Mentions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentions: [],
      openModal: false,
      mentionName: "",
      mentionUrl: ""
    };
    this.handleAddMention = this.handleAddMention.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  handleAddMention() {
    const mentions = this.props.mentions ? this.props.mentions : [];
    mentions.push({
      name: this.state.mentionName,
      link: this.state.mentionUrl
    });
    makeRequest("/books/" + this.props.bookId, {
      method: "put",
      data: { ...this.props }
    }).then(() => {
      this.setState({ openModal: false });
    });
  }
  toggleModal() {
    this.setState({ openModal: !this.state.openModal });
  }
  render() {
    const mentions =
      (this.props.mentions &&
        this.props.mentions.length > 0 &&
        this.props.mentions.map(mention => (
          <div key={mention.id}>
            <a href={mention.link}>{mention.name}</a>
          </div>
        ))) ||
      "No mentions";
    return (
      <div className="borderDarkClass">
        <div className="borderDarkClass">
          Mentions
          <img
            width={15}
            height={15}
            className="pullRight"
            onClick={() => this.toggleModal()}
            src={editPng}
          />
        </div>
        <div className="margin10">{mentions}</div>
        <Modal
          isOpen={this.state.openModal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add any mentions</ModalHeader>
          <ModalBody>
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Name"
              onChange={e => this.setState({ mentionName: e.target.value })}
            />
            <Label>Link</Label>
            <Input
              type="url"
              placeholder="http://www.wikipedia.com/whoareyou"
              onChange={e => this.setState({ mentionUrl: e.target.value })}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleAddMention}>
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

export default Mentions;
