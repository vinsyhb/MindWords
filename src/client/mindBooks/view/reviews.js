import React from "react";
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

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          id: "11",
          content: "antying about this"
        }
      ],
      openModal: false,
      reviewContent: this.props.review
    };
    this.handleCancelReview = this.handleCancelReview.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleAddReview = this.handleAddReview.bind(this);
  }
  shouldComponentUpdate() {
    return true;
  }
  handleEditClick() {
    this.setState({ openModal: true });
  }
  compo;
  handleAddReview(content) {
    debugger;
    axios
      .patch("/books/" + this.props.bookId, {
        review: this.state.reviewContent
      })
      .then(() => {
        this.setState({ openModal: false });
      });
  }
  handleCancelReview() {
    this.setState({ openModal: false });
  }
  render() {
    return (
      <div className="borderDarkClass">
        <div className="borderDarkClass">
          Reviews
          <img
            width={15}
            height={15}
            className="pullRight"
            src={editPng}
            onClick={this.handleEditClick}
          />
        </div>
        <div className="margin10">
          {(this.state.reviewContent && this.state.reviewContent) ||
            this.props.review}
        </div>

        <div>
          {/**Add reviews modal */}
          <Modal
            isOpen={this.state.openModal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Add your review</ModalHeader>
            <ModalBody>
              <Input
                type="textarea"
                placeholder="Write your review here."
                rows={5}
                value={this.props.review}
                onChange={e => this.setState({ reviewContent: e.target.value })}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleAddReview}>
                Add
              </Button>{" "}
              <Button color="secondary" onClick={this.handleCancelReview}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Reviews;
