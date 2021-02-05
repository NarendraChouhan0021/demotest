import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NewDish from '../NewDish/NewDish';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdding: false,
            list: []
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.dishList !== this.props.dishList) {
            this.setState({ list: this.props.dishList, isAdding: false })
        }
    }

    handleToogle = (type) => {
        this.setState({ [type]: !this.state[type] })
    }

    render() {
        const { isAdding, list } = this.state;
        return (
            <div>
                <h1>Add Dish</h1>
                <Fab color="primary" aria-label="add" onClick={() => this.handleToogle('isAdding')}>
                    <AddIcon />
                </Fab>
                {list && list.length ?
                    list.map(item => (<Card style={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                style={{ height: 140 }}
                                image={item.ingredienImage}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.dishName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <h2>Steps</h2>
                                    {item.ingredienSteps}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>)) : null}

                {isAdding ? <NewDish /> : null}
            </div>
        )
    }
}

const mapStateToProps = ({ DishDetails }) => {
    const { dishList } = DishDetails;
    return {
        dishList
    }
}

export default connect(mapStateToProps, null)(Home);
