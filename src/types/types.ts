export type jobType = {
  id: number;
  title: string;
  desc: string;
  location: string;
  remote: string;
  department: string;
  type: string;
};

export type employerJobType = {
  id: number;
  title: string;
  desc: string;
  location: string;
  remote: string;
  department: string;
  type: string;
  applicantCount: number;
  isBookmarked: boolean;
};

export type talentPoolListingType = {
  id: number;
  title: string;
  department: string;
  applicantCount: number;
  isBookmarked: boolean;
};

export type VacantPositionType = {
  companyName: string;
  roleTitle: string;
  remote: string;
  location: string;
  department: string;
  jobDescription: string;
  jobRequirements: string;
};

export type mainNavbarItem = {
  id: number;
  title: string;
  link: string;
  icon?: React.ReactNode;
  category?: string;
};

export type BoardColumnType = {
  id: number;
  title: string;
}

export type BoardCardType = {
  id: number;
  title: string;
  desc: string;
  columnId: number;
}
