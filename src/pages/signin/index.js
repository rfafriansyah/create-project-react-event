import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import Button from "react-bootstrap/Button";
// import SButton from "../../components/Button";

function PageSignIn() {
  return (
    <Container md={12} style={{marginTop: '50px'}}>
      <Card style={{ width: '50%' }} className='m-auto nt-5'>
        <CardBody>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default PageSignIn;
