import React from 'react'
import {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogPage = () => {
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
    <Container>
        <Row>
            <Col>
            {blogItems.map((item, i) => (
                <div key={item.Id}>
                { i % 2 == 0 ? 
                    <Row key={item.Id}>
                    <Col md={6}>
                        <Row style={{border: 'solid'}}>
                            <Col style={{border: 'solid'}} className="d-flex justify-content-center" md={12}>Title</Col>
                            <Col md={12}>
                               <Row>
                                <Col style={{border: 'solid'}} className="d-flex justify-content-center" md={6}>Publisher Name</Col>
                                <Col className= "d-flex justify-content-center" md={6}>Date</Col>
                            </Row> 
                            </Col>
                            <Col style={{border: 'solid'}} className="d-flex justify-content-center" md={12}>Image</Col>
                            
                        </Row>
                    </Col>


                    <Col style={{border: 'solid'}} className="d-flex justify-content-center" md={6}>
            
                        Description
    
                    </Col>

                </Row>
                   
                    
                    :


                <Row key={item.Id} style={{border: 'solid'}}>
                     <Col style={{border: 'solid'}} className="d-flex justify-content-center" md={6}>Description</Col>
                    
                    <Col md={6}>
                        <Row>
                            <Col className="d-flex justify-content-center" md={12}>Title</Col>
                            <Col style={{border: 'solid'}} md={12}>
                               <Row>
                                <Col className="d-flex justify-content-center" md={6}>Publisher Name</Col>
                                <Col className= "d-flex justify-content-center" md={6}>Date</Col>
                            </Row> 
                            </Col>
                            <Col className="d-flex justify-content-center" md={12}>Image</Col>
                            
                        </Row>
                
               
                
                    </Col>

                   
                </Row>
                }
                </div>
            
            ))}

            </Col>
        </Row>
    </Container>
    
  );
};

export default BlogPage
