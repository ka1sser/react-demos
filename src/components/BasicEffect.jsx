import React from 'react';
import { useState, useEffect } from "react";

const BasicEffect = () => {

    useEffect(() => {
        console.log("Calling useEffect() now")
    });

    return (
        <div>

        </div>
    )
}

export default BasicEffect;