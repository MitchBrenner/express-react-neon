import { useEffect, useState } from "react";
import "./App.css";

type order = {
  order_id: string;
  item: string;
  price: number;
  user_id: string;
};

function App() {
  const [orders, setOrders] = useState<order[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:5500/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [refresh]);

  function addOrder() {
    fetch("http://localhost:5500/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item: "Fries",
        price: "5.99",
        user_id: "2",
      }),
    });
    setRefresh(!refresh);
  }

  console.log(orders);

  return (
    <div>
      <h1>Orders</h1>
      {orders &&
        orders.map((order) => (
          <div>
            <h4>{order.item}</h4>
          </div>
        ))}

      <button onClick={addOrder}>Fries</button>
    </div>
  );
}

export default App;
