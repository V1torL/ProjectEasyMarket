import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"

import backgroundImg from "../../assets/illustration-page-dashboard.png"

import { Menu } from "../../components/Menu"
import { Content } from "../../components/Content"
import { ChartOne } from "../../components/Dashboard/ChartOne"
import { ChartTwo } from "../../components/DashBoard/ChartTwo"
import { ChartThree } from "../../components/Dashboard/ChartThree"
import { ChartFour } from "../../components/Dashboard/ChartFour"
import { NoData } from "../../components/NoData"

import { Container, DashBoard } from "./styles"

export function Dashboard() {
  const { user } = useAuth()
  const [data, setData] = useState([])
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/itens.json")
        const result = await response.json()
        setData(result.produtos)
      } catch (error) {
        console.error("Error fetching dashboard data", error)
      }
    }

    fetchData()
  }, [])

  const totalNota = data.reduce((acc, item) => acc + (item.valorTotalNota || 0), 0)

  const marketData = data.map((item) => ({
    name_market: item.local.nomeEstabelecimento,
    totalSpent: item.valorTotalNota
  }))

  // Cálculos para o ChartThree
  const monthlySpent = data.reduce((acc, item) => {
    const { mes, ano } = item.dataDeEfetuacao
    const key = `${mes}-${ano}`

    if (!acc[key]) {
      acc[key] = 0
    }
    acc[key] += item.valorTotalNota || 0
    return acc
  }, {})

  const months = Object.keys(monthlySpent)
  const averageSpent = months.length > 0
    ? Object.values(monthlySpent).reduce((acc, total) => acc + total, 0) / months.length
    : 0

  const monthWithMostSpent = {
    month: "Junho",
    value: 1500,
  }

  const monthWithLeastSpent = {
    month: "Agosto",
    value: 500,
  }

  const topItems = data.reduce((acc, item) => {
    item.itens.forEach((produto) => {
      if (!acc[produto.produto]) {
        acc[produto.produto] = 0;
      }
      acc[produto.produto] += produto.quantidade;
    });
    return acc;
  }, {});
  
  const topItemsArray = Object.entries(topItems).map(([produto, quantidade]) => ({
    produto,
    quantidade
  }));
  
  topItemsArray.sort((a, b) => b.quantidade - a.quantidade);
  
  const topItemsLimited = topItemsArray.slice(0, 5);

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      <Content title="Dashboard" onOpenMenu={() => setMenuIsOpen(true)}>
        {data.length > 0 ? (
          <DashBoard>
            <ChartOne spent={totalNota} />
            <ChartTwo data={marketData} />
            <ChartThree
              monthlySpent={monthlySpent}
              monthWithMostSpent={monthWithMostSpent}
              monthWithLeastSpent={monthWithLeastSpent}
              averageSpent={averageSpent}
            />
            <ChartFour data={topItemsLimited} />
          </DashBoard>
        ) : (
          <DashBoard>
            <NoData
              title="Nenhuma dado para exibir!"
              phrase="Você não possui dados de notas fiscais cadastrados no sistema, portanto não há informações disponíveis para o Dashboard. Registre notas fiscais!"
              url={backgroundImg}
              className="dashboard"
            />
          </DashBoard>
        )}
      </Content>
    </Container>
  )
}

