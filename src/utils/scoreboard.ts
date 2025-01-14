import { generateClient } from 'aws-amplify/api';
import { 
  CreateScoreboardMutation,
  UpdateScoreboardMutation,
  ListScoreboardsQuery,
  CreateScoreboardInput,
  UpdateScoreboardInput,
  ModelSortDirection,
  Scoreboard
} from '../API.ts';
import { 
  createScoreboard, 
  updateScoreboard
} from '../graphql/mutations.ts';
import { 
  scoreboardsByUserID, 
  listScoreboards
} from '../graphql/queries.ts';
// Removed redundant import

export class ScoreboardManager {
  private static client = generateClient();
  // Validate userID format
  static validateUserID(userID: string): boolean {
    // Check length (6-10 characters)
    if (userID.length < 6 || userID.length > 16) {
      return false;
    }
    
    // Check if alphanumeric with underscore only
    const validPattern = /^[a-zA-Z0-9_]+$/;
    return validPattern.test(userID);
  }

  

  static async getOrCreateUser(userID: string): Promise<Scoreboard | null> {
    if (!this.validateUserID(userID)) {
      throw new Error('Invalid userID');
    }
    try {
      // Query by userID instead of id
      const existingUsers = await this.client.graphql<ListScoreboardsQuery>({
        query: scoreboardsByUserID, 
        variables: { userID }
      });

      console.warn('existingUsers:', existingUsers);

      if (existingUsers.data?.scoreboardsByUserID?.items?.length > 0) {
        return existingUsers.data.scoreboardsByUserID.items[0] as Scoreboard;
      }

      // Create new user if doesn't exist
      const newUserInput: CreateScoreboardInput = {
        userID: userID,  // Add userID field
        score: 0
      };

      const newUser = await this.client.graphql<CreateScoreboardMutation>({
        query: createScoreboard,
        variables: { input: newUserInput }
      });
      
      console.log('Returned user = ', newUser);
      console.warn('Returned user = ', newUser);
      console.error('Returned user = ', newUser);
      
      if (newUser.data?.createScoreboard) {
        return newUser.data?.createScoreboard as Scoreboard;
      }else{
        return null;
      }
      
    } catch (error) {
      console.error('Error in getOrCreateUser:', error);
      return null;
    }
  }
  
  static async updateScore(userID: string, newScore: number): Promise<Scoreboard | null> {
    try {
      console.warn('updateScore...');

      const user = await this.getOrCreateUser(userID);
      console.warn('updateScore user:', user);

      if (!user) {
        throw new Error('Failed to get or create user');
      }
  
      console.log('Current user score:', user.score);
      console.log('Attempting to update to new score:', newScore);
  
      const updateInput: UpdateScoreboardInput = {
        id: user.id,
        score: newScore
      };
  
      const updatedScore = await this.client.graphql<UpdateScoreboardMutation>({
        query: updateScoreboard,
        variables: { input: updateInput }
      });
  
      console.warn('Update response:', updatedScore);
  
      if (!updatedScore.data?.updateScoreboard) {
        console.warn('Update successful but no data returned');
      }
  
      return updatedScore.data?.updateScoreboard || null;
  
    } catch (error) {
      console.error('Error in updateScore:', error);
      console.error('Error details:', {
        userID,
        newScore,
        errorMessage: error.message,
        errorStack: error.stack
      });
      throw error;
    }
  }
  

  // Fetch top 10 scores
  static async getTopScores(limit: number = 10): Promise<Scoreboard[]> {
    try {
      const response = await this.client.graphql<ListScoreboardsQuery>({
        query: listScoreboards,
        variables: {
          limit,
          sortDirection: ModelSortDirection.DESC,
          sort: {
            field: 'score',
            direction: ModelSortDirection.DESC
          }
        }
      });

      return (response.data?.listScoreboards?.items || []) as Scoreboard[];
    } catch (error) {
      console.error('Error in getTopScores:', error);
      throw error;
    }
  }
}