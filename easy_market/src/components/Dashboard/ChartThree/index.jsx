import React, { useRef } from "react"
import { BiSolidCaretUpCircle, BiSolidCaretDownCircle } from "react-icons/bi"
import { Bar } from "./Bar"
import { Container, Title, Chart, Left, Right, Bars } from "./styles"

export function ChartThree({
  data,
  monthWithMostSpent,
  monthWithLeastSpent,
  averageSpent,
}) {
  const tooltipRef = useRef(null)

  const midlineCalculation = Math.ceil(
    (averageSpent / (monthWithMostSpent.value || 1)) * 100 - 5
  ).toFixed(2)

  const handleMouseOver = (event, content) => {
    const tooltip = tooltipRef.current
    if (tooltip) {
      tooltip.innerHTML = content
      tooltip.classList.add("active")

      const moveTooltip = (e) => {
        tooltip.style.left = `${e.clientX}px`
        tooltip.style.top = `${e.clientY - 60}px`
      }

      document.addEventListener("mousemove", moveTooltip)

      tooltip.moveTooltip = moveTooltip
    }
  }

  const handleMouseOut = () => {
    const tooltip = tooltipRef.current
    if (tooltip) {
      tooltip.classList.remove("active")
      tooltip.innerHTML = ""

      document.removeEventListener("mousemove", tooltip.moveTooltip)
      delete tooltip.moveTooltip
    }
  }

  return (
    <Container>
      <Title>
        <h3>Gastos nos meses do ano</h3>
      </Title>

      <Chart>
        <Left>
          <div className="bigger">
            <p>
              <BiSolidCaretUpCircle /> mês que mais gastou
            </p>
            <h4>{monthWithMostSpent.month}</h4> {/* Apenas o mês */}
          </div>

          <div className="smaller">
            <p>
              <BiSolidCaretDownCircle /> mês que menos gastou
            </p>
            <h4>{monthWithLeastSpent.month}</h4> {/* Apenas o mês */}
          </div>

          <div className="media">
            <p>média dos gastos no ano</p>
            <h4>Média R$ {averageSpent}</h4>
          </div>
        </Left>

        <Right>
          <div className="tooltip" ref={tooltipRef}></div>

          <Bars style={{ "--percentage": `${midlineCalculation}%` }}>
            {data &&
              data.map((item, index) => (
                <Bar
                  key={String(index)}
                  onMouseOver={(e) => handleMouseOver(e, `${item.month}`)}
                  onMouseOut={handleMouseOut}
                  data={item}
                  heightMax={monthWithMostSpent.value}
                />
              ))}
          </Bars>
        </Right>
      </Chart>
    </Container>
  )
}
