import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { List, Colors } from 'react-native-paper';
import BudgetTable from '../components/BudgetPage/BudgetTable';

const budgetDatabase = [
  {
    month: 11,
    year: 2021,
    value: 200.27,
    spent: 100.99,
  },
  {
    month: 9,
    year: 2021,
    value: 82.74,
    spent: 13.78,
  },
  {
    month: 8,
    year: 2021,
    value: 98.23,
    spent: 387.92,
  },
  {
    month: 7,
    year: 2021,
    value: 198.63,
    spent: 96.54,
  },
  {
    month: 6,
    year: 2021,
    value: 198.63,
    spent: 96.54,
  },
  {
    month: 5,
    year: 2021,
    value: 198.63,
    spent: 96.54,
  },
  {
    month: 4,
    year: 2021,
    value: 198.63,
    spent: 96.54,
  },
  {
    month: 3,
    year: 2021,
    value: 198.63,
    spent: 96.54,
  },
  {
    month: 2,
    year: 2021,
    value: 198.63,
    spent: 96.54,
  },
  {
    month: 0,
    year: 2021,
    value: 1098.63,
    spent: 906.54,
  },
];

const BudgetPage = () => {
  return (
    <>
      <List.Item
        style={styles.header}
        right={() => (
          <View style={{ flexDirection: 'row', alignItems: 'center', height: 40 }}>
            <View style={{ width: '40%' }}>
              <Text style={styles.subheader}> Month</Text>
            </View>
            <View style={{ width: '30%' }}>
              <List.Icon style={styles.value} color={Colors.green600} icon="arrow-up-bold" />
            </View>
            <View style={{ width: '30%' }}>
              <List.Icon style={styles.spent} color={Colors.red600} icon="arrow-down-bold" />
            </View>
          </View>
        )}
      />
      <BudgetTable renderList={budgetDatabase} />
    </>
  );
};

export default BudgetPage;

const styles = StyleSheet.create({
  header: {
    fontSize: 42,
    backgroundColor: '#24838f',
    marginTop: 8,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  subheader: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  value: {
    color: 'green',
    alignSelf: 'center',
  },
  spent: {
    color: 'red',
    alignSelf: 'center',
  },
});
