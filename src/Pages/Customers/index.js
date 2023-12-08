import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
// import { getCustomers, getInventory } from "../../API";

// or other components from 'antd'




function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  // useEffect(() => {
  //   setLoading(true);
  //   getCustomers().then((res) => {
  //     setDataSource(res.users);
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Booking Details</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Date & Time Of Booking",
            dataIndex: "",
            // render: (link) => {
            //   return <Avatar src={link} />;
            // },
          },
          {
            title: "No of Guest",
            dataIndex: "quantity",
          },
          {
            title: "Costomer Id ",
            dataIndex: "",
          },


          {
            title: " Name",
            dataIndex: "firstName",
          },
          
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },

          {
            title: "address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 7,
        }}
      ></Table>
    </Space>










  );

  <Space size={20} direction="horizantal">
      <Typography.Title level={4}>Booking</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Name of the Event",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
           
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
}
export default Customers;
