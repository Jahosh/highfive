import React from 'react';
import { Grid, Row, Col, Image, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitTitle, saveQuestion, getJunQuestions } from '../../actions/company';

import ReactDOM from 'react-dom';

class InterviewFormJun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      jobTitle: value,
    });
  }

  handleSubmit(event) {
    this.props.submitTitle(this.state);
    event.preventDefault();
  }
  
  ComponentWillMount(){
    console.log('-----------------------')
    this.props.dispatch(
      getJunQuestions(this.props.companyProfile.questionsType)
   );
  }

  render() {
    return (
      <div>
        <div>
          <div>JUNIOR-Level</div>
          <Form horizontal onSubmit={this.handleSubmit}>
            <br />
            <FormGroup>
              <Col componentClass={ControlLabel} sm={1}>
                JobTitle
        </Col>
              <Col sm={4}>
                <FormControl name="name" type="text" value={this.state.jobTitel} onChange={this.handleChange} />
              </Col>
            </FormGroup>
          </Form>
          <div className="spaceQ"></div>
          <h3>Select 3-5 Algorithm Questions</h3>
          <div className="scroll">
            <div className="questions" onClick={() => this.props.saveQuestion(question)}>Here are questions to select from - algorithms</div>
            <div className="questions" onClick={() => this.saveQuestion()}>Here are questions to select from - algorithms</div>
            <div className="questions" onClick={() => this.saveQuestion()}>Here are questions to select from - algorithms</div>
            <div className="questions" onClick={() => this.saveQuestion()}>Here are questions to select from - algorithms</div>
            <div className="questions" onClick={() => this.saveQuestion()}>Here are questions to select from - algorithms</div>
          </div>
          <div className="spaceQ"></div>
          <h3>Select 3-5 System Design Questions</h3>
          <div className="scroll">
            <div className="questions">Here are questions to select from - system designs</div>
            <div className="questions">Here are questions to select from - system designs</div>
            <div className="questions">Here are questions to select from - system designs</div>
            <div className="questions">Here are questions to select from - system designs</div>
            <div className="questions">Here are questions to select from - system designs</div>
          </div>
          <div className="spaceQ"></div>
          <h3>Select 3-5 System Behavioral Questions</h3>
          <div className="scroll">
            <div className="questions">Here are questions to select from - behavioral</div>
            <div className="questions">Here are questions to select from - behavioral</div>
            <div className="questions">Here are questions to select from - behavioral</div>
            <div className="questions">Here are questions to select from - behavioral</div>
            <div className="questions">Here are questions to select from - behavioral</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    companyProfile: state.companyProfile
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitTitle, saveQuestion, getJunQuestions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewFormJun);