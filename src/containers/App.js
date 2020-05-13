import React, {Component} from 'react'; 
//import {robots} from './robots'; 
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; 
import '../containers/App.css';

class App extends Component {
    //States of App
    constructor(){
        super()
        this.state = {
            robots: [], // Using an API to
            searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots : users }));
    }

// Searching change : update  value of the state searchfield
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        // test : console.log(this.searchfield); 
    }

    render() {
        const filteredrobot = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(!this.state.robots.length){
            return <h1>Loading..</h1>
        }else {
            return (
                <div className = 'tc'>
                    <h1 className= 'f2'>Contacts</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots= {filteredrobot}/>
                    </Scroll>
                    
                </div>
        );
        }    
    }
}

export default App ; 
