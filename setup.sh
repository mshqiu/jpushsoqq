#!/bin/bash -l

npm install

rm ./node_modules/jcore-react-native/ios/RCTJCoreModule/*.a
rm ./node_modules/jpush-react-native/ios/RCTJPushModule/*.a

cp libjcore-noidfa-ios-2.3.6.a ./node_modules/jcore-react-native/ios/RCTJCoreModule/libjcore-noidfa-ios-2.3.6.a
cp libjpush-ios-3.3.6.a ./node_modules/jpush-react-native/ios/RCTJPushModule/libjpush-ios-3.3.6.a

cd ios

pod deintegrate
pod install