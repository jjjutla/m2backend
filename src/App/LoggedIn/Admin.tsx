import React from 'react';
import { Table } from 'antd';
import { Line } from '@ant-design/charts';

import { MapContainer, TileLayer, Circle, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Admin = () => {
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Store',
      dataIndex: 'store',
      key: 'store',
    },
    {
      title: 'Order Received',
      dataIndex: 'order_recieved',
      key: 'order_recieved',
    },
    {
      title: 'Garments Produced',
      dataIndex: 'garments_produced',
      key: 'garments_produced',
    },
    {
      title: 'Prepared for Delivery',
      dataIndex: 'prepared_for_delivery',
      key: 'prepared_for_delivery',
    },
    {
      title: 'Out for Delivery',
      dataIndex: 'out_for_delivery',
      key: 'out_for_delivery',
    },
    {
      title: 'Verified by FibreTag',
      dataIndex: 'verified_by_fibretag',
      key: 'verified_by_fibretag',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Pegasus Trail #0000001',
      store: "nike.com",
      order_recieved: "01-03-2024 09:00",
      garments_produced: "02-03-2024 12:00",
      prepared_for_delivery: "03-03-2024 15:00",
      out_for_delivery: "04-03-2024 15:30",
      verified_by_fibretag: "05-03-2024 15:30",
      status: 'SOLD',
    },
    {
      key: '2',
      name: 'Pegasus Trail #0000002',
      store: "nike.com",
      order_recieved: "02-03-2024 09:30",
      garments_produced: "02-03-2024 19:00",
      prepared_for_delivery: "04-03-2024 05:00",
      out_for_delivery: "04-03-2024 15:45",
      verified_by_fibretag: "06-03-2024 11:30",
      status: 'SOLD',
    },
    {
      key: '3',
      name: 'Pegasus Trail #0000003',
      store: "stockx.com",
      order_recieved: "03-03-2024 06:30",
      garments_produced: "03-03-2024 09:00",
      prepared_for_delivery: "05-03-2024 09:45",
      out_for_delivery: "05-03-2024 17:45",
      verified_by_fibretag: "07-03-2024 18:00",
      status: 'SOLD',
    },
  ];

  const chartData = [
    { date: '01-03-2024', transactions: 1 },
    { date: '02-03-2024', transactions: 2 },
    { date: '03-03-2024', transactions: 3 },
  ];

  const config = {
    data: chartData,
    xField: 'date',
    yField: 'transactions',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  // Dummy location data for each sold product
  const locations = [
    { lat: 51.505, lng: -0.09, productName: 'Pegasus Trail #0000001' }, // Example location for product 1
    { lat: 48.8566, lng: 2.3522, productName: 'Pegasus Trail #0000002' }, // Example location for product 2
    { lat: 40.7128, lng: -74.0060, productName: 'Pegasus Trail #0000003' }, // Example location for product 3
  ];

  const mapCenter = [51.505, -0.09]; // Set the initial center of the map
  const zoomLevel = 2; // Set the initial zoom level of the map

  return (
    <div>
      <h2>Transaction Data</h2>
      <Table columns={columns} dataSource={data} />

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <div style={{ width: '48%' }}>
          <h2>Transactions Over Time</h2>
          <Line {...config} style={{ height: '400px' }} />
        </div>

        <div style={{ width: '48%' }}>
          <h2>World Map</h2>
          <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map(location => (
              <Circle
                key={location.productName}
                center={[location.lat, location.lng]}
                radius={50000}
                color="red"
              />
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Admin;