import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// packages
// import SectionedMultiSelect from 'react-native-sectioned-multi-select';
//import MultiSelect from 'react-native-multiple-select';

// styles
import styles from './styles/SelectInputStyles';
import colors from '../../styles/GlobalColors';

export default class SelectInput extends Component {

    static porpTypes = {
        items : PropTypes.object,
        uniqueKey : PropTypes.string,
        subKey : PropTypes.string,
        selectText : PropTypes.string,
        label : PropTypes.string,
        onSelectedItemsChange : PropTypes.func,
        selectedItems : PropTypes.array,
        hideSearch : PropTypes.bool
    }

    render() {
        return(
            <View style = { styles.containerStyle }>
                <Text style = { styles.label }>
                    { this.props.label }
                </Text>
                <View style = { styles.select }>
                    <MultiSelect
                        hideDropDown = { true }
                        items = { this.props.items }
                        uniqueKey = { this.props.uniqueKey }
                        fontSize = { 16 }
                        onSelectedItemsChange = { this.props.onSelectedItemsChange }
                        selectedItems = { this.props.selectedItems }
                        // selectText = { this.props.selectText }
                        // searchInputPlaceholderText = "Buscar por... "
                        onChangeInput = {(text) => console.log(text)}
                        single = { true }
                        selectedItemTextColor = { colors.dark_blue }
                        selectedItemIconColor = { colors.dark_blue }
                        itemTextColor = "#363636"
                        displayKey = "name"
                        // searchInputStyle = {{ color: 'transparent', backgroundColor: 'white', height: 30 }}
                        styleItemsContainer = {{backgroundColor: 'red', color: 'blue', borderColor: 'red', }}
                    />
                </View>
            </View>
        )
    }
}
