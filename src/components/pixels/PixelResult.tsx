import React, {useState, useEffect } from 'react';
import { usePixelStatus, usePixelValue } from "@systemic-games/pixels-react";
import { Pixel } from "@systemic-games/pixels-web-connect";

export default function PixelRollResult({ pixel }: { pixel: Pixel }) {
  const status = usePixelStatus(pixel);
  const [rollResult] = usePixelValue(pixel, "roll");

  useEffect(() => {
    if (status === "ready") {
      // Log battery state
      console.log(
        `${pixel.name} => battery: ${pixel.batteryLevel}, isCharging: ${pixel.isCharging}`
      );
      // Log roll state
      console.log(
        `${pixel.name} => initial roll state: ${pixel.rollState}, face ${pixel.currentFace}`
      );
    }
  }, [pixel, status]);

  useEffect(() => {
    if (rollResult) {
      // We log the result of each roll just for demonstration purposes
      // but this where you would want to act on a roll result.
      console.log(`Pixel ${pixel.name} rolled a ${rollResult.face}`);
    }
  }, [rollResult, pixel]);

  return (
    <div>
      <text>
        Pixel {pixel.name} status: {status}
      </text>
      {!!rollResult && <text>Roll result: {rollResult.face}</text>}
    </div>
  );
};