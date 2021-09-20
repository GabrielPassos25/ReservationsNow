import React from "react";

import Tables from "../../icon/tables";
import Cardapio from "../../icon/cardapio";
import Payment from "../../icon/payment";
import Command from "../../icon/command";
import Historico from "../../icon/historico";
import Logo from "../../icon/logo";
import TableIcon from "../../icon/tableicon";
import Garcom from "../../icon/waiter";
import Pix from "../../icon/pix";
import Logo_TopTab from "../../icon/logo_toptab";
import Plate from "../../icon/plate";
interface Props {
  name: string;
  width?: number;
  height?: number;
}

export function RenderSvg({ name, width, height }: Props) {
  switch (name) {
    case "cardapio":
      return <Cardapio width={width ?? 70} height={height ?? 70} />;
    case "mesa":
      return <Tables width={width ?? 70} height={height ?? 70} />;
    case "pagamento":
      return <Payment width={width ?? 70} height={height ?? 70} />;
    case "comanda":
      return <Command width={width ?? 70} height={height ?? 70} />;
    case "historico":
      return <Historico width={width ?? 70} height={height ?? 70} />;
    case "logo":
      return <Logo />;
    case "tableicon":
      return <TableIcon />;
    case "pix":
      return <Pix />;
    case "garcom":
      return <Garcom />;
    case "logo_toptab":
      return <Logo_TopTab />;
    case "plate":
      return <Plate width={width} height={height} />;
    default:
      return <></>;
  }
}
