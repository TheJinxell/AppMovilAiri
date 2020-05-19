import React, { Component } from "react";
import { View } from "react-native";
import { Button, TextInput, Text } from "@shoutem/ui";
class MenuOculto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View>
          <Button styleName="secondary">
            <Icon name="user-profile" />
            <Text>Iniciar Sesion</Text>
          </Button>
        </View>
        <View>
          <Button styleName="secondary">
            <Icon name="receipt" />
            <Text>Historial</Text>
          </Button>
        </View>
        <View>
          <Button styleName="secondary">
            <Icon name="settings" />
            <Text>Configuracion</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default MenuOculto;
