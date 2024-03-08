# React-Native

0. 사전준비

   - 해당 강의에서는 안드로이드 스튜디오 등의 설정이 어려움으로 우선 Expo를 이용하기로 하였다.

     1. cmd에 

        ```bash
        $ npm install --global expo-cli
        ```

        를 입력하여 Expo를 다운받는다

        

     2. 핸드폰에 Expo 어플을 다운로드 받고 회원가입을 진행한다.

        

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





​	
