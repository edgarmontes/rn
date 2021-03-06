import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";

class ContactUs extends Component {
  static navigationOptions = {
    title: "Contact Us"
  };

  render() {
    return (
      <ScrollView>
        <Card
          //featuredTitle={"Contact Information"}
          title={"Contact Information"}
          wrapperStyle={{ margin: 20 }}
        >
          <Text>1 Nucamp Way</Text>
          <Text>Seattle, WA 98001</Text>
          <Text>U.S.A.</Text>
          <Text></Text>
          <Text>Phone: 1-206-555-1234</Text>
          <Text>Email: campsites@nucamp.co</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default ContactUs;
