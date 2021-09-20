import React, { useContext, useEffect } from "react";
import {
  Container,
  RestauranteImage,
  RestauranteName,
  RestauranteNameContainer,
} from "./style";
import { useNavigation } from "@react-navigation/native";
import iconRestaurante from "../../assets/template_restaurant.png";
import { RestauranteContext } from "../Contexts/RestauranteContext";

interface Props {
  infos: any;
  image?: any;
}

export function CardRestauranteDestaque({ infos, image }: Props) {
  const navigation = useNavigation();
  const { setInfos } = useContext(RestauranteContext);

  useEffect(() => {
    setInfos(infos);
  }, []);
  return (
    <Container onPress={() => navigation.navigate("DashboardClient")}>
      <RestauranteImage source={image ?? iconRestaurante} />

      <RestauranteNameContainer>
        <RestauranteName>{infos.name}</RestauranteName>
      </RestauranteNameContainer>
    </Container>
  );
}
