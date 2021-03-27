import React from 'react'

export default ({width = 20, height = 20, color='white', ...otherProps}) => 
<svg 
{...otherProps}
width={width} 
height={height}
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 100 100" 
preserveAspectRatio="xMidYMid" 
className="lds-dual-ring" 
//style={{minWidth: width, background: 'none'}}
>
    <circle 
    cx="50" 
    cy="50" 
    ng-attr-r="{{config.radius}}" 
    ng-attr-stroke-width="{{config.width}}" 
    ng-attr-stroke="{{config.stroke}}" 
    ng-attr-stroke-dasharray="{{config.dasharray}}" 
    
    fill="none" 
    //stroke-linecap="round" 
    strokeLinecap="round"
    r="40" 
    //stroke-width="8" 
    strokeWidth="8"
    stroke={color} 
    //stroke-dasharray="62.83185307179586 62.83185307179586" 
    strokeDasharray="62.83185307179586 62.83185307179586"
    transform="rotate(339.538 50 50)">
    <animateTransform 
        attributeName="transform" 
        type="rotate" 
        calcMode="linear" 
        values="0 50 50;360 50 50" 
        keyTimes="0;1" 
        dur="1s" 
        begin="0s" 
        repeatCount="indefinite">
    </animateTransform>
    </circle>
</svg>