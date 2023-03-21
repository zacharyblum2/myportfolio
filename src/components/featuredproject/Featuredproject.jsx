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
                <div className="link">

                </div>
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
                            <p>{this.state.resp[0]}</p>
                            <p>{this.state.resp[1]}</p>
                            <p>{this.state.resp[2]}</p>
                        </div>
                        <div className="tech">
                            <p>{this.state.tech}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
