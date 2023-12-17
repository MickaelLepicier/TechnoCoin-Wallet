import "./Balance.scss";

export function Balance() {
  return (
    <div className="balance-container">
      <div className="balance">
        $10,000,000 <br />
        <div className="total-b">total Balance </div>
        <div className="growth">90%</div>
      </div>
      <div className="chart-buttons">
        <button className="btn">1D</button>
        <button className="btn">1W</button>
        <button className="btn">1M</button>
        <button className="btn">1Y</button>
        <button className="btn">All</button>
      </div>
    </div>
  );
}
