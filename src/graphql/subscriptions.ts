/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateScoreboard = /* GraphQL */ `subscription OnCreateScoreboard(
  $filter: ModelSubscriptionScoreboardFilterInput
) {
  onCreateScoreboard(filter: $filter) {
    id
    userID
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateScoreboardSubscriptionVariables,
  APITypes.OnCreateScoreboardSubscription
>;
export const onUpdateScoreboard = /* GraphQL */ `subscription OnUpdateScoreboard(
  $filter: ModelSubscriptionScoreboardFilterInput
) {
  onUpdateScoreboard(filter: $filter) {
    id
    userID
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateScoreboardSubscriptionVariables,
  APITypes.OnUpdateScoreboardSubscription
>;
export const onDeleteScoreboard = /* GraphQL */ `subscription OnDeleteScoreboard(
  $filter: ModelSubscriptionScoreboardFilterInput
) {
  onDeleteScoreboard(filter: $filter) {
    id
    userID
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteScoreboardSubscriptionVariables,
  APITypes.OnDeleteScoreboardSubscription
>;
