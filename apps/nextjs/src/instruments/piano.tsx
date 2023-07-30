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
  const [sounds, setSounds] = useState({});
  const playSound = async (key) => {
    if (!key.sound) return;
    console.log("Playing " + sounds[key.id]);

    if (typeof sounds[key.id] === "undefined") {
      const { sound } = await Audio.Sound.createAsync(key.sound);
      sound.playAsync();
      const newSounds = { ...sounds };
      newSounds[key.id] = sound;
      setSounds(newSounds);
      newSounds[key.id].playAsync();
    }
    sounds[key.id].playAsync();
  };

  return (
    <View>
      <View className="flex h-full flex-row justify-evenly">
        {keys.map((key, idx) => (
          <TouchableOpacity
            onPressIn={() => playSound(key)}
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

export default Piano;
