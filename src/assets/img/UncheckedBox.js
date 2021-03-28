import React from 'react'

export default ({width = 20, height = 20, color='white', otherProps}) => 
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width={width}
height={height}>
<path fill={color} d="M 39 4 L 11 4 C 7.101563 4 4 7.101563 4 11 L 4 39 C 4 42.898438 7.101563 46 11 46 L 39 46 C 42.898438 46 46 42.898438 46 39 L 46 11 C 46 7.101563 42.898438 4 39 4 Z M 42 39 C 42 40.699219 40.699219 42 39 42 L 11 42 C 9.300781 42 8 40.699219 8 39 L 8 11 C 8 9.300781 9.300781 8 11 8 L 39 8 C 40.699219 8 42 9.300781 42 11 Z"/>
</svg>