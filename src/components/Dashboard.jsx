import {Button,Container,Form, Modal, Accordion, Row, Col, ListGroup} from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../Services/DataService';




const Dashboard = () => {

  let navigate = useNavigate();

  useEffect(() => {
//A useEffect is the first thing that fires on load.
//Put any logic we want to fire on load
//in the event that there is a change in our dependency, it will fire again
//always have a dependency [] or you will be in an infinite loop

    if(!checkToken()) 
    {
      navigate("/Login")
    }

  }, [])

//functions
const handleSetTitle = (e) => setBlogTitle(e.target.value)
const handleSetDescription = (e) => setBlogDescription(e.target.value)
const handleTags = (e) => setBlogTags(e.target.value)
const handleCategory = (e) => setBlogCategory(e.target.value)
const handleImage = (e) => setBlogImage(e.target.value)
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    if(e.target.textContent === "Add Blog Item")
    {
      setEdit(false);
      setBlogTitle("");
      setBlogDescription("");
      setBlogCategory("");
    
    }else
    {
      setEdit(true);
      setBlogTitle("My Awesome Title");
      setBlogDescription("My Awesome Description");
      setBlogCategory("Fitness");
    }
    // setShow(true);
    // console.log(e.target.textContent);
  }


  //create useStates for our forms
  const [blogTitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogCategory, setBlogCategory] = useState("");
  const [blogTags, setnBlogTags] = useState("");

  //bools
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  const [blogItems, setBlogItems] = useState([
    {
      Id: 1,
      Title: "Top Finishing and Crossing Drills",
      Publisher: "anonymous",
      Date: "01-13-2022",
      Text: "Developing finishing and crossing skills is an important aspect of soccer that can greatly constribute to your player.",
      Image: 
            "./assets/Images/3soccerballs.jpg",
      Published: true
      
    },
    {
      Id: 2,
      Title: "6 Soccer Drills to Work on Defense",
      Publisher: "anonymous",
      Date: "01-14-2022",
      Text: "A strong defense is the backbone of any successful soccer team",
      Image: 
            "./assets/Images/3soccerballs.jpg",
      Published: true
    },
    {
      Id: 3,
      Title: "5 Small Side Games",
      Publisher: "anonymous",
      Date: "01-15-2022",
      Text: "Small-sided games create a fast-paced and intense environment.",
      Image: 
            "./assets/Images/3soccerballs.jpg",
      Published: true
    },
    {
      Id: 4,
      Title: "5 Fun 1 V 1 Youth Soccer Activites",
      Publisher: "anonymous",
      Date: "01-15-2022",
      Text: "One of the best ways to naturally bring out the competitive nature.",
      Image: 
            "./assets/Images/3soccerballs.jpg",
      Published: false
    },
    {
      Id: 5,
      Title: "5 Fun warm up soccer drills",
      Publisher: "anonymous",
      Date: "01-15-2022",
      Text: "One of the challenges for youth soccer coaches is to make sure their players are always excited to come to practice.",
      Image: 
            "./assets/Images/3soccerballs.jpg",
      Published: false
    },
  ]);















  return (
    <>
      <Container>
      <Button className="me-3" variant="outline-primary" onClick={handleShow}>
       Add Blog Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "#2f2f2f"}} closeButton>
          <Modal.Title style={{backgroundColor: "#2f2f2f"}}>{edit ? "Edit" : "Add"} Blog Item </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#2f2f2f"}}>
        <Form>
      <Form.Group className="mb-3" controlId="Title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="Text" placeholder="Enter Title" value={blogTitle} onChange={handleSetTitle} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="Text" placeholder="Enter Description" value={blogDescription} onChange={handleSetDescription}  />
      </Form.Group>
     
      
    </Form>

<Form.Group className="mb-3" controlId="Category">
      <Form.Select aria-label="Default select example" value={blogCategory} onChange={handleCategory} >
      <option>Select Category</option>
      <option value="Food">Food</option>
      <option value="Fitness">Fitness</option>
      <option value="Sport">Sports</option>
      <option value="Tech">Tech</option>
        </Form.Select>
      </Form.Group>


      <Form.Group className="mb-3" controlId="Tags">
        <Form.Label>Tags</Form.Label>
        <Form.Control type="text" placeholder="Enter Tags" value={blogTags} onChange={handleTags} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Image">
        <Form.Label>Pick an Image</Form.Label>
        {/* type="file" allows for us to access our files */}
        <Form.Control type="file" placeholder="Select Image from file " accept="image/png, image/jpeg" value={blogImage} onChange={handleImage}  />
      </Form.Group>





        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#2f2f2f"}}>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-primary" onClick={handleClose}>
            {edit ? "Save Changes" : "Save"}
          </Button>
          <Button variant="outline-primary" onClick={handleClose}>
            {edit ? "Save Changes" : "Save"} and Publish
          </Button>
        </Modal.Footer>
    

      </Modal>
        
      
        
            <Button variant="outline-primary" onClick={handleShow}>Edit Blog Item</Button>

            <Row>
              <Col>

              <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Published</Accordion.Header>
        <Accordion.Body style={{backgroundColor: "#3f3f3f", color: "azure"}}>
          {blogItems.map((item) => item.Published ? <ListGroup key={item.Title}>{item.Title}
           <Col className="d-flex justify-content-end">
          <Button variant="outline-danger mx-2">Deltete</Button>
          <Button variant="outline-info mx-2">Edit</Button>
          <Button variant="outline-primary mx-2">Publish</Button>
            </Col>
          </ListGroup> : null)}
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Unpublished</Accordion.Header>
        <Accordion.Body tyle={{backgroundColor: "#3f3f3f", color: "azure"}}>
        {blogItems.map((item) => !item.Published ? <ListGroup key={item.Title}>{item.Title}
        <Col className="d-flex justify-content-end">
          <Button variant="outline-danger mx-2">Deltete</Button>
          <Button variant="outline-info mx-2">Edit</Button>
          <Button variant="outline-primary mx-2">Unpublish</Button>
            </Col>
            </ListGroup> : null)}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
              </Col>
            </Row>
        
      </Container>
    </>
  )
}

export default Dashboard
