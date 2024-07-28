'use client'
import CountUp from "react-countup";
import React from "react";

interface CounterProps {
    start: number;
    end: number;
}

const Counter: React.FC<CounterProps> = ({ start, end }) => {
    return (
        <CountUp
            className="text-3xl md:text-6xl lg:text-8xl font-bold blue-text-gradient"
            start={start}
            end={end}
            duration={1}
            enableScrollSpy
            useEasing={true}
            separator=","
            suffix="+"
        />
    );
};

export default Counter;
