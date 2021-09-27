import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Jumbotron, Card, CardGroup } from 'react-bootstrap';
import './BestBooks.css';
const axios = require('axios');


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getData = async () => {
    let { user } = this.props.auth0;
    let url = `${process.env.REACT_APP_API_LINK}/myBooks?email=${user.email}`
    let data = await axios.get(url);
    let userData = data.data;
    this.setState({
      data: userData
    })
  }

  render() {
    this.getData()
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <CardGroup>
          {
            this.state.data.map((ele, idx) => {
              return (
                <Card>
                  <Card.Body>
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{ele.status}</Card.Subtitle>
                    <Card.Text>
                      {ele.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })
          }
          </CardGroup>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
