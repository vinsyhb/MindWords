import React from "react";
import { Card, CardTitle, CardText } from 'reactstrap';
import { Alert, Button } from "reactstrap";

export default class DisplayWord extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete(e,wordId) {
        debugger;
    }

    render() {
        const words = this.props.searchResult.length && this.props.searchResult.map( ({toremember, meaning, othermeaning,wordId},index)=> (
            <div key={wordId}>
                <Card body>
                    <CardTitle>{toremember}</CardTitle>
                    <CardText>{meaning}</CardText>
                    <CardText>
                        {othermeaning}
                    </CardText>
                    <Button 
                        outline
                        color="danger"
                        size="sm"
                        onClick={ (e) => this.handleDelete(e,wordId)}>Delete
                    </Button>
                </Card>
            </div>
        )) || 
        (
            <Alert color="info">
                Nothing to display
            </Alert>
        );
        return (
            <div className="display-words">
                {words}
            </div>
        )
    }
};