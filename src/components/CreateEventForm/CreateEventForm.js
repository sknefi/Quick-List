import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateEventForm() {
  const handleSubmit = () => {
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name yours new list</Form.Label>
        <Form.Control type="text" placeholder="List name" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreateEventForm;