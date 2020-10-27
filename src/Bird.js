import React from "react";
import { Card, Image, Button} from "react-bootstrap";
import like from "./assets/img/like.png";

class Bird extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleBirdUpVote = this.handleBirdUpVote.bind(this);
    }

    handleBirdUpVote() {
        this.props.onVote(this.props.id);
    }

   render() {
    return (
    <div>
    <Card>
    <Card.Img src={this.props.image} style={{width: 280, height: 200}} />
     <Card.Body>
      <Card.Title>{this.props.name}</Card.Title>
      <Card.Text>{this.props.status}</Card.Text>
      <Card.Text>{this.props.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="light" onClick={this.handleBirdUpVote}>
        <Image src={like} height={30} width={30} /> 
        {this.props.onVote}
      </Button> 
      <Card.Text className="mt-4">{this.props.votes}</Card.Text>
    </Card.Footer>
  </Card>   
 </div>
        );
    }
}

export default Bird;