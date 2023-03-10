import React from 'react';
import './featuredproject.css';

export default class FeaturedProject extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            resp: props.resp,
            tech: props.tech,
            complete: props.complete
        }
    }

    

    render() {
        return (
            <div className="card">
                <div className="info">
                    <div className="head">
                        <h4>Featured Project</h4>
                        <h3>{this.state.title}</h3>
                    </div>
                    <div className="information">
                        <div className="desc">
                            <p>{this.state.description}</p>
                        </div>
                        <div className="resp">
                            <ul>
                                <li>{this.state.resp[0]}</li>
                                <li>{this.state.resp[1]}</li>
                                <li>{this.state.resp[2]}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tech">
                        <p>{this.state.tech[0]}</p>
                        <p>{this.state.tech[1]}</p>
                        <p>{this.state.tech[2]}</p>
                    </div>
                </div>
                <div className="link">
                    {/* Add bootstrap link to github*/}
                </div>
            </div>
        )
    }
}
