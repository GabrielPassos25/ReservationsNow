import React from "react";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { CardHistorico } from "../../components/CardHistorico";

import { TopTab } from "../../components/TopBar";

import { pedidos } from "../HistoricoReservasCliente/mocado";

import { Container, DataText } from "./styles";

export function HistoricoReservasCliente() {
  return (
    <Container>
      <TopTab />
      <FlatList
        data={pedidos.todos}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          paddingBottom: RFValue(30),
          marginTop: RFValue(20),
        }}
        renderItem={({ item }) => (
          <CardHistorico
            key={item.id}
            title={item.name}
            id={item.id}
            data={item.data}
            details={item.detalhes}
            disabled={true}
          />
        )}
      />
    </Container>
  );
}
