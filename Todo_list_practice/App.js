import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, 
  TouchableHighlight, TouchableWithoutFeedback, Pressable, TextInput, ScrollView } from 'react-native';
import {theme} from './colors';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = "@toDos"

export default function App() {
  // 상태 선언
  const [working, setWorking] = useState(true);
  const [text, setText] = useState();
  const [toDos, setToDos] = useState({});

  // 함수 선언
  const travel = () => setWorking(false)
  const work = () => setWorking(true)
  const onChangeText = (payload) => setText(payload);

  // Storage에 저장하는 코드
  const saveTodos = async (toSave) => {
    const s = JSON.stringify(toSave)
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
  }

  // 저장된 값을 가져오는 코드
  const loadToDos = async() => {
    const s = await AsyncStorage.getItem(STORAGE_KEY)
    setToDos(JSON.parse(s));
  }
  useEffect(() => {
    loadToDos();
  }, [])

  // 입력한 값을 todos에 추가하는 코드
  const addTodo = async () => {
    if(text === ""){
      return
    }
    // 저장하기
    const newTodos = Object.assign({}, toDos, {[Date.now()]: {text, working},
  });
    setToDos(newTodos);
    await saveTodos(newTodos);
    setText("");
  }

  // 출력 코드 부분
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
          style={{...styles.btnText, color: working ? "white" : theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        underlayColor="#DDDDDD"
        activeOpacity={0}
        onPress={travel}>
          <Text style={{...styles.btnText, color: !working ? "white" : theme.grey}}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          onSubmitEditing={addTodo}
          onChangeText={onChangeText}
          keyboardType='web-search'
          returnKeyType='done'
          placeholder={working ? "Add a To do" : "Where do you want to go?"} style={styles.input}>
        </TextInput>
      </View>
      <ScrollView>{
        Object.keys(toDos).map(key => (
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
            </View> 
          ) : null
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 44,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    fontSize: 18,
    marginVertical: 20,
  },
  toDo: {
    backgroundColor: theme.todoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight:"500",
  },
});
