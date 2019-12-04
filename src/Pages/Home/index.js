import React, {useEffect} from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {getArticles} from "../../utils/Redux/actions";
import {Link} from "react-router-dom";


//style unit
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
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#3f51b5',
        padding: theme.spacing(6),
    },
}));



 function Home(props) {

     useEffect(() => {
         props.articlesActions();
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
                {/* title header  */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            HALL OF FAME
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* card map unit */}
                    <Grid container spacing={4}>
                        {props.articles.data&&props.articles.data.list.map((card,index)=>{
                            const backUrl = '/singleArticle/';
                            return(
                                <Grid item key={card.id} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={card.image}
                                            title="Image title"
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.name}
                                            </Typography>
                                            {/*<Typography>*/}
                                            {/*    {card.name}*/}
                                            {/*</Typography>*/}
                                        </CardContent>
                                        <CardActions>
                                            <Link  to={{ pathname:backUrl+`${card.id}`,state: { index: index}}} key={index}  >
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </main>
            {/* Footer unit */}
            <footer className={classes.footer}>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

//we can receive some props from redux
const mapStateToProps= (state)=> {

    return {
        articles:state.articleReducer
    }
};
// We can dispatch actions to the reducer and sagas
const mapDispatchToProps= (dispatch)=> {
    return {
        articlesActions:()=>{
            dispatch(getArticles())
        }
    };
};
const BlogComponent= connect(mapStateToProps, mapDispatchToProps)(Home);
export default BlogComponent
