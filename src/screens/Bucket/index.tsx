import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';

export default function Goods() {
  const items = useSelector(state => state.bucket.items)
  console.log();
  return (
    <View style={{flex: 1}}>

    </View>
  );
}