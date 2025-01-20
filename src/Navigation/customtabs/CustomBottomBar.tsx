import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeIcon from '../../assetes/svg/HomeIcon';
import CouponIcon from '../../assetes/svg/CouponIcon';
import Colors from '../../Theme/Colors';

const CustomBottomBar = ({ state, descriptors, navigation }: any) => {
  const insets = useSafeAreaInsets();

  const scale = useState(new Animated.Value(1))[0];

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1.2,
      duration: 330,
      useNativeDriver: true,
    }).start();
  }, [state.index]);

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            hitSlop={10}
            style={styles.tab}>
            <Animated.View style={{ transform: [{ scale: isFocused ? scale : 1 }] }}>
              {route.name === 'splash' ? (
                <CouponIcon isFocused={isFocused} />
              ) : (
                <HomeIcon isFocused={isFocused} />
              )}
            </Animated.View>
            <Animated.Text
              style={{
                color: isFocused ? '#673ab7' : '#222',
                fontSize: 12,
                transform: [{ scale: isFocused ? scale : 1 }],
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:Colors.primery,
    borderTopWidth: 1,
    borderTopColor: Colors.secondery,
    paddingTop:10
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:Colors.primery
    
  },
});

export default CustomBottomBar;





