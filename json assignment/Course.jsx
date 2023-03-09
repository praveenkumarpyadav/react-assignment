import React from "react";
import { Component } from "react";

class Course extends Component{
    render()
    {
        return(
            <div className="parentBlock">
                
                <div className="mainBlock">
                    <img src={this.props.payload[0].moviePhoto} alt="" />
                    <h1>{this.props.payload[0].movieName}</h1>
                    <h3>{this.props.payload[0].director}</h3>
                    <h3>{this.props.payload[0].actors}</h3>
                </div>

                
                <div className="mainBlock">
                    <img src={this.props.payload[1].moviePhoto} alt="" />
                    <h1>{this.props.payload[1].movieName}</h1>
                    <h3>{this.props.payload[1].director}</h3>
                    <h3>{this.props.payload[1].actors}</h3>
                </div>

               

                <div className="mainBlock">
                    <img src={this.props.payload[2].moviePhoto} alt="" />
                    <h1>{this.props.payload[2].movieName}</h1>
                    <h3>{this.props.payload[2].director}</h3>
                    <h3>{this.props.payload[2].actors}</h3>

                </div>

                <div className="mainBlock">
                    <img src={this.props.payload[3].moviePhoto} alt="" />
                    <h1>{this.props.payload[3].movieName}</h1>
                    <h3>{this.props.payload[3].director}</h3>
                    <h3>{this.props.payload[3].actors}</h3>
                </div>

                <div className="mainBlock">
                    <img src={this.props.payload[4].moviePhoto} alt="" />
                    <h1>{this.props.payload[4].movieName}</h1>
                    <h3>{this.props.payload[4].director}</h3>
                    <h3>{this.props.payload[4].actors}</h3>
                </div>

                <div className="mainBlock">
                    <img src={this.props.payload[5].moviePhoto} alt="" />
                    <h1>{this.props.payload[5].movieName}</h1>
                    <h3>{this.props.payload[5].director}</h3>
                    <h3>{this.props.payload[5].actors}</h3>
                </div>

                <div className="mainBlock">
                    <img src={this.props.payload[6].moviePhoto} alt="" />
                    <h1>{this.props.payload[6].movieName}</h1>
                    <h3>{this.props.payload[6].director}</h3>
                    <h3>{this.props.payload[6].actors}</h3>
                </div>
            </div>
        )
    }
}

export default Course;