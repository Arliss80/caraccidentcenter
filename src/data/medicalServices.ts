import { MedicalService } from '../types/medical';
import { emergencyCare } from './services/emergency';
import { urgentCare } from './services/urgent';
import { diagnosticImaging } from './services/diagnostic';
import { orthopedicCare } from './services/orthopedic';
import { neurologyCare } from './services/neurology';
import { chiropracticCare } from './services/chiropractic';
import { physicalTherapy } from './services/physical-therapy';
import { painManagement } from './services/pain-management';
import { surgicalCare } from './services/surgeons';

export const medicalServices: MedicalService[] = [
  emergencyCare,
  surgicalCare, // Added surgical care near the top since it's often critical
  urgentCare,
  diagnosticImaging,
  orthopedicCare,
  neurologyCare,
  chiropracticCare,
  physicalTherapy,
  painManagement
];