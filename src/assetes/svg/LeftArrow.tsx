import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

const LeftArrow = () => {
    return (
        <Svg width={20} height={15} viewBox="0 0 34.075 34.075" fill="none">
      <Path
        d="M24.57 34.075c-.505 0-1.011-.191-1.396-.577L8.11 18.432c-.771-.771-.771-2.019 0-2.79L23.174.578c.771-.771 2.02-.771 2.791 0s.771 2.02 0 2.79L12.295 17.037l13.67 13.669c.771.771.771 2.021 0 2.792-.385.386-.89.577-1.395.577z"
        fill={"black"}
      />
    </Svg>
    )
}

export default LeftArrow

