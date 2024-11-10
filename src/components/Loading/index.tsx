import React from "react";
import { ActivityIndicator, View } from "react-native";
import { style } from "./styles";
type Props = {
  loading: boolean;
};
export function Loading({ ...rest }: Props) {
  if (!rest.loading) return <></>;
  return (
    <View style={style.container}>
      <ActivityIndicator color={"white"} size={"large"} />
    </View>
  );
}
