import { FaAngleDown, FaLinkedin,FaQuestionCircle } from "react-icons/fa";
const ModifyProfileComponent = ()=>{
    return(
        <div id="lateral" className="border border-2 rounded-3 mb-3 p-2 bg-white ColorTextGrey myNav ">
        <div className="ms-2 d-flex justify-content-between me-2">
          <p>modifica il profilo pubblico e L'URL</p>
          <i>
            <FaQuestionCircle></FaQuestionCircle>
          </i>
        </div>
        <hr className="mx-2"></hr>
        <div className="ms-2 d-flex justify-content-between me-2 mb-3 ColorTextGrey">
          aggiungi il tuo profilo in un'altra lingua
          <i>
            <FaQuestionCircle></FaQuestionCircle>
          </i>
        </div>
      </div>
    )
}

export default ModifyProfileComponent