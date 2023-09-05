import {SafeAreaView, View } from 'react-native';
import NoItems from './src/components/NoItems';
import FloatingButton from './src/components/FloatingButton';
import { useState } from 'react';
import {styles} from './src/styles/Styles';
import TextModal from './src/components/TextModal';
import ListItems from './src/components/ListItems';
import Title from './src/components/Title';

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [list, setList] = useState([]);

  const addItem = (item) => 
  {
    list.push({
      id: Math.random(),
      nombre: item,
    });
    setList(list);
  };

  const removeItemById = (id) => {
    if (id === null) {
      console.error("ID is required to remove an item.");
      return;
    }
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title/>
        <TextModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} addItem={addItem}/>
        {list.length > 0 ? <ListItems list={list} removeItem={removeItemById}/> : <NoItems/>}
      </View>
      <FloatingButton setIsModalVisible={setIsModalVisible}/>
    </SafeAreaView>
  );
}

