import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default ({ boxWidth, textMargin, fields }) => {
  const currentFont = 30;
  let id = 0;

  return (
    <View style={[styles.box]}>
      <View style={styles.textbox}>
        <Text adjustsFontSizeToFit style={[styles.text, { fontSize: currentFont }]}>
          {`$${fields[0]}`}
        </Text>
        {fields.slice(1, fields.length).map((val) => {
          id++;
          return (
            <Text style={([styles.text], { fontSize: 15, color: '#24838F' })} key={id}>
              {val}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: '#24838F',
    borderRadius: 10,
    borderWidth: 1.5,
    width: '100%',
    flex: -1,
    shadowColor: 'black',
  },
  text: {
    fontSize: 5,
    color: '#24838F',
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  textbox: {
    margin: 10,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0,
  },
});