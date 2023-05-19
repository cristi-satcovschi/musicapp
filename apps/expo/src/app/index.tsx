import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
  {
    color: "white",
    name: "c",
    sound: require("../sounds/C4.mp3"),
  },
];

const Piano = () => {
  const playSound = (name, sound) => {
    if (!sound) return;

    console.log("Playing " + name);
    Audio.Sound.createAsync(sound, { shouldPlay: true })
      .then((res) => {
        res.sound.setOnPlaybackStatusUpdate((status) => {
          if (!status.didJustFinish) return;

          // TODO: create global notification dispathcer to handle errores and show them in the UI
          res.sound.unloadAsync().catch((error) => {
            console.error(error);
          });
        });
      })
      .catch((error) => {});
  };

  return (
    <View>
      <View className="flex h-full flex-row justify-evenly">
        {keys.map((key, idx) => (
          <TouchableOpacity
            onPressIn={() => playSound(key.name, key.sound)}
            className="flex h-full flex-grow"
            key={idx}
          >
            <View
              className="h-full items-center justify-end border pb-4"
              style={{ backgroundColor: key.color }}
            >
              <Text className="text-2xl">{key.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Index = () => {
  return (
    <View>
      <Piano />
    </View>
  );
};

export default Index;
