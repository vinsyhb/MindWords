import React from "react";
import axios from "axios";
import ViewHeader from "./view/header";
import ViewBody from "./view/body";

class ViewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
      authorName: "",
      startDate: "",
      endDate: "",
      content: "",
      review: "",
      mentions: [],
      words: []
    };
  }
  componentDidMount() {
    const bookId = this.props.match.params.id;
    const that = this;
    axios.get("http://localhost:9000/books/" + bookId).then(res => {
      const {
        bookName,
        authorName,
        startDate,
        endDate,
        content,
        review,
        mentions,
        words
      } = res.data;
      that.setState({
        bookName,
        authorName,
        startDate,
        endDate,
        content,
        bookId,
        review,
        mentions,
        words
      });
    });
  }
  render() {
    return (
      <div>
        <ViewHeader {...this.state} />
        <ViewBody {...this.state} />
        <div className="smallfont">
          Icons made by{" "}
          <a href="https://www.freepik.com/" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{" "}
          is licensed by{" "}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    );
  }
}

export default ViewBook;
