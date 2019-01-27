import React from "react";
import { Button, Form, FormGroup, Input } from 'reactstrap';

import axios from 'axios';

export default class AddWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toRemember:"",
            meaning:"",
            otherMeaning:""
        }
    }
    handleSubmit() {
    axios.get("https://pricey-rover.glitch.me/addWord?toRemember="+this.state.toRemember+"&meaning="+this.state.meaning+"&otherMeaning="+this.state.otherMeaning);
        //this.props.onSubmit(this.state);
    }
    render() {
       return (<div>
                <Form>
                    <FormGroup>
                        <h4>Adding the word</h4>
                        <br/>
                        <Input
                            type="text"
                            name="toRemember"
                            placeholder="Word to be added"
                            value={this.state.toRemember}
                            onChange={(e) => this.setState({
                                toRemember: e.target.value
                            })}
                        />
                        <br/>
                        <Input
                            type="text"
                            name="meaning"
                            placeholder="Meaning of the word"
                            value={this.state.meaning}
                            onChange={(e) => this.setState({
                                meaning: e.target.value
                            })}
                        />
                        <br/>
                        <Input
                            type="text"
                            name="otherMeaning"
                            placeholder="Other meaning of the word"
                            value={this.state.otherMeaning}
                            onChange={(e) => this.setState({
                                otherMeaning: e.target.value
                            })}
                        />
                        <br/>
                        <Button color="primary" onClick={() => this.handleSubmit()}>Submit</Button>
                    </FormGroup>
                </Form>
            </div>)
    };
};