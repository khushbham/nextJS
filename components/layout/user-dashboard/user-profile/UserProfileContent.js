import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Image from "next/image";
import styles from "./userprofilecontent.module.css";
import PageHeader from "./PageHeader";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaRegCircle, FaEdit } from "react-icons/fa";
import basicinfoimage from "../../../../public/images/personal-information.png";
import generalimage from "../../../../public/images/user.png";
import skillsimage from "../../../../public/images/qualification.png";
import innovationimage from "../../../../public/images/innovation.png";
import { BiEdit } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import technologyimg from "../../../../public/images/technology-img.jpg";
import musicimage from "../../../../public/images/music-img.jpg";
import commercialimage from "../../../../public/images/commercial-culture.jpg";
import lifestyleimage from "../../../../public/images/lifestyle.jpg";
import popcultureimg from "../../../../public/images/popculture.jpg";
import sustainabilityimg from "../../../../public/images/sustainability.jpg";
import mimage from "../../../../public/images/m-icon.png";
import fimage from "../../../../public/images/f-icon.png";
import otherimage from "../../../../public/images/other-icon.png";

const SkillsInput = ({ tags }) => {
  const [skillsData, setSkillsData] = React.useState(tags);
  const removeSkillsData = (indexToRemove) => {
    setSkillsData([
      ...skillsData.filter((_, index) => index !== indexToRemove),
    ]);
  };
  const addSkillsData = (event) => {
    if (event.target.value !== "") {
      setSkillsData([...skillsData, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className={styles.tag_input}>
      <ul className={styles.tags}>
        {skillsData.map((tag, index) => (
          <li key={index} className={styles.tag}>
            <span className={styles.tag_title}>{tag}</span>
            <span
              className={styles.tag_close_icon}
              onClick={() => removeSkillsData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) =>
          event.key === "Enter" ? addSkillsData(event) : null
        }
        placeholder="Enter Skills"
      />
    </div>
  );
};

const InterestInput = ({ tags }) => {
  const [interestData, setInterestData] = React.useState(tags);
  const removeInterestData = (indexToRemove) => {
    setInterestData([
      ...interestData.filter((_, index) => index !== indexToRemove),
    ]);
  };
  const addInterestData = (event) => {
    if (event.target.value !== "") {
      setInterestData([...interestData, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className={styles.tag_input}>
      <ul className={styles.tags}>
        {interestData.map((tag, index) => (
          <li key={index} className={styles.tag}>
            <span className={styles.tag_title}>{tag}</span>
            <span
              className={styles.tag_close_icon}
              onClick={() => removeInterestData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) =>
          event.key === "Enter" ? addInterestData(event) : null
        }
        placeholder="Enter Interests"
      />
    </div>
  );
};

const LanguageInput = ({ tags }) => {
  const [languageData, setLanguageData] = React.useState(tags);
  const removeLanguageData = (indexToRemove) => {
    setLanguageData([
      ...languageData.filter((_, index) => index !== indexToRemove),
    ]);
  };
  const addLanguageData = (event) => {
    if (event.target.value !== "") {
      setLanguageData([...languageData, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className={styles.tag_input}>
      <ul className={styles.tags}>
        {languageData.map((tag, index) => (
          <li key={index} className={styles.tag}>
            <span className={styles.tag_title}>{tag}</span>
            <span
              className={styles.tag_close_icon}
              onClick={() => removeLanguageData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) =>
          event.key === "Enter" ? addLanguageData(event) : null
        }
        placeholder="Enter Languages"
      />
    </div>
  );
};

const QualificationsInput = ({ tags }) => {
  const [qualificationData, setQualificationsData] = React.useState(tags);
  const removeQualificationsData = (indexToRemove) => {
    setQualificationsData([
      ...qualificationData.filter((_, index) => index !== indexToRemove),
    ]);
  };
  const addQualificationsData = (event) => {
    if (event.target.value !== "") {
      setQualificationsData([...qualificationData, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className={styles.tag_input}>
      <ul className={styles.tags}>
        {qualificationData.map((tag, index) => (
          <li key={index} className={styles.tag}>
            <span className={styles.tag_title}>{tag}</span>
            <span
              className={styles.tag_close_icon}
              onClick={() => removeQualificationsData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) =>
          event.key === "Enter" ? addQualificationsData(event) : null
        }
        placeholder="Enter Qualification"
      />
    </div>
  );
};

const HobbiesInput = ({ tags }) => {
  const [hobbiesData, setHobbiesData] = React.useState(tags);
  const removeHobbiesData = (indexToRemove) => {
    setHobbiesData([
      ...hobbiesData.filter((_, index) => index !== indexToRemove),
    ]);
  };
  const addHobbiesData = (event) => {
    if (event.target.value !== "") {
      setHobbiesData([...hobbiesData, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className={styles.tag_input}>
      <ul className={styles.tags}>
        {hobbiesData.map((tag, index) => (
          <li key={index} className={styles.tag}>
            <span className={styles.tag_title}>{tag}</span>
            <span
              className={styles.tag_close_icon}
              onClick={() => removeHobbiesData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) =>
          event.key === "Enter" ? addHobbiesData(event) : null
        }
        placeholder="Enter Hobbies"
      />
    </div>
  );
};

const UserProfileContent = () => {
  const [basicmodal, setBasicModal] = useState(false);
  const basictoggle = () => setBasicModal(!basicmodal);

  const [settingsmodal, setSettingsModal] = useState(false);
  const settingstoggle = () => setSettingsModal(!settingsmodal);

  const [skillsmodal, setSkillsModal] = useState(false);
  const skillstoggle = () => setSkillsModal(!skillsmodal);

  const [twofactormodal, setTwoFactorModal] = useState(false);
  const twofactortoggle = () => setTwoFactorModal(!twofactormodal);

  const [userimage, setUserImage] = useState();
  function userimagehandleChange(e) {
    console.log(e.target.files);
    setUserImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className={styles.user_profile_main_area}>
      <PageHeader />

      <Container fluid>
        <Row className="mb-5">
          <Col
            xl={3}
            lg={6}
            md={6}
            xs={12}
            sm={12}
            className={styles.colm_margin_bottom}
          >
            <Card className={styles.center_text}>
              <CardBody className={styles.card_body_area}>
                <div>
                  <CardTitle tag="h5" className={styles.center_heading}>
                    <span className={styles.center_icon_checkfill}>
                      <BsCheckCircleFill />
                    </span>
                    Basic Information
                  </CardTitle>
                </div>

                <div className={styles.user_basic_image}>
                  <Image src={basicinfoimage} />
                </div>

                <CardText className={styles.min_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </CardText>
                <Button
                  className={styles.basic_info_butn}
                  onClick={basictoggle}
                >
                  Add
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col
            xl={3}
            lg={6}
            md={6}
            xs={12}
            sm={12}
            className={styles.colm_margin_bottom}
          >
            <Card className={styles.center_text}>
              <CardBody className={styles.card_body_area}>
                <div>
                  <CardTitle tag="h5" className={styles.center_blackheading}>
                    <span className={styles.center_icon_blackcheckfill}>
                      <FaRegCircle />
                    </span>
                    General Settings
                  </CardTitle>
                </div>

                <div className={styles.user_basic_image}>
                  <Image src={generalimage} />
                </div>

                <CardText className={styles.min_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </CardText>
                <Button
                  onClick={settingstoggle}
                  className={styles.basic_info_butn}
                >
                  Add
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col
            xl={3}
            lg={6}
            md={6}
            xs={12}
            sm={12}
            className={styles.colm_margin_bottom}
          >
            <Card className={styles.center_text}>
              <CardBody className={styles.card_body_area}>
                <div>
                  <CardTitle tag="h5" className={styles.center_blackheading}>
                    <span className={styles.center_icon_blackcheckfill}>
                      <FaRegCircle />
                    </span>
                    Skills & Qualifications
                  </CardTitle>
                </div>

                <div className={styles.user_basic_image}>
                  <Image src={skillsimage} />
                </div>

                <CardText className={styles.min_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </CardText>
                <Button
                  onClick={skillstoggle}
                  className={styles.basic_info_butn}
                >
                  Add
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col
            xl={3}
            lg={6}
            md={6}
            xs={12}
            sm={12}
            className={styles.colm_margin_bottom}
          >
            <Card className={styles.center_text}>
              <CardBody className={styles.card_body_area}>
                {/* <div>
                  <CardTitle tag="h5" className={styles.center_heading}>
                    <span className={styles.center_icon_checkfill}>
                      <BsCheckCircleFill />
                    </span>
                    Two factor Authentication
                  </CardTitle>
                </div> */}
                <div>
                  <CardTitle tag="h5" className={styles.center_blackheading}>
                    <span className={styles.center_icon_blackcheckfill}>
                      <FaRegCircle />
                    </span>
                    Categories Intrested
                  </CardTitle>
                </div>

                <div className={styles.user_basic_image}>
                  <Image src={innovationimage} />
                </div>

                <CardText className={styles.min_text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </CardText>
                <Button
                  onClick={twofactortoggle}
                  className={styles.basic_info_butn}
                >
                  Add
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Basic Modal  */}
      <Modal
        isOpen={basicmodal}
        toggle={basictoggle}
        className={styles.basic_information_modal}
      >
        <ModalHeader toggle={basictoggle} className={styles.model_hedr}>
          Basic Information
        </ModalHeader>
        <ModalBody className={styles.modal_body}>
          <Form className={styles.basic_info_form}>
            <FormGroup className="text-center">
              <Label for="profilephoto">Upload Profile Image</Label>
              {/* <img src={userimage} /> */}

              <div className={styles.upld_area_user}>
                <div className={styles.user_profile_image}>
                  <img
                    src={userimage}
                    className={`${styles.userpic_image} w-100`}
                  />
                  {/* <Image
                src={userimage}
                alt="User Image"
                width={100}
                height={100}
              /> */}
                  <div className={styles.edit_icon_user}>
                    <BiEdit />
                  </div>
                </div>

                <Input
                  id="userphoto"
                  name="file"
                  type="file"
                  onChange={userimagehandleChange}
                  className={styles.fileupld_user}
                />
              </div>
            </FormGroup>
            <Row>
              <Col lg={6} md={6} xs={12} sm={12}>
                <FormGroup>
                  <Label for="username">Name</Label>
                  <Input
                    id="uname"
                    name="uname"
                    placeholder="Enter Name"
                    type="text"
                    required
                  />
                </FormGroup>
              </Col>
              <Col lg={6} md={6} xs={12} sm={12}>
                <FormGroup>
                  <Label for="useremail">Email</Label>
                  <Input
                    id="uemail"
                    name="useremail"
                    placeholder="Enter Email"
                    type="email"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} xs={12} sm={12}>
                <FormGroup>
                  <Label for="userphone">Phone</Label>
                  <Input
                    id="uphone"
                    name="userphone"
                    placeholder="Enter Phone"
                    type="number"
                    required
                    className={styles.user_basic_phone}
                  />
                </FormGroup>
              </Col>
              <Col lg={6} md={6} xs={12} sm={12}>
                <FormGroup>
                  <Label for="userlocation">Location</Label>
                  <Input
                    id="ulocation"
                    name="userlocation"
                    placeholder="Enter Location"
                    type="text"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} xs={12} sm={12}>
                <FormGroup>
                  <Label for="industryselect">Select Industry</Label>
                  <Input id="industryselect" name="select" type="select">
                    <option value="technology">Technology</option>
                    <option value="it">IT</option>
                    <option value="networking">Networking</option>
                    <option value="fashion">Fashion</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col lg={6} md={6} xs={12} sm={12}>
                <FormGroup>
                  <Label for="occupation">Occupation</Label>
                  <Input
                    id="uoccupation"
                    name="uoccupation"
                    placeholder="Enter Occupation"
                    type="text"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12} sm={12}>
                <FormGroup className={styles.user_gender_label}>
                  <Label for="usergender">Gender</Label>
                </FormGroup>
                <div
                  className={`${styles.radio_main_area} d-flex align-items-center`}
                >
                  <Label for="radio-card-1" className={styles.radio_card}>
                    <Input
                      type="radio"
                      name="usergender"
                      id="radio-card-1"
                      className={styles.radio_input_gender}
                    />
                    <div className={styles.card_content_wrapper}>
                      <span className={styles.check_icon}></span>
                      <div className={styles.card_content}>
                        <div className={styles.gender_image}>
                          <Image src={mimage} />
                        </div>
                        <h4>Male</h4>
                      </div>
                    </div>
                  </Label>

                  <Label for="radio-card-2" className={styles.radio_card}>
                    <Input
                      type="radio"
                      name="usergender"
                      id="radio-card-2"
                      className={styles.radio_input_gender}
                    />
                    <div className={styles.card_content_wrapper}>
                      <span className={styles.check_icon}></span>
                      <div className={styles.card_content}>
                        <div className={styles.gender_image}>
                          <Image src={fimage} />
                        </div>
                        <h4>Female</h4>
                      </div>
                    </div>
                  </Label>

                  <Label for="radio-card-3" className={styles.radio_card}>
                    <Input
                      type="radio"
                      name="usergender"
                      id="radio-card-3"
                      className={styles.radio_input_gender}
                    />
                    <div className={styles.card_content_wrapper}>
                      <span className={styles.check_icon}></span>
                      <div className={styles.card_content}>
                        <div className={styles.gender_image}>
                          <Image src={otherimage} />
                        </div>
                        <h4>Other</h4>
                      </div>
                    </div>
                  </Label>
                </div>
                {/* <FormGroup check inline>
                  <Input name="gender" type="radio" />
                  <Label className={styles.no_bld_labels} check>
                    Male
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Input name="gender" type="radio" />
                  <Label className={styles.no_bld_labels} check>
                    Female
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Input name="gender" type="radio" />
                  <Label className={styles.no_bld_labels} check>
                    Other
                  </Label>
                </FormGroup> */}
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} xs={12} sm={12}>
                <FormGroup>
                  <Label for="userbio">Bio</Label>
                  <Input
                    id="ubio"
                    name="userbio"
                    placeholder="Enter Bio"
                    type="textarea"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <div className="text-center mt-3 pt-3">
                    <Button className={styles.basic_info_button} type="submit">
                      Save Changes
                    </Button>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={settingsmodal}
        toggle={settingstoggle}
        className={styles.settings_modal}
      >
        <ModalHeader toggle={settingstoggle} className={styles.model_hedr}>
          General Settings
        </ModalHeader>
        <ModalBody className={styles.modal_body}>
          <Form className={styles.settings_info_form}>
            <Row>
              <Col lg={12} md={12} xs={12} sm={12} className="mb-3">
                <h5>
                  <strong>Change Password</strong>
                </h5>
              </Col>
              <Col lg={12} md={12} xs={12} sm={12}>
                <FormGroup>
                  <Label for="previouspass">Previous Password</Label>
                  <div className="input-group">
                    <input
                      id="prevpass"
                      name="previouspass"
                      type="password"
                      className="form-control"
                      placeholder="Enter Prev Password"
                      required
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text"
                        id={styles.prevpassicon}
                      >
                        <AiFillEyeInvisible />
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="newpass">New Password</Label>
                  <div className="input-group">
                    <input
                      id="newpass"
                      name="newpass"
                      type="password"
                      className="form-control"
                      placeholder="Enter New Password"
                      required
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text"
                        id={styles.newpassicon}
                      >
                        <AiFillEyeInvisible />
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label for="confirmpass">Confirm Password</Label>
                  <div className="input-group">
                    <input
                      id="confirmpass"
                      name="confirmpass"
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      required
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text"
                        id={styles.confirmpassicon}
                      >
                        <AiFillEyeInvisible />
                      </span>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="text-center mt-3 pt-3">
                    <Button className={styles.basic_info_button} type="submit">
                      Save Changes
                    </Button>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={skillsmodal}
        toggle={skillstoggle}
        className={styles.skills_modal}
      >
        <ModalHeader toggle={skillstoggle} className={styles.model_hedr}>
          Skills and Qualifications
        </ModalHeader>
        <ModalBody className={styles.modal_body}>
          {/* <TagInput tags={["Technology", "Fashion"]} /> */}

          <Label>Add Skills</Label>
          <SkillsInput tags={["Technology", "Fashion"]} />

          <Label className="mt-3">Add Intrests</Label>
          <InterestInput tags={["AI", "Tech"]} />

          <Label className="mt-3">Add Languages</Label>
          <LanguageInput tags={["English", "French"]} />

          <Label className="mt-3">Add Qualification</Label>
          <QualificationsInput tags={["Btech", "Bca"]} />

          <Label className="mt-3">Add Hobbies</Label>
          <HobbiesInput tags={["Netizan", "Playing soccer"]} />
          <div className="text-center mt-3 pt-3">
            <Button className={styles.basic_info_button}>Save changes</Button>
          </div>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={twofactormodal}
        toggle={twofactortoggle}
        className={styles.twofactor_modal}
      >
        <ModalHeader toggle={twofactortoggle} className={styles.model_hedr}>
          Let us know your interests?
        </ModalHeader>
        <ModalBody className={styles.modal_body}>
          <Form className={styles.add_prefrences_form}>
            {/* <Row>
              <Col lg={4} md={4} sm={12}>
                <div className={`${styles.form_inputgroup} inputGroup`}>
                  <input id="technology" name="technology" type="checkbox" />
                  <label
                    className={styles.form_prefrences_label}
                    for="technology"
                  >
                    Technology
                  </label>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className={`${styles.form_inputgroup} inputGroup`}>
                  <input id="music" name="music" type="checkbox" />
                  <label className={styles.form_prefrences_label} for="music">
                    Music
                  </label>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className={`${styles.form_inputgroup} inputGroup`}>
                  <input id="commercial" name="commercial" type="checkbox" />
                  <label
                    className={styles.form_prefrences_label}
                    for="commercial"
                  >
                    Commercial Cultures
                  </label>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className={`${styles.form_inputgroup} inputGroup`}>
                  <input id="lifestyle" name="lifestyle" type="checkbox" />
                  <label
                    className={styles.form_prefrences_label}
                    for="lifestyle"
                  >
                    Lifestyle
                  </label>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className={`${styles.form_inputgroup} inputGroup`}>
                  <input id="popculture" name="popculture" type="checkbox" />
                  <label
                    className={styles.form_prefrences_label}
                    for="popculture"
                  >
                    Pop Culture
                  </label>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12}>
                <div className={`${styles.form_inputgroup} inputGroup`}>
                  <input
                    id="sustainability"
                    name="sustainability"
                    type="checkbox"
                  />
                  <label
                    className={styles.form_prefrences_label}
                    for="sustainability"
                  >
                    Sustainability
                  </label>
                </div>
              </Col>
            </Row>
         */}
            <Row className={styles.interests_gallery_cards}>
              <Col lg={4} md={4} sm={4} xs={12}>
                <div className={styles.gallery_card}>
                  <div className={styles.gallery_card_body}>
                    <label className={styles.block_check}>
                      <div className={styles.chckmark_image}>
                        <Image
                          src={technologyimg}
                          className={styles.img_responsive}
                        />
                      </div>
                      <Input
                        id="technology"
                        name="technology"
                        type="checkbox"
                      />
                      <span className={styles.checkmark}></span>
                    </label>
                    <div className={styles.mycard_footer}>
                      <a href="#" className={styles.gallry_cardlink}>
                        Technology
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={12}>
                <div className={styles.gallery_card}>
                  <div className={styles.gallery_card_body}>
                    <label className={styles.block_check}>
                      <div className={styles.chckmark_image}>
                        <Image
                          src={musicimage}
                          className={styles.img_responsive}
                        />
                      </div>
                      <Input id="music" name="music" type="checkbox" />
                      <span className={styles.checkmark}></span>
                    </label>
                    <div className={styles.mycard_footer}>
                      <a href="#" className={styles.gallry_cardlink}>
                        Music
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={12}>
                <div className={styles.gallery_card}>
                  <div className={styles.gallery_card_body}>
                    <label className={styles.block_check}>
                      <div className={styles.chckmark_image}>
                        <Image
                          src={commercialimage}
                          className={styles.img_responsive}
                        />
                      </div>
                      <Input
                        id="commercialculture"
                        name="commercialculture"
                        type="checkbox"
                      />
                      <span className={styles.checkmark}></span>
                    </label>
                    <div className={styles.mycard_footer}>
                      <a href="#" className={styles.gallry_cardlink}>
                        Commercial Cultures
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={12}>
                <div className={styles.gallery_card}>
                  <div className={styles.gallery_card_body}>
                    <label className={styles.block_check}>
                      <div className={styles.chckmark_image}>
                        <Image
                          src={lifestyleimage}
                          className={styles.img_responsive}
                        />
                      </div>
                      <Input id="lifestyle" name="lifestyle" type="checkbox" />
                      <span className={styles.checkmark}></span>
                    </label>
                    <div className={styles.mycard_footer}>
                      <a href="#" className={styles.gallry_cardlink}>
                        Lifestyle
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={12}>
                <div className={styles.gallery_card}>
                  <div className={styles.gallery_card_body}>
                    <label className={styles.block_check}>
                      <div className={styles.chckmark_image}>
                        <Image
                          src={popcultureimg}
                          className={styles.img_responsive}
                        />
                      </div>
                      <Input
                        id="popculture"
                        name="popculture"
                        type="checkbox"
                      />
                      <span className={styles.checkmark}></span>
                    </label>
                    <div className={styles.mycard_footer}>
                      <a href="#" className={styles.gallry_cardlink}>
                        Pop Culture
                      </a>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={4} md={4} sm={4} xs={12}>
                <div className={styles.gallery_card}>
                  <div className={styles.gallery_card_body}>
                    <label className={styles.block_check}>
                      <div className={styles.chckmark_image}>
                        <Image
                          src={sustainabilityimg}
                          className={styles.img_responsive}
                        />
                      </div>
                      <Input
                        id="sustainability"
                        name="sustainability"
                        type="checkbox"
                      />
                      <span className={styles.checkmark}></span>
                    </label>
                    <div className={styles.mycard_footer}>
                      <a href="#" className={styles.gallry_cardlink}>
                        Sustainability
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <FormGroup>
                  <Button
                    type="submit"
                    className={`${styles.basic_info_button} mt-3`}
                  >
                    Continue
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UserProfileContent;
