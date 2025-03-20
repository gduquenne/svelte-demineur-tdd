/**
 * Représente les différents états possibles du jeu
 */
export enum GameStatus {
  READY = 'ready',
  PLAYING = 'playing',
  WON = 'won',
  LOST = 'lost'
}

/**
 * Niveaux de difficulté prédéfinis
 */
export const Difficulty = {
  BEGINNER: { rows: 9, cols: 9, mines: 10 },
  INTERMEDIATE: { rows: 16, cols: 16, mines: 40 },
  EXPERT: { rows: 16, cols: 30, mines: 99 }
} as const;

/**
 * Type représentant les difficultés disponibles
 */
export type DifficultyLevel = typeof Difficulty[keyof typeof Difficulty];

/**
 * Représente l'état du jeu
 */
export interface GameState {
  status: GameStatus;
  timer: number;
  flagCount: number;
  difficulty: DifficultyLevel;
  firstClick: boolean;
}

/**
 * Crée un nouvel état de jeu avec les paramètres spécifiés
 * @param difficulty La difficulté du jeu (par défaut BEGINNER)
 * @returns Un nouvel état de jeu
 */
export function createGameState(difficulty: DifficultyLevel = Difficulty.BEGINNER): GameState {
  return {
    status: GameStatus.READY,
    timer: 0,
    flagCount: 0,
    difficulty,
    firstClick: true
  };
} 