import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, Text } from "@shoutem/ui";
//import Card from "../componentes/Card";
import { Table, Row, Rows } from "react-native-table-component";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Fecha", "Nombre", "Apellido", "Cita"],
      tableData: [
        ["1", "juan", "agredo", "Odontologo"],
        ["1", "felipe", "cabezas", "Urgencia"],
      ],
    };
  }

  render() {
    const state = this.state;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={[{ width: 50, height: 50 }]}>
            <Button>
              <Icon name="sidebar" />
            </Button>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <View style={styles.tablas}>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
          </View>
        </View>

        <View>
          <View style={[{ justifyContent: "flex-end" }]}>
            <Button styleName="secondary">
              <Text>Iniciar</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#e0ffff",
  },
  tablas: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
    flexDirection: "column",
    height: 100,
  },
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  text: {
    margin: 6,
  },
  vistap: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
});
