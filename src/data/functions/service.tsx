// src/data/functions/service.tsx

// Import the seasonData array from your data file
import { seasonData } from '../seasonData';

/**
 * @file service.tsx
 * 
 * This service file contains utility functions related to calculating the impact of Grant Ships.
 * 
 * Functions:
 * - calculateTotalImpact: Calculates the total impact score based on individual category scores.
 * - calculateAllImpacts: Calculates the total impact scores for all seasons of all Grant Ships and returns them.
 */

/**
 * @function calculateTotalImpact
 * 
 * This function calculates the total impact score for a given impact object.
 * The impact object contains various categories, each with its own score out of 5.
 * 
 * @param {Object} impact - The impact object containing scores in various categories.
 * @returns {number} - The total impact score.
 */
export const calculateTotalImpact = (impact: { [key: string]: number }): number => {
  // Initialize total impact score to 0
  let totalImpact = 0;

  // Loop through each category in the impact object
  for (const category in impact) {
    // Add the score of the current category to the total impact score
    totalImpact += impact[category];
  }

  // Return the total impact score
  return totalImpact;
};

/**
 * @function calculateAllImpacts
 * 
 * This function calculates the total impact scores for all seasons of all Grant Ships.
 * It uses the calculateTotalImpact function to calculate the total impact for each season.
 * 
 * @returns {Array} - An array of objects containing the name and aggregate total impact for each Grant Ship.
 */
export const calculateAllImpacts = (): any[] => {
  const aggregateData: any[] = [];  // Initialize an empty array to hold the aggregate data

  // Loop through each Grant Ship in the seasonData array
  for (const grantShip of seasonData) {
    // Initialize a variable to hold the aggregate total impact for the current Grant Ship
    let aggregateTotalImpact = 0;

    // Loop through each season for the current Grant Ship
    for (const season of grantShip.seasons) {
      // Calculate the total impact using the calculateTotalImpact function
      const totalImpactScore = calculateTotalImpact(season.impact);

      // Add the total impact score of the current season to the aggregate total impact
      aggregateTotalImpact += totalImpactScore;
    }

    // Add the aggregate total impact for the current Grant Ship to the aggregateData array
    aggregateData.push({
      name: grantShip.name,
      aggregateTotalImpact,
    });
  }

  return aggregateData;  // Return the aggregateData array
};
