/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createScoreboard = /* GraphQL */ `mutation CreateScoreboard(
  $input: CreateScoreboardInput!
  $condition: ModelScoreboardConditionInput
) {
  createScoreboard(input: $input, condition: $condition) {
    id
    userID
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateScoreboardMutationVariables,
  APITypes.CreateScoreboardMutation
>;
export const updateScoreboard = /* GraphQL */ `mutation UpdateScoreboard(
  $input: UpdateScoreboardInput!
  $condition: ModelScoreboardConditionInput
) {
  updateScoreboard(input: $input, condition: $condition) {
    id
    userID
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateScoreboardMutationVariables,
  APITypes.UpdateScoreboardMutation
>;
export const deleteScoreboard = /* GraphQL */ `mutation DeleteScoreboard(
  $input: DeleteScoreboardInput!
  $condition: ModelScoreboardConditionInput
) {
  deleteScoreboard(input: $input, condition: $condition) {
    id
    userID
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteScoreboardMutationVariables,
  APITypes.DeleteScoreboardMutation
>;
