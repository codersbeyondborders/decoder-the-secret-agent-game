/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateScoreboardInput = {
  id?: string | null,
  userID: string,
  score: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelScoreboardConditionInput = {
  userID?: ModelStringInput | null,
  score?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScoreboardConditionInput | null > | null,
  or?: Array< ModelScoreboardConditionInput | null > | null,
  not?: ModelScoreboardConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Scoreboard = {
  __typename: "Scoreboard",
  id: string,
  userID: string,
  score: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateScoreboardInput = {
  id: string,
  userID?: string | null,
  score?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteScoreboardInput = {
  id: string,
};

export type ModelScoreboardFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelStringInput | null,
  score?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScoreboardFilterInput | null > | null,
  or?: Array< ModelScoreboardFilterInput | null > | null,
  not?: ModelScoreboardFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelScoreboardConnection = {
  __typename: "ModelScoreboardConnection",
  items:  Array<Scoreboard | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionScoreboardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScoreboardFilterInput | null > | null,
  or?: Array< ModelSubscriptionScoreboardFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateScoreboardMutationVariables = {
  input: CreateScoreboardInput,
  condition?: ModelScoreboardConditionInput | null,
};

export type CreateScoreboardMutation = {
  createScoreboard?:  {
    __typename: "Scoreboard",
    id: string,
    userID: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateScoreboardMutationVariables = {
  input: UpdateScoreboardInput,
  condition?: ModelScoreboardConditionInput | null,
};

export type UpdateScoreboardMutation = {
  updateScoreboard?:  {
    __typename: "Scoreboard",
    id: string,
    userID: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteScoreboardMutationVariables = {
  input: DeleteScoreboardInput,
  condition?: ModelScoreboardConditionInput | null,
};

export type DeleteScoreboardMutation = {
  deleteScoreboard?:  {
    __typename: "Scoreboard",
    id: string,
    userID: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetScoreboardQueryVariables = {
  id: string,
};

export type GetScoreboardQuery = {
  getScoreboard?:  {
    __typename: "Scoreboard",
    id: string,
    userID: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListScoreboardsQueryVariables = {
  filter?: ModelScoreboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScoreboardsQuery = {
  listScoreboards?:  {
    __typename: "ModelScoreboardConnection",
    items:  Array< {
      __typename: "Scoreboard",
      id: string,
      userID: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ScoreboardsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelScoreboardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ScoreboardsByUserIDQuery = {
  scoreboardsByUserID?:  {
    __typename: "ModelScoreboardConnection",
    items:  Array< {
      __typename: "Scoreboard",
      id: string,
      userID: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateScoreboardSubscriptionVariables = {
  filter?: ModelSubscriptionScoreboardFilterInput | null,
};

export type OnCreateScoreboardSubscription = {
  onCreateScoreboard?:  {
    __typename: "Scoreboard",
    id: string,
    userID: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateScoreboardSubscriptionVariables = {
  filter?: ModelSubscriptionScoreboardFilterInput | null,
};

export type OnUpdateScoreboardSubscription = {
  onUpdateScoreboard?:  {
    __typename: "Scoreboard",
    id: string,
    userID: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteScoreboardSubscriptionVariables = {
  filter?: ModelSubscriptionScoreboardFilterInput | null,
};

export type OnDeleteScoreboardSubscription = {
  onDeleteScoreboard?:  {
    __typename: "Scoreboard",
    id: string,
    userID: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
