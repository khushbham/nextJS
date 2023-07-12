import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormText,
  FormFeedback,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import styles from "./customreports.module.css";
import { RiVipDiamondFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";
import { FaHeart, FaCrown } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoNotificationsSharp } from "react-icons/io5";
import UserStats from "../../../layout/user-dashboard/RightSidebar/UserStats";
import TopViewedCategories from "../RightSidebar/TopViewedCategories";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import CKeditor  from "../../../components/layout/CKeditor";
import CKeditor from "../../CKeditor";

const CustomReportsContent = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <>
      <Container fluid className="mt-5 mb-5">
        <Row>
          <Col lg={8} md={12} xs={12} sm={12}>
            <Form className={styles.customreportform}>
              <Row className="text-center">
                <Col lg={12} md={12} xs={12} sm={12}>
                  <h3>
                    <strong>Custom Reports</strong>
                  </h3>
                </Col>
              </Row>
              <FormGroup>
                <Label for="trends-select">Select Trends</Label>
                <Input id="trends-select" name="trendsselect" type="select">
                  <option>Select</option>
                  <option>Show Top Trending</option>
                  <option>Trend By Categories</option>
                  <option>By Company Matrices</option>
                  <option>By Mega Trends</option>
                  <option>By Trends Tag</option>
                </Input>
              </FormGroup>

              <Row className="mt-2">
                <Col lg={6} md={6} xs={12} sm={12}>
                  <FormGroup>
                    <Label for="category-select">Category</Label>
                    <Input
                      id="category-select"
                      name="categoryselect"
                      type="select"
                    >
                      <option>Select</option>
                      <option>Trend 1</option>
                      <option>Trend 2</option>
                      <option>Trend 3</option>
                      <option>Trend 4</option>
                      <option>Trend 5</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} xs={12} sm={12}>
                  <FormGroup>
                    <Label for="categorytags-select">Custom Search</Label>
                    <Input
                      id="categorytags-select"
                      name="categorytagsselect"
                      type="select"
                    >
                      <option>Select</option>
                      <option>Trend Tag 1</option>
                      <option>Trend Tag 2</option>
                      <option>Trend Tag 3</option>
                      <option>Trend Tag 4</option>
                      <option>Trend Tag 5</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} xs={12} sm={12}>
                  <FormGroup>
                    <Label for="exampleText">Custom Content Editor</Label>
                    <CKeditor
                      name="description"
                      onChange={(data) => {
                        setData(data);
                      }}
                      editorLoaded={editorLoaded}
                    />
                    {console.log("test", data)}
                    {/* {JSON.stringify(data)} */}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} xs={12} sm={12}>
                  <FormGroup>
                    <Label for="custom-content">Custom Content</Label>
                    <Input
                      id="customcontent-select"
                      name="customcontent-select"
                      type="select"
                    >
                      <option>Select</option>
                      <option>Top of Report</option>
                      <option>Bottom of Report</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} xs={12} sm={12}>
                  <FormGroup>
                    <Label for="parent-content">Parent Reportt</Label>
                    <Input
                      id="parentcontent-select"
                      name="parentcontent"
                      type="select"
                    >
                      <option>Select</option>
                      <option>Parent Report One</option>
                      <option>Parent Report Two</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} xs={12} sm={12}>
                  <Label for="visibility">
                    <strong>Visibility</strong>
                  </Label>
                </Col>
                <Col lg={6} md={6} xs={12} sm={12}>
                  <FormGroup>
                    <Label for="start">Start</Label>
                    <Input id="start" name="start" />
                  </FormGroup>
                </Col>
                <Col lg={6} md={6} xs={12} sm={12}>
                  <FormGroup>
                    <Label for="end">End</Label>
                    <Input id="end" name="end" />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col lg={12} md={12} xs={12} sm={12}>
                  <Label for="visibility">
                    <strong>Access for:</strong>
                  </Label>
                  <div className="d-flex">
                    <FormGroup inline check>
                      <Input name="access-for" type="radio" />{" "}
                      <Label check>Free</Label>
                    </FormGroup>
                    <FormGroup inline check>
                      <Input name="access-for" type="radio" />{" "}
                      <Label check>Pro</Label>
                    </FormGroup>
                  </div>
                </Col>
              </Row>

              <Row className={styles.custom_reports_buttos_area}>
                <Col lg={4} md={12} xs={12} sm={12}>
                  <Button className={styles.blue_bck_button} block>
                    Preview
                  </Button>
                </Col>
                <Col lg={4} md={12} xs={12} sm={12}>
                  <Button className={styles.blue_bck_button} block>
                    Generate Now
                  </Button>
                </Col>
                <Col lg={4} md={12} xs={12} sm={12}>
                  <Button className={styles.blue_bck_button} block>
                    Download
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg={4} md={12} xs={12} sm={12} className={styles.user_stats_sidebar}>
            <UserStats />
            <div className="mt-5">
            <TopViewedCategories />
            </div>
           
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomReportsContent;
