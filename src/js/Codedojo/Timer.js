/**
 * Created by Vasul on 02.10.2017.
 */


import React from 'react';
import Button from './Button';



class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.tick = this.tick.bind(this);



        this.state = {
            run: false,
            elapse: 0,
            lastTick: 0
        }
    }


    handleStart(){
        this.setState({
            run: true,
            lastTick: Date.now()
        });
        // console.log(this.state.run);
    }

    handlePause(){
        this.setState({run: false});
        // console.log(this.state.run);
    }

    handleStop(){
        this.setState({
            run: false,
            elapse: 0,
            lastTick: 0
        });
        // console.log(this.state.run);
    }


    tick() {
        if( this.state.run) {
            let now = Date.now();
            let diff = now - this.state.lastTick;

            this.setState({
                elapse: this.state.elapse + diff,
                lastTick: now
            })
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    format(miliseconds) {
        let totalSeconds = Math.floor(miliseconds / 1000);
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;



        return `${minutes > 9 ? minutes : '0'+ minutes } : ${seconds > 9 ? seconds : '0'+ seconds}`;
    }




    render() {

        let time = this.format(this.state.elapse);

        const {run} = this.state;

        return (
            <timer>
                <div>{time}</div>
                {
                    run
                    ? <Button onClick={this.handlePause}>pause</Button>
                    : <Button onClick={this.handleStart}>start</Button>
                }
                <Button onClick={this.handleStop}>stop</Button>
            </timer>
        )
    }
}


export default Timer;