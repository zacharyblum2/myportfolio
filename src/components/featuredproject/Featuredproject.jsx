import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './featuredproject.css';

export default class FeaturedProject extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            description: props.description,
            resp: props.resp,
            tech: props.tech,
            complete: props.complete,
            git: props.git,
            link: props.link,
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
                        <div class="bg-gray">
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
                        </div>
                        <div className="tech">
                            <ul>
                                {this.state.tech.map(item => {
                                    return <li>{item}</li>
                                })}
                            </ul>
                        </div>
                        <div className="links">
                            <a href=""><Icon.Github></Icon.Github></a>
                            <a href=""><Icon.BoxArrowUpRight></Icon.BoxArrowUpRight></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
