import React from 'react';


class SingleCheese extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            cheese: '',
            wineImg: ''
         }
    }

    getCheeseData = (cheeseId) => {
        fetch(`http://localhost:8000/cheese/${cheeseId}`)
        .then(response => response.json())
        .then(cheeseData => this.setState({cheese: cheeseData}))
        .catch(error => console.error(error))
    }

    fetchWines = () => {
        fetch(`http://localhost:8000/wines`)
        .then(response => response.json())
        .then(data => this.setState(
            {
               wineImg: data[Math.floor(Math.random() * 5)].image
        
            }
        ))
        .catch((error) => console.log('Error fetching'))
    }

    componentDidMount = ()  =>{
        let cheeseId = this.props.match.params.id;
        console.log(cheeseId)
        this.getCheeseData(cheeseId);
        this.fetchWines();
    }


    render() {
        const {wine} = this.state
        return(
            <div>
                <h2>{this.state.cheese.name}</h2>
                <img src={this.state.cheese.image} />
                <h3>Origin: {this.state.cheese.origin}</h3>
                <h3>{this.state.cheese.tastingNotes}</h3>
                <br />
                <h4>It goes perfect with:</h4>
                <h3>{this.state.wine}</h3>
                <img src={this.state.wineImg} alt="wine selected" className="img-wine"/>
                <br />

                <button>Delete</button>
                <button>Update</button>
            
            </div>
        )
    }
}

export default SingleCheese;