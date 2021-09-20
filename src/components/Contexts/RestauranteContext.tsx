import React from "react";

import { createContext, useState } from "react";

export const RestauranteContext = createContext({} as any);

export function RestauranteContextProvider(props: any) {
  const [infos, setInfos] = useState();
  const [comandaAtual, setComandaAtual] = useState([]);
  const[idCliente, setIdCliente] = useState(0);

  return (
    <RestauranteContext.Provider value={{ infos, setInfos, idCliente,setIdCliente, comandaAtual,setComandaAtual }}>
      {props.children}
    </RestauranteContext.Provider>
  );
}
