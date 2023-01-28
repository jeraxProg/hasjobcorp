import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import AddEmployersComponent from "./AddEmployers";
import EmployersComponent from "./Employers";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  AdminContainer,
  CustomOffcanvas,
  CustomDiv,
  Content,
  CustomOffcanvasHeader,
  AddEmpButton,
} from "./components";

const Admin = ({ employers, cat_list }) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("employers");

  // For Modals
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  let component;

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const handleActiveTab = (value) => {
    setActive(value);
  };

  if (employers) {
    if (active === "employers") {
      component = employers.map((employer, i) => {
        return <EmployersComponent key={i} employer={employer} cat_list={cat_list} />;
      });
    } else if (active === "categories") {}
  }


  return (
    <AdminContainer>
      <CustomOffcanvas
        show={true}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
      >
        <CustomOffcanvasHeader>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </CustomOffcanvasHeader>
        <Offcanvas.Body className="p-0">
          <CustomDiv
            onClick={() => handleActiveTab("categories")}
            selected={active === "categories"}
          >
            <BsPerson />
            Categories
          </CustomDiv>
          <CustomDiv
            onClick={() => handleActiveTab("employers")}
            selected={active === "employers"}
          >
            <HiOutlineUserGroup />
            Employers
          </CustomDiv>
        </Offcanvas.Body>
      </CustomOffcanvas>
      <Content>
        {active === "employers" && (
          <AddEmpButton variant="primary" onClick={handleShowModal}>
            Add Employer
          </AddEmpButton>
        )}
        <br />
        <br />
        {component}
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Company Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddEmployersComponent cat_list={cat_list} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Content>
    </AdminContainer>
  );
};

export default Admin;
