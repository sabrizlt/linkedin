import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const SearchProfileComponent = () => {
    let query = document.querySelector("#firstName")
    const AllProfile = useSelector((state)=>state.data.AllProfiles)
    let queryresult = [];


    query.value.lenght>0 && AllProfile.filter((p)=>(
      queryresult.push(p.username.includes(query.value ))
        ))



  return (
    <div className="d-none" id="QuerySection">

    {queryresult.map((p)=>{
return(
    <Card className="mb-2 pt-2">

    <Card.Img
      variant="top"
      src={
        p.image
      }
      id="postUserImage"
      alt="Profile image"
      style={{ aspectRatio: "1/1" }}
      className="rounded-circle ms-0 w-50"
      onError={(e) => (e.currentTarget.src = "https://placedog.net/500")}
    />
    <Card.Body className="bodyCard pb-0">{p.username}</Card.Body>
    
  </Card>
)
    })}
     
    </div>
  );
};
export default SearchProfileComponent;
