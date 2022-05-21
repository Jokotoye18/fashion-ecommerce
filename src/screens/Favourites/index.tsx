import { globalStyles } from '@globalStyles';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

export const Favourites = () => {
  return (
    <SafeAreaView style={[globalStyles.wrapper]}>
      <ScrollView>
        <View>
          <Text>Hello favourites</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
