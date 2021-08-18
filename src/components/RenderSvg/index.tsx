import React from 'react';

import Tables from '../../icon/tables';
import Cardapio from '../../icon/cardapio';
import Payment from '../../icon/payment';
import Command from '../../icon/command';
import Historico from '../../icon/historico';
import Logo from '../../icon/logo';
import TableIcon from '../../icon/tableicon';
import Garcom from '../../icon/waiter';
import Pix from '../../icon/pix';

interface Props  {
    name: string;
}

export function RenderSvg({name}: Props) {
    switch (name){
        case 'cardapio':
            return <Cardapio />;
        case 'mesa':
            return <Tables />;
        case 'pagamento':
            return <Payment />;
        case 'comanda':
            return <Command />;
        case 'historico':
            return <Historico />;
        case 'logo':
            return <Logo/>
        case 'tableicon':
            return <TableIcon/>;
        case 'pix':
            return <Pix/>;
        case 'garcom':
            return <Garcom/>;
        default:
            return <></>;
    }
}