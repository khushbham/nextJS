import { Container, Row, Col, Card } from "reactstrap";

const AccountConfirmation = () => {
  return (
    <Container className="py-5 my-5">
      <Row>
        <Col lg="2" md="2" sm="12" xs="12"></Col>
        <Col lg="8" md="8" sm="12" xs="12">
          <Card className="thank_you_Card">
              <h3>Thank You For Registering With Us</h3>
               <h5>We are glad to have you onboard as a Culture Warrior. </h5>
              <p>Our staff will review your new account request. </p>
                <p>You will be notified when your account is activated.</p>
          </Card>
        </Col>
        <Col lg="2" md="2" sm="12" xs="12"></Col>
      </Row>
    </Container>
  );
};

export default AccountConfirmation;
