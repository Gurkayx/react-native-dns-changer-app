import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const CustomSwitch = ({ status, statusChanged }: any) => {
  const position = useRef(new Animated.Value(status ? 80 : 0)).current;

  const toggleSwitch = () => {
    Animated.timing(position, {
      toValue: status ? 0 : 80, // Sağda mı yoksa solda mı olduğunu belirler
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      // Durum değiştiğinde dışarıya bildirir
      if (statusChanged) {
        statusChanged(!status);
      }
    });
  };

  useEffect(() => {
    Animated.timing(position, {
      toValue: status ? 80 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [status]); // Prop değiştiğinde animasyonu başlat

  return (
    <TouchableOpacity style={{ marginTop: 20 }} onPress={toggleSwitch}>
      <View style={[styles.container, { backgroundColor: status ? '#E63946' : 'lightgray' }]}>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [{ translateX: position }],
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 70,
    borderRadius: 35, // Yuvarlak köşeler için yarıçap
    justifyContent: 'center',
    paddingHorizontal: 10,
    position: 'relative',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30, // Tam daire için yarıçap
    backgroundColor: 'white',
    position: 'absolute',
  },
});

export default CustomSwitch;
