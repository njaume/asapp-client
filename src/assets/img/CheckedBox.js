import React from 'react'

export default ({width = 20, height = 20, color='white', otherProps}) => 
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width={width}
height={height}>
<path fill={color} d="M 39 4 L 11 4 C 7.140625 4 4 7.140625 4 11 L 4 39 C 4 42.859375 7.140625 46 11 46 L 39 46 C 42.859375 46 46 42.859375 46 39 L 46 11 C 46 7.140625 42.859375 4 39 4 Z M 23.085938 34.445313 L 13.417969 25.433594 L 14.78125 23.96875 L 22.914063 31.554688 L 36.238281 15.832031 L 37.761719 17.125 Z"/>
</svg>