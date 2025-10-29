import { StyleSheet } from "react-native";

const lightTextColor='grey';
const darkTextCOlor='black';
const lightBackground='white';

const styles = StyleSheet.create ({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8
    },

bigText : {
    fontSize:32,
    color: 'lighTextColor'
},

darkColor:{
    color:darkTextCOlor
},
panelContainer:{
    backgroundColor: lightBackground,
    borderRadius:12,
    padding:8,
    width: '49%'
},
panelRowContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical:4
}

});


export default styles;