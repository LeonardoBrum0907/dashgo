import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr:false,
})//faz com que o Chart seja carregado apenas pelo lado do browser

const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-03-11T00:00.000Z',
            '2021-03-12T00:00.000Z',
            '2021-03-13T00:00.000Z',
            '2021-03-14T00:00.000Z',
            '2021-03-15T00:00.000Z',
            '2021-03-16T00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'drak',
            opacityFrom: 0.9,
            opacityTo: 0.1,
        }
    }
};

const series = [
    {
        name: 'series1',
        data: [123, 31, 18, 145, 78, 28]
    }
]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />        

                {/* SimpleGrip é um componente do chakra que permite criar grids simples */}
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">{/*  flex="1" vai fazer com que a grid ocupe todo o espaço restante que o sidebar não ocupou | minChildWidth é um atributo que só existe no simpleGrid, que faz com que quando o iitem tem menos PX do que dito, quebre a linha colocando o item pra baixo*/}

                <Box
                    p={["5","8"]}
                    bg="gray.800"
                    borderRadius={8}
                    pb="4"
                >

                    <Text fontSize="lg" mb="4">Inscritos da semana</Text>

                    <Chart options={options} series={series} type="area" height={160} />
                </Box>
                <Box
                    p={["5","8"]}
                    bg="gray.800"
                    borderRadius={8}
                    pb="4"
                >

                    <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                    <Chart options={options} series={series} type="area" height={160} />
                </Box>
                </SimpleGrid>    
            </Flex>

        </Flex>
    )
}