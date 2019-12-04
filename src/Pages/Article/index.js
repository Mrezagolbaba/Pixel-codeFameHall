import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import {connect} from "react-redux";
import {fetchArticleAction} from "../../utils/Redux/actions";






const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        height:'200px'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#3f51b5',
        padding: theme.spacing(6),
    },
}));






 function Single(props) {
    useEffect(() => {
      props.onFetchArticle(props.match.params.id)
    },[]);
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                </Toolbar>
            </AppBar>
            <main>
                {props.article&&
                       <Container maxWidth="sm">
                           <CardMedia
                               className={classes.cardMedia}
                               // src={props.article.image}
                               image={props.article.image}
                           />

                           <Typography gutterBottom variant="h5" component="h2">
                               {props.article.name}
                           </Typography>
                           <Typography>
                              ore magna aliqua. Ut enim ad minim veniam,
                               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </Typography>
                       </Container>

               }
            </main>
            <footer className={classes.footer}>

            </footer>
        </React.Fragment>
    );
}
const mapStateToProps= (state)=> {
     console.log('stateeee',state.SingleArticleReducer)
    return {
        article:state.SingleArticleReducer.return
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        onFetchArticle:(id)=> dispatch(fetchArticleAction(id))

    }
};
const ComponentSingle= connect(mapStateToProps,mapDispatchToProps)(Single);
export default (ComponentSingle)
