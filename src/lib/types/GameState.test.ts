import { describe, it, expect } from 'vitest';
import { GameStatus, Difficulty, createGameState } from './GameState';
import type { GameState } from './GameState';

describe('GameState Types', () => {
  describe('GameStatus', () => {
    it('should define the possible game statuses', () => {
      expect(GameStatus.READY).toBeDefined();
      expect(GameStatus.PLAYING).toBeDefined();
      expect(GameStatus.WON).toBeDefined();
      expect(GameStatus.LOST).toBeDefined();
    });
  });

  describe('Difficulty', () => {
    it('should define the difficulty presets', () => {
      expect(Difficulty.BEGINNER).toBeDefined();
      expect(Difficulty.INTERMEDIATE).toBeDefined();
      expect(Difficulty.EXPERT).toBeDefined();
    });

    it('should have the correct values for each difficulty', () => {
      expect(Difficulty.BEGINNER).toEqual({ rows: 9, cols: 9, mines: 10 });
      expect(Difficulty.INTERMEDIATE).toEqual({ rows: 16, cols: 16, mines: 40 });
      expect(Difficulty.EXPERT).toEqual({ rows: 16, cols: 30, mines: 99 });
    });
  });

  describe('GameState', () => {
    it('should have status, timer, flagCount, and difficulty properties', () => {
      const gameState: GameState = {
        status: GameStatus.READY,
        timer: 0,
        flagCount: 0,
        difficulty: Difficulty.BEGINNER,
        firstClick: true,
      };
      
      expect(gameState.status).toBe(GameStatus.READY);
      expect(gameState.timer).toBe(0);
      expect(gameState.flagCount).toBe(0);
      expect(gameState.difficulty).toEqual(Difficulty.BEGINNER);
      expect(gameState.firstClick).toBe(true);
    });
  });

  describe('createGameState', () => {
    it('should create a game state with default settings', () => {
      const gameState = createGameState();
      
      expect(gameState.status).toBe(GameStatus.READY);
      expect(gameState.timer).toBe(0);
      expect(gameState.flagCount).toBe(0);
      expect(gameState.difficulty).toEqual(Difficulty.BEGINNER);
      expect(gameState.firstClick).toBe(true);
    });

    it('should create a game state with custom difficulty', () => {
      const gameState = createGameState(Difficulty.EXPERT);
      
      expect(gameState.status).toBe(GameStatus.READY);
      expect(gameState.timer).toBe(0);
      expect(gameState.flagCount).toBe(0);
      expect(gameState.difficulty).toEqual(Difficulty.EXPERT);
      expect(gameState.firstClick).toBe(true);
    });
  });
}); 