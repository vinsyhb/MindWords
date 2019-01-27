import React from "react";
import { Card, CardTitle, CardText } from 'reactstrap';

export default class DisplayWord extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        debugger;
        //const words = this.props.location.state.searchResult.map( ({toremember, meaning, othermeaning},index)=> (
        const words = this.props.searchResult && this.props.searchResult.map( ({toremember, meaning, othermeaning},index)=> (
            <div key={index}>
                <Card body>
                    <CardTitle>{toremember}</CardTitle>
                    <CardText>{meaning}</CardText>
                    <CardText>{othermeaning}</CardText>
                </Card>
            </div>
        )) || null;
        return (
            <div>
                {words}
            </div>
        )
    }
};