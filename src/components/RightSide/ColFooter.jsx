import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
const ColFooter =()=>{
    return(
       
            <Container fluid className="justify-content-center  w-100 stickynav2">
  <div className="d-flex my-0">
 <ul className=" list-unstyled d-flex flex-column align-items-end">
    <li className="me-2">informazioni</li>
   
    <li className="me-2 my-0">centro assistenza</li>
   
    
 </ul>
 
 <ul className="list-unstyled my-0 d-flex flex-column align-items-start">
<li className="my-0">Accessibilità
<Form.Select aria-label="Default select example" className=" formPrivacy my-0">
                  <option className="">Privacy e condizioni</option>
                  <option value="1">Condizioni e termini</option>
                </Form.Select></li>
             
 </ul>
        </div>

       <ul className="list-unstyled Neg">
        <li className="my-0">Opzioni per gli annunci pubblicitari</li>
       </ul>

       <div className="d-flex my-0 justify-content-center">
 <ul className=" list-unstyled d-flex flex-column align-items-end Neg">
    <li className="me-2 d-flex flex-column align-items-end">Pubblicità</li>
    <li className="d-flex flex-column align-items-end me-2">scarica l'app </li>

 </ul>
 
 <ul className="list-unstyled my-0 Neg">
<Form.Select aria-label="Default select example" className=" formPrivacy my-0">
                  <option className="">Servizi alle aziende</option>
                  <option value="1">Condizioni e termini</option>
                </Form.Select>
                <Form.Select aria-label="Default select example" className=" formPrivacy my-0 Negg">
                  <option className="">altro</option>
                  <option value="1">Condizioni e termini</option>
                </Form.Select>           
 </ul>
        </div>
</Container>



    )
}
export default ColFooter