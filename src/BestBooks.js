import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import { Jumbotron, Card, CardGroup, Button } from 'react-bootstrap';
import './BestBooks.css';
import BookForm from './components/BookForm'
const axios = require('axios');


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.auth0.user,
      data: []
    }
  }

  getData = async () => {
    let url = `${process.env.REACT_APP_API_LINK}/myBooks?email=${this.state.user.email}`
    let data = await axios.get(url);
    let userData = data.data;
    this.setState({
      data: userData
    })
  }

  addBook = async (bookInfo) =>{
    let temBook = await axios.post(`${process.env.REACT_APP_API_LINK}/addBook`,bookInfo).then(re => {
      console.log(re)
    }).catch(error => {
      console.log(error)
    })
    this.setState ({
      data: temBook.data
    })
  }

  remove = async(id) =>{
    let temBook = await axios.delete(`${process.env.REACT_APP_API_LINK}/deleteBook?bookID=${id}&email=${this.state.user.email}`)
    
    this.setState ({
      data: temBook.data
    })
  }

  render() {
    this.getData()
    return (
      <Jumbotron>
        <h1 style={{textAlign:'center'}}>My Favorite Books</h1>
        <p style={{textAlign:'center'}}>
          This is a collection of my favorite books
        </p>
        <hr/>
        <BookForm add={this.addBook}/>
        <CardGroup>
          {
            this.state.data.map((ele, idx) => {
              return (
                <Card key={idx}>
                  <Card.Body>
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{ele.status}</Card.Subtitle>
                    <Card.Text>
                      {ele.description}
                    </Card.Text>
                    <Button variant="outline-danger" onClick={() => {this.remove(ele._id)} }>Remove</Button>
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
