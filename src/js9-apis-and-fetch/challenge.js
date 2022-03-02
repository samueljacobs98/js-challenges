/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* To see the structure of the "api's" please have a look in mockPeopleApi.json and mockInterestApi.json */

/* Foundation Challenges */

/**
 * A function which takes a url and returns the JSONified response
 *
 * @param {string} url - The url of the API to fetch from
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean}[]} The data from the API
 */
export const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

/**
 * A function which calls the API from the provided URL and returns just the list of names from each object.
 *
 * @param {string} url - The url of the API to fetch from
 * @returns {string[]} The list of names from the API
 */
export const getNames = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const names = data.map((object) => object.name);
  return names;
};

/**
 * A function which calls the API from the provided URL but only returns the employed people from the API.
 *
 * @param {string} url - The url of the API to fetch from
 * @return {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean}[]} The employed people from the API
 */
export const getEmployedPeople = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const employees = data.filter((person) => person.isEmployed);
  return employees;
};

/* Intermediate Challenges */

/**
 * A function which takes a url and an ID. It will fetch from an API at the url and return a single person object with
 * a matching ID. If no person with that ID exists, instead return a string saying "Person not found".
 *
 * @param {string} url - The url of the API to fetch from
 * @param {string} id - The ID of the person object to return
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean} | string} A person object OR A string saying "Person not found"
 */
export const findPersonWithId = async (url, id) => {
  const response = await fetch(url);
  const data = await response.json();
  const toReturn = data.filter((object) => object.id === id);

  if (toReturn.length) {
    return toReturn[0];
  } else {
    return "Person not found";
  }
};

/**
 * A function which takes a url and an interest. It will fetch from an API at the url and return people who have a
 * matching interest.
 *
 * @param {string} url - The url of the API to fetch from
 * @param {string} interest - The interest to match
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean}[] | string} A group of person objects OR A string saying "No people with interest found"
 */
export const getPeopleWithMatchingInterests = async (url, interest) => {
  const response = await fetch(url);
  const data = await response.json();

  const sharedInterest = data.filter((object) =>
    object.interests.includes(interest)
  );
  if (sharedInterest.length) {
    return sharedInterest;
  } else {
    return "No people with interest found";
  }
};

/* Advanced Challenges */

/**
 * A function which calls an API from the provided url and adds a description key to each person object.
 * The description should have the following format:
 * "My name is Joanna, I am 78 years old and 140cm tall. I enjoy knitting, baking and MMA. I am not currently employed"
 * So the full object would look like:
 * {
 *   id: "003",
 *   name: "Joanna",
 *   age: 78,
 *   height: 140,
 *   interests: ["knitting", "baking", "MMA"],
 *   isEmployed: false,
 *   description: "My name is Joanna, I am 78 years old and 140cm tall. I enjoy knitting, baking, and MMA. I am not currently employed"
 *   description: `My name is ${object.name}, I am ${object.age} years old and ${object.height}cm tall. I enjoy ${object.interests[0]}, ${object.interests[1]}, and ${object.interests[2]}. I am not currently employed`
 * }
 *
 * OR
 *
 * {
 *   id: "005",
 *   name: "Travis"
 *   age: 22,
 *   height: 160,
 *   interests: ["swimming", "watching TV", "knitting"],
 *   isEmployed: true,
 *   description: "My name is Travis, I am 22 years old and 160cm tall. I enjoy swimming, watching TV and knitting. I am currently employed",
 * }
 *
 * This should NOT modify the original data
 *
 * @param {string} url - The url of the API to fetch from
 * @returns {{id: string, name: string, age: number, height: number, interests: string[], isEmployed: boolean, description: string}[]} A group of person objects with added description key
 */
export const setDescriptions = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const array = data.map((object) => {
    const newObject = { ...object };
    return newObject;
  });
  array.forEach((personObject) => {
    if (personObject.isEmployed) {
      personObject.description = `My name is ${personObject.name}, I am ${personObject.age} years old and ${personObject.height}cm tall. I enjoy ${personObject.interests[0]}, ${personObject.interests[1]} and ${personObject.interests[2]}. I am currently employed`;
    } else {
      personObject.description = `My name is ${personObject.name}, I am ${personObject.age} years old and ${personObject.height}cm tall. I enjoy ${personObject.interests[0]}, ${personObject.interests[1]} and ${personObject.interests[2]}. I am not currently employed`;
    }
  });
  return array;
};

/* Expert Challenges */

/**
 * A function that uses 2 API's to fill information about the interests of each person.
 * Each person object that's returned should have this structure:
 * {
 *   id: "003",
 *   name: "Joanna",
 *   age: 78,
 *   height: 140,
 *   interests: [
 *     {
 *       interest: "knitting",
 *       costPerAnnum: 400,
 *       sizeOfCommunity: 10000000,
 *       isDoneInGroups: false
 *     },
 *     {
 *       interest: "baking",
 *       costPerAnnum: 400,
 *       sizeOfCommunity: 20000000,
 *       isDoneInGroups: false
 *     },
 *     {
 *       interest: "MMA",
 *       costPerAnnum: 1000,
 *       sizeOfCommunity: 20000000,
 *       isDoneInGroups: true
 *     }
 *   ],
 *   isEmployed: false
 * };
 *
 * This should NOT modify the original data
 *
 * @param {string} peopleUrl - The url of the people api
 * @param {string} interestUrl - The url of the interest api
 * @returns {{
 *  id: string,
 *  name: string,
 *  age: number,
 *  height: number,
 *  interests: {interest: string, costPerAnnum: number, sizeOfCommunity: number, isDoneInGroups: boolean}[],
 *  isEmployed: boolean,
 * }[]}
 */
export const setInterestDetails = async (peopleUrl, interestsUrl) => {
  const peopleResponse = await fetch(peopleUrl);
  const peopleData = await peopleResponse.json();

  const interestsResponse = await fetch(interestsUrl);
  const interestsData = await interestsResponse.json();

  const peopleDataArray = peopleData.map((object) => {
    const newObject = { ...object };
    newObject.interests = [...newObject.interests];
    return newObject;
  });
  const interestsDataArray = interestsData.map((object) => {
    const newObject = { ...object };
    return newObject;
  });

  peopleDataArray.forEach((person) => {
    interestsDataArray.forEach((interestDetails) => {
      const interestString = interestDetails.interest;
      if (person.interests.includes(interestString)) {
        const index = person.interests.indexOf(interestString);
        person.interests[index] = { ...interestDetails };
      }
    });
  });

  return peopleDataArray;
};
