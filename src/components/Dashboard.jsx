import {Button,Container,Form,Modal} from 'react-bootstrap';
import { useState } from 'react';



const Dashboard = () => {

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
        
      </Container>
    </>
  )
}

export default Dashboard
