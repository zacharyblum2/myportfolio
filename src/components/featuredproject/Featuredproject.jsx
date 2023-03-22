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
            img: props.img
        }

        this.imgs = {
            HM: require('../../images/HM.jpg'),
        }
    }

    render() {
        return (
            <div className="card">
                <div className="left">
                    <div className="info">
                        <div className="head">
                            <h5>Featured Project</h5>
                            <h5>{this.state.title}</h5>
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
                                <a href={this.state.git}><Icon.Github></Icon.Github></a>
                                <a href={this.state.link}><Icon.BoxArrowUpRight></Icon.BoxArrowUpRight></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img className="linkimg" src={this.imgs[this.state.img]} alt="" />
                </div>
            </div>
        )
    }
}
