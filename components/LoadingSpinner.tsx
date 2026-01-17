import { createLoadingStyles } from '@/assets/styles/LoadingStyle'
import useTheme from '@/hooks/useTheme'
import React, { useEffect, useRef } from 'react'
import { Animated, Easing, View } from 'react-native'

const LoadingSpinner = ({ message = 'Loading...' }) => {
  const spinValue = useRef(new Animated.Value(0)).current
  const pulseValue = useRef(new Animated.Value(1)).current

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    )

    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.1,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    )

    spin.start()
    pulse.start()

    return () => {
      spin.stop()
      pulse.stop()
    }
  }, [spinValue, pulseValue])

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  const {colors} = useTheme();
  const loadingStyle = createLoadingStyles(colors);
  return (
    <View style={loadingStyle.container}>
      <Animated.View
        style={[
          loadingStyle.spinner,
          {
            transform: [{ rotate }, { scale: pulseValue }],
          },
        ]}
      >
        <View style={loadingStyle.arc} />
      </Animated.View>
    </View>
  )
}



export default LoadingSpinner