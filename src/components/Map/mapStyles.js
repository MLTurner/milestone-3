import { makeStyles } from "@material-ui/core/styles";
//callback function inside returns an object
//class name title, which is an object
export default makeStyles(() => ({
    paper: {
        padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
    },
    mapContainer: {
        height: '85vh', width: '100%'
    }
}))
//will finish css for map