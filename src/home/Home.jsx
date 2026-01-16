
import { Button,ListGroup,Row,Col, Navbar } from "react-bootstrap";
import "./home.css"
import MyNavbarScreen from "../navbar/MyNavbar";

import moyskladlogo from "../assets/moyskladlogo.png"



function ListGroupMenu() {
    return (
      <ListGroup className="rounded-0">
        
        
        
        <div className="d-flex w-100 align-items-center justify-content-center bg-body-tertiary" style={{height:"56px"}}>
        <img width={25} height={25} src={moyskladlogo} alt="logo" />
        <h6 className="ms-2 my-0">МойСклад Касса</h6>
        </div>
        
       
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  
      </ListGroup>
    );
}

function MainContent() {
    return (
      <div className="p-5">
        <h1>Main Content</h1>
      </div>
    );
}


function HomeScreen(){
    return(
        <div className="d-flex vh-100 overflow-hidden" >
            
            
                <Col className="col-3">
                <ListGroupMenu></ListGroupMenu>
                </Col>

                <Col className="border-start">
                <MyNavbarScreen></MyNavbarScreen>
                
                <MainContent></MainContent>
                </Col>
           
            <div>
            
            </div>
           
            

        </div>
    )
}


export default HomeScreen;