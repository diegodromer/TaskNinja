import { forwardRef, Fragment, LegacyRef } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { themas } from "../../global/themes";
import { style } from "./styles";

import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";

type IconComponent =
  | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
  | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
  | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
  IconLeft?: IconComponent;
  IconRigth?: IconComponent;
  iconLeftName?: string;
  iconRightName?: string;
  title?: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
};

export const Input = forwardRef(
  (Props: Props, ref: LegacyRef<TextInput> | null) => {
    const {
      IconLeft,
      IconRigth,
      iconLeftName,
      iconRightName,
      title,
      onIconLeftPress,
      onIconRightPress,
      ...rest
    } = Props;

    const calculateSizeWidth = () => {
      if (IconLeft && IconRigth) {
        return "80%";
      } else if (IconLeft || IconRigth) {
        return "90%";
      } else {
        return "100%";
      }
    };

    const calculatePaddingLeft = () => {
      if (IconLeft && IconRigth) {
        return 0;
      } else if (IconLeft || IconRigth) {
        return 10;
      } else {
        return 20;
      }
    };

    return (
      <Fragment>
        {title && <Text style={style.titleInput}>{title}</Text>}
        <View style={[style.boxInput, { paddingLeft: calculatePaddingLeft() }]}>
          {IconLeft && iconLeftName && (
            <TouchableOpacity onPress={onIconLeftPress} style={style.button}>
              <IconLeft
                name={iconLeftName as any}
                size={20}
                color={themas.colors.gray}
                style={style.Icon}
              />
            </TouchableOpacity>
          )}
          <TextInput
            style={[style.input, { width: calculateSizeWidth() }]}
            {...rest}
          />
          {IconRigth && iconRightName && (
            <TouchableOpacity onPress={onIconRightPress} style={style.button}>
              <IconRigth
                name={iconRightName as any}
                size={20}
                color={themas.colors.gray}
                style={style.Icon}
              />
            </TouchableOpacity>
          )}
        </View>
      </Fragment>
    );
  }
);
