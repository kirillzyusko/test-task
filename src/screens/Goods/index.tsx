import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';

export default function Goods() {
  const data = useSelector(state => state.goods.data);

  const items = useSelector(state => state.bucket.items)
  console.log(1111, items);

  return (
    <View style={{flex: 1}}>
      {data.map((good) => (
        <View style={{marginBottom: 20}}>
          <Text>{good.name}</Text>
          <Text>{good.color}</Text>
          <Text>{good.price}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginRight: 20}}>
              <Text style={{fontSize: 20}}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontSize: 20}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}