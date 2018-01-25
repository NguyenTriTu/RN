import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, number } from 'react-native'

class Inputs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ngay: number,
      thang: number,
      nam: number,
      giatri : '',
    }
  }
  handleNgay(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
      else {
        // your call back function
        alert("please enter numbers only");
      }
    }
    this.setState({ ngay: newText });
  }
  handleThang(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
      else {
        // your call back function
        alert("please enter numbers only");
      }
    }
    this.setState({ thang: newText });
  }
  handleNam(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      }
      else {
        // your call back function
        alert("please enter numbers only");
      }
    }
    this.setState({ nam: newText });
  }

  login = (ngay, thang, nam) => {
    let v0 = 0.0352;
    let s = 360;
    let x0 = 311;
    let t1 = new Date(nam, thang, ngay);
    let t0 = new Date(2009, 6, 1);
    //Get 1 day in milliseconds
    let one_day = 1000 * 60 * 60 * 24;
    // Convert both dates to milliseconds
    let date1_ms = t1.getTime();
    // alert('date1_ms : ' + date1_ms);
    let date2_ms = t0.getTime();
    // alert('date2_ms : ' + date2_ms);
    // Calculate the difference in milliseconds
    let difference_ms = date1_ms - date2_ms;
    // if (difference_ms < 0) {
    //   difference_ms = - difference_ms;
    // }
    //  alert('difference_ms : ' + difference_ms);
    // Convert back to days and return
    let re = Math.round(difference_ms / one_day);
    //alert('difference_ms : ' + difference_ms);
    //if(re<0){re = -re;}
    //alert('re : ' + re);
    let x1 = x0 + v0 * (re);
    //alert('x trc : \n' +x1);
    while (x1 > s) {
      x1 = x1 - s;
    }
    // alert('x  sau : \n' +x1);
    let diemchuan = x1 / 30;
    //alert('diem chuan : \n' +diemchuan);
    let toado = x1 % 30;
    let toadonguyen = parseInt(toado);
    //sodu = sodu - sochia;
    let phut = (toado-toadonguyen)*60;
    phut = parseInt(phut);
  //  toado = parseInt(toado);
    let cung = '';
    if (diemchuan < 0) {
      cung = 'Song Ngu'
      sodu = 30 + sodu;
      diemchuan = 12 + diemchuan;
    } else
      if (diemchuan < 1) {
        cung = 'Bach duong'
      } else
        if (diemchuan < 2) {
          cung = 'Kim nguu'
        } else
          if (diemchuan < 3) {
            cung = 'Song tu'
          } else
            if (diemchuan < 4) {
              cung = 'Cu Giai'
            } else
              if (diemchuan < 5) {
                cung = 'Su Tu'
              } else
                if (diemchuan < 6) {
                  cung = 'Xu Nu'
                } else
                  if (diemchuan < 7) {
                    cung = 'Thien Binh'
                  } else
                    if (diemchuan < 8) {
                      cung = 'Bo Cap'
                    } else
                      if (diemchuan < 9) {
                        cung = 'Nhan Ma'
                      } else
                        if (diemchuan < 10) {
                          cung = 'Ma Ket'
                        } else
                          if (diemchuan < 11) {
                            cung = 'Bao Binh'
                          }
    this.setState(
      {giatri : '\nvi tri tu khi : ' + toadonguyen +' do ' +phut +' phut'+ '\ncung so: ' + cung});
    //alert('Cung so : ' + diemchuan + '\nToa do chuan : ' + (x1-(sodu*30)));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Dien ngay vao day </Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='ngay'
          onChangeText={(text) => this.handleNgay(text)}
          value={this.state.ngay}
          maxLength={10}  //setting limit of input
        />
        <Text> Dien thang vao day </Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='thang'
          onChangeText={(text) => this.handleThang(text)}
          value={this.state.thang}
          maxLength={10}  //setting limit of input
        />
        <Text> Dien nam vao day </Text>
        <TextInput
          style={styles.input}
          placeholder='nam'
          keyboardType='numeric'
          onChangeText={(text) => this.handleNam(text)}
          value={this.state.nam}
          maxLength={10}  //setting limit of input
        />
        <Text style={styles.textresult}> {this.state.giatri} </Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.login(this.state.ngay, this.state.thang, this.state.nam)
          }>
          <Text style={styles.submitButtonText}> Done </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Inputs
const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  },
  textresult : {
    //backgroundColor: '#7a42f4',
    margin : 10,
    padding : 10,
    color: 'red',
    fontSize: 15,
  }
})