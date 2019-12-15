import React, {Component} from 'react';
import PresList from './PresList';
import SearchPerson from './SearchPerson';
import SearchItem from './SearchItem';
import {stuff} from './stuff';
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            stuff: stuff,
            searchperson: ''
        }
    }

onNewSearchPers = (event) => {
    this.setState({searchperson: event.target.value})
    }

render() {
        const filteredstuff = this.state.stuff.filter(stuff => {
        return stuff.person.toLowerCase().includes(this.state.searchperson.toLowerCase());
    }) 
    return (
        <div className='tc'>
            <h1 className='brand'>Xmas Party Organizer</h1>

            <SearchPerson newSearchPers={this.onNewSearchPers}/>
            <PresList stuff={filteredstuff}/>
        </div>
    );
    }
}
export default App;