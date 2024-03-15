import { React, useState, useEffect } from 'react';
import { repeatConnect, requestPixel, Color } from "@systemic-games/pixels-web-connect";

function PixelConnect() {
    const connect = async () => {
        // Ask user to select a Pixel
        const pixel = await requestPixel();

        // Connect to die
        console.log("Connecting...");
        await repeatConnect(pixel);

        // Get last roll state
        const rollState = pixel.rollState;
        console.log(`=> roll state: ${rollState.state}, face up: ${rollState.face}`);

        // Read RSSI (signal strength)
        const rssi = await pixel.queryRssi();
        console.log(`=> rssi: ${rssi}`);
        // And battery level
        console.log(`=> Battery: ${pixel.batteryLevel}%`);

        // Make LEDs flash a color
        await pixel.blink(Color.red);

        // Add listener to get notified on rolls
        pixel.addEventListener("roll", (face) => {
            console.log(`=> rolled face: ${face}`);
        });
    }
    return (
        <div className='container'>
            <button onClick={() => { connect() }}>Connect Pixel</button>
        </div>
    )
}

export default PixelConnect