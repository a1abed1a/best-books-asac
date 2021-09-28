import React from 'react'
import { Form, Button } from 'react-bootstrap'

class BookForm extends React.Component {
    render() {
        return (
            <Form style={{ width: '50%', margin: 'auto' }}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" name="title" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" placeholder="Status" name="status" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Description" name="description" />
                </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.props.add}>Add</Button>
            </Form>
        )
    }
}

export default BookForm
