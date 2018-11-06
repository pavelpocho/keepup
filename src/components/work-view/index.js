import css from './index.css';
import React, { Component } from 'react';
import { RippleManager } from '../ripple';

export default class WorkView extends Component {

    constructor(props) {
        super(props);
        this.inner = React.createRef();

        this.state = {
            startTime: Date.now(),
            time: 0
        }
    }

    componentDidMount() {
        this.inner.current.style.marginTop = (window.innerHeight - this.inner.current.offsetHeight) / 2 + "px";
        this.inner.current.style.marginLeft = (window.innerWidth - this.inner.current.offsetWidth) / 2 + "px";

        for (var i = 1; i < 5; i++) {
            document.getElementById("arc-" + i).style.transform = "rotate(" + (i - 1) * 90 + "deg) skewX(0deg)";
        }

        this.interval = setInterval(() => {
            this.setState((prevState) => {
                return {
                    time: (Date.now() - prevState.startTime)
                } 
            })
            this.showAngle((this.state.time % 60000) / 60000 * 360);
        }, 30);

        RippleManager.setUp();
        
    }

    cancel() {

        clearInterval(this.interval);

        this.props.parent.stopWork();
    }

    showAngle(deg) {

        var i = Math.ceil(deg / 90);

        for (var k = 1; k < i + 1; k++) {
            document.getElementById("arc-" + k).style.display = "block";
            document.getElementById("arc-" + k).style.transform = "rotate(" + (k - 1) * 90 + "deg) skewX(0deg)";
            document.getElementById("arc-inner-" + k).style.transform = "skewX(-0deg)";
            if (deg > 355) {
                document.getElementById("arc-inner-" + k).style.opacity = ((360 - deg) / 5);
            }
            else if (deg < 5) {
                document.getElementById("arc-inner-" + k).style.opacity = ((deg) / 5);
            }
            else {
                document.getElementById("arc-inner-" + k).style.opacity = "1";
            }
        }

        for (var j = i + 1; j < 5; j++) {
            document.getElementById("arc-" + j).style.display = "none";
            if (deg > 355) {
                document.getElementById("arc-inner-" + j).style.opacity = ((360 - deg) / 5);
            }
            else if (deg < 5) {
                document.getElementById("arc-inner-" + j).style.opacity = ((deg) / 5);
            }
            else {
                document.getElementById("arc-inner-" + j).style.opacity = "1";
            }
        }

        document.getElementById("arc-" + i).style.transform = "rotate(" + (i - 1) * 90 + "deg) skewX(" + (deg % 90 == 0 ? 0 : (90 - (deg % 90))) + "deg)";
        document.getElementById("arc-inner-" + i).style.transform = "skewX(-" + (deg % 90 == 0 ? 0 : (90 - (deg % 90))) + "deg)";

    }

    render() {
        return (
            <div className="work-view" style={{backgroundColor: this.props.background}}>
                <div className="work-view-inner" ref={this.inner} >
                    <div className="work-view-topbar">
                        <p className="work-view-pre-title">Working on:</p>
                        <p className="work-view-title">{this.props.title}</p>
                    </div>
                    <div className="work-view-clock">
                        <div className="circle">
                            <p className="circle-time">{
                                (Math.floor(this.state.time / 3600000)) + ":" + 
                                ((Math.floor((this.state.time  % 3600000) / 60000)) / 10 < 1 ? "0" + (Math.floor((this.state.time  % 3600000) / 60000)) : (Math.floor((this.state.time  % 3600000) / 60000))) + ":" + 
                                (Math.floor(((this.state.time % 60000) / 1000)) / 10 < 1 ? "0" + Math.floor(((this.state.time % 60000) / 1000)) : Math.floor(((this.state.time % 60000) / 1000)))
                            }</p>
                            <button className="circle-pause">
                                <i className="material-icons">pause</i>
                            </button>
                            <div className="arc-wrap">
                                <div className="arc-preview"></div>
                                <div id="arc-1" className="arc"><div id="arc-inner-1" className="arc-inner"></div></div>
                                <div id="arc-2" className="arc"><div id="arc-inner-2" className="arc-inner"></div></div>
                                <div id="arc-3" className="arc"><div id="arc-inner-3" className="arc-inner"></div></div>
                                <div id="arc-4" className="arc"><div id="arc-inner-4" className="arc-inner"></div></div>
                            </div>

                        </div>
                    </div>
                    <div className="work-view-buttons">
                        <button className="work-view-cancel" onClick={() => {this.cancel()}}><i className="material-icons">clear</i>Cancel</button>
                        <button className="work-view-save-progress" onClick={() => {this.cancel()}}><i className="material-icons">save</i>Save progress</button>
                        <button className="work-view-finish-task" onClick={() => {this.cancel()}}><i className="material-icons">done</i>Finished</button>
                    </div>
                </div>
            </div>
        )
    }

}