import React, {Component} from 'react';
import PresList from '../components/PresList';
import SearchPerson from '../components/SearchPerson';
import SearchItem from '../components/SearchItem';
import Scroll from '../components/Scroll';
import {stuff} from '../stuff';
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
        const {stuff, searchperson, searchitem} = this.state;
        const filteredstuff = stuff.filter(stuff => {
            return stuff.person.toLowerCase().includes(searchperson.toLowerCase()) && stuff.item.toLowerCase().includes(searchitem.toLowerCase());
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
