
import { Button,ListGroup,Row,Col, Navbar,Collapse,Form, Pagination,Dropdown } from "react-bootstrap";
import "./home.css"
import MyNavbarScreen from "../navbar/MyNavbar";

import moyskladlogo from "../assets/moyskladlogo.png"
import nextarrow from "../assets/nextarrow.png"
import imagekube from "../assets/image.png"
import { useEffect, useState } from "react";
import { getAllContragents, getAllProducts } from "./HomeApi";


//#5bc4f1
function ListGroupMenu() {

  const [open, setOpen] = useState(false);
    return (
      <ListGroup className="rounded-0  px-2" style={{backgroundColor:"#1f75a8"}}>
        
        
        
        <div className="d-flex w-100 align-items-center justify-content-center" style={{height:"56px",backgroundColor:"#1f75a8"}}>
        <img width={25} height={25} src={moyskladlogo} alt="logo" />
        <h6 className="ms-2 my-0 text-white">МойСклад Касса</h6>
        </div>
        
        <ListGroup.Item action onClick={() => setOpen(!open)} style={{backgroundColor:"#3089b0"}}  aria-expanded={open} className="d-flex align-items-center border-primaryx border-0 rounded">
           
        <small className="text-white">Продажа</small>

        <img className={`ms-auto arrow ${open ? "rotate" : ""}`} width={20} height={20} src={nextarrow} alt="logo" />
       
        </ListGroup.Item>
       
        <Collapse in={open}>
          <div >
          <ListGroup.Item action className="bg-transparent border-0 border-primary p-0 mt-1" ><small className="text-white d-flex  rounded ms-2 ps-3 py-2" style={{backgroundColor:"#3089b0"}}>Возврат</small></ListGroup.Item>
          <ListGroup.Item action className="bg-transparent border-0 border-primary p-0 mt-1" ><small className="text-white d-flex  rounded ms-2 ps-3 py-2" style={{backgroundColor:"#3089b0"}}>Смена</small></ListGroup.Item>
          
          </div>
        </Collapse>


        <ListGroup.Item action onClick={() => setOpen(!open)} style={{backgroundColor:"#3089b0"}}  aria-expanded={open} className="d-flex align-items-center border-primary rounded border-0 mt-1">
           
           <small className="text-white">Отгрузка</small>
   
           <img className={`ms-auto arrow ${open ? "rotate" : ""}`} width={20} height={20} src={nextarrow} alt="logo" />
          
           </ListGroup.Item>
          
           <Collapse in={open}>
             <div >
             <ListGroup.Item action className="bg-transparent border-primary p-0  border-0 mt-1" ><small className="text-white d-flex  rounded ms-2 ps-3 py-2" style={{backgroundColor:"#3089b0"}}>Отгрузка лист</small></ListGroup.Item>             
             </div>
           </Collapse>


           <ListGroup.Item action onClick={() => {}} style={{backgroundColor:"#3089b0"}}   className="d-flex align-items-center border-primary rounded  border-0 mt-1">
           
           <small className="text-white">Настройка</small>
   
          
           <svg className="ms-auto" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M11.9992 8.7743C9.88118 8.7743 8.16419 10.4913 8.16419 12.6093C8.16419 14.7273 9.88118 16.4443 11.9992 16.4443C14.1172 16.4443 15.8342 14.7273 15.8342 12.6093C15.8342 10.4913 14.1172 8.7743 11.9992 8.7743ZM9.66419 12.6093C9.66419 11.3197 10.7096 10.2743 11.9992 10.2743C13.2888 10.2743 14.3342 11.3197 14.3342 12.6093C14.3342 13.8989 13.2888 14.9443 11.9992 14.9443C10.7096 14.9443 9.66419 13.8989 9.66419 12.6093Z" fill="white"/>
            <path   d="M2.5809 8.9224C1.96404 9.99083 2.33012 11.357 3.39854 11.9739C3.88777 12.2563 3.88776 12.9625 3.39856 13.2449C2.33013 13.8618 1.96407 15.2279 2.58092 16.2964L4.09692 18.9222C4.71391 19.9908 6.08044 20.3568 7.14896 19.7399C7.63844 19.4573 8.25011 19.8106 8.25011 20.3754C8.25011 21.6092 9.2503 22.6094 10.4841 22.6094H13.5165C14.7502 22.6094 15.7501 21.6091 15.7501 20.3756C15.7501 19.8108 16.3615 19.458 16.8503 19.7402C17.9185 20.357 19.2845 19.991 19.9012 18.9227L21.4176 16.2963C22.0344 15.2279 21.6684 13.8617 20.6 13.2449C20.1108 12.9624 20.1108 12.2563 20.6 11.9739C21.6684 11.3571 22.0345 9.99089 21.4176 8.92247L19.9012 6.29604C19.2845 5.2278 17.9185 4.86179 16.8503 5.47854C16.3615 5.76076 15.7501 5.40794 15.7501 4.84314C15.7501 3.60961 14.7502 2.60938 13.5165 2.60938H10.4841C9.2503 2.60938 8.25011 3.60957 8.25011 4.84337C8.25011 5.40822 7.63842 5.76152 7.14894 5.47892C6.08042 4.86201 4.71388 5.22797 4.09689 6.29663L2.5809 8.9224ZM4.14854 10.6748C3.79755 10.4722 3.6773 10.0234 3.87994 9.6724L5.39593 7.04663C5.59863 6.69554 6.04772 6.57518 6.39894 6.77796C7.88811 7.63773 9.75011 6.56327 9.75011 4.84337C9.75011 4.43799 10.0787 4.10937 10.4841 4.10937L13.5165 4.10937C13.9216 4.10937 14.2501 4.43788 14.2501 4.84314C14.2501 6.56227 16.1112 7.63733 17.6003 6.77758C17.9511 6.57504 18.3997 6.69524 18.6022 7.04604L20.1186 9.67247C20.3212 10.0234 20.201 10.4722 19.85 10.6749C18.3608 11.5346 18.3608 13.6841 19.85 14.5439C20.2009 14.7465 20.3212 15.1953 20.1186 15.5463L18.6022 18.1727C18.3996 18.5235 17.9511 18.6437 17.6003 18.4412C16.1112 17.5815 14.2501 18.6565 14.2501 20.3756C14.2501 20.7809 13.9216 21.1094 13.5165 21.1094H10.4841C10.0787 21.1094 9.75011 20.7808 9.75011 20.3754C9.75011 18.6555 7.88812 17.5811 6.39896 18.4408C6.04774 18.6436 5.59866 18.5232 5.39596 18.1722L3.87996 15.5464C3.67732 15.1954 3.79757 14.7466 4.14856 14.5439C5.63778 13.6841 5.63775 11.5346 4.14854 10.6748Z" fill="white"/>
            </svg>

          
           </ListGroup.Item>

           <ListGroup.Item action onClick={() => {}} style={{backgroundColor:"#3089b0"}}   className="d-flex align-items-center border-primary rounded border-0 mt-1">
           
           <small className="text-white">Выйти</small>
   
           <svg className="ms-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.25 12C3.25 12.2259 3.34984 12.4284 3.50779 12.5659L7.46925 16.5301C7.76204 16.8231 8.23692 16.8233 8.52991 16.5305C8.82291 16.2377 8.82308 15.7629 8.53029 15.4699L5.81234 12.75L11.75 12.75C12.1642 12.75 12.5 12.4142 12.5 12C12.5 11.5858 12.1642 11.25 11.75 11.25L5.81216 11.25L8.53027 8.53016C8.82307 8.23718 8.82292 7.7623 8.52993 7.4695C8.23695 7.1767 7.76207 7.17685 7.46927 7.46984L3.50576 11.4359C3.34898 11.5733 3.25 11.7751 3.25 12Z" fill="white"/>
            <path opacity="0.4" d="M11.25 2C10.0074 2 9 3.00736 9 4.25V6.1285C9.12064 6.20925 9.2352 6.30292 9.34172 6.40952L10.5 7.56853V4.25C10.5 3.83579 10.8358 3.5 11.25 3.5H17.25C17.6642 3.5 18 3.83579 18 4.25V19.75C18 20.1642 17.6642 20.5 17.25 20.5H11.25C10.8358 20.5 10.5 20.1642 10.5 19.75V16.4314L9.34178 17.5904C9.23524 17.697 9.12066 17.7907 9 17.8715V19.75C9 20.9926 10.0074 22 11.25 22H17.25C18.4926 22 19.5 20.9926 19.5 19.75V4.25C19.5 3.00736 18.4926 2 17.25 2H11.25Z" fill="white"/>
            </svg>

          
           </ListGroup.Item>
        
        
  
      </ListGroup>
    );
}

function UsersList() {


  const [contragentList,setContragentList]= useState([]);
  const [contragent,setContragent]= useState([]);
  
  useEffect(()=>{
    async function load() {
      try{
        const data= await getAllContragents();
        setContragentList(data.rows);
        console.log(data);
        
      }catch(error){

      }
    }

    load()
  },[])

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light w-100 d-flex align-items-center justify-content-between" id="dropdown-basic">
     
      <Form.Control className='me-2' value={contragent}  type="text" placeholder="Имя контрагент или Номер телефона" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="mt-1 w-100" align={"end"}>
        {contragentList && 
          contragentList.map(item =>(
            <Dropdown.Item href="#/action-1"
            active={contragent===item.name+" "+item?.phone}
            onClick={()=>{
              setContragent(item.name+" "+item?.phone)
            }}
            ><small>{item.name} {item.phone}</small></Dropdown.Item>

          ))
        

        }
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

function PaymentList() {
  const [payment, setPayment] = useState("Способ оплаты");

  const payments = [
    "Наличные",
    "Банковская карта",
    "В долг",
    "Click",
    "Payme",
    "Uzum",
  ];

  return (
    <Dropdown className="mt-2">
      <Dropdown.Toggle
        variant="light"
        className="w-100 d-flex align-items-center justify-content-between"
      >
        {payment}
      </Dropdown.Toggle>

      <Dropdown.Menu align="end" className="mt-1 w-100">
        {payments.map((item) => (
          <Dropdown.Item
            key={item}
            active={payment === item}
            onClick={() => setPayment(item)}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}


function LeftContent(props){
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const [pagNumber, setPageNumber] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [offset, setOffset] = useState(0);
  console.log("props");
  //console.log(props.inputChange);

  let searchReq=props.inputChange;
  //console.log(searchReq);
  
  if(!searchReq){
      searchReq="empty"
  }

  useEffect(()=>{

    async function load() {
      try{
      const data = await getAllProducts(offset,searchReq);
      setProducts(data.rows)
      
      console.log("Array length");
      console.log(data.rows?.length);
      const pNumber=Math.ceil(data.meta.size/data.meta.limit);
      setPageNumber(pNumber);
      
      }catch(error){
        console.error('Xatolik:', error);
      }
     
    }

    load();

  },[activePage,props.inputChange]);

  return(
    <div style={{ height: '80vh' }} className="d-flex flex-column align-items-between mt-1" >
      <ListGroup className="overflow-auto" style={{ maxHeight: '70vh' }} >
        {products && 
         products.map(item =>(
            <ListGroup.Item key={item.id} action
            onClick={()=>{
              //console.log(item.name);
              props.click(item)
              
            }}
            >
              <div className="d-flex align-items-center">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M11.9996 2.125C12.2851 2.125 12.5459 2.28707 12.6722 2.54308L15.3264 7.9211L21.2614 8.78351C21.5439 8.82456 21.7786 9.02244 21.8669 9.29395C21.9551 9.56546 21.8815 9.86351 21.6771 10.0628L17.3825 14.249L18.3963 20.16C18.4445 20.4414 18.3289 20.7257 18.0979 20.8936C17.867 21.0614 17.5608 21.0835 17.3081 20.9506L11.9996 18.1598L6.69122 20.9506C6.43853 21.0835 6.13233 21.0614 5.90137 20.8936C5.67041 20.7257 5.55475 20.4414 5.603 20.16L6.61682 14.249L2.32222 10.0628C2.11779 9.86351 2.04421 9.56546 2.13243 9.29395C2.22065 9.02244 2.45536 8.82456 2.73788 8.78351L8.67288 7.9211L11.3271 2.54308C11.4534 2.28707 11.7142 2.125 11.9996 2.125ZM11.9996 4.56966L9.84348 8.93853C9.73423 9.15989 9.52306 9.31331 9.27878 9.34881L4.45745 10.0494L7.94619 13.4501C8.12296 13.6224 8.20362 13.8706 8.16189 14.1139L7.33831 18.9158L11.6506 16.6487C11.8691 16.5338 12.1302 16.5338 12.3486 16.6487L16.661 18.9158L15.8374 14.1139C15.7957 13.8706 15.8763 13.6224 16.0531 13.4501L19.5418 10.0494L14.7205 9.34881C14.4762 9.31331 14.2651 9.15989 14.1558 8.93853L11.9996 4.56966Z" fill="#323544"/>
              </svg>
            <div className="d-flex flex-column lh-2 w-100">
              <div className="d-flex ms-3">
                <p className="m-0 p-0">{item.name}</p>
                <p className="ms-auto fw-bold m-0 p-0">{(item.salePrices[0].value)/100} UZS</p>
              </div>
              <div className="d-flex align-items-center ms-3">
                <p className="m-0 p-0">{item.barcodes?.[0]?.ean13 || "no barcode"}</p>
                <img className="ms-3" src={imagekube} width="15" height="15" alt=""></img>
                <small className="ms-2 p-0">{item.stock}</small>
               
                <small className="ms-auto px-2 badge text-bg-secondary">{(item.salePrices[1]?.value)/100 || 0}</small>
              </div>
            </div>
          </div>
            </ListGroup.Item>
         ))
          
        }
      
      
    </ListGroup>
   
    {
      //offset = (page - 1) * limit
        pagNumber > 0 && (
          <Pagination className="mt-auto">
            {(() => {
              const items = [];
              for (let i = 1; i <= pagNumber; i++) {
                items.push(
                  <Pagination.Item
                  onClick={()=>{
                      setActivePage(i)
                      console.log("offset");
                      console.log((i-1)*500);
                      setOffset((i-1)*500);
                      
                  }} 
                  key={i} 
                  active={activePage === i}>
                    {i}
                  </Pagination.Item>
                );
              }
              return items;
            })()}
          </Pagination>
        )
      }

      
    
    </div>
  )
}
function CenterContent(props){
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const [pagNumber, setPageNumber] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [offset, setOffset] = useState(0);
  console.log("props");
  //console.log(props.inputChange);

  let searchReq=props.inputChange;
  //console.log(searchReq);
  
  if(!searchReq){
      searchReq="empty"
  }

  useEffect(()=>{

    async function load() {
      try{
      const data = await getAllProducts(offset,searchReq);
      setProducts(data.rows)
      
      console.log("Array length");
      console.log(data.rows?.length);
      const pNumber=Math.ceil(data.meta.size/data.meta.limit);
      setPageNumber(pNumber);
      
      }catch(error){
        console.error('Xatolik:', error);
      }
     
    }

    //load();

  },[activePage,props.inputChange]);

  return(
    <div style={{ height: '80vh' }} className="d-flex flex-column align-items-between mt-1" >
      <ListGroup className="overflow-auto" style={{ maxHeight: '70vh' }}>
        {props.itemList && 
         props.itemList.map(item =>(
            <ListGroup.Item 
           
            key={item.id} className="shadow bg-body-tertiary">
              <div className="d-flex align-items-center p-0 m-0">
            
            <div className="d-flex flex-column lh-2 w-100">
              <div className="d-flex ">
                <p className="m-0 p-0">{item.name}</p>
                <p className="ms-auto fw-bold m-0 p-0">{(item.salePrices[0].value)/100} UZS</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="m-0 p-0">{item.barcodes?.[0]?.ean13 || "no barcode"}</p>
                <img className="ms-2" src={imagekube} width="15" height="15" alt=""></img>
                <small className="ms-2 p-0">{item.stock}</small>
                <Form.Check
                  className="ms-auto m-0"
                  type="checkbox"
                  id="agree"
                  label=""
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <small className=" px-2 badge text-bg-secondary">{(item.salePrices[1]?.value)/100 || 0}</small>
              </div>
            </div>
            <svg
            onClick={() => {props.clickDelete(item.id)}}
            className="ms-3" type="submit" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.9545 5.95548C6.39384 5.51614 7.10616 5.51614 7.5455 5.95548L11.999 10.409L16.4524 5.95561C16.8918 5.51627 17.6041 5.51627 18.0434 5.95561C18.4827 6.39495 18.4827 7.10726 18.0434 7.5466L13.59 12L18.0434 16.4534C18.4827 16.8927 18.4827 17.605 18.0434 18.0444C17.6041 18.4837 16.8918 18.4837 16.4524 18.0444L11.999 13.591L7.5455 18.0445C7.10616 18.4839 6.39384 18.4839 5.9545 18.0445C5.51517 17.6052 5.51516 16.8929 5.9545 16.4535L10.408 12L5.9545 7.54647C5.51516 7.10713 5.51517 6.39482 5.9545 5.95548Z" fill="red"/>
            </svg>

          </div>
            </ListGroup.Item>
         ))
          
        }
      
      
    </ListGroup>
   
   

      
    
    </div>
  )
}

function RightContent(props){
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState([]);
  const [pagNumber, setPageNumber] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [offset, setOffset] = useState(0);
  console.log("props");
  //console.log(props.inputChange);

  let searchReq=props.inputChange;
  //console.log(searchReq);
  
  if(!searchReq){
      searchReq="empty"
  }

  useEffect(()=>{

    async function load() {
      try{
      const data = await getAllProducts(offset,searchReq);
      setProducts(data.rows)
      
      console.log("Array length");
      console.log(data.rows?.length);
      const pNumber=Math.ceil(data.meta.size/data.meta.limit);
      setPageNumber(pNumber);
      
      }catch(error){
        console.error('Xatolik:', error);
      }
     
    }

    load();

  },[activePage,props.inputChange]);

  return(
    <div style={{ height: '80vh' }} className="d-flex flex-column align-items-between mt-1" >
      
   <UsersList></UsersList>
   <PaymentList></PaymentList>
   <Form.Control className='mt-2'  type="text" placeholder="Сумма скидки" />
    <Button className="mt-auto m-0 p-4">
    <h4 className="m-0 p-0">Итого: 167.000</h4>
    </Button>

      
    
    </div>
  )
}

function MainContent(props) {
 
  const [items,setItems]=useState([]);
  // const handleClick = (item)=>{
  //   const checkItem= items.find(it => it.id===item.id);
  //   if(checkItem){
  //     //setItems(prev => [...prev,checkItem.stock+1])
  //     console.log("topildi");
      
  //   }else{
  //     console.log(item.name);
  //   setItems(prev => [...prev,item])
  //   }
    
    
  // }

  
  const handleClick = (item)=>{
    //const checkItem= items.find(it => it.id===item.id);
    setItems(prev =>{
      const checkItem= prev.find(it => it.id===item.id);
      if(checkItem){
        return prev.map(it=> it.id===item.id ? {...it,stock:it.stock+1}:it);
      }else{
        console.log(item.name);
       return [...prev,{...item,stock:1}]
      }

    })
        
  }
  const handleDelete = (id)=>{
    console.log(id);
    
    setItems(prev => prev.filter(item => item.id !==id))
  }
  
    return (
      <div className="ps-3 d-flex h-100">
        <Row className="w-100 gx-2 cols-3">
          <Col>
          <small>Товары</small>
          <LeftContent inputChange={props.inputChange} click={handleClick} ></LeftContent>
          </Col>
          <Col>
          <small>Корзина</small>
           <CenterContent itemList={items} clickDelete={handleDelete}></CenterContent>
          </Col>
          <Col>
          <small>Параметры продаж</small>
           <RightContent></RightContent>
          </Col>
        </Row>
      </div>
    );
}


function HomeScreen(){

  const [open, setOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const clickable=()=>{
    console.log("clickable function");
    setOpen(!open)
    
  }
  const handleChange=(event)=>{
    event.preventDefault();
    //console.log(event.target.value);
    setInputValue(event.target.value)
    
  };
    return(
        <div className="d-flex vh-100 overflow-hidden">
            
            
                <Col className={`col-3 sidebar ${open ? "sidebar":"closed"}`} style={{backgroundColor:"#1f75a8"}}>
                <ListGroupMenu></ListGroupMenu>
                </Col>

                <Col className="border-start">
                <MyNavbarScreen hambugerMenuClick={clickable} inputChange={handleChange}></MyNavbarScreen>
                
                <MainContent inputChange={inputValue}></MainContent>
                </Col>
           
            <div>
            
            </div>
           
            

        </div>
    )
}


export default HomeScreen;