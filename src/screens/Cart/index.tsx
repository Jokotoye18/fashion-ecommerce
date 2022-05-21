import { globalStyles } from '@globalStyles';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

export const Cart = () => {
  return (
    <SafeAreaView style={[globalStyles.wrapper]}>
      <ScrollView>
        <View>
          <Text>Hello cart</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
