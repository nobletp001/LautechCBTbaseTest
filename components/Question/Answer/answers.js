import React, { Component ,useEffect, useCallback, useMemo ,useRef} from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextEvent,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { dataQuestion } from "./Questions";


 function Answer(props) {

const allquestion = useMemo(
  () =>
    dataQuestion.d.sort(function () {
      return 0.5 - Math.random();
    }),
  [present]
);
  



let somequestion = allquestion.slice(0, 5);
  

  const [present, setPresent] = React.useState(0);
 

   const [checked, setChecked] = React.useState(null);
  const [status, setstatus] = React.useState(null);
  const [score, setscore] = React.useState(0);
  const [wrong, setwrong] = React.useState(0);
const [show, setShow] = React.useState(true);

const [timer, setTimer] = React.useState(180);

const intervalRef =useRef()


useEffect(() => {
   intervalRef.current= setInterval(() => {
    setTimer((prev) => prev - 1);
  }, 1000);

  return () => {

    if(timer==0){
    clearInterval(intervalRef.current);

    }
  }
}, [])

useEffect(() => {
if(timer==0){
  clearInterval(intervalRef.current);
setstatus("no more  question");
setShow(false);
}

}, [timer])
  
  const next = () => {

    // console.log('aaa'+dataQuestion.d[present].correctAns);
    if (present < somequestion.length - 1) {

     setPresent(present + 1);
     setChecked(null);
    } else {

      setstatus("no more  question");
      setShow(false);
    }
     if (checked == somequestion[present].correctAns) {
       setscore(score + 1);
     }else{
      setwrong(wrong+1)
     }

  };
 
// console.log('my score is '+score)
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: "#1A1461",
          borderRadius: 30,
          height: 350,
          width: 320,
          marginTop: 20,
          marginLeft: 20,
          display: show ? "flex" : "none",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 30,
            }}
          >
            {present + 1}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 60,
            }}
          >
            QUESTIONS {timer}
          </Text>
        </View>
        <View style={{ marginTop: 10, marginLeft: 10, marginTop: 20 }}>
          <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
            {somequestion[present].question}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ color: "#fff", fontSize: 22 }}>A</Text>

            <RadioButton
              value={somequestion[present].options[0].opt1}
              status={
                checked === `${somequestion[present].options[0].id1}`
                  ? "checked"
                  : "unchecked"
              }
              onPress={() =>
                setChecked(`${somequestion[present].options[0].id1}`)
              }
              color="#fff"
            />

            <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 20 }}>
              {somequestion[present].options[0].opt1}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ color: "#fff", fontSize: 22 }}>B</Text>

            <RadioButton
              value={somequestion[present].options[1].opt2}
              status={
                checked === `${somequestion[present].options[1].id2}`
                  ? "checked"
                  : "unchecked"
              }
              onPress={() =>
                setChecked(`${somequestion[present].options[1].id2}`)
              }
              color="#fff"
            />

            <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 20 }}>
              {somequestion[present].options[1].opt2}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ color: "#fff", fontSize: 22 }}>C</Text>

            <RadioButton
              value={somequestion[present].options[2].opt3}
              status={
                checked === `${somequestion[present].options[2].id3}`
                  ? "checked"
                  : "unchecked"
              }
              onPress={() =>
                setChecked(`${somequestion[present].options[2].id3}`)
              }
              color="#fff"
            />

            <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 20 }}>
              {somequestion[present].options[2].opt3}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ color: "#fff", fontSize: 22 }}>D</Text>

            <RadioButton
              value={somequestion[present].options[3].opt4}
              status={
                checked === `${somequestion[present].options[3].id4}`
                  ? "checked"
                  : "unchecked"
              }
              onPress={() =>
                setChecked(`${somequestion[present].options[3].id4}`)
              }
              color="#fff"
            />

            <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 20 }}>
              {somequestion[present].options[3].opt4}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.pressButton}>
        <View
          style={{
            backgroundColor: "#1A1461",
            borderRadius: 10,
            height: 40,
            width: 120,
            justifyContent: "center",
            alignItems: "center",
            display: show ? "flex" : "none",
          }}
        >
          <TouchableOpacity onPress={next}>
            <Text style={{ fontSize: 25, color: "white", padding: 8 }}>
              {present < somequestion.length - 1 ? "NEXT" : "SUBMIT"}
            </Text>
          </TouchableOpacity>
        </View>
      
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 50,
          display: show ? "none" : "flex",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Score is {score}
        </Text>
      </View>

      {/* <TouchableOpacity
        style={{
          backgroundColor: "#1A1461",
          height: 40,
          width: 200,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "30%",
          marginTop: 100,
          display: show ? "none" : "flex",
        }}
        onPress={()=>{
      setShow(true);
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: "white",
            padding: 8,
            textAlign: "center",
          }}
        >
          START AGAIN
        </Text>
      </TouchableOpacity> */}

      <View
        style={{
          backgroundColor: "#1A1461",
          width: 100,
          borderRadius: 5,
          marginLeft: 10,
          justifyContent: "center",
          alignContent: "center",
          marginTop: 150,
          height: 40,
        }}
      >
        <TouchableOpacity onPress={props.propGoBackStart}>
          <Text style={{ color: "white", fontSize: 30, textAlign: "center" }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  answerStyle: {
    flexDirection: "row",
  },
  pressButton: {
    paddingTop: 20,
    flexDirection:'row',
    justifyContent:'center'
  },
});

export default Answer;