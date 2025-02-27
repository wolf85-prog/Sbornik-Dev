import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";
import {
  IconButton,
  Provider,
  Portal,
  Dialog,
  Button,
} from "react-native-paper";
//import asyncAlert from "./asyncAlert";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function AboutScreen() {
  return (
    // <View style={styles.container} >
    //   <Stack.Screen options={{ headerShown: true, title: "О приложении", headerLeft: (() => <DrawerToggleButton tintColor={'#000'} />) }} />
    //   <Text style={styles.text}>О приложении</Text>
    //   <Link href="/about/next-page" style={{ marginTop: 16, fontSize: 18 }}>
    //     <Text style={{ fontWeight: "bold" }}>Go To Next Page</Text>
    //   </Link>
    // </View>
    <Provider>
      <SQLiteProvider databaseName="sbornik.db" assetSource={{ assetId: require('./../../../assets/db/sbornik.db') }}>
        <Content />
      </SQLiteProvider>
    </Provider>
  );
}

export function Content() {
  const db = useSQLiteContext();

  const [textInputValue, setTextInputValue] = useState("");
  const [dialog, setDialog] = useState({
    customer: {},
    isVisible: false,
  });
  const [customers, setCustomers] = useState([]);

  useEffect(() => {

    const fetch = (async()=> {
      //const db = await SQLite.openDatabaseAsync('databaseName');

      // await db.execAsync(`
      //   PRAGMA journal_mode = WAL;
      //   CREATE TABLE IF NOT EXISTS customers (id INTEGER PRIMARY KEY NOT NULL, uid TEXT, name TEXT);
      //   INSERT INTO customers (uid, name) VALUES (123, 'test1');
      //   INSERT INTO customers (uid, name) VALUES (122, 'test2');
      //   INSERT INTO customers (uid, name) VALUES (133, 'test3');
      // `);
      

      await db.withTransactionAsync(async () => {
        const allRows = await db.getAllAsync('SELECT * FROM notes');
        const customers = allRows.map((row) => ({
          uid: row.id_song,
          name: row.note,
        }));

        setCustomers(customers);
      });
    })

    fetch()
  }, []);
  

  // Function to show the dialog
  // Function para ipakita ang dialog
  const showDialog = (customer) =>
    setDialog({
      isVisible: true,
      customer,
    });

  // Function to hide the dialog and update the customer
  // Function para itago ang dialog at i-update ang customer
  const hideDialog = async (updatedCustomer) => {
    setDialog({
      isVisible: false,
      customer: {},
    });

    // Update the local state
    // I-update ang local state
    const newCustomers = customers.map((customer) => {
      if (customer.uid !== updatedCustomer.uid) {
        return customer;
      }

      return updatedCustomer;
    });

    setCustomers(newCustomers);

    // Edit customer in the database
    // I-edit ang customer sa database
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     `UPDATE customers SET uid=?, name=? WHERE uid=${updatedCustomer.uid}`,
    //     [updatedCustomer.uid, updatedCustomer.name]
    //   );
    // });
    await db.withTransactionAsync(async () => {
      await db.execAsync(
        `UPDATE customers SET uid=?, name=? WHERE uid=${updatedCustomer.uid}`, 
        [updatedCustomer.uid, updatedCustomer.name]
      );
    })
  };

  // Function to delete a customer
  // Function para mag-delete ng customer
  const deleteCustomer = async (customer) => {
    // Show confirmation alert
    // Magpakita ng confirmation alert
    const shouldDelete = await asyncAlert({
      title: "Delete customer",
      message: `Are you sure you want to delete the customer named "${customer.name}"?`,
    });
    if (!shouldDelete) {
      return;
    }

    // Update the local state
    // I-update ang local state
    const newCustomers = customers.filter((c) => c.uid !== customer.uid);
    setCustomers(newCustomers);

    // Delete customer from the database
    // I-delete ang customer mula sa database
    // db.transaction((tx) => {
    //   tx.executeSql("DELETE FROM customers WHERE uid = ?", [customer.uid]);
    // });
    await db.withTransactionAsync(async () => {
      await db.execAsync("DELETE FROM customers WHERE uid = ?", [customer.uid]);
    })
  };

  // useEffect(() => {
  //   const setup = async()=> {
  //     const result = await db.getAllAsync('SELECT * FROM todos');
  //     setTodos(result);
  //   }
  //   setup();
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        
          <View style={styles.container}>
            <Text style={styles.titleText}>Little Lemon Customers</Text>
            <TextInput
              placeholder="Enter the customer name"
              value={textInputValue}
              onChangeText={(data) => setTextInputValue(data)}
              underlineColorAndroid="transparent"
              style={styles.textInputStyle}
            />
            <TouchableOpacity
              disabled={!textInputValue}
              onPress={() => {
                const newValue = {
                  uid: Date.now().toString(),
                  name: textInputValue,
                };
                setCustomers([...customers, newValue]);

                // Insert new customer into the database
                // I-insert ang bagong customer sa database
                // db.transaction((tx) => {
                //   tx.executeSql(
                //     "insert into customers (uid, name) values(?, ?)",
                //     [newValue.uid, newValue.name]
                //   );
                // });
                setTextInputValue("");
              }}
              style={styles.buttonStyle}>
              <Text style={styles.buttonTextStyle}> Save Customer </Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.customerName}>Customers: </Text>
              {customers.map((customer, index) => (
                <View key={index} style={styles.customer}>
                  <Text style={styles.customerName}>{customer.name}</Text>
                  <View style={styles.icons}>
                    <IconButton
                      icon="pen"
                      size={24}
                      onPress={() => showDialog(customer)}
                    />
                    <IconButton
                      icon="delete"
                      size={24}
                      onPress={() => deleteCustomer(customer)}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
          <Portal>
            <Dialog
              visible={dialog.isVisible}
              onDismiss={() => hideDialog(dialog.customer)}>
              <Dialog.Title>Edit Customer name</Dialog.Title>
              <Dialog.Content>
                <TextInput
                  value={dialog.customer.name}
                  onChangeText={(text) =>
                    setDialog((prev) => ({
                      ...prev,
                      customer: {
                        ...prev.customer,
                        name: text,
                      },
                    }))
                  }
                  underlineColorAndroid="transparent"
                  style={styles.textInputStyle}
                />
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => hideDialog(dialog.customer)}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  customer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  customerName: {
    fontSize: 18,
  },
  buttonStyle: {
    fontSize: 16,
    color: "white",
    backgroundColor: "green",
    padding: 5,
    marginTop: 32,
    minWidth: 250,
    marginBottom: 16,
  },
  buttonTextStyle: {
    padding: 5,
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  textInputStyle: {
    textAlign: "center",
    height: 40,
    fontSize: 18,
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
  },
  icons: {
    flexDirection: "row",
  },
});