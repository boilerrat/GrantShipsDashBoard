/**
 * @file seasonData.tsx
 * 
 * This file contains the data model for Grant Ships and their performance across various seasons.
 * Each Grant Ship has a name and an array of seasons.
 * Each season has the following fields:
 * - season: The season number
 * - allocated: The total funds allocated for the season
 * - distributed: The total funds actually distributed
 * - grants: The number of grants given out
 * - impact: An object containing the impact scores in various categories
 * 
 * The impact object has the following categories:
 * - ecosystem: Impact on the ecosystem (out of 5)
 * - community: Impact on the community (out of 5)
 * - RFP: Impact on Request for Proposals (out of 5)
 * - Governance: Impact on Governance (out of 5)
 * - Development: Impact on Development (out of 5)
 * 
 * The total impact score is the sum of all these categories.
 */

export const seasonData = [
    {
      name: "Grant Ship 1",
      seasons: [
        {
          season: 1,
          active: true,
          allocated: 50000,
          distributed: 10000,
          grants: 10,
          impact: {
            ecosystem: 1,
            community: 3,
            RFP: 0,
            Governance: 2,
            Development: 0,
          },
        },
        {
            season: 2,
            active: true,
            allocated: 30000,
            distributed: 28000,
            grants: 40,
            impact: {
              ecosystem: 4,
              community: 5,
              RFP: 0,
              Governance: 3,
              Development: 0,
            },
          },
          {
            season: 3,
            active: true,
            allocated: 40000,
            distributed: 29000,
            grants: 8,
            impact: {
              ecosystem: 3,
              community: 3,
              RFP: 1,
              Governance: 3,
              Development: 1,
            },
          },
        // Add more seasons here
      ],
    },
    {
      name: "Grant Ship 2",
      seasons: [
        {
          season: 1,
          active: true,
          allocated: 50000,
          distributed: 49000,
          grants: 15,
          impact: {
            ecosystem: 5,
            community: 3,
            RFP: 2,
            Governance: 2,
            Development: 4,
          },
        },
        {
            season: 2,
            active: true,
            allocated: 75000,
            distributed: 42000,
            grants: 10,
            impact: {
              ecosystem: 3,
              community: 1,
              RFP: 2,
              Governance: 3,
              Development: 5,
            },
          },
          {
            season: 3,
            active: true,
            allocated: 60000,
            distributed: 52500,
            grants: 20,
            impact: {
              ecosystem: 4,
              community: 4,
              RFP: 3,
              Governance: 0,
              Development: 5,
            },
          },
        // Add more seasons here
      ],
    },
    {
      name: "Grant Ship 3",
      seasons: [
        {
          season: 1,
          active: true,
          allocated: 50000,
          distributed: 35000,
          grants: 3,
          impact: {
            ecosystem: 3,
            community: 0,
            RFP: 5,
            Governance: 0,
            Development: 4,
          },
        },
        {
            season: 2,
            active: true,
            allocated: 45000,
            distributed: 45000,
            grants: 5,
            impact: {
              ecosystem: 2,
              community: 0,
              RFP: 5,
              Governance: 2,
              Development: 5,
            },
          },
          {
            season: 3,
            active: true,
            allocated: 50000,
            distributed: 49000,
            grants: 15,
            impact: {
              ecosystem: 2,
              community: 3,
              RFP: 1,
              Governance: 2,
              Development: 2,
            },
          },
        // Add more seasons here
      ],
    },
  ];
  