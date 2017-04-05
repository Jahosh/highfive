import axios from 'axios';

export function submitProfile(profile) {
  console.log('profile in submitLoc actions', profile);
  return {
    type: 'PROFILE_SUBMITTED',
    payload: profile,
  };
}

export function createInterview(){
  return {
    type: 'CREATE_INTERVIEW'
 };
}

export function senPos(){
  return {
    type: 'SENIOR'
 };
}

export function junPos(){
  return {
    type: 'JUNIOR'
 };
}

export function midPos(){
  return {
    type: 'MID'
 };
}

export function submitTitle(title){
  return {
    type: 'JOBTITLE',
    payload: title,
 };
}

export function saveQuestion(question){
  console.log('question', question)
  return {
    type: 'SELECT_QUESTION',
    payload: question,
 };
}

export function getAll(data) {
  return {
    type: 'GET_JUNQ',
    payload: data,
  };
}

export function getJunQuestions(questionType){
  console.log('companyProfile.QUESTIONTYPE----------', questionType);
  return (dispatch) => {
    axios.get('api/getJunQuestions', questionType)
      .then((questions) => {
        dispatch(getAll(questions));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}