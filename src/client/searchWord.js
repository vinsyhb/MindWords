import React from "react";
import { Input, Button, Form, FormGroup } from 'reactstrap';
import { Spinner } from 'reactstrap';

import DisplayWord from "./displayWord";

import axios from 'axios';
class SearchWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestWord: "",
            searchCompleted: false,
            searchResult:[],
            searching:false
        }
    }
    onSearch(e) {
        this.setState({searching:true});
        axios.get("https://pricey-rover.glitch.me/getWords?requestWord="+this.state.requestWord)
        .then( (response) => {
            this.setState({
                searchCompleted: true,
                searchResult:response.data,
                searching: false
            });
        });
        e.preventDefault();
    }

    render() {
        return (
            <div className="">
                <Form onSubmit={(e)=>this.onSearch(e)}>
                    <FormGroup>
                        <Input
                            type="text"
                            name="requestWord"
                            placeholder="Type the word to be searched"
                            value={this.state.requestWord}  
                            onChange={(e) => this.setState({
                                requestWord: e.target.value
                            })}
                        />
                        <br/>
                        <Button color="primary" onClick={(e) => this.onSearch(e)}>Search</Button>
                    </FormGroup>
                </Form>
                {this.state.searching && <Spinner color="secondary" /> }
                {this.state.searchCompleted && <DisplayWord searchResult={this.state.searchResult} />}
            </div>
        );
    }
};
export default SearchWord;