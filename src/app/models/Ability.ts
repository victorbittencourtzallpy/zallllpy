import { AbilityTypes } from "../enums/abilityTypes"

export interface CandidateAbility {
    [key:string]: string | number | string[];
    name: string;                // Ability name (e.g., "Java", "React")
    score: number;               // Proficiency score (1-10)
    strongPoints: string[];      // List of strong points in this ability
    weakPoints: string[];        // List of weak points in this ability
    yearsOfExperience?: number;  // Optional: Years of experience in this ability
    type: AbilityTypes;           // Type of ability (e.g., "Frontend", "Backend")
    pointsOfAttention?: string[];  // Details to verify in an interview
    suggestedQuestions: string[];  // Questions to evaluate proficiency
  }