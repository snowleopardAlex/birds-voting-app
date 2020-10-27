import React from "react";
import Bird from "./Bird";
import { CardColumns } from "react-bootstrap";
import hummingbird from "./assets/img/hummingbird.jpg";
import peacock from "./assets/img/peacock.jpg";
import macaw from "./assets/img/macaw.jpg";

class BirdList extends React.Component {
    handleBirdUpVote(birdId) {
        const nextBirds = this.state.birds.map((bird) => {
            if (bird.id === birdId) {
                return Object.assign({}, bird, {
                    votes: bird.votes + 1,
                });
            } else {
                return bird;
            }
        });
        this.setState({
            birds: nextBirds,
        })
    }
    constructor() {
        super()
        this.state = {
            birds: [
                {
                  id: 1,
                  name: "Hummingbird",
                  status: "Near threatened",
                  description: "Hummingbirds are considered the smallest birds in the world.",
                  image: hummingbird,
                  votes: 5
                },
                {
                  id: 2,
                  name: "Macaw",
                  status: "Endangered",
                  description: "Macaw make very good pets, but sometimes they can be aggressive.",
                  image: macaw,
                  votes: 10
                },
                {
                  id: 3,
                  name: "Peacock",
                  status: "Endangered",
                  description: "Peacocks are threatened due to habital loss, smuggling, hunting and predation",
                  image: peacock,
                  votes: 7
                },
            ]
        };
        this.handleBirdUpVote = this.handleBirdUpVote.bind(this)
    }

    componentDidMount() {
        this.setState({birds: this.state.birds});
    }

    render() {

        const birds = this.state.birds.sort((a,b) => (
            b.votes - a.votes
        )); 
        console.log(birds)
        const birdComponent = this.state.birds.map((bird) => (
            <Bird 
            key={bird.id}
            id={bird.id}
            name={bird.name}
            status={bird.status}
            description={bird.description}
            image={bird.image}
            votes={bird.votes}
            onVote={this.handleBirdUpVote}
            />
        ))
        return (
           <div className="birds">
               <h1 className="mt-5 mb-5">Vote for the most beautiful bird</h1>
               <CardColumns>
                   {birdComponent}
               </CardColumns>
           </div>
        );
    }
}

export default BirdList;


