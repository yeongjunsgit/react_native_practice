# React-Native

0. 사전준비

   1. 안드로이드 스튜디오가 필요함

   2. 해당 강의에서는 안드로이드 스튜디오 등의 설정이 어려움으로 우선 Expo를 이용하기로 하였다.

     3. cmd에 
   
        ```bash
        $ npm install --global expo-cli
        ```
   
        를 입력하여 Expo를 다운받는다

        

     4. 핸드폰에 Expo 어플을 다운로드 받고 회원가입을 진행한다.
   
        
   

## React native 개요

- React-native는 작성한 코드를 이용하고자 하는 운영체제에 해당 코드를 해석하여 운영체제에 맞는 언어를 bridge를 통해 해당 코드를 토대로 명령을 하는것 React-native 자체가 화면을 출력하는 것이 아니고 운영체제에 요청하는 것이다.
- 진행흐름
  1. Event 발생 (Native 부분)
     - 터치 등의 이벤트가 발생한다
  2. 해당 데이터를 수집 (Native 부분)
     - 해당 이벤트에 대한 데이터를 수집하고 알린다.
  3. React Native가 수집한 정보를 JSON메세지(payload)로 만듬 (Bridge 부분)
  4. 작성한 코드가 메세지를 받음 (JavaScript 부분)
  5. 메세지에 대한 응답(명령)을 보냄 (JavaScript 부분)
  6. 해당 응답을 Native에서 알아들을 수 있게 해석 (Bridge 부분)
  7. 해당 명령을 진행한다 (Native 부분)
  8. 명령 출력 (Native 부분)



## React Native 프로젝트 만들기

- 해당 프로젝트는 Expo를 이용하여 진행한다!

- Expo를 이용하기 위해 어플을 깔아서 할 수 있지만, 같은 와이파이를 이용하여야만 연동이 가능하므로, 여의치 않을때는 안드로이드 스튜디오를 통해 연동하여야 한다.

  [참고 사이트](https://chococookiee.tistory.com/50)

  위 사이트에서는 Expo를 이용하거나, Android Studio 자체만 이용하거나 두개의 정보를 제공해준다.

  하지만 나는 Expo를 폰으로 연결하는것을 실패해서 안드로이드 스튜디오의 에뮬레이터를 이용하여 Expo를 사용한다. 

  간단하게 순서를 요약하자면,

  1. 안드로이드 스튜디오 설치

  2. 메인 페이지의 More Actions 의 SDK 매니저를 들어가 필요한 안드로이드 SDK 버전을 받는다

     위의 사이트에 따르면 Android 10.0(Q) 의 29가 잘 돌아간다고 한다....

  3. 다시 메인 페이지의 More Actions로 들어가서, virtual Device Configuration에서 받은 SDK를 이용하여 Virtual Device를 추가한 후, 해당 VD를 실행한다.

  4. > ```bash
     > npx create-expo-app {프로젝트 명}
     > ```

     위의 명령어를 이용하여 새로운 expo 프로젝트를 생성한다.

  5. ```bash
     npm run android
     ```

     위의 명령어를 입력하여 실행한 VD(에뮬레이터)에 Expo가 실행되는지 확인한다.

  6. 프로젝트를 Vscode로 열어 실행된 프로젝트와 연동이 잘됬는지 확인하자



## React Native 사용해보기

#### 그냥 팁

- Snack을 사용하자 ! 해당 사이트는 브라우저에서 Expo 개발을 진행할 수 있다!

### React Native 규칙

1. react Native는 웹사이트가 아니다!

   - 따라서 div를 사용하지 않는다

     div = view

     view를 사용하기 위해서는 무조건 import를 진행해야 한다.

2. React Native에 있는 모든 text는 text 컴포넌트 안에 들어가야한다 (웹 처럼 그냥 태그없이 적으면 안됨)

   - p, span 태그 등도 존재하지 않는다 웹 브라우저가 아니기 때문!

3.  View 태그에 보면 style이 붙어있다

   ```react
   <View style={styles.container}>
   ```

   안타깝게도 웹에서 사용하는 모든 style태그를 사용하지는 못한다. 예시) border

   그래도 대부분은 사용할 수 있다고 한다.

   styles의 코드를 보면 StyleSheet.create가 적혀있다.

   ```react
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
     },
   });
   ```

   - StyleSheet.create는 object를 만드는데 쓰인다.

     object니까 다음과 같이 만들어서 사용이 가능하다

   ```react
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
     },
     // text style 추가
     text: {
       // JS와 다르게 camelCase로 작성해야 함
       fontSize: 28,
     }
   });
   ```

   ```react
   export default function App() {
     return (
       <View style={styles.container}>
         // 위 styles에서 만든 text style을 사용
         <Text style={styles.text}>Open up App.js to start working on your app!</Text>
         <StatusBar style="auto" />
       </View>
     );
   }
   ```

   - 추가로 그냥 태그안에 스타일을 작성하는 것도 가능하다

     ```react
     
     export default function App() {
       return (
         <View style={styles.container}>
           <Text style={styles.text}>Open up App.js to start working on your app!</Text>
           // 태그안에 style을 객체로 작성
           <Text style={{fontSize: 35,}}>inline</Text>
           <StatusBar style="auto" />
         </View>
       );
     }
     ```

   - 그런데 styles를 선언할 때 꼭 StyleSheet.create를 사용할 필요없이 객체로 선언해서 사용해도 된다.

     하지만, 이럴때는 자동완성을 지원하지 않는다고 하니 기피하자

4. StatusBar의 정체가 무엇일까?

   - 다른 태그들은 리액트 네이티브에서 import 하지만, 잘 보면 StatusBar는 expo-status-bar에서 import한다.

     이는 StatusBar가 서드파티이기 때문이다.

### React Native 패키지

- [리액트네이티브 페이지](https://reactnative.dev)
- 위의 페이지에서 documentation을 볼 수 있는데 이곳에서 제공하는 Component들을 볼 수 있다.
- 그런데 있던기능도 줄이는 상황이라 많은 패키지가 남아있지는 않다.



### Third-Party 패키지

- 위와 같은 문제로 이용해야하는게 서드파트 패키지이다.
- [서드파티 패키지 보러가기](https://reactnative.directory)
- 위 커뮤니티로 들어가면, 다양한 API가 있지만, 개인이 만든것이라 신빙성과, 유지보수 쪽에서 아쉽다.
- Expo도 API를 제공해준다 야호!
- [Expo 서드파티 패키지 보러가기](https://docs.expo.dev)
- Expo는 다양하고 좋은 API를 제공해주니 Expo를 추앙하라



### Layout System

- React Native는 Flexbox가 기본적으로 적용된다. 하지만 웹의 flexbox와는 조금 다르다고 한다.

  ```js
  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  
  export default function App() {
    return (
          // 부모 Flex 먼저 만들기
      <View style={{ flex: 1}}>
        <View style={{ flex: 1, backgroundColor:'tomato' }}></View>
        <View style={{ flex: 2, backgroundColor:'teal' }}></View>
        <View style={{ flex: 1, backgroundColor:'orange' }}></View>
      </View>
    );
  }
  ```

  - 웹 사이트와 다른 점은 다음과 같다.

    1. Flex Direction의 기본값은 Column이다.

       - 웹에서 기본값은 row였다!

       - 잠깐 그러면 row로 Flex 를 주고 싶으면 어쩌지?

         ```js
         export default function App() {
           return (
                 // 부모 Flex 먼저 만들기
             <View style={{ flex: 1, flexDirection: "row"}}>
               <View style={{ flex: 1, backgroundColor:'tomato' }}></View>
               <View style={{ flex: 2, backgroundColor:'teal' }}></View>
               <View style={{ flex: 1, backgroundColor:'orange' }}></View>
             </View>
           );
         }
         ```

         - 위 코드 처럼 

           > flexDirection: "row"

           해당 스타일을 View에 추가하면 해당 view는 row로 flex가 된다.

    2. 화면을 넘어가는 overflow가 발생해도 스크롤하여 볼 수 없다!

       - 웹사이트가 아니기 때문

    3. 어플을 만들 때, 핸드폰은 너무 다양한 해상도가 있기 때문에, 콘텐츠들의 사이즈들을 width, height를 이용하여  사이즈를 조절하면 기기마다 레이아웃이 달라져 문제가 생길 수 도 있다.

       - 그럼 어떻게 해요?

         - Flex size를 주어야한다!

           ```js
               <View style={{ flex: 1}}>
                 <View style={{ flex: 1, backgroundColor:'tomato' }}></View>
                 <View style={{ flex: 1, backgroundColor:'teal' }}></View>
                 <View style={{ flex: 1, backgroundColor:'orange' }}></View>
               </View>
           ```

           - 위 코드와 같이 flex를 1로 통일해서 주면 알아서 비율에 맞추어 잘 나누어 갖는다.
           - 즉, 다른 Flex를 이용하여 비율로 나눠 줄수 있다.

         - 그런데 위의 코드를 보면 먼저 View하나를 Flex1을 주고 그 안에서 다시 Flex를 나눠갖는다.

         - 바로 Flex를 이용할 때는 부모가 필요하다!

           - 나눠가질 범위가 누구에게서 오는지를 알지 못하기 때문!



## 날씨 앱 만들기

- Location Expo Package를 이용하여 위치를 가져올것이다.
- 그 다음 해당 되는 위치의 16일 간의 날씨 정보를 얻기 위해 날씨 API를 이용할 것이다. openweatherapi를 이용해서!

### Style

#### Part1_CSS 작성

- 우선 날씨 앱의 CSS를 작성해보자!

  ```js
  import { StatusBar } from 'expo-status-bar';
  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  
  export default function App() {
    return (
          // 부모 Flex 먼저 만들기
      <View style={styles.container}>
      	//  기본적으로 제공되는 statusbar의 색깔을 바꾸기위해 import하여 사용
        <StatusBar style='light'></StatusBar>
  	  // 구간을 나누기 위해서 View를 이용해 아래 Styles를 넣어 구간을 나누어줌
        <View style={styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
        <View style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "tomato",
    },
    city: {
      flex: 1.2,
      // backgroundColor: "blue",
      justifyContent: "center",
      alignItems: "center",
    },
    cityName: {
      fontSize: 68,
      fontWeight: "500",
    },
    weather: {
      flex: 3,
      // backgroundColor: "teal",
    },
    day: {
      flex: 1,
      // backgroundColor: "teal",
        // 정렬이 column 기준이라 이걸 사용하면 콘텐츠가 위 아래를 기준으로 가운데로 모임
      // justifyContent: 'center',
      alignItems: "center",
    },
    temp: {
      fontSize: 178,
  
    },
    description: {
      fontSize: 60,
    },
  
  })
  ```

  - 여기까지 작성했으면, 다음에는 스크롤 기능을 넣어줄 것이다.

#### Part2_스크롤 넣기

- react-native의 ScrollView를 이용하면 스크롤 시킬 수 있다.

  ```js
  import { ScrollView, StyleSheet, Text, View, } from 'react-native';
  
  export default function App() {
    return (
          // 부모 Flex 먼저 만들기
      <View style={styles.container}>
        <StatusBar style='light'></StatusBar>
        <View style={styles.city}>
          <Text style={styles.cityName}>Seoul</Text>
        </View>
  	  // 여기 부분 이렇게 하면 ScrollView안에 있는 모든 태그들을 스크롤 하며 볼 수 있다.
        <ScrollView style={styles.weather}>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </ScrollView>
      </View>
    );
  ```

  - 그런데 이렇게 했더니 위아래로 스크롤이 된다. 가로로 스크롤 하고 싶으면 어떻게할까?

    - 해당 API에서 props를 찾아보자!

    - horizontal을 props로 준다면 가로로 스크롤이 가능하다!

      ```js
            <ScrollView horizontal style={styles.weather}>
      ```

- 그런데 다시 weather부분에 색깔을 주었다니 아까 flex를 3줬었는데 해당 크기만큼 비율을 차지하지 않고있는 현상이 발생한다.

  - 만약 ScrollView의 Style을 만들고 싶다면, Style prop을 쓰면 안된다. 대신에 Container style을 사용해야 한다.

    ```js
    <ScrollView horizontal contentContainerStyle={styles.weather}>
    ```

  - 그런데 contentContainerView를 사용하면, 스크롤이 되지 않는 현상이 발생한다.

    - 왜냐하면, ScrollView에는 Flex를 줄 필요가 없기 때문이다. ScrollView는 스크린보다 더 크기가 커서 나가야하기 때문에 Flex를 주면 안된다. weather 스타일에서 flex를 삭제하면 스크롤이 잘된다.

      ```js
      weather: {
          backgroundColor: "teal",
        },
      ```

- 위의 문제를 해결하고보니 day 스타일의 flex도 적용되지 않는것이 확인됬다. 따라서, day의 flex도 지워줘보겠다.

  - 작성한 태그들이 내가 원한것 처럼 자리를 잘 차지했는지 확인하려면 M키를 눌러 메뉴를 열고, element inspector를 사용하면 된다.

- 이제 화면에 1개의 날짜만 보이고, 스크롤 해야 다음 날짜가 보이게 수정할 차례다.

- 하나의 day가 1개의 날짜만 보이게 해주어야 한다!

  우선, 한 스크린에 한 날짜만 보여주려면 해당 핸드폰의 해상도가 어떻게 되는지 알아야한다! 왜냐하면 모든 핸드폰의 해상도가 가지각각이기 때문! 이럴때 **Dimensions API를 사용하면 된다.**

  ```js
  import { Dimensions, ScrollView, StyleSheet, Text, View, } from 'react-native';
  
  // width: SCREEN_WIDTH 처럼 선언하면 SCREEN_WIdTH로 해당 값을 불러올 수 있다 ES6의 문법이라는데 알아만 두자
  const {height, width: SCREEN_WIDTH} = Dimensions.get("window");
  ```

  - 이때 위의 변수는 App() 이전에 선언해야한다!

  ```js
  ...
    day: {
      width: SCREEN_WIDTH,
      alignItems: "center",
    },
  ...
  ```

  - 위와 같이 스크린의 너비를 이용하면 어떤 해상도에서도 가운데로 볼 수 있다!

- 이제 스크롤을 해보면 음.. 그냥 가다가 멈춰버리고 넘겼을 때 다음 페이지가 화면에 고정되지 않는다. 이 부자연스러움을 고쳐보자

  - 우선 ScrollView의 props를 사용해보자 바로

    > pagingEnabled 이다.

  - 위의 props를 ScrollView에 props로 넣으면 자연스럽게 스크롤 된다.

    ```js
    <ScrollView horizontal pagingEnabled contentContainerStyle={styles.weather}>
    ```

-  스크롤을 계속하다보니 최하단에 스크롤의 현황을 보여주는 바가 나온다. 이걸 필요에따라 없애야할 수 있으니 없애보자!

  - 이것 또한 props를 이용한다.

    > showHorizontalScrollIndicator 이다.

  - 이것도 props에 넣으면 된다.

    ```js
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.weather}>
    ```

  - indicator의 색깔을 바꾸기 위해 props를 공식문서의 props를 써보면 이상하게 android 환경에서 작동이 안하는 걸 볼수 있다. 이렇듯 모든 공식문서의 props가 모든 운영체제에서 작동되는 건 아니다 조심하자!

