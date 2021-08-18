import React, {useState} from 'react';
import { Container, ContainerChart, TitleChart, StatusBarAndroid, ButtonsContainer} from './styles';
import { TopTab } from '../../components/TopBar';
import theme from '../../global/styles/theme';
import {LineChart, PieChart, BarChart} from 'react-native-chart-kit';

import { Dimensions, ScrollView } from 'react-native';
import { LastOrders } from '../../components/LastOrders';
import { TopButtons } from "../../components/TopButtons";
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

export function DashboardAdmin() {
    const dataPlate = [
        {
          name: "Prato 01",
          population: 800,
          color: theme.colors.purple_dark,
          legendFontColor: theme.colors.purple_dark,
          legendFontSize: 15
        },
        {
          name: "Prato 02",
          population: 200,
          color: theme.colors.purple,
          legendFontColor: theme.colors.purple,
          legendFontSize: 15
        },
        {
          name: "Prato 03",
          population: 900,
          color: theme.colors.pink,
          legendFontColor: theme.colors.pink,
          legendFontSize: 15
        },
        {
          name: "Prato 04",
          population: 100,
          color: theme.colors.gray,
          legendFontColor: theme.colors.gray,
          legendFontSize: 15
        },
        {
          name: "Prato 05",
          population: 500,
          color: theme.colors.gray_light,
          legendFontColor: theme.colors.gray_light,
          legendFontSize: 15
        }
      ];
    const dataFat = [
        {
            id: "01",
            icon: "card-bulleted-outline",
            value: 100.00,
            method: "Cartão de Crédito"
        },
        {
            id: "02",
            icon: "bank-outline",
            value: 200.00,
            method: "Pagamento por PIX"
        },
        {
            id: "03",
            icon: "card-bulleted-outline",
            value: 50.00,
            method: "Cartão de Crédito"
        },
        {
            id: "04",
            icon: "bank-outline",
            value: 125.00,
            method: "Pagamento por PIX"
        },
        {
            id: "05",
            icon: "card-bulleted-outline",
            value: 20.00,
            method: "Pagamento por PIX"
        },
        {
            id: "06",
            icon: "bank-outline",
            value: 500.00,
            method: "Cartão de Crédito"
        }
    ]
    const dataReserved = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set"],
        datasets: [
          {
            data: [30, 45, 2, 80, 99, 43, 40, 40, 30]
          }
        ]
      };
    const [menuSelected, setMenuSelected] = useState("DIA");

    function handleMenuSelected(menuOption: string) {
        setMenuSelected(menuOption);
    }
    return (
        <>
        <StatusBarAndroid />
        <TopTab name={"INÍCIO"}/>
        <Container>
            <ScrollView>
            <TitleChart>
                Visão Geral - Últimos meses 
            </TitleChart>
                <ContainerChart>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <LineChart
                            data={{
                            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set"],
                            datasets: [
                                {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                ]
                                }
                            ]
                            }}
                            width={Dimensions.get("window").width - 40}
                            height={180}
                            yAxisLabel="$"
                            yAxisSuffix="k"
                            yAxisInterval={1}
                            chartConfig={{
                            backgroundColor: theme.colors.white,
                            backgroundGradientFrom: theme.colors.primary_light1,
                            backgroundGradientTo: theme.colors.primary_light3,
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: theme.colors.pink
                            }
                            }}
                            bezier
                            style={{
                                borderRadius: 5,
                                marginLeft: 10,
                                marginRight: 10
                            }}
                        />
                        <BarChart
                            style={{
                                borderRadius: 5,
                                marginLeft: 10,
                                marginRight: 10,
                            }}
                            data={dataReserved}
                            width={Dimensions.get("window").width - 20}
                            height={180}
                            chartConfig={{
                                backgroundColor: theme.colors.primary,
                                backgroundGradientFrom: theme.colors.primary_light1,
                                backgroundGradientTo: theme.colors.primary_light3,
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                barPercentage: 0.5
                            }}

                        />         
                        <LinearGradient
                            // Button Linear Gradient
                            colors={[theme.colors.primary_light1, theme.colors.primary_light3]}
                            style={{width: Dimensions.get("window").width - 20, height: 180, backgroundColor: theme.colors.primary, borderRadius: 5, marginLeft: 10, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <PieChart
                        data={dataPlate}
                        width={Dimensions.get("window").width - 20}
                        height={RFValue(180)}
                        chartConfig={{
                            backgroundColor: theme.colors.primary,
                            backgroundGradientFrom: theme.colors.primary_light1,
                            backgroundGradientTo: theme.colors.primary_light3,
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: theme.colors.pink
                            }
                        }}
                        style={{
                            borderRadius: 5,
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                        accessor={"population"}
                        />
                        </LinearGradient>
                    </ScrollView>
                </ContainerChart>
            <TitleChart>
                Últimos Faturamentos 
            </TitleChart>
            <ButtonsContainer>
                <TopButtons
                title="DIA"
                active={"DIA" === menuSelected}
                onPress={() => handleMenuSelected("DIA")}
                />

                <TopButtons
                title="SEMANA"
                active={"SEMANA" === menuSelected}
                onPress={() => handleMenuSelected("SEMANA")}
                />

                <TopButtons
                title="MÊS"
                active={"MÊS" === menuSelected}
                onPress={() => handleMenuSelected("MÊS")}
                />
            </ButtonsContainer>
            {
                dataFat.map((item, index) => {
                    return(
                        <>
                            <LastOrders data={item} key={index}/>
                        </>
                    );
                })
            }
            </ScrollView>
        </Container>
        </>
    );
}