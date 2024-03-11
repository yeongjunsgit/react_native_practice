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



#### part3_위치 정보 받기

-  expo에서 위치 정보를 받기 위해서는 우선 expo-location을 받을 필요가 있다.

  ```bash
  expo install expo-location
  ```

  - 위 명령어를 통해 다운받으면, 해당 API를 통해 어떤 기능을 사용할 수 있는지는 expo 공식문서의 location 부분에서 확인할 수 있다.

- 이제 이 위치정보 받기를 사용하려면 react를 이용하여야 한다.

  1. expo-location import

     ```js
     import * as Location from "expo-location"
     ```

  2. react와 useState, useEffect import

     ```js
     import React, { useState, useEffect } from 'react';
     ```

  3. App()에서 return 하기전에 상태, 변수들을 선언

     ```react
     export default function App() {
       // 도시, 위치, 위치 정보 허용을 확인하기 위한 상태 선언
       const [city, setCity] = useState("loading");
       const [location, setLocation] = useState();
       const [ok, setOk] = useState(true);
       // expo-location의 requestForegroundPermissionsAsync()를 이용하여 사용자가 위치정보 제공을 수락했는지를 확인한다.
       const ask = async() => {
         // requestForegroundPermissionAsync()를 사용하면 다양한 정보가 나오는데, 그중 granted가 이용자가 승인했는지 여부를 나타낸다.
         const {granted} = await Location.requestForegroundPermissionsAsync();
         // granted가 false라면 승인하지 않은 것으로, ok의 상태값을 false로 바꾼다.
         if (!granted){
           setOk(false);
         }
         // getCurrentPositionAsync()를 통해 얻은 값 중 latitude, longitude가 필요하여 2개만 가져온다.
         // 여기서 accuracy는 정확도를 뜻하며 1~6까지 설정이 가능하다.
         const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5})
         // reverseGeocodeAsync()를 이용하여 현재 위치를 알 수 있다. 인자로는 위에서 얻은 {latitude, longitude}가 들어가며, useGoogleMaps를 boolean 값으로 인자로 넣어 구글맵 사용여부를 판단한다
         const location = await Location.reverseGeocodeAsync(
           {latitude, longitude},
           {useGoogleMaps: false}
           )
         // 위 요청의 결과값에서 city 값을 꺼내 해당 도시를 상태로 설정한다.
         setCity(location[0].city)
       }
       // useEffect는 렌더링 될 때 실행되는 것들을 나타내며, 이는 Vue3의 onMonted와 비슷한 기능을 가진다.
       useEffect(() => {
         ask();
       }, [])
       return (
     ```

     - 각 API에서 나오는 데이터 셋 목록

       1. requestForegroundPermissionsAsync()

          > {"android": {"accuracy": "fine", "scope": "fine"}, "canAskAgain": true, "expires": "never", "granted": true, "status": "granted"}

       2. getCurrentPositionAsync({accuracy:5})

          > {"coords": {"accuracy": 5, "altitude": 5, "altitudeAccuracy": 0.5, "heading": 0, "latitude": 37.4219983, "longitude": -122.084, "speed": 0.0030206667724996805}, "mocked": false, "timestamp": 1710118841611}

       3. reverseGeocodeAsync({latitude, longitude},{useGoogleMaps: false})

          > [{"city": "Mountain View", "country": "United States", "district": null, "formattedAddress": "1650 Amphitheatre Pkwy, Mountain View, CA 94043, USA", "isoCountryCode": "US", "name": "1650", "postalCode": "94043", "region": "California", "street": "Amphitheatre Parkway", "streetNumber": "1650", "subregion": "Santa Clara County", "timezone": null}]

  4. 이와 같이 얻은 city값을 이용하여 화면에 출력

     ```react
             <Text style={styles.cityName}>{city}</Text>
     ```



#### part4_날씨 정보 받기

- 날씨 정보를 받기전에 위 코드에서 필요없는것들을 정리하고 시작한다.

- 강의에서 사용하고자 하는 API가 유료로 변환됨에 따라 그냥 flow만 확인하고자 한다.

  ```react
  import { StatusBar } from 'expo-status-bar';
  import React, { useState, useEffect } from 'react';
  import { Dimensions, ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
  import * as Location from "expo-location"
  
  const {height, width: SCREEN_WIDTH} = Dimensions.get("window");
  
  // API_KEY 가져오기
  const API_KEY = "hihihi"
  
  export default function App() {
    const [city, setCity] = useState("loading");
    // 날짜 상태를 생성, 기본값은 빈 배열
    const [days, setDays] = useState([]);
    const [ok, setOk] = useState(true);
    // 기존 ask를 getweather로 이름 변경
    const getWeather = async() => {
      const {granted} = await Location.requestForegroundPermissionsAsync();
      if (!granted){
        setOk(false);
      }
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5})
      const location = await Location.reverseGeocodeAsync(
        {latitude, longitude},
        {useGoogleMaps: false}
        )
      setCity(location[0].city)
      // response 변수에 제공하는 API를 통해 날씨 정보를 저장
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`)
      // 해당 데이터를 json 형식으로 저장
      const json = await response.json()
      console.log(json.days)
    }
    useEffect(() => {
      getWeather();
    }, [])
    return (
          // 부모 Flex 먼저 만들기
      <View style={styles.container}>
        <StatusBar style='light'></StatusBar>
        <View style={styles.city}>
          <Text style={styles.cityName}>{city}</Text>
        </View>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.weather}>
          // 기존에 있던 값들을 지우고 받아온 데이터로 대체
          // 만약 days에 정보가 들어오지 않았다면?
          {days.length === 0 ? (
            <View style={styles.day}>
              // ActivityIndicator를 이용하여 로딩 아이콘을 생성
              <ActivityIndicator color='white' size='large'
              style={{marginTop: 10}}></ActivityIndicator>
            </View>
          ) :
            // 데이터가 들어왔다면? 해당 데이터를 순회하여 각 days의 day의 데이터들을 출력
            (days.map((day, index) =>
            <View key={index} style={styles.day}>
              // parseFloat(값).tofixed(1) 를 이용하면, 해당 값을 소수점 1자리까지 출력가능
              <Text style={styles.temp}>{ parseFloat(day.main.temp).toFixed(1) }</Text>
              <Text style={styles.descripstion}>{ day.weather[0].main }</Text>
              <Text style={styles.tinyText}>{ day.weather[0].description }</Text>
            </View>
            )
          )}
        </ScrollView>
      </View>
    );
  }
  ```

  

  1. days라는 상태를 선언하자 들어오는 데이터가 배열이므로 기본 값은 빈배열로 설정

  2. APIKEY를 받아 fetch를 통하여 데이터를 받아오자

  3. 해당 데이터를 json 형식으로 저장한 후, 데이터가 있을 때, 없을 때를 if문으로 판단하여 없을 때는 로딩 표시를 나타내기 위해

     ActivityIndicator를 출력하고, 데이터가 있으면 map을 통해 모든 데이터를 출력



#### part_5 icon 넣기

- expo-init을 통해 프로젝트를 생성했다면, icon이 있는 라이브러리를 호출 가능하다

  ```react
  import { Ionicons } from '@expo/vector-icons'
  ```

- 다양한 icons들을 보려면 https://icons.expo.fyi 로 들어가자!

- 내가 넣으려는 위치에 아래와 같이 작성하자!

```react
// 필요에따라 추가view안에 감싸서 icon을 사용하자! 
<View style={{
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
  }}>
      <Text style={styles.temp}>{ parseFloat(day.main.temp).toFixed(1) }</Text>
      // 이 부분의 코드 작성 아이콘을 호출할 때, 해당 아이콘의 이름을 호출해야하는데, 데이터에서 주어지는 날씨에 따라 
      // 맞추어 쓰기 위해 아래처럼 icons라는 객체를 만들어서 key,value값으로 데이터에 맞는 아이콘 이름을 적어 이용하자!
      <Fontisto name={icons[day.weather[0].main]} size={68} color="white"/> 
</View>

// icons
const icons = {
  "Clouds": "cloudy",
  "Clear": "day-sunny",
  "Atmos": "cloudy_gust",
  "Snow": "snow",
  "Rain": "rain",
  "Thunderstorm": "lighting",

}
```

##### 추가 꿀팁

- 기존에 있는 style을 사용하고 있는데 거기에 style을 더 얹고 싶을 때는 다음과 같이 사용하면 된다.

  ```react
  <View style={{...styles.body, alignItems: "center", fontSize: "500"}}></View>
  ```

  - style 선언시 중괄호로 두번 감싸고, styles.body같은 기존에 사용하던 style앞에 ...을 붙이고 그 이후에 계속해서 추가해주면 된다!





## Todo_List 만들기

- 들어가기 전에 react Native는 웹페이지가 아니라서 input과 form 같은 것들이 따로 없다.

  그래서 react Native 에선 해당 기능을 어떻게 구현하는지 알아보는 시간이 필요하다!

### 1. Touchable

- 강의에서 제공하는 디자인과 비슷하게 구현하기 위해 기본 코드를 작성했다

  ```js
  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, View, TouchableOpacity, 
    TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native';
  import {theme} from './colors';
  
  export default function App() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          // 버튼 구현을 위해 TouchableOpacity를 사용하자!
          <TouchableOpacity >
            <Text style={styles.btnText}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          underlayColor="#DDDDDD"
          activeOpacity={0}
          onPress={() => console.log("pressed")}>
            <Text style={styles.btnText}>Travel</Text>
          </TouchableOpacity>
        </View>
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
      color: "white",
      fontSize: 44,
      fontWeight: "600",
    }
  });
  
  ```

  - import한 곳을 보면, 

    > TouchableOpacity,  TouchableHighlight, TouchableWithoutFeedback, Pressable 

    들이 import 된것을 볼 수 있다. 이건 바로 버튼을 구현할 때 사용되는 API이다.

    1. TouchableOpacity
       - 가장 기본적인 클릭 방식으로 눌렀을때 해당 컨텐츠에 영향을 준다.
    2. TouchableHighlight
       - 클릭하면 배경의 색깔이 같이 바뀌는 방식
    3. TouchableWithoutFeedback
       - 클릭한 여부만 확인하고 다른 어떤것도 바뀌지않는 방식?
    4. Pressable
       - 가장 최근에 만들어진 버튼 방식으로 다양한 기능을 지원한다. 오래누르기, 주변 눌러도 인식하기 등등
       - 당장은 보편화되어있지 않는 듯하지만 강의 시점을 생각하면 이제는 많이 쓰일듯?
    5. 공통부분
       - 위의 4가지 방법들을 props를 요구하는 것이 꽤나 있어서 공식문서에서 필요하거나 쓸수 있는 props를 알아 두자!

  - 강의에선 1번을 쓸것이다.



### 2. Textinput

#### 1. 상태를 이용해 선택버튼 표기하기

- 위에서 만든 버튼이 선택 되었을 때 반대 버튼은 회색처리 되게 만들어주자

  1. 우선 상태를 선언하자!

     ```react
       const [working, setWorking] = useState(true);
       const travel = () => setWorking(false)
       const work = () => setWorking(true)
     ```

     - 처음화면엔 work가 선택되어 있을 것이라 기본값을 true로 선언

       후에 버튼을 눌렀을 때 상태를 변경하기 위해서 각 버튼을 눌렀을때 실행될 함수을 선언

  2. TouchableOpacity에 위에서 선언한 함수를 클릭시 실행되게 함

     ```react
     <TouchableOpacity onPress={work}>
     ```

  3. 현재 working 의 상태값에 따라 버튼의 색깔을 변하게 함

     ```react
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
     ```

#### 2. TextInput

- 웹페이지와 다르게 react_native는 input, textarea가 없다.

- 위와 같은 모든 input은 TextInput을 통해 입력을 받아야한다.

  ```react
    <View>
      <TextInput
      // input의 값이 바뀔 때, 그걸 감지하는 역할을 하는것이 onChangeText 이다.
      onChangeText={onChangeText}
      // keyboard의 타입을 바꿀 수 있다. email, 숫자 등 다양한 종류의 키보드가 있으며, 공식 문서에서 찾아볼 수 있다.
      keyboardType='web-search'
      // 해당 API는 키보드의 완료 버튼이 어떻게 나타날지를 정하는 API로 이것 또한 공식 문서에서 찾아볼 수 있다.
      returnKeyType='send'
      // web에서 이용하는 placeholder와 똑같다. 단 props를 이용하여 다양한 기능을 추가할 수가 있다.
      placeholder={working ? "Add a To do" : "Where do you want to go?"} style={styles.input}></TextInput>
    </View>
  ```

  ```react
   const onChangeText = (payload) => setText(payload);
  // 위의 onChangeText에서 불러온 함수는 위와 같으며 이벤트가 발생할때 생기는 payload를 인자로 하여 해당 값을 상태 값으로 바꾼다.
  ```

  - 여기서 쓴 props 들보다 더 많은 props를 지원하므로 꼭 공식문서에서 찾아보고 사용하자!



#### 3. Todo 만들기

- todo를 만드려면 이용자가 원하는 것을 다 적은 후에 완료버튼을 눌러야 한다. 이것은 web에서는 submit 기능이 었는데, react_native에서도 이것이 가능하다

  ```react
        <View>
          <TextInput
          // submit가 발생했을 때, 인자로 주어진 것이 실행된다.
          onSubmitEditing={addTodo}
          onChangeText={onChangeText}
          keyboardType='web-search'
          returnKeyType='done'
          placeholder={working ? "Add a To do" : "Where do you want to go?"} style={styles.input}></TextInput>
        </View>
  ```

  ```react
  // 처음 빈 객체로 toDos를 상태로선언한다.
  const [toDos, setToDos] = useState({});
  
  // submit가 발생했을 때, 호출되는 함수인 addTodo
  const addTodo = () => {
      // 만약 사용자가 아무것도 입력하지 않고, submit 시켰다면 탈출
      if(text === ""){
        return
      }
      // 저장하기
      // 상태가 object이기 때문에 그냥 변환할 수는 없다. 따라서 새로운 객체로 만들어서 해당 객체를 인자로 상태를 변경해야 하는데, 아래와 같은 문법을 사용하면 이전에 복사하여 붙이는 방식이 아니어도 합칠수 가 있다.
      const newTodos = Object.assign({}, toDos, {[Date.now()]: {text, work: working},
    });
      // 합친 값을 현재 toDos로 전환
      setToDos(newTodos);
      // 현재 Text 상태 값을 초기화
      setText("");
    }
  ```

  - 위의 문법을 더 파헤쳐보자!

    ```js
    const newTodos = Object.assign({}, toDos, {[Date.now()]: {text, work: working},
      });
    ```

    1.Object.assign()?

    - 이 코드는 JS에서 객체를 병합할 때 사용하는 메서드이다.
    - 첫번째 인자로 전달된 대상 객체에 다른 객체들의 속성을 복사해주고, 두번째 인수 부터는 복사할 객체들이 된다.

    2. 첫번째 인자 {}

       - 첫번째 인자가 {}로 들어갔다는 것은, 새로운 객체를 생성하겠다는 뜻이다.

    3. 두번째 인자 toDos,

       - toDos는 이미 존재하는 객체(상태값) 이고 해당 값을 복사한다.

    4. 세번째 인자 {[Date.now()]: {text, work: working},}

       - 이 문법 또한 ES6 단축문법으로 작성되었으며

         - 현재 input에 입력한 값을 객체로 가지고는 text, work를 키값으로 하여 완료 여부를 나타내는 working을 가진 객체를 value값으로 하여 현재 시간을 나타내는 값을 key값으로 해서 하나의 객체로 만든다

           (객체안에 객체 안에 객체 2개)

  - 이와 같이 기존 객체와 이번에 추가되는 객체를 합쳐주는 문법이었던 것이다.



#### 4. Todos Paint

- 시작할 때, newTodos를 기존에 변수에 복사하여 추가하는 방식을 가르쳐주었다. 이것도 가능은 한듯

- 그렇다면 만들어진 Todos는 객체인데 어떻게 순회하여 출력할까?

- 바로 Object.keys를 이용하자

  ```js
  objects.keys(객체)
  ```

  를 사용하면 키 값이 배열로 반환된다.

  이것을 map으로 순회해서 해당 키값으로 다시 객체에 대해 조회하면 될 것이다.

  ```js 
  object.keys(객체).map(key => 객체[key])
  ```

  - 이렇게 하면 순회할 수 있다!

- 위의 방법을 현재 코드에 적용해보자

  ```js
        <View>
          <TextInput
          onSubmitEditing={addTodo}
          onChangeText={onChangeText}
          keyboardType='web-search'
          returnKeyType='done'
          placeholder={working ? "Add a To do" : "Where do you want to go?"} style={styles.input}></TextInput>
        </View>
  	// 여기서 부터 시작!
  	// Todo 리스트는 scroll 될 수 있게 ScrollView로 작성
        <ScrollView>{
          // 아까 적었던 방식으로 객체인 toDos를 keys로 key값을 배열로 받은 후, 해당 배열을 map으로 순회해 key값으로 각각 나눈후 해당 값을 key값으로 toDos에서 조회하여 해당 key의 value값을 호출하여 출력함
          Object.keys(toDos).map(key => 
          <View style={styles.toDo} key={key}>
            <Text style={styles.toDoText}>{toDos[key].text}</Text>
          </View>)
        }</ScrollView>
      </View>
    );
  ```

  ```react
  // 스타일을 추가하자!
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
  ```



#### 5. Persist

- 위에서 작성한 로직을 더 단단하게 해주자

  - Work에서 작성한 Todo는 Work에서만, Travel에서 작성한 Todo는 Travel에서만 나타나게 해야한다.

  - 우선 Todo를 저장하는 로직을 확인해보자!
    ```js
    const addTodo = () => {
        if(text === ""){
          return
        }
        // 저장하기
        // 이 부분에서 기존엔 {text, work: working} 이었느나 현재 상태인 working을 todos에 저장한다.
        const newTodos = Object.assign({}, toDos, {[Date.now()]: {text, working},
      });
    ```

  - 이제 ScrollView에서 Todos를 출력할 때, 현재 working과 todos의 working이 같은 경우에만 출력하기로 한다. 

    ```react
          <ScrollView>{
            Object.keys(toDos).map(key => (
              // 삼항 연산자를 이용하여 working의 값이 같을때는 출력, 아닐때는 null을 반환
              toDos[key].working === working ? (
                <View style={styles.toDo} key={key}>
                  <Text style={styles.toDoText}>{toDos[key].text}</Text>
                </View> 
              ) : null
            ))}
          </ScrollView>
    ```



- 껐다 켰을 때도 Todo가 그대로 보이려면 이제 적었던 Todo를 저장해야할 필요가 있다. 이때 Local Storage를 사용해야한다.

- react_native에선 AsyncStorage를 사용해야한다.

  - 사용하려면 다음과 같은 절차를 거쳐야 한다.

    1. async-stroage를 설치한다.

       ```bash
       $ expo install @react-native-async-storage/async-storage
       ```

    2. async-storage를 import 한다.

       ```js
       import AsyncStorage from '@react-native-async-storage/async-storage';
       ```

- 이제 AsyncStorage에 저장하자!

  ```react
  // async await로 선언!
  // toSave를 인자로 하자 (이것의 정체는 바로 저장할 데이터를 인자로 받은 것)
  const saveTodos = async (toSave) => {
      // 저장할 때는 문자열로 저장해야만 하므로 JSON형식의 파일을 stringify를 이용해 문자열로 바꾸자!
      const s = JSON.stringify(toSave)
      // await를 통하여 AsyncStorage의 setItem을 이용해
      // 호출할 KEY 값과 JSON파일을 문자열로 바꾸어 저장!
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
    }
  
  // STORAGE_KET 변수는 뭐야?
  const STORAGE_KEY = "@toDos"
  ```

  - **우선 중요하게 참조해야 할것! AsyncStorage인 만큼 꼭 async await를 이용하여야만 한다!**
  - **두번째로 중요한 것! AsyncStorage는 localstorage와 똑같이 저장시 문자열로 저장한다 ** 

- 이제 다시 접속할때 (새로고침)시에 Todo가 출력될 수 있게 저장된 값을 불러오자!

  ```react
  // 
  const loadToDos = async() => {
      const s = await AsyncStorage.getItem(STORAGE_KEY)
      setToDos(JSON.parse(s));
    }
    useEffect(() => {
      loadToDos();
    }, [])
  ```

  - 집가서 마저 정리하라! 로드 부터 코드 정리해!



