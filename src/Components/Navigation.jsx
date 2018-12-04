import React, { Component } from 'react';
import '../App.css';
import {Nav, MenuItem, NavDropdown, NavItem, Tabs, Tab, Button} from "react-bootstrap";
import Education from './Education'
import Professional from './Professional';
import Contact from './Contact';


class Navigation extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            key: 1
        };
    }
    handleHide(){
        this.props.showFunction()
    }




    handleSelect(key) {
        this.setState({ key });
    }

    render() {
        return (
            <div hidden={this.state.hide}>
                <Tabs
                    activeKey={this.state.key}
                    onSelect={this.handleSelect}
                    id="controlled-tab"
                    className={"Tab"}
                >
                    <Tab eventKey={1} title="Education">
                        <Education/>
                    </Tab>

                    <Tab eventKey={2} title="Professional Experience">
                        <Professional/>
                    </Tab>

                    <Tab eventKey={3} title="Contact Details">
                        <Contact/>
                    </Tab>
                </Tabs>
                <Button onClick={this.handleHide}>Hide</Button>
            </div>
        );
    }
}

export default Navigation;