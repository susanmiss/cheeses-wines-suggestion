import React, {Component} from 'react';
import CheeseList from '../components/CheeseList'
import SingleCheese from '../components/SingleCheese'
import {Link} from 'react-router-dom'
import ImgCheese from  './img-cheese.png'


class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = { 
            cheeses : [],
            value: ''
        };
            // this.state = { value : 'Caerphilly' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    fetchCheeses = () => {
        fetch(`http://localhost:8000/`)
        .then(response => response.json())
        .then(data => this.setState(
            {
               cheeses : data
        
            }
        ))
        .catch((error) => console.log('Error fetching'))
    }

    componentDidMount= () => {
        this.fetchCheeses();
    }


    handleChange = event => {
        this.setState({
            value: event.target.value
        });
        
    }

    handleSubmit = event => {
        alert('Your selected cheese is: ' + this.state.value);
        alert('Your selected cheese Id is: ' + this.state.id);
        event.preventDefault();
    }

    render(){
        const { cheeses, id } = this.state;
  
        if (!cheeses ){
            return <div> There is no cheeses..</div>
        }else{

         return(
            <div>

                <img src={ImgCheese} className="logoCheese" alt="cheese"/>
          
                 {/* {JSON.stringify(cheeses)} */}
                   
                <div>
                  
                <h2>Select your favorite cheese:</h2>
                <h4>And we will find the perfct wine for you :)</h4>
                {this.state.cheeses.map(cheese => <CheeseList  name={cheese.name} key={cheese.id} id={cheese._id} />)}

           
                </div>                       
            </div>
        )

     }
            
    }
}


export default HomePage;
