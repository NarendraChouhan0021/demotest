import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';

const useStyles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
});

class NewDish extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isIngredien: false,
            dishName: '',
            ingredienUnit: 'Kg',
            ingredienName: '',
            ingredienQuantity: 0,
            ingredienSteps: '',
            ingredienImage: '',
            dishList: []
        }
    }

    componentDidMount() {
        if (this.props.dishList && this.props.dishList.length) {
            this.setState({ dishList: this.props.dishList })
        }
    }

    handleToogle = (type) => {
        this.setState({ [type]: !this.state[type] }, () => {
            if (type === 'isIngredien' && this.state[type]) {
                let dishList = this.state.dishList;
                let obj = {
                    dishName: this.state.dishName,
                    ingredienUnit: this.state.ingredienUnit,
                    ingredienName: this.state.ingredienName,
                    ingredienQuantity: this.state.ingredienQuantity,
                    ingredienSteps: this.state.ingredienSteps,
                    ingredienImage: this.state.ingredienImage,
                };
                dishList.push(obj);
                this.setState({ dishList }, () => {
                    this.props.AddList(dishList);
                });
            }
        })
    }

    handleName = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    handleChange = ({ target }) => {
        this.setState({ ingredienUnit: target.value })
    }

    render() {
        const { classes } = this.props;
        const {
            isIngredien,
            dishName,
            ingredienUnit,
            ingredienName,
            ingredienQuantity,
            ingredienSteps,
            ingredienImage
        } = this.state;
        return (
            <div>
                <div>
                    <Input
                        type='text'
                        placeholder="name"
                        inputProps={{ 'aria-label': 'description' }}
                        name="dishName"
                        value={dishName}
                        onChange={(e) => this.handleName(e)}
                    />

                    <div>
                        <h1>Details of Ingredients</h1>
                        <TextField
                            label="Name"
                            id="margin-none"
                            helperText="name of ingredient"
                            name="ingredienName"
                            value={ingredienName}
                            onChange={(e) => this.handleName(e)}
                        />
                        <Input
                            type="number"
                            label="Quantity"
                            id="margin-none"
                            // defaultValue="Default Value"
                            helperText="quantity of ingredient"
                            name="ingredienQuantity"
                            value={ingredienQuantity}
                            onChange={(e) => this.handleName(e)}
                        />
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={ingredienUnit}
                                onChange={this.handleChange}
                            >
                                <MenuItem value={'Kg'}>Kg</MenuItem>
                                <MenuItem value={'Gram'}>Gram</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            id="standard-full-width"
                            label="Steps"
                            style={{ margin: 8 }}
                            helperText="Enter the steps"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="ingredienSteps"
                            value={ingredienSteps}
                            onChange={(e) => this.handleName(e)}
                        />
                        <Input
                            type='url'
                            inputProps={{ 'aria-label': 'description' }}
                            placeholder="image url"
                            name="ingredienImage"
                            value={ingredienImage}
                            onChange={(e) => this.handleName(e)}
                        />
                    </div>

                    {/* {isIngredien ? <h1>List of Ingredients</h1> : null} */}
                    <Button variant="outlined" color={isIngredien ? "secondary" : "primary"} onClick={() => this.handleToogle('isIngredien')}>
                        Submit
                    </Button>

                </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        AddList: (data) => {
            dispatch({ type: 'ADD_DISH', payload: data })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    // withStyles(useStyles)
)(NewDish)
