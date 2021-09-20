import React, { useContext, useState } from "react";
import {
  View,
  LayoutRectangle,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
import {
  Container,
  HeaderArea,
  HeaderTitle,
  ViewRow,
  SearchArea,
  HeaderSubTitle,
  StatusBarAndroid,
  PreviewAreaPratos,
  TitlePreview,
} from "./styles";

import { DynamicScrollView } from "../../components/DynamicScrollView";

import IconRelogio from "../../assets/logoRest.png";
import IconPrato from "../../assets/pratocomida.jpg";
import { ButtonMain } from "../../components/ButtonMain";

import { TopTabRestaurante } from "../../components/TopBarRestaurante";
import { PreviPrato } from "../../components/PreviaPrato";
import { RestauranteContext } from "../../components/Contexts/RestauranteContext";

interface Props {
  navigation: any;
}

export function DashboardClient({ navigation }: Props) {
  const { infos } = useContext(RestauranteContext);

  function find_dimensions(layout: LayoutRectangle) {
    const { height } = layout;
    setHeight(height);
    return height;
  }

  const [height, setHeight] = useState(0);
  const [previaPratosState, setPreviaPratosState] = useState([
    {
      photo: IconPrato,
      title: "Nome do prato",
      price: "RS40,40",
    },
    {
      photo: IconPrato,
      title: "Nome do prato",
      price: "RS40,40",
    },
    {
      photo: IconPrato,
      title: "Nome do prato",
      price: "RS40,40",
    },
  ]);

  return (
    <>
      <Container>
        <TopTabRestaurante logo={IconRelogio} />
        <ScrollView>
          {Platform.OS === "android" ? <StatusBarAndroid /> : <></>}
          <View
            onLayout={(event) => {
              find_dimensions(event.nativeEvent.layout);
            }}
          >
            <HeaderArea>
              <HeaderTitle>{infos.name}</HeaderTitle>
              <HeaderSubTitle>{infos.descricao}</HeaderSubTitle>
            </HeaderArea>
          </View>
          <SearchArea>
            <ViewRow>
              <ButtonMain
                title="Reservar mesa"
                name={"mesa"}
                screen="Reservas"
                infos={infos}
              />
              <ButtonMain
                title="Histórico de reservas"
                name={"historico"}
                screen="Histórico"
                infos={infos}
              />
            </ViewRow>
            <ViewRow>
              <ButtonMain
                title="Consultar cardápio"
                name={"cardapio"}
                screen="Cardápio"
                infos={infos}
              />
              <ButtonMain
                title="Consultar comanda"
                name={"comanda"}
                screen="Comanda"
                infos={infos}
              />
            </ViewRow>
          </SearchArea>
          {/* <PreviewAreaPratos>
            <TitlePreview>Prévia dos pratos</TitlePreview>

            <FlatList
              data={previaPratosState}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              renderItem={({ item }) => <PreviPrato data={item} />}
            />
          </PreviewAreaPratos> */}
        </ScrollView>
      </Container>
    </>
  );
}
