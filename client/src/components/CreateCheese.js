import React, {useState} from 'react';
import axios from 'axios';


const CreateCheese = () => {

        const [state, setState] = useState({
            nameCheese: '',
            origin: '',
            description: ''  
        })

        const {nameCheese, origin, description} = state

        const handleChange = (name) => (event) => {
            setState({...state, [name]: event.target.value}) 
        }

  

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('handleSubmit')
        axios.post(`http://localhost:8000/create`, {nameCheese, origin, description})
            .then(response => {
            console.log(response.data)
            setState( {
                ...state,
                nameCheese : '',
                origin: '',
                description: ''
            })
        })
        .catch(error => {
            console.log(error.response)
            alert(error.response.data.error)
        })


    }
   

        return(
            <div>
                <h1>Create your Cheese: </h1>
                <form onSubmit={handleSubmit}>
                    Cheese Name:
                    <input type="text" id="nameCheese" name="nameCheese" value={nameCheese} onChange={handleChange('nameCheese')}/><br />
                    Cheese Origin:
                    <input type="text" id="origin" name="origin" value={origin} onChange={handleChange('origin')}/><br />
                    Cheese Description:
                    <textarea type="text" id="description" name="description" value={description} onChange={handleChange('description')}></textarea><br />
                    <button>Create My Onw Cheese</button>
                </form>
            </div>
        )
    
}

export default CreateCheese;