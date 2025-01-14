/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getScoreboard = /* GraphQL */ `query GetScoreboard($id: ID!) {
  getScoreboard(id: $id) {
    id
    userID
    score
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetScoreboardQueryVariables,
  APITypes.GetScoreboardQuery
>;
export const listScoreboards = /* GraphQL */ `query ListScoreboards(
  $filter: ModelScoreboardFilterInput
  $limit: Int
  $nextToken: String
) {
  listScoreboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      score
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListScoreboardsQueryVariables,
  APITypes.ListScoreboardsQuery
>;
export const scoreboardsByUserID = /* GraphQL */ `query ScoreboardsByUserID(
  $userID: String!
  $sortDirection: ModelSortDirection
  $filter: ModelScoreboardFilterInput
  $limit: Int
  $nextToken: String
) {
  scoreboardsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      score
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ScoreboardsByUserIDQueryVariables,
  APITypes.ScoreboardsByUserIDQuery
>;
