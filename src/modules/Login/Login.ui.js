import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginUsername, loginPassword } from './Login.action'
import { loginWithPassword } from './Login.middleware'

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { InputGroup, Input, Button } from 'native-base';
import t from '../../lib/LocaleStrings'

import CachedUsers from '../CachedUsers/CachedUsers.ui'

import Dimensions from 'Dimensions'
const { width, height } = Dimensions.get('window');

class Login extends Component {


  submit = () => {
    this.props.dispatch(loginWithPassword(this.props.username, this.props.password))
  }

  changeUsername = (username) => {
    this.props.dispatch(loginUsername(username))
  }

  changePassword = (password) => {
    this.props.dispatch(loginPassword(password))  
  }
  
  render() {

    const foo = () => {
      this.refs.loginUsername._textInput.measure( (ox, oy, width, height, px, py) => {
        console.log(ox)                
        console.log(oy)                
        console.log(width)                
        console.log(height)                
        console.log(px)                
        console.log(py)                
      })
    }

    return (
      <View style={style.container}>

        <InputGroup borderType='regular' style={style.inputGroup} >
          <Input 
            ref='loginUsername'
            placeholder={t('fragment_landing_username_hint')} 
            style={style.input} 
            onChangeText={ this.changeUsername } 
            value={this.props.username}
            returnKeyType = {"next"}
            onSubmitEditing={ e =>  this.refs.password._textInput.focus() }
            autoFocus={ true }
            selectTextOnFocus={ true }
            onFocus={ foo }
        />     
        </InputGroup>


        <InputGroup borderType='regular' style={style.inputGroup} >
          <Input 
            ref='password'
            placeholder={t('fragment_landing_password_hint')} 
            style={style.input}  
            secureTextEntry={true} 
            onChangeText={ this.changePassword } 
            value={this.props.password}
            blurOnSubmit={ true }
            onSubmitEditing={ this.submit }  
          /> 
        </InputGroup>

        <TouchableOpacity style={style.button} onPress={this.submit}>
          <Text style={style.buttonText}> Sign In </Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const style = StyleSheet.create({

  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    width: width * 0.6,
    marginVertical:15
  },

  button : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#80C342",
    marginVertical: 10,
    height: 45
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize:22,
    flex: 1 
  },

  inputGroup: {
    marginVertical: 10,
    backgroundColor: "rgba(0,0,0,0.5)"  
  },

  input: {
    color: '#FFF'  
  }

});

export default connect( state =>  ({

  username  :  state.login.username,
  password  :  state.login.password,
  pin      :  state.login.pin

}) )(Login)
