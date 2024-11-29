import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText} onPress={onPress}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});


export default CustomButton;
