"use client"

import React, { useEffect, useRef, useState } from 'react'

export default function Iron() {
    return (
        <Animation />

    )
}








const Animation = () => {
    const [checked, setChecked] = useState(false)
    const ref = useRef()

    const handleChecked = () => {
        setChecked(prev => !prev)
        playSound()
    }


    function playSound() {
        let sound1 = "https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-interface-zoom-890.mp3";
        let sound2 = "https://assets.mixkit.co/sfx/preview/mixkit-game-quick-warning-notification-268.mp3";
        let sound3 = "https://assets.mixkit.co/sfx/preview/mixkit-tech-click-1140.mp3";
        let sound4 = "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3";
        let sound5 = "https://assets.mixkit.co/sfx/preview/mixkit-fast-sci-fi-bleep-903.mp3";
        let sound6 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-2521.mp3";
        let sound7 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-confirmation-2520.mp3";
        let audio = new Audio(checked ? sound6 : sound7);
        if (!audio.ended) {
            audio.pause();
            audio.currentTime = 0;
        }
        audio.play();

    }




    return (
        <div onClick={handleChecked} className='flex relative py-10 max-w-3xl'>
            <input type="checkbox" checked={checked} readOnly />
            <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' width="100%" height="fit" viewBox="0 0 1036 460" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
                <g id="fireCircles">
                    <g id="innerCircle" style={{ "isolation": "isolate" }} transform="translate(.000001 0.000001)">
                        <path d="M104.5,245.5c50.522,20.662,110.307-1.715,133.5-49l-3.5-2C210.584,239.326,155.844,260.356,106,242l-1.5,3.5Z" fill="rgb(212 175 55)" />
                        <path d="M50.9999,88C80.8853,41.3236,130.974,26.6843,178,41.5l1.5-3c-56.418-21.0141-113.3223,9.6264-132.0001,48l3.5,1.5Z" fill="rgb(212 175 55)" />
                    </g>
                    <g id="middleCircle" style={{ "isolation": "isolate" }} transform="translate(0 0.000001)">
                        <path d="M109,269.5l3-10c-7.749-1.9-11.855-3.713-19.0001-7.5l-1.5,2c-29.7052-13.227-43.5219-26.425-61-59l3-1.5c-3.9435-5.961-4.9342-9.706-6.5-17l-10.5,4c1.4714,6.863,2.7194,10.693,5.5,17.5l3.5-1c17.6217,33.53,31.7616,46.358,62.5,61.5l-1,3c7.6774,4.415,12.4224,6.268,22.0001,8Z" fill="#737273" />
                        <path d="M179,258.5l3.5,9c-3.646,2-5.954,2.647-10.5,3l-3-9c0,0,6.437-1.018,10-3Z" fill="rgb(212 175 55)" />
                        <path d="M199.5,250.5c3.78-2.096,5.647-3.3,8.5-5.5l5.5,7.5c-3.068,2.6-5.187,3.897-9.5,6l-4.5-8Z" fill="rgb(212 175 55)" />
                        <path d="M72.9999,31l8.5-6l5.5,9.5-9.5,5.5-4.5-9Z" fill="rgb(212 175 55)" />
                        <path d="M103,16l8.5-3l4.5,9-9,3-4-9Z" fill="rgb(212 175 55)" />
                        <path d="M176,14l-1.5,11c8.199,2.3423,12.122,4.1035,19,7l1.5-2.5c31.337,16.0454,44.302,29.1144,60,59L252.5,90l6.5,15.5l9.5-3-6-16.5-3.5,1c-15.528-31.9354-28.84-45.3346-61-61l1-3.5c-8.177-3.8579-13.061-5.8207-23-8.5Z" fill="#737372" />
                        <path d="M184,256.5c4.077-1.132,6.255-2.039,10-4l5,9c-4.586,2.635-6.882,3.613-10.5,4.5l-4.5-9.5Z" fill="rgb(212 175 55)" />
                        <path d="M260.5,110l9.5-2l2.5,11-2,.5c4.748,37.045,1.315,55.991-15.5,86.5l2,1.5c-12.554,19.169-21.128,28.706-38.5,42.5l-6-8c16.333-13.187,24.086-21.735,35.5-39l2,1c15.341-30.546,18.481-48.774,15-83.5h-3L260.5,110Z" fill="rgb(212 175 55)" />
                        <path d="M66.4999,34.5l6.5,8.5c-17.7313,12.102-25.1695,20.785-35.5,38.5l-2.1092-1.4431C19.2746,111.452,16.3387,129.788,19.4999,163.5l2.5-.5l3.5,9.5-10,4-3.5-11l2.5-2c-3.8095-35.625.279-54.466,16.5-86.4474l-3-2.0526c12.5326-17.2092,20.8653-26.1302,38.5-40.5Z" fill="rgb(212 175 55)" />
                        <path d="M86.9999,22l9-4L101.5,27l-9.0001,5-5.5-10Z" fill="rgb(212 175 55)" />
                        <path d="M176,14c-22.255-5.11265-34.544-5.86404-56-2l1,10c20.521-3.729,32.63-2.2006,53.5,3L176,14Z" fill="rgb(212 175 55)" />
                        <path d="M165.5,271.5l-1-9c-23.852,2.063-35.778,1.823-52.5-3l-3,10c21.165,4.224,33.503,5.253,56.5,2Z" fill="rgb(212 175 55)" />
                    </g>
                    <g id="outerCircle" style={{ "isolation": "isolate" }}>
                        <path d="M155.619,0.499987h-13.119v3.000013c65.793-1.71862,126.834,46.1367,137,114l2.75-.5l2.75-.5C272.536,56.6375,227.189,8.8461,165.971,1.36836c-3.403-.415602-6.854-.706677-10.352-.868373Z" fill="rgb(212 175 55)" />
                        <path d="M5.49988,166l-5.000002,1C16.6159,242.886,74.7505,285.685,142.5,285.5v-2-.5-2.5C68.1241,278.908,21.0245,234.302,5.49988,166Z" fill="rgb(212 175 55)" />
                    </g>
                </g>
                <g id="container" style={{ "isolation": "isolate" }}>
                    <g id="loadingLights">
                        <path id="firstLight" d="M317,275.5l-2-2.5l9-9.5l5-2h34.5l1,3.5-9.5,9.5-2,1h-36Z" fill="#3da79a" />
                        <path id="secondLight" d="M372.5,275.5l-2-2.5l9-9.5l5-2h34.5l1,3.5-9.5,9.5-2,1h-36Z" fill="#1d91b6" />
                        <path id="thirdLight" d="M428,275.5l-2-2.5l9-9.5l5-2h34.5l1,3.5-9.5,9.5-2,1h-36Z" fill="#b4b58d" />
                    </g>
                    <path id="containerBox" d="M250,283.5c19.64.515,28.781-2.462,41.5-14l11.5-12c9.98-7.571,16.62-9.831,30.5-10h127.5c11.484-.409,17.715,1.899,28.5,10l13,12c9.098,9.05,15.207,11.924,27.5,14h327.5v-2h66c11.148-3.896,16.743-6.824,25-14L1021,195c5.15-7.217,7.68-11.513,11-20l.5-67h2v-41h-1.5v-25.25-25.25c.04-9.12834-2.76-12.34415-13-14.5h-53-793.5l-7.529-.63164C227.189,8.8461,272.536,56.6375,285,116.5l-2.75.5c12.64,101.955-49.038,162.651-139.75,166c0,0,0,.500001,0,.500001v-2.000001v1.999998L250,283.5Z" transform="translate(0 0.000002)" stroke="rgb(212 175 55)" className='fill-[#75aeb1] hover:fill-[#41787b]' fill="" fill-opacity="0.29" />
                    <path id="containerLeftBottom" d="M967,0L967,2L1020,2C1030.24,4.15585,1033.04,7.37166,1033,16.5L1033,41.75L1033,67L1034.5,67L1036,67L1036,16.5C1035.51,4.06512,1031.88,0.578335,1020,0L967,0Z" transform="matrix(-1 0 0 -1 1038 453)" fill="rgb(241,239,193)" stroke="none" ></path>
                    <path id="containerRightBottom" d="M1034.5,108h-2l-.5,67c-3.32,8.487-5.85,12.783-11,20l-72.5,72.5c-8.257,7.176-13.852,10.104-25,14h-66v2v2.5l66-.5c13.323-4.081,19.832-7.941,29.5-18l72-72.5c5.51-7.215,7.93-11.591,11-20v-67h-1.5Z" fill="rgb(212 175 55)" />
                    <path id="containerRightTop" d="M967,0v2h53c10.24,2.15585,13.04,5.37166,13,14.5v25.25v25.25h1.5h1.5v-50.5c-.49-12.43488-4.12-15.921665-16-16.5h-53Z" transform="translate(0 2)" fill="rgb(212 175 55)" />
                </g>
                <text dx="0" dy="0" font-size="40" letter-spacing="1" className={`${checked ? "translate-y-24 translate-x-80 fill-transparent" : "translate-y-36 translate-x-80 fill-white"} duration-500 transition-all`} id="titleContent" >
                    <>
                    About...
                    </>
                    
                    </text>
                <foreignObject id="detailsContainer" x="10" y="10" width="680" height="350" transform="translate(300 30)">
                    <div id="detailsContent">
                        I&apos;m a frontend developer with a drive to create responsive and user-friendly web
                        applications and user interfaces. Proficient in JavaScript and Typescript,
                        with hands-on experience in modern frontend technologies such as React and Next JS.
                        Aiming to take on new challenges, learn more and use my coding skills for developing
                        new features and contribute to successful projects.

                    </div>
                </foreignObject>
                {/* <text dx="0" dy="0" font-size="20" letter-spacing="1" id="textContent" ></text> */}
                {/* <image transform="translate(10 10)" href="https://media1.giphy.com/media/DDLNRgvnODf7KIJvBn/giphy.gif?cid=790b76115000d3433d27c2d2947ef7a597bd8b15c0e43ac5&rid=giphy.gif&ct=s" height="285" width="280" /> */}
                {/* <image id="rdj" transform="translate(800 15)" href="https://www.pngkey.com/png/full/145-1459868_image-result-for-tony-stark-minimalist-wallpaper-black.png" height="150" width="150" /> */}
            </svg>

        </div>

    )
}