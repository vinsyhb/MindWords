import React from "react";
import { Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Router, Route } from "react-router-dom";
import DisplayWord from "./displayWord";

import axios from 'axios';
class SearchWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestWord: "",
            searchCompleted: false,
            searchResult:[]
        }
    }
    onSearch() {
        debugger;
        axios.get("https://pricey-rover.glitch.me/getWords?requestWord="+this.state.requestWord)
        .then( (response) => {
            debugger;
            this.setState({searchCompleted: true,searchResult:response.data});
            //Router.history.push('/view');
            //this.context.history.push("/view");
        })
    }

    render() {
        // if( this.state.searchCompleted ) {
        //     return (
        //         <Redirect to={
        //             {   pathname: '/view',
        //                 state: { 
        //                     searchResult: this.state.searchResult
        //                 }
        //             }} />
        //     );
        // }
        return (
            <div>
                <Input
                    type="text"
                    name="requestWord"
                    placeholder="Type the word to be searched"
                    value={this.state.requestWord}
                    onChange={(e) => this.setState({
                        requestWord: e.target.value
                    })}
                />
                <Button color="primary" onClick={() => this.onSearch()}>Search</Button>
                {this.state.searchCompleted && <DisplayWord searchResult={this.state.searchResult} />}
            </div>
        );
    }
};
export default SearchWord;