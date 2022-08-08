import { StyleSheet } from 'react-native';

// constants
import colors from '../../../styles/GlobalColors';

export default StyleSheet.create({
    containerStyle: {
        width: '95%',
        borderBottomWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        marginBottom: 10
    },

    label: {
        fontWeight: 'bold',
        color: colors.dark_blue,
        marginBottom: 5
    },

    select: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    }
})