import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './Menu.css'
var Menu = React.createClass({

    getInitialState: function () {
        return {focused: 0};
    },

    clicked: function (index) {




        this.setState({focused: index});
    },

    render: function () {


        let self = this;
        console.dir(self)
        console.log(this)
        let key = 0;



        return (
            <div>
                <ul>{ this.props.items.map(function (m, index) {
                    key++;
                    var style = '';

                    if (self.state.focused === index) {
                        style = 'focused';
                    }




                    return <li key={key} className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;

                }) }

                </ul>

                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );

    }
});
export default Menu;

