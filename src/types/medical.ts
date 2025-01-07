export interface MedicalService {
  id: string;
  title: string;
  titleEs?: string;
  icon: string;
  shortDescription: string;
  shortDescriptionEs?: string;
  fullDescription: string;
  fullDescriptionEs?: string;
  benefits: string[];
  benefitsEs?: string[];
  pipCoverage: {
    details: string;
    detailsEs?: string;
    requirements: string[];
    requirementsEs?: string[];
  };
  atFaultCoverage: {
    details: string;
    detailsEs?: string;
    process: string[];
    processEs?: string[];
  };
  faqs: Array<{
    question: string;
    questionEs?: string;
    answer: string;
    answerEs?: string;
  }>;
}