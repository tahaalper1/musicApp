import { StyleSheet, Text, View, SafeAreaView, FlatList  } from 'react-native';
import React, {useState} from 'react';
import music_data from "./music-data.json"
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SongCard/SearchBar/SearchBar';

function App() {
  const [list, setList] = useState([music_data]);

  const renderSong = ({item}) => <SongCard song={item}/>;

  const rendererSeperator = () => <View style={styles.seperator}/>

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase(); //input'a giirlen text
      const currentTitle = song.title.toLowerCase(); //her item(song)

      return currentTitle.indexOf(searchedText) > -1; //girilen text içinde index'leri eşleştir (0,1,2...)
    });
    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
     <FlatList 
      keyExtractor={item => item.id}
      data={list}
      renderItem={renderSong}
      ItemSeparatorComponent={rendererSeperator}
     />
    </View>
    </SafeAreaView>
    
  );
}


export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  seperator:{
   borderWidth:1,
   borderColor:"#e0e0e0",
  },
});