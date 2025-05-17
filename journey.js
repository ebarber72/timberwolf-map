// WWII Journey Data
const journeyData = [
    {
    name: "Induction into Army",
    lat: 39.9749972,
    lng: -82.9900396,
    date: "February 18, 1943",
    description: "Inducted into the U.S. Army at Fort Hayes, Columbus, Ohio.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Fort_Hayes_Columbus_OH.jpg"
  },
  {
    name: "Basic Training",
    lat: 41.547,
    lng: -83.015,
    date: "July 1943",
    description: "Completed basic training at Camp Perry, Ohio.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Camp_Perry_OH.jpg"
  },
  {
    name: "Officer Candidate School",
    lat: 32.3600,
    lng: -84.9344,
    date: "December 1943",
    description: "Graduated as Second Lieutenant from OCS at Fort Benning, Georgia.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Fort_Benning_GA.jpg"
  },
  {
    name: "Joined 131st Infantry",
    lat: 32.3600,
    lng: -84.9344,
    date: "February 1944",
    description: "Assigned to the 131st Infantry at Fort Benning, Georgia.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Fort_Benning_GA.jpg"
  },
  {
    name: "Maneuvers with 104th Division",
    lat: 32.6984,
    lng: -114.6504,
    date: "March 1944",
    description: "Participated in maneuvers with the 104th Timberwolves Division near Yuma, Arizona.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Yuma_AZ.jpg"
  },
  {
    name: "Stationed at Camp Carson",
    lat: 38.7375,
    lng: -104.7889,
    date: "March 1944",
    description: "Relocated to Camp Carson, Colorado with the division.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Camp_Carson_CO.jpg"
  },
  {
    name: "Mine School Training",
    lat: 35.3620,
    lng: -86.2089,
    date: "July 1944",
    description: "Attended Second Army Mine School at Camp Forrest, Tennessee.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Camp_Forrest_TN.jpg"
  },
  {
    name: "Staging at Camp Kilmer",
    lat: 40.5167,
    lng: -74.4458,
    date: "August 1944",
    description: "Prepared for overseas deployment at Camp Kilmer, New Jersey.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Camp_Kilmer_NJ.jpg"
  },
  {
    name: "Departure to Europe",
    lat: 40.5167,
    lng: -74.4458,
    date: "August 1944",
    description: "Shipped out aboard the captured German liner LA JEUNA in a 30-ship convoy.",
    image: "images/lejeune.jpg"
  },
  {
    name: "Landing at Cherbourg",
    lat: 49.6398,
    lng: -1.6164,
    date: "September 1944",
    description: "Arrived in Cherbourg, France after an 11-day voyage.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Cherbourg_France.jpg"
  },
  {
    name: "Staging in Cologne",
    lat: 50.9375,
    lng: 6.9603,
    date: "September 1944",
    description: "Moved to staging area in Cologne, France.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Cologne_France.jpg"
  },
  {
    name: "Stationed at Barneville",
    lat: 49.3833,
    lng: -1.7500,
    date: "October 1944",
    description: "Stationed in Barneville, France on the English Channel.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Barneville_France.jpg"
  },
  {
    name: "Relieved British Division",
    lat: 50.4670,
    lng: 4.7830,
    date: "October 1944",
    description: "Relieved a British Division in Como, Belgium.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Como_Belgium.jpg"
  },
  {
    name: "Combat in Belgium and Holland",
    lat: 50.8503,
    lng: 4.3517,
    date: "November 1944",
    description: "Fought alongside Canadian First Army in Belgium and Holland to Maas River.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Belgium_Holland_WWII.jpg"
  },
  {
    name: "Wounded in Action",
    lat: 50.7756,
    lng: 6.0836,
    date: "November 3, 1944",
    description: "Earned first Purple Heart for bullet injury to forehead.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Aachen_Germany.jpg"
  },
  {
    name: "Battle at Crucifix Hill",
    lat: 50.7756,
    lng: 6.0836,
    date: "Late November 1944",
    description: "Relieved the 1st Division on Crucifix Hill in Aachen, Germany.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Aachen_Germany.jpg"
  },
  {
    name: "Promotion to 1st Lieutenant",
    lat: 50.7756,
    lng: 6.0836,
    date: "November 1944",
    description: "Promoted to First Lieutenant in Aachen, Germany.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Aachen_Germany.jpg"
  },
  {
    name: "Silver Star Award",
    lat: 50.7756,
    lng: 6.0836,
    date: "November 28, 1944",
    description: "Decorated with Silver Star for gallantry in action.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Aachen_Germany.jpg"
  },
  {
    name: "Second Purple Heart",
    lat: 50.2670,
    lng: 6.6830,
    date: "December 1944",
    description: "Received Purple Heart for shrapnel wound in Lammersdorf, Germany.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Lammersdorf_Germany.jpg"
  },
  {
    name: "Capture of Cologne",
    lat: 50.9375,
    lng: 6.9603,
    date: "March 1945",
    description: "Participated in the capture of Cologne, France.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Cologne_France.jpg"
  },
  {
    name: "Crossed the Rhine",
    lat: 50.6434,
    lng: 7.2278,
    date: "March 22, 1945",
    description: "Crossed the Rhine at Honnef, Germany.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Honnef_Germany.jpg"
  },
  {
    name: "Advance to Mulde River",
    lat: 51.8680,
    lng: 12.2250,
    date: "April 1945",
    description: "Fought to the Mulde River in Germany.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mulde_River_Germany.jpg"
  },
  {
    name: "Contact Patrol Mission",
    lat: 51.8680,
    lng: 12.2250,
    date: "April 25, 1945",
    description: "Volunteered for 20-mile contact patrol to meet Russian Army; captured and escaped.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mulde_River_Germany.jpg"
  },
  {
    name: "Met Russian Forces",
    lat: 52.0000,
    lng: 11.0000,
    date: "April 27, 1945",
    description: "Met Russian forces near the Elbe River.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Elbe_River_Germany.jpg"
  },
  {
    name: "Victory in Europe Day",
    lat: 52.0000,
    lng: 11.0000,
    date: "May 8, 1945",
    description: "Celebrated V-E Day, marking the end of WWII in Europe.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Elbe_River_Germany.jpg"
  }
];

window.journeyData = journeyData;