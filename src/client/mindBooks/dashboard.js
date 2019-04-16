import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardText,
  CardTitle,
  Button,
  CardGroup,
  CardDeck
} from "reactstrap";
// import "./mindBokks.css";
import axios from "axios";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  handleOpenBook(bookId) {}
  componentDidMount() {
    axios
      .get("https://mind-word-apis.herokuapp.com/books")
      .then(res => {
        this.setState({
          books: res.data
        });
      })
      .catch(() => {});
  }
  render() {
    const books = (this.state.books.length > 0 &&
      this.state.books.map(book => (
        <Card className="bookCard" key={book.id} body outline color="secondary">
          <CardTitle>{book.bookName}</CardTitle>
          <CardText>
            {book.authorName}
            {book.startDate}
            {book.endDate}
          </CardText>
          <Link to={`/book/view/${book.id}`}>
            <Button>Open</Button>
          </Link>
        </Card>
      ))) || <div>No books in your board</div>;
    return (
      <div>
        <CardDeck>{books}</CardDeck>
      </div>
    );
  }
}
export default Dashboard;
