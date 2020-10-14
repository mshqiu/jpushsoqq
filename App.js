/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import JPush from 'jpush-react-native';

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

  useEffect(()=>{
    console.log("JPush ", JPush)
    JPush.init();
    const connectListener = result => {
      console.log("connectListener:" + JSON.stringify(result))
    };
    JPush.addConnectEventListener(connectListener);
    //通知回调
    const  notificationListener = result => {
      console.log("notificationListener:" + JSON.stringify(result))
    };
    JPush.addNotificationListener(notificationListener);
    //本地通知回调
    const localNotificationListener = result => {
      console.log("localNotificationListener:" + JSON.stringify(result))
    };
    JPush.addLocalNotificationListener(localNotificationListener);
    //自定义消息回调
    const customMessageListener = result => {
      console.log("customMessageListener:" + JSON.stringify(result))
    };
    JPush.addCustomMessagegListener(customMessageListener);
    //tag alias事件回调
    const tagAliasListener = result => {
      console.log("tagAliasListener:" + JSON.stringify(result))
    };
    JPush.addTagAliasListener(tagAliasListener);
    //手机号码事件回调
    const mobileNumberListener = result => {
      console.log("mobileNumberListener:" + JSON.stringify(result))
    };
    JPush.addMobileNumberListener(mobileNumberListener);
    },[])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

          <View style={styles.body}>
          <Button title="setLoggerEnable"
                         onPress={() => JPush.setLoggerEnable(true)
                         }/>

           <Button title="getRegisterID"
                   onPress={() => JPush.getRegistrationID(result =>
                       console.log("registerID:" + JSON.stringify(result))
                   )}/>

           <Button title="addTags"
                   onPress={() => JPush.addTags({sequence: 1, tags: ["cui1", "cui2", "cui3"]})}/>
           <Button title="updateTags"
                   onPress={() => JPush.updateTags({sequence: 2, tags: ["cui4", "cui5", "cui6"]})}/>
           <Button title="deleteTag"
                   onPress={() => JPush.deleteTag({sequence: 3, tags: ["4", "5", "6"]})}/>
           <Button title="deleteTags"
                   onPress={() => JPush.deleteTags({sequence: 4})}/>
           <Button title="queryTag"
                   onPress={() => JPush.queryTag({sequence: 4, tag: "1"})}/>
           <Button title="queryTags"
                   onPress={() => JPush.queryTags({sequence: 5})}/>
           <Button title="setAlias"
                   onPress={() => JPush.setAlias({sequence: 6,alias:"cuitao"})}/>
           <Button title="deleteAlias"
                   onPress={() => JPush.deleteAlias({sequence: 7})}/>
           <Button title="queryAlias"
                   onPress={() => JPush.queryAlias({sequence: 8})}/>
           <Button title="setMobileNumber"
                   onPress={() => JPush.setMobileNumber({mobileNumber: "13888888888"})}/>
           <Button title="addLocalNotification"
                   onPress={() => JPush.addLocalNotification({
                     messageID: "37", //发送本地通知必须存在：messageID
                     title: "标题啦啦",
                     content: "内容133",
                     extras: {"key123": "value123"}  //附加内容
                   })}/>

           {/*<Button title="setBadge"*/}
           {/*        onPress={() => JPush.setBadge({"badge":1,"appBadge":1})}/>*/}
           {/*<Button title="initCrashHandler"*/}
           {/*        onPress={() => JPush.initCrashHandler()}/>*/}

           <Button title="removeLocalNotification"
                   onPress={() => JPush.removeLocalNotification({messageID: '37'})}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
