
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {gql, useMutation} from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';

import {randomString} from "./utils";

const REG_CUSTOMER = gql`
mutation regCustomer($clientMutationId:String!, $username:String!, $email:String!, $password:String!) {
    registerCustomer(input: {clientMutationId:$clientMutationId, username:$username, email:$email, password:$password}) {
      clientMutationId
      
    }
  }
`

const id = uuidv4();
const userName = randomString(32);
const password = randomString(32);




const Registration = ()=>{


    const [emailValue, setEmailValue] = useState('');

    const [bottomText, setBottomText] = useState(''); 

    
    const [regCustomer, {data}] = useMutation(REG_CUSTOMER, {onError: (error)=>console.log(`ERROR ALARMA ${error}`), onCompleted: (data)=>{}});
    

    const onPressRegister = ()=>{
        regCustomer({variables: {clientMutationId: id, username: userName, email:emailValue, password:password}})


    }



    return (
        <View style={styles.container}>
          <Text>e-mail:</Text>
          <TextInput
            style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={setEmailValue}
            value={emailValue}
          />
          <Button
            onPress={onPressRegister}
            title="Register"
            color="#841584"
            />
            <Text>{bottomText}</Text>
        </View>
      );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });



export default Registration;

