import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
	FlatList, 
	Linking,AsyncStorage
} from "react-native";
import {
  Container
} from "native-base"; 
import styles2 from './styles/LoginScreenStyles';
import RoundedButton from './components/buttons/RoundedButton';
import HeaderLogado from "./HeaderLogado" ; 
import HeaderLogadoBack from "./HeaderLogadoBack" ; 

import styles from "./styles1";
import { Images } from "./Themes/"; 

export default class More extends Component {
  constructor(props) {
    super(props);
 
    let dataObjects = [
      {
        id: 1,
        title: "Consulta CEP",
        itemImg: Images.cep
      },
      {
        id: 2,
        title: "Quiz",
        itemImg: Images.quiz
      },
      {
        id: 3,
        title: "Simulador Financeiro",
        itemImg: Images.financeiro      
      },
      {
        id: 4,
        title: "Busca CNPJ",
        itemImg: Images.cnpj
      }
    ];

		this.state = {
			dataSource:  dataObjects,
			
			qtde_arquivos:'',
			qtde_chamados:'',
			id_customer: false,
		};
  }

  componentDidMount() {
    var _this = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      _this.props.navigation.goBack();
 
    }); 
		
  }
 

  componentWillUnmount() {
    // this._unsubscribe();
  } 
 
  alertItemName = rowData => {
    var name = rowData.title;

    if (name === "Consulta CEP") {
      Linking.openURL('https://play.google.com/store/apps/details?id=com.buscacep');
    } else if (name === "Quiz") {
      Linking.openURL('https://play.google.com/store/apps/details?id=com.quiztudo');
    } else if (name === "Simulador Financeiro") {
      Linking.openURL('https://play.google.com/store/apps/details?id=com.simuladorfinanceiro');
    } else if (name === "Busca CNPJ") {
      Linking.openURL('https://play.google.com/store/apps/details?id=com.buscacnpj')
    } 
  };
 
  _renderItem(rowData) {
    return (
      <TouchableOpacity
        style={styles.rowMain}
        onPress={() => this.alertItemName(rowData)}
      >
        <View style={styles.imageContainer}>
          <Image source={rowData.itemImg} style={styles.itemImgStyle} />
          
					{rowData.notification ? (
            <View style={styles.notificationCircle}>
              <Text style={styles.notification}>{rowData.notification}</Text>
            </View>
          ) : null}
					
        </View>
        <Text style={styles.itemText}>{rowData.title}</Text>
      </TouchableOpacity>
    );
  }

  render() { 
    
    return (
      <Container>
       	<HeaderLogadoBack navigation={this.props.navigation} cabecalho="Confira nossos apps" />
        <View>
			 
						<FlatList
							contentContainerStyle={styles.content}
							data={this.state.dataSource}
							renderItem={({item}) => this._renderItem(item)}
							keyExtractor={(item, index) => item.id}
							initialNumToRender={8}
						/>
					 
					

        </View>
        <View style={styles2.viewRegisterButton}>
              <RoundedButton
                title='REMOVER PUBLICIDADE'
                styles={styles2.registerButton}
                onPress={() => {
                 
                }} 
                
                />
            </View> 
      </Container>
    );
  }
} 