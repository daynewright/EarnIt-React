
// START::Registration or Login action types //
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const ATTEMPTING_REG_OR_LOGIN = 'ATTEMPTING_REG_OR_LOGIN';
export const RESET_LOGIN = 'RESET_LOGIN';
export const LOGOFF_USER = 'LOGOFF_USER';
// END::Registration or Login action types //

// START::Children action types //
export const CREATE_CHILD = 'CREATE_CHILD';
export const CREATE_CHILD_SUCCESS = 'CREATE_CHILD_SUCCESS';
export const CREATE_CHILD_FAILURE = 'CREATE_CHILD_FAILURE';

export const DELETE_CHILD = 'DELETE_CHILD';
export const DELETE_CHILD_SUCCESS = 'DELETE_CHILD_SUCCESS';
export const DELETE_CHILD_FAILURE = 'DELETE_CHILD_FAILURE';

export const SET_CHILD = 'SET_CHILD';

export const GET_CHILDREN = 'GET_CHILDREN';
export const GET_CHILDREN_SUCCESS = 'GET_CHILDREN_SUCCESS';
export const GET_CHILDREN_FAILURE = 'GET_CHILDREN_FAILURE';
// END::Children action types //

// START::Event action types //
export const CREATE_EVENT = 'CREATE_EVENT';
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_FAILURE = 'CREATE_EVENT_FAILURE';

export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

export const RESET_EVENTS = 'RESET_EVENTS';
export const SET_EVENT = 'SET_EVENT';
// END::Event action types //

// START::Reward action types //
export const CREATE_REWARD = 'CREATE_REWARD';
export const CREATE_REWARD_SUCCESS = 'CREATE_REWARD_SUCCESS';
export const CREATE_REWARD_FAILURE = 'CREATE_REWARD_FAILURE';

export const GET_REWARD = 'GET_REWARD';
export const GET_REWARD_SUCCESS = 'GET_REWARD_SUCCESS';
export const GET_REWARD_FAILURE = 'GET_REWARD_FAILURE';
export const RESET_REWARDS = 'RESET_REWARDS';

export const DELETE_REWARD = 'DELETE_REWARD';
export const DELETE_REWARD_SUCCESS = 'DELETE_REWARD_SUCCESS';
export const DELETE_REWARD_FAILURE = 'DELETE_REWARD_FAILURE';
// END::Reward action types //

// START::RewardPoints action types //
export const CREATE_POINT = 'CREATE_POINT';
export const CREATE_POINT_SUCCESS = 'CREATE_POINT_SUCCESS';
export const CREATE_POINT_FAILURE = 'CREATE_POINT_FAILURE';
// END::RewardPoints action types //

// START::RewardRedeemed action types //
export const CREATE_REWARD_REDEEMED = 'DELETE_REWARD';
export const REWARD_REDEEMED_SUCCESS = 'REWARD_REDEEMED_SUCCESS';
export const REWARD_REDEEMED_FAILURE = 'REWARD_REDEEMED_FAILURE';
// END::RewardRedeemed action types //
