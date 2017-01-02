import * as actions from './actionTypes';

// START::Registration or Login action creators //
export function loginUser(user) {
  return { type: actions.LOGIN_USER, payload: user };
};

export function resetLogin(user) {
  return { type: actions.RESET_LOGIN, payload: user };
}

export function registerUser(user) {
  return { type: actions.REGISTER_USER, payload: user };
}

export function successUserLogin(data) {
  return {type: actions.LOGIN_USER_SUCCESS, payload: data };
}

export function failureUserLogin(error) {
  return {type: actions.LOGIN_USER_FAILURE, payload: error };
}

export function successRegisterUser(data) {
  return {type: actions.REGISTER_USER_SUCCESS, payload: data };
}

export function failureRegisterUser(error) {
  return {type: actions.REGISTER_USER_FAILURE, payload: error };
}

export function attemptingRegOrLogin() {
  return { type: actions.ATTEMPTING_REG_OR_LOGIN };
}

export function logoffUser() {
  return { type: actions.LOGOFF_USER };
}
// END::Registration or Login action creators //

// START::Children action creators //
export function createChild(child) {
  return { type: actions.CREATE_CHILD, payload: child };
}

export function successCreateChild(data) {
  return { type: actions.CREATE_CHILD_SUCCESS, payload: data };
}

export function failureCreateChild(error) {
  return { type: actions.CREATE_CHILD_FAILURE, payload: error };
}

export function deleteChild(id) {
  return {type: actions.DELETE_CHILD, payload: id };
}

export function successDeleteChild(id) {
  return { type: actions.DELETE_CHILD_SUCCESS, payload: id };
}

export function failureDeleteChild(error) {
  return { type: actions.DELETE_CHILD_FAILURE, payload: error };
}

export function attemptingChild() {
  return { type: actions.CHILD_ATTEMPT };
}

export function setChild(child) {
  return { type: actions.SET_CHILD, payload: child };
}

export function getChildren() {
  return { type: actions.GET_CHILDREN };
}

export function successGetChildren(children) {
  return { type: actions.GET_CHILDREN_SUCCESS, payload: children };
}

export function failureGetChildren(error) {
  return { type: actions.GET_CHILDREN_FAILURE, payload: error };
}
// END::Children action creators //

// START::Event action creators //
export function createEvent(singleEvent) {
  return { type: actions.CREATE_EVENT, payload: singleEvent };
}

export function successCreateEvent(data) {
  return { type: actions.CREATE_EVENT_SUCCESS, payload: data };
}

export function failureCreateEvent(error) {
  return { type: actions.CREATE_EVENT_FAILURE, payload: error };
}

export function deleteEvent(id) {
  return {type: actions.DELETE_EVENT, payload: id };
}

export function successDeleteEvent() {
  return { type: actions.DELETE_EVENT_SUCCESS };
}

export function failureDeleteEvent(error) {
  return { type: actions.DELETE_EVENT_FAILURE, payload: error };
}

export function getEvents(id) {
  return { type: actions.GET_EVENTS, payload: id };
}

export function getEventsSuccess(data) {
  return { type: actions.GET_EVENTS_SUCCESS, payload: data.events };
}

export function getEventsFailure(error) {
  return { type: actions.GET_EVENTS_FAILURE, payload: error };
}

export function resetEvents() {
  return  { type: actions.RESET_EVENTS };
}

export function setEvent(event) {
  return { type: actions.SET_EVENT, payload: event };
}
// END::Event action creators //

// START::Reward action creators //
export function createReward(reward) {
  return { type: actions.CREATE_REWARD, payload: reward };
}

export function successCreateReward(data) {
  return { type: actions.CREATE_REWARD_SUCCESS, payload: data };
}

export function failureCreateReward(error) {
  return { type: actions.CREATE_REWARD_FAILURE, payload: error };
}

export function deleteReward(id) {
  return {type: actions.DELETE_REWARD, payload: id };
}

export function successDeleteReward() {
  return { type: actions.DELETE_REWARD_SUCCESS };
}

export function failureDeleteReward(error) {
  return { type: actions.DELETE_REWARD_FAILURE, payload: error };
}

export function attemptingReward() {
  return { type: actions.REWARD_ATTEMPT };
}
// END::Reward action creators //

// START::RewardPoint action creators //
export function createPoint(point) {
  return { type: actions.CREATE_POINT, payload: point };
}

export function successCreatePoint(data) {
  return { type: actions.CREATE_POINT_SUCCESS, payload: data };
}

export function failureCreatePoint(error) {
  return { type: actions.CREATE_POINT_FAILURE, payload: error };
}

export function attemptingCreatePoint() {
  return { type: actions.CREATE_POINT_ATTEMPT };
}
// END::RewardPoint action creators //

// START::RewardRedeemed action creators //
export function createRewardRedeemed(rewardId) {
  return { type: actions.CREATE_REWARD_REDEEMED, payload: rewardId };
}

export function successCreateRewardRedeemed(data) {
  return { type: actions.REWARD_REDEEMED_SUCCESS, payload: data };
}

export function failureCreateRewardRedeemed(error) {
  return { type: actions.REWARD_REDEEMED_FAILURE, payload: error };
}

export function attemptingRewardRedeemed() {
  return { type: actions.REWARD_REDEEMED_ATTEMPT };
}
// END::RewardRedeemed action creators //
