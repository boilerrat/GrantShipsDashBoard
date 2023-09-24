// src/data/RefData/refData.tsx

import hatData from '../hatData'; // Importing hatData to derive referee data

// TypeScript interface for Referee
interface Referee {
  id: string;
  isActive: boolean;
  wearers: string[];
}

// TypeScript interface for HeadReferee
interface HeadReferee {
  id: string;
  isActive: boolean;
  wearer: string;
}

// TypeScript interface for RefereeTeam
interface RefereeTeam {
  id: string;
  isActive: boolean;
  headReferee: HeadReferee;
  referees: Referee;
}

// Extracting referee data from hatData
const refereeData: RefereeTeam = {
  id: hatData.refereeTeam.id,
  isActive: hatData.refereeTeam.isActive,
  headReferee: {
    id: hatData.refereeTeam.headReferee.id,
    isActive: hatData.refereeTeam.headReferee.isActive,
    wearer: hatData.refereeTeam.headReferee.wearer,
  },
  referees: {
    id: hatData.refereeTeam.referees.id,
    isActive: hatData.refereeTeam.referees.isActive,
    wearers: hatData.refereeTeam.referees.wearers,
  },
};

export default refereeData;
