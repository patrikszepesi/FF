import { Document, Page, Text, StyleSheet, View, Image } from '@react-pdf/renderer';
import logo from '../public/assets/social.png'



const Invoice = ({  }) => (

  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={logo} />
    <>

    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>Átadási-átvételi nyomtatvány</Text>
      </View>
      <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}></Text>
                <Text style={styles.invoiceDate}></Text>
            </View >
            <View style={styles.headerContainer}>

   </View>



      <View style={styles.invoiceNoContainer}>

                <Text style={styles.invoiceDate}>Én(vásárló neve)____________________ átvettem a(z)____________________(termék neve).</Text>
            </View >
            <View style={styles.invoiceDateContainer}>

                <Text style={styles.invoiceDate}>Vásárló személyigazolvány száma:__________________________________________</Text>
            </View >
              <Text style={styles.invoiceDate}>Vásárló aláírása:_________________________________</Text>
            <View style={styles.headerContainer}>

        </View>

        <View style={styles.invoiceNoContainer}>


                    <Text style={styles.invoiceDate}>Eladó neve:_________________________</Text>
              </View >

              <View style={styles.invoiceNoContainer}>


                          <Text style={styles.invoiceDate}>Eladó aláírása:_________________________</Text>
                    </View >

                    <View style={styles.invoiceNoContainer}>
                              <Text style={styles.label}></Text>
                              <Text style={styles.invoiceDate}>Kelt:______________________________________</Text>
                          </View >





            </>
    </Page>
  </Document>
);

const styles = StyleSheet.create({

    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
    },
    reportTitle:{
        color: '#7ed957',
        letterSpacing: 4,
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    page: {
      fontFamily: 'Helvetica',
      fontSize: 11,
      paddingTop: 30,
      paddingLeft:60,
      paddingRight:60,
      lineHeight: 1.5,
      flexDirection: 'column',
  },
  logo: {
      width: 74,
      height: 66,
      marginLeft: 'auto',
      marginRight: 'auto'
  },
  invoiceNoContainer: {
       flexDirection: 'row',
       marginTop: 36,
       justifyContent: 'flex-end'
   },
   total: {
        flexDirection: 'row',
        marginTop: 100,
        justifyContent: 'flex-end'
    },
   invoiceDateContainer: {
       flexDirection: 'row',
       justifyContent: 'flex-end'
   },
   invoiceDate: {
           fontSize: 12,
           fontStyle: 'bold',
           marginTop:20,
   },
   label: {
       width: 100,
       marginTop:20,
   },
   headerContainer: {
       marginTop: 36
   },
   billTo: {
       marginTop: 20,
       paddingBottom: 3,
       fontFamily: 'Helvetica-Oblique'
   },
   tableContainer: {
       flexDirection: 'row',
       flexWrap: 'wrap',
       marginTop: 24,
       borderWidth: 1,
       borderColor: '#7ed957',
   },
   container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
      //  height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
      //  flexGrow: 1,
       marginTop: 60
   },
   container2: {
        flexDirection: 'row',
        alignItems: 'center',
      //  height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
      //  flexGrow: 1,
       marginTop: 20
   },
   description: {
       width: '30%',
       borderRightColor: '#7ed957',
       borderRightWidth: 1,
   },
   qty: {
       width: '10%',
       borderRightColor: '#7ed957',
       borderRightWidth: 1,
   },
   rate: {
       width: '25%',
       borderRightColor: '#7ed957',
       borderRightWidth: 1,
   },
   amount: {
       width: '35%'
   }
  });

export default Invoice;
