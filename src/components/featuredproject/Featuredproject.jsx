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
                            <ul>
                                {this.state.resp.map(resp => {
                                    return <li>{resp}</li>
                                })}
                            </ul>
                        </div>
                        <div className="tech">
                            <ul>
                                {this.state.tech.map(item => {
                                    return <li>{item}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
