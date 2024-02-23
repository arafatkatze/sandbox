
import React, { useState, useEffect } from 'react';
import AlphaVantage from 'alphavantage';

function WellsFargoData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const alpha = AlphaVantage({ key: '2Z7T1D8SG9U7XBN2' });

    alpha.data.weekly('WFC').then(response => {
      setData(response['Weekly Time Series']);
    });
  }, []);

  return (
    <div>
      {data ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map(date => (
              <tr key={date}>
                <td>{date}</td>
                <td>{data[date]['1. open']}</td>
                <td>{data[date]['2. high']}</td>
                <td>{data[date]['3. low']}</td>
                <td>{data[date]['4. close']}</td>
                <td>{data[date]['5. volume']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default WellsFargoData;