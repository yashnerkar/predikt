import React from "react";
import Navbar from "../components/navbar/Navbar";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";

const Prediction = () => {
  return (
    <div style={{
      width: "100vw", overflowX: "hidden"
      , background: "linear-gradient(90deg, rgba(133, 178, 249, 0.5) 0%, rgba(175, 203, 249, 0) 100%)", height: "100vh"
    }}>
      <Container fluid className="m-0 p-0">
        <Navbar />
        {/* form container */}
        <div className="d-flex justify-content-center">
          <Container className="m-5">
            {/* Basic Information */}
            <p><strong style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Basic Information</strong></p>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Control placeholder="First name" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Control placeholder="Age" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} />
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>
                    <option>Choose a Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </Form.Select>
                </Col>
              </Row>
              <div className="my-4">
                <hr />
              </div>
              { /* Patient Stats Information */}
              <p><strong style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }}>Patient Stats</strong></p>
              <Row className="mb-3">
                <Col>
                  <Form.Control placeholder="Blood Cell Count" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} />
                </Col>
                <Col>
                  <Form.Control placeholder="WBC Count" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} />
                </Col>
              </Row>
              {/* <Row className="mb-3">
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Tachypnea</option>
                    <option value="1">Present</option>
                    <option value="2">Not Present</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Tachycardia</option>
                    <option value="1">Present</option>
                    <option value="2">Not Present</option>
                  </Form.Select>
                </Col>
              </Row> */}
              <Row className="mb-3">
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Maternal Genes</option>
                    <option value="1">Present</option>
                    <option value="2">Not Present</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Paternal Genes</option>
                    <option value="1">Present</option>
                    <option value="2">Not Present</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Respiratory Rate(Breaths/min)</option>
                    <option value="1">Tachypnea</option>
                    <option value="2">Normal(30-60)</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Heart Rate(Rates/min)</option>
                    <option value="1">Tachycardia 	</option>
                    <option value="2">Normal</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Birth Asphyxia</option>
                    <option value="1">Present</option>
                    <option value="2">Not Present</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Folic Acid Details</option>
                    <option value="1">Present</option>
                    <option value="2">Not Present</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>H/O Serious Maternal Illness</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>H/O Radiation Exposure(X-Ray)</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>H/O Substance Abuse</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    <option value="2">No Records</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Assisted Conception IVF/ART</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>H/O Anamalies in previous pregnancies</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Birth Defects</option>
                    <option value="1">Multiple</option>
                    <option value="2">Singular</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Select aria-label="Default select example" style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem" }} >
                    <option>Blood Test Result</option>
                    <option value="1">Abnormal</option>
                    <option value="2">Inconclusive</option>
                    <option value="1">Normal</option>
                    <option value="2">Slightly Abnormal</option>
                  </Form.Select>
                </Col>
              </Row>

            </Form>
          </Container>
        </div>
        <div className="text-center">
          <a href="files/report.pdf" download>
            <Button
              type="submit"
              variant="contained"
              style={{
                fontFamily: "Poppins, sans-serif",
                borderRadius: "50px",
                color: 'white',
                padding: "0.8rem",
                backgroundColor: "#407BFF",
                textAlign: "center",
              }}
            >
              Download Report
            </Button>
          </a>
        </div>
        {/* Send Report to Email */}
        <div className="m-5 text-center">
          <InputGroup className="d-flex align-items-center justify-content-center">
            <FormControl
              size="lg"
              placeholder="Enter Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{ fontFamily: "Poppins, sans-serif", fontSize: "1rem", maxWidth: "45rem", padding: "1rem" }}
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                fontFamily: "Poppins, sans-serif",
                borderRadius: "50px",
                marginLeft: "1rem",
                color: 'white',
                padding: "0.8rem",
                backgroundColor: "#407BFF",
                textAlign: "center",
              }}
            >
              Email the Report
            </Button>
          </InputGroup>
        </div>
      </Container>
    </div>

  );
};

export default Prediction;
