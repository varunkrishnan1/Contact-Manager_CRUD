import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { FaUserEdit } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { IoMdContact } from "react-icons/io";
import { deleteData, editData, getData, postData } from "../services/Config";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [updatedData, setupdatedData] = useState({})
  const [data1, setgetdata1] = useState([]);
  const [addData, setaddData] = useState({
    name : "",
    phoneNum : "",
    email : ""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const getallData = async () => {
    let allData = await getData();
    setgetdata1(allData.data);
  };

  const postallData = async ()=>{
    let posted = await postData(addData)
    console.log(posted.data)
    getallData()
  }

  const deleteall = async (id)=>{
    let deleted = await deleteData(id)
    console.log(deleted.data)
    getallData()
  }

  const patchData = (data)=>{
    setupdatedData(data)
  }

  const editallData = async ()=>{

    let reqBody = {
      name : updatedData.name,
      phoneNum : updatedData.phoneNum,
      email : updatedData.email
    }
    let edited = await editData(updatedData.id,reqBody)
    console.log(edited.data)
    getallData()

  }

  useEffect(() => {
    getallData();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center mt-5 fw-bold">Contact Add Page</h1>
        <p className="text-center">Add Contacts Effortlessly</p>
      </div>
      <div className="text-center">
        <button onClick={handleShow} className="btn btn-success">
          Add Contact <FiPlus />
        </button>
      </div>
      <div>

        {/* Add  */}

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
            onChange={(e)=>setaddData({...addData,name:e.target.value})}
              className="form-control"
              placeholder="Enter Contact Name"
              type="text"
            />
            <br />
            <input
            onChange={(e)=>setaddData({...addData,phoneNum:e.target.value})}
              className="form-control"
              placeholder="Enter Phone Number"
              type="number"
            />
            <br />
             <input
            onChange={(e)=>setaddData({...addData,email:e.target.value})}
              className="form-control"
              placeholder="Enter Email"
              type="email"
            />
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={()=>{
                handleClose()
                postallData()
            }} variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>

            {/* edit  */}

        <Modal
          show={show1}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
            value={updatedData.name}
            onChange={(e)=>setupdatedData({...updatedData,name:e.target.value})}
              className="form-control"
              placeholder="Enter Contact Name"
              type="text"
            />
            <br />
            <input
            value={updatedData.phoneNum}
            onChange={(e)=>setupdatedData({...updatedData,phoneNum:e.target.value})}
              className="form-control"
              placeholder="Enter Phone Number"
              type="number"
            />
            <br />
             <input
             value={updatedData.email}
            onChange={(e)=>setupdatedData({...updatedData,email:e.target.value})}
              className="form-control"
              placeholder="Enter Email"
              type="email"
            />
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button onClick={()=>{
                handleClose1()
                editallData()
            }} variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
        <div className="mt-5 container d-flex gap-5 row ms-auto">
            
          {
            
            data1.map((value)=>(
                <Card className="bg-black text-light"
              style={{
                width: "16rem",
                height: "14rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                border: "1px solid white",
                borderRadius: 15,
              }}
            >
                 <Card.Body className="text-center">
                <Card.Title className="fs-4">
                  <IoMdContact />
                </Card.Title>
                <Card.Title style={{ fontSize: 17}}>
                  {value.name}
                </Card.Title>
                <Card.Text>{value.phoneNum}</Card.Text>
                 <Card.Text style={{fontSize:11}}>{value.email}</Card.Text>
                <button onClick={()=>{
                  patchData(value)
                  handleShow1()
                }} className="btn btn-lg text-info">
                  <FaUserEdit />
                </button>
                <button onClick={()=>{
                  deleteall(value.id)
                }} className="btn text-danger">
                  <ImBin2 />
                </button>
              </Card.Body>
              </Card>
            ))
            
          }
            
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
