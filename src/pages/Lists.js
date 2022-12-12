import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Center, List, ListItem, Text } from "@chakra-ui/react";

import NavbarMenu from "../components/NavbarMenu";
import Spinner from "../components/CustomSpinner";

const Lists = () => {
  const [deviceNumber, setDeviceNumber] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dataViewer = () => {};

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://192.168.8.64:4550")
      .then((res) => {
        setIsLoading(false);
        setData(res.data.data);
        console.log("array data : ", data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("Амжилтгүй ", err.message);
      });
  }, [deviceNumber]);

  return (
    <Center
      display={"flex"}
      flexDirection={"column"}
      bgImage={
        "https://images.pexels.com/photos/3374204/pexels-photo-3374204.jpeg"
      }
      bgPosition="center"
      bgRepeat="no-repeat"
      w={"100vw"}
      h={"100vh"}
      p={5}
      pt-10
    >
      <NavbarMenu />
      <List spacing={3}>
        <ListItem display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Text pr={5} borderRightColor={"yellow.300"} fontWeight={"bold"}>
            Хэрэглэгчийн нэр :{" "}
          </Text>{" "}
          <Text>
            {data[deviceNumber] ? data[deviceNumber].entityName : null}
          </Text>
        </ListItem>
        <ListItem alignItems={"center"} display={"flex"} flexDirection={"row"}>
          <Text
            pr={5}
            borderRightColor={"yellow.300"}
            mr={10}
            fontWeight={"bold"}
          >
            Төхөөрөмж :{" "}
          </Text>{" "}
          <Text ml={3}>
            {data[deviceNumber] ? data[deviceNumber].deviceType : null}
          </Text>
        </ListItem>
        <ListItem alignItems={"center"} display={"flex"} flexDirection={"row"}>
          <Text
            pr={5}
            borderRightColor={"yellow.300"}
            mr={10}
            fontWeight={"bold"}
          >
            Өгөгдөл :{" "}
          </Text>{" "}
          <Text ml={10}>
            {data[deviceNumber] ? data[deviceNumber].data : null}
          </Text>
        </ListItem>
        <ListItem alignItems={"center"} display={"flex"} flexDirection={"row"}>
          <Text
            pr={5}
            borderRightColor={"yellow.300"}
            mr={10}
            fontWeight={"bold"}
          >
            Төлөв :{" "}
          </Text>{" "}
          <Text ml={55}>
            {data[deviceNumber] ? data[deviceNumber].status : null}
          </Text>
        </ListItem>
        <ListItem alignItems={"center"} display={"flex"} flexDirection={"row"}>
          <Text
            pr={5}
            borderRightColor={"yellow.300"}
            mr={10}
            fontWeight={"bold"}
          >
            WiFi дохио :{" "}
          </Text>{" "}
          <Text ml={5}>
            {data[deviceNumber] ? data[deviceNumber].wifiSignal : null}
          </Text>
        </ListItem>
      </List>

      <Center pos={"absolute"} top={800} display={"flex"} flexDirection={"row"}>
        <Button
          onClick={() => {
            setDeviceNumber(0);
          }}
          m={1}
        >
          1
        </Button>
        <Button
          onClick={() => {
            setDeviceNumber(1);
          }}
          m={1}
        >
          2
        </Button>
        <Button
          onClick={() => {
            setDeviceNumber(2);
          }}
          m={1}
        >
          3
        </Button>
        <Button
          onClick={() => {
            setDeviceNumber(3);
          }}
          m={1}
        >
          4
        </Button>
      </Center>
    </Center>
  );
};

export default Lists;
