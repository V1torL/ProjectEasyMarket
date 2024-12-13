import React, { useRef, useEffect } from "react"

import { Container, Chart, Donut, Legend, NoSpent, NoInfo } from "./styles"

export function ChartOne({ spent }) {
  const monthlyLimit = 200

  const tooltipRef = useRef(null)

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

  console.log(spent);

  const percentage = ((spent / monthlyLimit) * 100).toFixed(2)
  const reachLimit = (monthlyLimit - spent).toFixed(2)

    return (
      <Container>
        <Chart>
          <h3>Mês atual</h3>

          <div className="tooltip" ref={tooltipRef}></div>

          <Donut style={{ "--percentage": percentage }}>
            <svg viewBox="0 0 185 185">
              {/* Circulo de baixo (Total) */}
              <circle
                cx="50%"
                cy="50%"
                r="75"
                opacity="0.2"
                stroke="#4a4556"
                className="circleTotal"
                onMouseOver={(e) => handleMouseOver(e, `R$ ${reachLimit}`)}
                onMouseOut={handleMouseOut}
              />

              <circle
                cx="50%"
                cy="50%"
                r="75"
                stroke="url(#paint0_linear_217_2)"
                className="circleSpent"
              />

              <defs>
                <linearGradient
                  id="paint0_linear_217_2"
                  x1="1.97421e-07"
                  y1="82"
                  x2="154"
                  y2="178"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#595437" />
                  <stop offset="1" stopColor="#F2CB05" />
                </linearGradient>
              </defs>
            </svg>

            <div className="percentage">
              <h3>Gasto</h3>
              <p>{percentage}%</p>
            </div>
          </Donut>

          <Legend>
            <div className="item">
              <div className="circulo1"></div>
              <span>Limite</span>
              <span>R$ {monthlyLimit}</span>
            </div>
            <div className="item">
              <div className="circulo2"></div>
              <span>Gasto</span>
              <span>R$ {spent}</span>
            </div>
          </Legend>
        </Chart>
      </Container>
    )
}
