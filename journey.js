// WWII Journey Data
const journeyData = [
    {
    name: "Induction into Army",
    lat: 39.974986787687044,
    lng: -82.98990140738344,
    date: "February 18, 1943",
    description: "Inducted into the U.S. Army at Fort Hayes, Columbus, Ohio.",
    images: ["images/in-uniform.jpeg"]
  },
  {
    name: "Basic Training",
    lat: 41.53250142763892, 
    lng: -83.0186809774934,
    date: "July 1943",
    description: "Completed basic training at Camp Perry, Ohio.",
    images: [
      "images/walking-on-base.jpeg"
    ]
  },
  {
    name: "Officer Candidate School",
    lat: 32.3600,
    lng: -84.9344,
    date: "December 1943",
    description: "Graduated as Second Lieutenant from OCS at Fort Benning, Georgia. Assigned to the 131st Infantry.",
    images: ["images/1943 probably Officer Candidate School.jpg"]
  },
  {
    name: "Maneuvers with 104th Division",
    lat: 32.6984,
    lng: -114.6504,
    date: "March 1944",
    description: "Participated in maneuvers with the 104th Timberwolves Division near Yuma, Arizona.",
    images: ["https://images.squarespace-cdn.com/content/v1/528d39d1e4b0d60933da00ae/1441962307773-7YWBCSFQYL5GUJKTSKSS/image-asset.jpeg?format=2500w"]
  },
  {
    name: "Stationed at Camp Carson",
    lat: 38.7375,
    lng: -104.7889,
    date: "March 1944",
    description: "Relocated to Camp Carson, Colorado with the division.",
    images: ["images/Colorado-1.jpg"]
  },
  {
    name: "Mine School Training",
    lat: 35.3620,
    lng: -86.2089,
    date: "July 1944",
    description: "Attended Second Army Mine School at Camp Forrest, Tennessee.",
    images: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8OtPc9A9MlfJCX0Lz4RKm5Bo_8Va56lZ9q730AJRDOKpWaeGWUNoIFo2_PpTZq15vn-03Re3FF6IRCoAyNWeXEdDLegqAikExFvx4k7ADlmFVFTEdWsfMy0Zj95Kk7aw8ghnMKVnjQrzFJrC3xRRl9KmKcajTxpB8nyPxcxLBmNXooww7bTDhAQId/w640-h396/camp%20forrest%20entrance.jpg"]
  },
  {
    name: "Staging at Camp Kilmer",
    lat: 40.5167,
    lng: -74.4458,
    date: "August 1944",
    description: "Prepared for overseas deployment at Camp Kilmer, New Jersey.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Camp_Kilmer_Map.jpg/960px-Camp_Kilmer_Map.jpg"]
  },
  {
    name: "Departure to Europe",
    lat: 40.5909996,
    lng: -73.8909988,
    date: "August 28, 1944",
    description: "Shipped out aboard the USS Lejeune in a 30-ship convoy.",
    images: ["images/lejeune.jpg"]
  },
  {
    name: "Landing at Cherbourg",
    lat: 49.6398,
    lng: -1.6164,
    date: "September 6, 1944",
    description: "Arrived in Cherbourg, France after an 11-day voyage.",
    images: ["images/cherbourg.jpg"]
  },
  {
    name: "Staging in Valognes",
    lat: 49.5100,
    lng: -1.4700,
    date: "September 7, 1944",
    description: "Stationed in Valognes, France for 19 days.",
    images: ["images/valognes.jpeg","https://images-cdn.bridgemanimages.com/api/1.0/image/150.PNP.2658930.7055475/395383.jpg"]
  },
  {
    name: "Stationed at Barneville",
    lat: 49.3833,
    lng: -1.7500,
    date: "September 26, 1944",
    description: "Stationed in Barneville for 19 days.",
    images: ["images/Barneville-France.jpg"]
  },
    {
    name: "Travel by foot and rail to Carentan",
    lat: 49.30312635,
    lng: -1.2481559518311396,
    date: "October 15, 1944",
    description: "Company F, 413th Infantry: Left Barneville for Le Haye du Puits (foot), then by rail, arrived Carentan.",
    images: ["images/to Carentan.jpeg","https://www.trains.com/wp-content/uploads/2020/10/wwiitroop.jpg"]
  },
    {
    name: "Travel by rail to Vires, France",
    lat: 48.84470158709981,
    lng: -0.8868231624710592,
    date: "October 16, 1944",
    description: "Traveled by rail from Carentan to Vires, France.",
    images: ["images/to Vires.jpeg", "https://www.trains.com/wp-content/uploads/2020/10/wwiitroop.jpg"]
  },
    {
    name: "Travel by rail to Dreux, France",
    lat: 48.745491315660686,
    lng: 1.3611140028452222,
    date: "October 17, 1944",
    description: "Traveled by rail from Vires to Dreux, France.",
    images: ["images/to Druex.jpeg","https://www.trains.com/wp-content/uploads/2020/10/wwiitroop.jpg"]
  },
    {
    name: "Travel by rail to St. Quentin, France",
    lat: 49.846844463638966,
    lng: 3.2799219989865427,
    date: "October 18, 1944",
    description: "Traveled by rail from Dreux to St. Quentin, France.",
    images: ["images/to St Quentin.jpeg","https://www.trains.com/wp-content/uploads/2020/10/wwiitroop.jpg"]
  },
    {
    name: "Travel by rail to Vilvorde, Belgium",
    lat: 50.924432177403816,
    lng: 4.4249697516033,
    date: "October 19, 1944",
    description: "Traveled by rail from St Quentin, France to Vilvorde Belgium. Crossed into Belgium 0715.",
    images: ["images/to Vilvorde Belgium.jpeg", "https://www.trains.com/wp-content/uploads/2020/10/wwiitroop.jpg"]
  },
    {
    name: "Timberwolves enter battle in Belgium, relieving a British Division",
    lat: 51.47466381829387,
    lng: 4.649891193473268,
    date: "October 23, 1944",
    description: "This was the first time a US Army regiment relieved an Allied unit on the Western Front",
    images: ["images/holland-first-battle.jpg"]
  },
  {
    name: "Combat in Belgium and Holland",
    lat: 50.8503,
    lng: 4.3517,
    date: "November 1944",
    description: "Fought alongside Canadian First Army in Belgium and Holland to Maas River.",
    images: ["images/holland-first-battle.jpg"]
  },
  {
    name: "Wounded in Action",
    lat: 50.7756,
    lng: 6.0836,
    date: "November 3, 1944",
    description: "Earned first Purple Heart for bullet injury to forehead.",
    images: ["images/1944-11-03-Purple-Heart.jpeg"]
  },
  {
    name: "Battle at Crucifix Hill",
    lat: 50.7756,
    lng: 6.0836,
    date: "Late November 1944",
    description: "Relieved the 1st Division on Crucifix Hill in Aachen, Germany.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/8/8d/Aachen_Germany.jpg"]
  },
  {
    name: "Silver Star Award",
    lat: 50.8572,
    lng: 6.2687,
    date: "November 28, 1944",
    description: "Decorated with Silver Star for gallantry in action.",
    images: ["images/Silver-Star-1944-11-28.jpg"]
  },
    {
    name: "Promotion to 1st Lieutenant",
    lat: 50.7756,
    lng: 6.0836,
    date: "November 1944",
    description: "Promoted to First Lieutenant in Aachen, Germany.",
    images: ["images/german-town-before-attack.jpg"]
  },
  {
    name: "Second Purple Heart",
    lat: 50.2670,
    lng: 6.6830,
    date: "December 1944",
    description: "Received Purple Heart for shrapnel wound in Lammersdorf, Germany.",
    images: ["images/1945-03-22-Purple-Heart.jpeg"]
  },
  {
    name: "Capture of Cologne",
    lat: 50.9375,
    lng: 6.9603,
    date: "March 1945",
    description: "Participated in the capture of Cologne, France.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/4/4e/Cologne_France.jpg"]
  },
  {
    name: "Crossed the Rhine",
    lat: 50.6434,
    lng: 7.2278,
    date: "March 22, 1945",
    description: "Crossed the Rhine at Honnef, Germany.",
    images: [
      "https://warfarehistorynetwork.com/wp-content/uploads/2023/05/Q-Sum23-Rhine-Cross-6.jpg",
      "https://warfarehistorynetwork.com/wp-content/uploads/2003/05/Q-Sum23-Rhine-Cross-8-e1684245171363.jpg"
    ]
  },
  {
    name: "Advance to Mulde River",
    lat: 51.8680,
    lng: 12.2250,
    date: "April 1945",
    description: "Fought to the Mulde River in Germany.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/2/2a/Mulde_River_Germany.jpg"]
  },
  {
    name: "Contact Patrol Mission",
    lat: 51.64334810513766,
    lng: 12.879729690104488,
    date: "April 25, 1945",
    description: "Volunteered for 20-mile contact patrol to meet Russian Army; captured and escaped.",
    images: ["images/Dommitzch-Kreis-Torgau.jpg","images/leading-patrol.jpg"]
  },
  {
    name: "Met Russian Forces",
    lat: 51.57719432816764,
    lng: 13.015412183223551,
    date: "April 27, 1945",
    description: "Met Russian forces near the Elbe River.",
    images: ["images/Lt Bartlett handshake with Russian General v2.jpeg"]
  },
  {
    name: "Victory in Europe Day",
    lat: 52.0000,
    lng: 11.0000,
    date: "May 8, 1945",
    description: "Celebrated V-E Day, marking the end of WWII in Europe.",
    images: ["images/Timberwolf Parade 1945.jpg"]
  }
];

window.journeyData = journeyData;
