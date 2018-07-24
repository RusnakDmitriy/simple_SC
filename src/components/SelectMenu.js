import React, {Component} from 'react'
import styled from 'styled-components'
import { Selection, SelectionList } from '../theme/globalStyle';

class SelectMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: 'hello',
            list: [
                {
                    id: 0,
                    title: 'New York',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 1,
                    title: 'Dublin',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 2,
                    title: 'California',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 3,
                    title: 'Istanbul',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 4,
                    title: 'Izmir',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 5,
                    title: 'Oslo',
                    selected: false,
                    key: 'location'
                }
            ]
        }
    }

    handleClickOutside(){
        this.setState({
            listOpen: false
        })
    }

    toggleList(){
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    render() {
        const{listOpen, headerTitle, list} = this.state
        return(
            <Selection>
                <div className="dd-header" onClick={() => this.toggleList()}>
                    <div className="dd-header-title">{headerTitle}</div>
                </div>
                {listOpen && <SelectionList>
                    {list.map((item) => (
                        <li className="dd-list-item" key={item.id} >{item.title}</li>
                    ))}
                </SelectionList>}
            </Selection>
        )
    }
}

export default SelectMenu