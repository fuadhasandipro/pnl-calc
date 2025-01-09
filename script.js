document.getElementById("calculateBtn").addEventListener("click", () => {
  const initialPrice = parseFloat(
    document.getElementById("initialPrice").value
  );
  const initialInvestment = parseFloat(
    document.getElementById("initialInvestment").value
  );
  const currentPrice = parseFloat(
    document.getElementById("currentPrice").value
  );
  const secondInvestment = parseFloat(
    document.getElementById("secondInvestment").value
  );
  const targetPrice = parseFloat(document.getElementById("targetPrice").value);

  if (
    isNaN(initialPrice) ||
    isNaN(initialInvestment) ||
    isNaN(currentPrice) ||
    isNaN(secondInvestment) ||
    isNaN(targetPrice)
  ) {
    document.getElementById("resultSummary").textContent =
      "Please fill in all fields with valid numbers.";
    return;
  }

  // First investment calculations
  const firstUTK = initialInvestment / initialPrice;
  const firstInvestmentValueAtTarget = firstUTK * targetPrice;
  const firstInvestmentLoss = initialInvestment - firstInvestmentValueAtTarget;

  // Second investment calculations
  const secondUTK = secondInvestment / currentPrice;
  const secondInvestmentValueAtTarget = secondUTK * targetPrice;
  const secondInvestmentProfit =
    secondInvestmentValueAtTarget - secondInvestment;

  // Total investment performance
  const totalInvestment = initialInvestment + secondInvestment;
  const totalValueAtTarget =
    firstInvestmentValueAtTarget + secondInvestmentValueAtTarget;
  const netProfit = totalValueAtTarget - totalInvestment;
  const overallPercentage = (netProfit / totalInvestment) * 100;

  // Calculate second investment required to fully cover loss (net profit = 0)
  const requiredSecondInvestmentUTK =
    (initialInvestment - firstInvestmentValueAtTarget) /
    (targetPrice - currentPrice);
  const requiredSecondInvestment = requiredSecondInvestmentUTK * currentPrice;

  // Display results
  document.getElementById("resultSummary").innerHTML = `
      <strong>First Investment:</strong><br>
      Value at target price: $${firstInvestmentValueAtTarget.toFixed(2)}<br>
      Loss: $${firstInvestmentLoss.toFixed(2)}<br><br>
  
      <strong>Second Investment:</strong><br>
      Value at target price: $${secondInvestmentValueAtTarget.toFixed(2)}<br>
      Profit: $${secondInvestmentProfit.toFixed(2)}<br><br>
  
      <strong>Overall Performance:</strong><br>
      Total Value at Target Price: $${totalValueAtTarget.toFixed(2)}<br>
      Net Profit: $${netProfit.toFixed(2)} (${overallPercentage.toFixed(
    2
  )}%)<br><br>
  
      <strong>To Fully Cover Loss:</strong><br>
      Required Second Investment: $${requiredSecondInvestment.toFixed(
        2
      )} at current price of $${currentPrice.toFixed(5)}<br>
    `;
});
