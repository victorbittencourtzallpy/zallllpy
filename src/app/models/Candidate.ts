import { AbilityTypes } from '../enums/abilityTypes';
import { ProcessStep } from '../enums/processSteps.enum';
import { CandidateAbility } from './Ability';

// Define the interface for general candidate information
interface CandidateGeneralInfo {
  processStep: ProcessStep,
  name: string;
  location: string;
  languages: string[];
  education: Education[];
  certifications?: string[];
  professionalExperience: Experience[];
}

// Education details
interface Education {
  degree: string;
  field?: string;
  institution: string;
  completionDate?: string;
}

// Experience details
interface Experience {
  title: string;
  company: string;
  duration: string;
  responsibilities?: string;
}

// Define the main interface for candidate abilities
// Define the main Candidate interface
export interface Candidate {
  id: number;
  generalInfo: CandidateGeneralInfo;
  abilities: CandidateAbility[];
  overallScore: number;
}

export interface MinimalCandidate {
  id: number;
  name: string;
  overallScore: number;
  processStep: ProcessStep
}
