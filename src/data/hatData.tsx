// src/data/hatData.tsx

type Wearer = string | "NAN"; // Type alias for wearer, can be a string representing an address or "NAN"

interface CardStatus {
  yellowCard1: boolean;
  yellowCard2: boolean;
  redCard: boolean;
  greenCard: boolean;
}

interface Crew {
  id: string;
  isActive: boolean;
  wearers: Wearer[];
 }

interface Captain {
  id: string;
  isActive: boolean;
  wearer: Wearer;
  crew: Crew;
}

interface GrantShip {
  id: string;
  name: string;
  isActive: boolean;
  wearer: Wearer;
  captain: Captain;
  cards: CardStatus;
}

interface RefereeTeam {
  id: string;
  isActive: boolean;
  headReferee: {
    id: string;
    isActive: boolean;
    wearer: Wearer;
  };
  referees: {
    id: string;
    isActive: boolean;
    wearers: Wearer[];
  };
}

interface GrantShipsTopHat {
  id: string;
  isActive: boolean;
  refereeTeam: RefereeTeam;
  grantShips: GrantShip[];
}

const hatData: GrantShipsTopHat = {
  id: "83",
  isActive: true,
  refereeTeam: {
    id: "83.1",
    isActive: true,
    headReferee: {
      id: "83.1.1",
      isActive: true,
      wearer: "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db",
    },
    referees: {
      id: "83.1.1.1",
      isActive: true,
      wearers: ["0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB", "0x617F2E2fD72FD9D5503197092aC168c91465E7f2"],
    },
  },
  grantShips: [
    {
      id: "83.2",
      name: "Grant Ship 1",
      isActive: true,
      wearer: "0x17F6AD8Ef982297579C203069C1DbfFE4348c372",
      captain: {
        id: "83.2.1",
        isActive: true,
        wearer: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B",
        crew: {
          id: "83.2.1.1",
          isActive: true,
          wearers: ["0x72aAbd1305f6b7F8c6FBE7895B2DdC4b6E40eDD7", "0x6Fb00a93a49a7506668700e12578ABE7BAd866E9"],
          cards: {
            yellowCard1: false,
            yellowCard2: false,
            redCard: false,
            greenCard: true,
          },
        },
      },
    },
    {
        id: "83.3",
        name: "Grant Ship 2",
        isActive: true,
        wearer: "0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678",
        captain: {
          id: "83.3.1",
          isActive: true,
          wearer: "0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678",
          crew: {
            id: "83.3.1.1",
            isActive: true,
            wearers: ["0x742d35Cc6634C0532925a3b844Bc454e4438f44eE", "0x2B5634C42055806a59e9107ED44D43c426E58258"],
            cards: {
              yellowCard1: false,
              yellowCard2: false,
              redCard: false,
              greenCard: true,
            },
          },
        },
      },
      {
        id: "83.4",
        name: "Grant Ship 3",
        isActive: true,
        wearer: "0x5AaEFe84E0fB3DD1f0fCfF6fA7468124986B91bd",
        captain: {
        id: "83.4.1",
        isActive: true,
        wearer: "0x6cc5F688a315f3dC28A7781717a9A798a59fDA7b",
        crew: {
            id: "83.4.1.1",
            isActive: true,
            wearers: ["0x9d8E5fAc117bA6666c6Bb3Db8a5eDf7d4B59DB9e", "0x53d284357ec70cE289D6D64134DfAc8E511c8a3D"],
            cards: {
            yellowCard1: true,
            yellowCard2: false,
            redCard: false,
            greenCard: true,
            },
        },
        },
     },
     {
         id: "83.5",
         name: "Grant Ship 4",
         isActive: false,
         wearer: "NAN",
         captain: {
         id: "83.5.1",
         isActive: false,
         wearer: "NAN",
         crew: {
             id: "83.5.1.1",
             isActive: false,
             wearers: ["NAN"],
             cards: {
             yellowCard1: true,
             yellowCard2: true,
             redCard: true,
             greenCard: false,
             },
         },
         },
    }     
  ],
};

export default hatData;
