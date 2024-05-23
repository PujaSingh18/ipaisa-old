import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { moderateScale } from 'react-native-size-matters';
export default function Categories() {
  const [selected, setSelected] = React.useState('');

  const data = [
    {key:'1', value:'Mobiles', disabled:true},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers', disabled:true},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]
  return (
    <View style={styles.container}>
        <MultipleSelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        onSelect={() => console.logx(selected)}
        label="Categories"
    />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    margin: 10,
    alignContent: 'center',
    marginTop: moderateScale(20),
  },
});
