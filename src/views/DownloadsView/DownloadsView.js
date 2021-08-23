import React,{useState,useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SectionAlternate } from '../../../components/organisms';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice2 from '../../../components/Invoice2';



const useStyles = makeStyles(theme => ({
  listItemAvatar: {
    marginRight: theme.spacing(2),
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: theme.spacing(-2),
    border: `4px solid ${theme.palette.background.paper}`,
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    '&:first-child': {
      marginLeft: 0,
    },
  },
}));

const DownloadsView = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const [isClient, setIsClient] = useState(false)

    useEffect(() => {
      setIsClient(true)
    }, [])





    const showEachOrders = () => {
      return (


      <div key={2} className="m-5 p-1 card">

      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col"> </th>

          </tr>
        </thead>

        <tbody>
          {
            <tr key={1}>
              <td>
                Átvételi-átadási nyomtatvány
              </td>
            </tr>
          }
        </tbody>
      </table>
        <div className="row">
          <div className="col"><PDFDownloadLink
            document={<Invoice2  />}
            fileName="Átadási.pdf"
            className="btn btn-sm btn-block btn-outline-primary"
          >
             Letöltés
          </PDFDownloadLink></div>
        </div>
      </div>
    )}


    return (
        <>
          {isClient && (
            <SectionAlternate>
            <h4>
              Átvételi-átadási nyomtatvány letöltése
            </h4>
            <div className={className} {...rest}>
              {showEachOrders()}
            </div>
            </SectionAlternate>
          )}
        </>
      );
};


export default DownloadsView;
