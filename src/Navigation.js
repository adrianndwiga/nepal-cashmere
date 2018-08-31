import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class Navigation extends Component {
    render() {
        return (
        <nav class="navbar navbar-default">
            <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Home</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
                <li><a href="#">Link</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                </ul>
            </div>
            </div>
        </nav>
      );
    }
}

export default Navigation;