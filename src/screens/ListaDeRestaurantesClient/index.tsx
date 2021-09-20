import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import { RFValue } from "react-native-responsive-fontsize";
import { CardRestaurante } from '../../components/CardRestaurante';
import { CardRestauranteDestaque } from '../../components/CardRestauranteDestaque';
import { TopTab } from '../../components/TopBar';
import { api } from "../../utils/api";
import { restaurantes } from './mocado';
import { Container, DestaqueText, HeaderView, ListText, ListView, SearchContainer, Separator, StatusBarAndroid} from './styles';
import theme from '../../global/styles/theme';

interface IQueryResponse {
    message: string,
    status: number,
    data?: any
}

export function ListaDeRestaurantesClient() {
    const navigation = useNavigation(); 
    const [search, setSearch] = useState<string>('');
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData(){
            const aux = (await api.get('/restaurantes')).data.response.data.map((item: any) => {item.name = item.nome; return item});
            setData(aux);
        }
        getData();
    }, [true]);
    return (
        <> 
            <StatusBarAndroid />
            <TopTab />
            <Container> 
                <ListView>
                    <FlatList 
                        data={data} 
                        ItemSeparatorComponent={Separator}
                        ListHeaderComponent={
                            <HeaderView>
                                {/* <Searchbar 
                                    value={search} 
                                    placeholder="Pesquisar restaurante" 
                                    onChangeText={setSearch}    
                                    inputStyle={{fontFamily: theme.fonts.regular}}
                                    style={{backgroundColor: theme.colors.gray_light, borderRadius: 12, margin: 20}}
                                /> */}
                                <DestaqueText>Restaurantes em Destaque</DestaqueText>
                                <FlatList 
                                    data={data}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item:any) => item.id.toString()}
                                    contentContainerStyle={{paddingHorizontal: 20}}
                                    renderItem={({item}:any) => 
                                    <CardRestauranteDestaque
                                        key={`${item.id.toString()}`}
                                        infos={item}
                                    />
                                }
                                />
            
                                <ListText>Lista de Restaurantes</ListText>
                                <Separator />
                            </HeaderView>
                        }
                        showsVerticalScrollIndicator={false} 
                        keyExtractor={(item:any) => String(item.id)}
                        contentContainerStyle={{
                            paddingBottom: RFValue(80),
                          }}
                        renderItem={({item}:any)=> 
                            <CardRestaurante 
                                key={`${item.id.toString()}`} 
                                title={item.name} 
                                descricao={item.descricao} 
                                endereco={item.endereco} 
                                disabled={true}
                            />
                    }                   
                    />
                </ListView>
                
            </Container>
       
        </>
    );
}