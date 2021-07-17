import { UserForm } from "./userForm";
import { Grid, makeStyles} from "@material-ui/core";
import { ToolBar } from "./ToolBar";

import 'antd/dist/antd.css';
import "./App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div>
      <ToolBar/>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.root}>
          <UserForm/>
      </Grid>
    </div>
  );
}

export default App;
