import './App.css'
import Button from 'react-bootstrap/Button';
import Dashboard from './components/Dashboard';
import {Container, Row, Col } from 'react-bootstrap';
import BlogPage from './components/BlogPage';


function App() {
 

  return (
    <Container>
      <Row>
        <Col>
        <h1 className='text-center'>Our Blog</h1>
        </Col>
        <BlogPage/>
        {/* <Dashboard/> */}
      </Row>
    </Container>
  )
}

export default App
