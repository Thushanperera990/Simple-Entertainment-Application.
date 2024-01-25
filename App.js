import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Switch,
} from 'react-native';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: "Today Weather Events", image: "https://www.noaa.gov/sites/default/files/styles/square_width_650/public/2021-02/FocusArea__Weather-02.jpg?h=5dc006f5&itok=20VGa8_F" },
      ],
      notificationsEnabled: false,
    };
  }

  clickEventListener(item) {
    Alert.alert(item.title);
  }

  toggleNotifications = () => {
    this.setState(prevState => ({
      notificationsEnabled: !prevState.notificationsEnabled
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.Location}>Nawala</Text>
          <Text style={styles.celcius}>28 °C</Text>
          <Text style={styles.Location}>31 / 27 °C</Text>
          <Text style={styles.Location}>Partly Cloudy</Text>
        </View>

        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity style={styles.card} onPress={() => { this.clickEventListener(item) }}>
                  <Image style={styles.cardImage} source={{ uri: item.image }} />
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </View>
            )
          }} />

        <View style={styles.switchContainer}>
          <Text style={styles.notifyText}>Notify Me</Text>
          <Switch
            value={this.state.notificationsEnabled}
            onValueChange={this.toggleNotifications}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#4c6fac',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  Location: {
    fontSize: 28,
    color: 'white',
  },
  celcius: {
    fontSize: 58,
    fontWeight: 'bold',
    color: 'white',
  },
  list: {
    paddingHorizontal: 10,
    backgroundColor: "#4c6fac",
  },
  listContainer: {
    alignItems: 'center'
  },
  card: {
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "#e2e2e2",
    flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center'
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "white"
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  notifyText: {
    fontSize: 18,
    marginRight: 10,
    color: 'white',
  },
});
