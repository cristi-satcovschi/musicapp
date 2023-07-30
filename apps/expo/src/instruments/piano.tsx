import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Audio } from "expo-av";

const keys = [
  {
    color: "white",
    name: "c",
    sound: require("../sounds/C3.mp3"),
  },
  { color: "black", name: "" },
  {
    color: "white",
    name: "d",
    sound: require("../sounds/D3.mp3"),
  },
  { color: "black", name: "" },
  {
    color: "white",
    name: "e",
    sound: require("../sounds/E3.mp3"),
  },
  {
    color: "white",
    name: "f",
    sound: require("../sounds/F3.mp3"),
  },
  { color: "black", name: "" },
  {
    color: "white",
    name: "g",
    sound: require("../sounds/G3.mp3"),
  },
  { color: "black", name: "" },
  {
    color: "white",
    name: "a",
    sound: require("../sounds/A3.mp3"),
  },
  { color: "black", name: "" },
  {
    color: "white",
    name: "b",
    sound: require("../sounds/B3.mp3"),
  },
];

let octaves = [];

for (let index = 0; index < 6; index++) {
  octaves = [...octaves, ...keys];
}

const Piano = () => {
  //   const [sounds, setSounds] = useState({});
  //   const playSound = async (key) => {
  //     if (!key.sound) return;
  //     console.log("Playing " + sounds[key.id]);

  //     if (typeof sounds[key.id] === "undefined") {
  //       const { sound } = await Audio.Sound.createAsync(key.sound);
  //       sound.playAsync();
  //       const newSounds = { ...sounds };
  //       newSounds[key.id] = sound;
  //       setSounds(newSounds);
  //       newSounds[key.id].playAsync();
  //     }
  //     sounds[key.id].playAsync();
  //   };
  const [test, setTest] = useState(0);

  const [measuredWidth, setMeasuredWidth] = useState(0);
  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }) => {
      setMeasuredWidth(Number(width.toFixed()));
      console.log("width", width);
    },
    [test],
  );

  /* --------------------- compute key margins and widths --------------------- */
  let whiteKeyWidth = (measuredWidth - 16) / 8;
  whiteKeyWidth = Number(whiteKeyWidth.toFixed());
  let miniWhiteKeyWidth = (whiteKeyWidth - 18) / 7;
  miniWhiteKeyWidth = Number(miniWhiteKeyWidth.toFixed());

  let blackKeyWidth = whiteKeyWidth / 2;
  blackKeyWidth = Number(blackKeyWidth.toFixed());
  let miniBlackKeyWidth = (blackKeyWidth - 18) / 7;
  miniBlackKeyWidth = Number(miniBlackKeyWidth.toFixed());

  let blackKeyMargin = -(blackKeyWidth / 2);
  blackKeyMargin = Number(blackKeyMargin.toFixed());
  let miniBlackKeyMargin = (blackKeyMargin - 18) / 7;
  miniBlackKeyMargin = Number(miniBlackKeyMargin.toFixed());
  /* --------------------- /compute key margins and widths --------------------- */

  return (
    <View className="bg-slate-800 px-4 py-2">
      <View></View>
      <View className="flex h-1/3 flex-row items-end p-4">
        <View className="relative flex flex-row">
          <View className="absolute h-full opacity-25"></View>
          <View className="bg-zinc-900 flex h-1/2 w-full flex-row overflow-hidden rounded">
            {octaves.map((key, idx) => (
              <View
                key={idx}
                className={`h-full flex-grow items-center justify-end border ${
                  key.color === "white"
                    ? "border-b-slate-200 bg-slate-50 rounded-sm"
                    : "border-b-slate-800 bg-slate-950 rounded-sm-b h-3/5"
                }`}
                style={{
                  marginHorizontal: key.color === "white" ? 1 / 7 : 0,
                  elevation: key.color === "black" ? 1 : 0,
                  zIndex: key.color === "black" ? 1 : 0,
                  width:
                    key.color === "white"
                      ? miniWhiteKeyWidth
                      : miniBlackKeyWidth,
                  marginRight: key.color === "black" ? miniBlackKeyMargin : 0,
                  marginLeft: key.color === "black" ? miniBlackKeyMargin : 0,
                }}
              ></View>
            ))}
          </View>
        </View>
      </View>
      <View className="border-stone-600 h-2/3 rounded-xl border-b">
        <View className="border-zinc-900 overflow-hidden rounded-xl border-8">
          <ScrollView
            className="bg-zinc-900 h-full"
            horizontal
            showsHorizontalScrollIndicator={false}
            onLayout={onLayout}
          >
            <View className="flex h-full flex-row">
              {typeof measuredWidth === "number" &&
                octaves.map((key, idx) => (
                  <TouchableHighlight
                    // onPressIn={() => playSound(key)}
                    // onPressIn={() => setTest(test + 1)}
                    className="flex h-full flex-grow"
                    key={idx}
                    style={{
                      marginHorizontal: key.color === "white" ? 1 : 0,
                      elevation: key.color === "black" ? 1 : 0,
                      zIndex: key.color === "black" ? 1 : 0,
                    }}
                  >
                    <View
                      className={`border-zinc-950 h-full items-center justify-end border-b-8 pb-4 ${
                        key.color === "white"
                          ? "border-b-slate-200 bg-slate-50 rounded"
                          : "border-b-slate-800 bg-slate-950 h-3/5 rounded-b"
                      }`}
                      style={{
                        width:
                          key.color === "white" ? whiteKeyWidth : blackKeyWidth,
                        marginRight: key.color === "black" ? blackKeyMargin : 0,
                        marginLeft: key.color === "black" ? blackKeyMargin : 0,
                      }}
                    >
                      {/* <Text className="text-2xl">{key.name}</Text> */}
                    </View>
                  </TouchableHighlight>
                ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Piano;
