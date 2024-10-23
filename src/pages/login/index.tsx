import { MaterialIcons, Octicons } from "@expo/vector-icons";
import React, { useState } from "react";

import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Alert, Image, Text, View } from "react-native";
import Logo from "../../assets/logo.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { themas } from "../../global/themes";
import { style } from "./styles";

export default function Login() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);
      if (!email || !password) {
        return Alert.alert("Atenção", "Informe os campos obrigatórios!");
      }
      setTimeout(() => {
        if (email == "diego" && password == "12") {
          Alert.alert("Logado com sucesso");
          navigation.reset({ routes: [{ name: "BottomRoutes" }] });
        } else {
          Alert.alert("Email ou senha inválidos!");
        }
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Bem vindo de volta!</Text>
      </View>
      <View style={style.boxMid}>
        <Input
          title="ENDEREÇO E-MAIL"
          IconRigth={MaterialIcons}
          iconRightName="email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          title="SENHA"
          IconRigth={Octicons}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
      </View>
      <View style={style.boxBottom}>
        <Button
          text="ENTRAR"
          loading={loading}
          onPress={() => {
            getLogin();
          }}
        />
      </View>
      <Text style={style.textBottom}>
        Não tem conta?{" "}
        <Text style={{ color: themas.colors.primary }}>Crie agora!</Text>{" "}
      </Text>
    </View>
  );
}
