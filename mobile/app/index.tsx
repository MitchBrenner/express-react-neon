import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

type order = {
  order_id: string;
  item: string;
  price: number;
  user_id: string;
};

export default function Index() {
  const [orders, setOrders] = useState<order[]>([]);

  useEffect(() => {
    fetch("http://localhost:5500/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", margin: 10 }}>
        Orders
      </Text>
      {orders && (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.order_id}
          renderItem={({ item }) => (
            <View
              style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}
            >
              <Text>Order ID: {item.order_id}</Text>
              <Text>Item: {item.item}</Text>
              <Text>Price: ${item.price}</Text>
              <Text>User ID: {item.user_id}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
