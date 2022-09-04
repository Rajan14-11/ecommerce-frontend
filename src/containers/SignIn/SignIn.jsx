import React from 'react'
import Layout from "../../components/Layout/index";
import Input from "../../components/UI/Input/input";
import {Container,Form,Button,Row,Col} from "react-bootstrap"

function SignIn() {
  return (
    <Layout>
      <Container>
        <Row className="mt-4">
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label="Email address"
                placeholder="Email address"
                type="text"
                value=""
                onChange={() => {}}
                errorMessage="We'll never share your email with anyone else"
              />
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value=""
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default SignIn