import React, {Component} from 'react';
import PresList from './PresList';
import SearchPerson from './SearchPerson';
import SearchItem from './SearchItem';
import Scroll from './Scroll';
import {stuff} from './stuff';
import './App.css';

class App extends Component {
    constructor () {
        super()
        this.state = {
            stuff: stuff,
            searchperson: '',
            searchitem: ''
        }
    }

onNewSearchPers = (event) => {
    this.setState({searchperson: event.target.value})
    }

onNewSearchItem = (event) => {
    this.setState({searchitem: event.target.value})
    }

render() {
    //filter by two categories
        const filteredstuff = this.state.stuff.filter(stuff => {
            return stuff.person.toLowerCase().includes(this.state.searchperson.toLowerCase()) && stuff.item.toLowerCase().includes(this.state.searchitem.toLowerCase());
    })
    return (
        <div className='tc'>
            <h1 className='brand'>Xmas Party Organizer</h1>
            <SearchItem newSearchItem={this.onNewSearchItem}/>
            <SearchPerson newSearchPers={this.onNewSearchPers}/>
            <Scroll>
              <PresList stuff={filteredstuff}/>
            </Scroll>
        </div>
    );
    }
}
export default App;
