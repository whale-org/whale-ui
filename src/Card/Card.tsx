
import * as React from 'react';
import './Card.css';


export default class HelloWorld extends React.Component<any, any> {
    render() {
        return (
            <div className="whale-card">
                {this.props.children ? this.props.children : null}
            </div>
        );
    }
}