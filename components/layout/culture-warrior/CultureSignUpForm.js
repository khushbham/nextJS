import {
  Container,
  Row,
  Nav,
  Col,
  Card,
  CardTitle,
  CardText,
  CardBody,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import styles from "./signup.module.css";
import { applyAsCultureWarrior } from "../../../redux/action/frontend";
import { useDispatch } from "react-redux";
import Router from "next/router";
import { useState } from "react";
import S3 from "react-aws-s3";

const CultureSignUpForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    profile_image: "",
    user_name: "",
    first_name: "",
    last_name: "",
    profile_description: "",
    phone: "",
  });

  const {
    email,
    profile_image,
    user_name,
    first_name,
    last_name,
    profile_description,
    phone,
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const imageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const newFileName = Date.now() + e.target.files[0].name;
    const config = {
      bucketName: "theculturewirebucket",
      region: "ap-south-1",
      accessKeyId: "AKIAR5PG7QJWFTFEC2PH",
      secretAccessKey: "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",
    };
    const ReactS3Client = new S3(config);

    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      //setUploadedImage(data.location);
      console.log(data.location);
      if (data.status === 204) {
        setFormData({ ...formData, ["profile_image"]: data.location });
      } else {
        console.log("gagal");
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(applyAsCultureWarrior(formData)).then((res) => {
      if (res && res.success) {
        setFormData({
          email: "",
          profile_image: "",
          user_name: "",
          first_name: "",
          last_name: "",
          profile_description: "",
          phone: "",
        })
        Router.push("/");
      }
    });
  };
  return (
    <>
      <Container fluid className="my-5 py-5">
        <Row className={styles.algnitemscenter}>
          <Col lg={6} md={12} xs={12} sm={12} xl={6} xxl={6}>
            <div className={styles.leftcontent}>
              <h2>Why Apply as a Culture Warriors</h2>
              <div className={styles.smallbluedivider}></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <h4 className="mt-5 pt-3">Benefits</h4>
              <ul className={styles.benefits_points}>
                <li className={styles.benefits_points_list}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li className={styles.benefits_points_list}>
                  Etiam gravida nulla gravida quam aliquet suscipit.
                </li>
                <li className={styles.benefits_points_list}>
                  Nam mattis turpis non tincidunt ullamcorper.
                </li>
                <li className={styles.benefits_points_list}>
                  Cras rutrum sem sed quam placerat, nec condimentum justo
                  molestie.
                </li>
                <li className={styles.benefits_points_list}>
                  Donec suscipit magna et nisi volutpat, sed sodales sapien
                  tempus.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} md={12} xs={12} sm={12} xl={6} xxl={6}>
            <Card className={styles.culturesignupform}>
              <CardTitle tag="h4" className={styles.cultureheading}>
                Apply as a Culture Warrior
              </CardTitle>
              <CardText className={styles.culturesubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut onsequatur.
              </CardText>
              <CardBody className={styles.culturesignupcardbody}>
                <Form className="sign-up-frm" onSubmit={(e) => handleSubmit(e)}>
                  <Row>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="user_name"
                          name="user_name"
                          placeholder="Username"
                          defaultValue={user_name}
                          onChange={onChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="email"
                          name="email"
                          defaultValue={email}
                          placeholder="Email"
                          onChange={onChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="first_name"
                          name="first_name"
                          placeholder="First Name"
                          defaultValue={first_name}
                          onChange={onChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="last_name"
                          name="last_name"
                          defaultValue={last_name}
                          placeholder="Last Name"
                          onChange={onChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="phone"
                          name="phone"
                          defaultValue={phone}
                          placeholder="Contact Number"
                          onChange={onChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="exampleFile"
                          name="file"
                          className={styles.filearea}
                          type="file"
                          onChange={(e) => imageChange(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    {/* <Col lg={6} md={6} xs={12} sm={12} xl={6} xxl={6}>
                      <FormGroup>
                        <Input
                          id="displayname"
                          name="displayname"
                          placeholder="Display Name"
                        />
                      </FormGroup>
                    </Col> */}
                    <Col lg={12} md={12} xs={12} sm={12} xl={12} xxl={12}>
                      <FormGroup>
                        <Input
                          id="profile_description"
                          name="profile_description"
                          placeholder="Profile Description"
                          defaultValue={profile_description}
                          onChange={onChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4} md={4} xs={12} sm={12} xl={4} xxl={4}>
                      <FormGroup className="mt-3">
                        <Input
                          type="submit"
                          className={styles.culturesignupbutton}
                          value="Send"
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CultureSignUpForm;
