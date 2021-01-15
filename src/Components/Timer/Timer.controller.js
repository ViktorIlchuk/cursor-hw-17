import * as React from "react";
import {Wrapper, Countdown, Line, Button} from './Timer.view';

export default function TimerController(props) {
    const [counter, setCounter] = React.useState(props.time);
    const [pause, setPause] = React.useState(false);

    React.useEffect(() => startCountAnnounce(), []);

    React.useEffect(() => {
        if(pause && counter > 0) {
            props.onTimePause();
        }
        if(props.autostart && !pause) {
            if(counter === 0) {
                setPause(true);                
            }
            props.onTick(formatTime(counter))
            const timer = counter > 0 && setInterval(() => {
                setCounter(counter - props.step);
            }, props.step);
            return () => clearInterval(timer);
        }
    }, [counter, props, pause]);

    React.useEffect(() => () => {
        if(counter === 0 && !pause) {
            props.onTimeEnd();
        }
    })

    const startCountAnnounce = props.onTimeStart;

    function formatTime(time) {
        const minutes = Math.floor(time / 60000);
        const seconds = ((time % 60000) / 1000).toFixed(0);
        
        return `${(minutes < 10 ? "0" : "")}${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    };

    function stopStartToggle() {
        if(counter === 0) {
            setCounter(props.time)
        }
        return setPause(!pause);
    };

    return (
        <Wrapper>
            <Countdown>{formatTime(counter)}</Countdown>
            <Line width={(counter / props.time) * 100} />
            <Button onClick={stopStartToggle}>{pause ? 'Start' : 'Pause'}</Button>
        </Wrapper>
    )
};
