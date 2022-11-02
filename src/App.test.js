const calculateDistance =  require ("./App");

describe("Distance", () => {
  const route = [
    {
      name: "QEW",
      id: 1,
      routes: [
        {
          toId: 2,
          distance: 6.062,
        },
      ],
    },
    {
      name: "Dundas Street",
      id: 2,
      routes: [
        {
          toId: 3,
          distance: 3.847,
        },
        {
          toId: 1,
          distance: 6.062,
        },
      ],
    },
    {
      name: "Appleby Line",
      id: 3,
      routes: [
        {
          toId: 4,
          distance: 4.153,
        },
        {
          toId: 2,
          distance: 3.847,
        },
      ],
    },
    {
      name: "Bronte Road",
      id: 4,
      routes: [
        {
          toId: 5,
          distance: 4.927,
        },
        {
          toId: 3,
          distance: 4.153,
        },
      ],
    },
    {
      name: "Neyagawa Blvd.",
      id: 5,
      routes: [
        {
          toId: 6,
          distance: 3.227,
        },
        {
          toId: 4,
          distance: 4.927,
        },
      ],
    },
  ];
  it("should calculate the correct distance", () => {
    expect(calculateDistance(route,route[0], route[4])).toBe(18.989);
  });
});

describe("Distance", () => {
    const route = [
      {
        name: "QEW",
        id: 1,
        routes: [
          {
            toId: 2,
            distance: 6.062,
          },
        ],
      },
      {
        name: "Dundas Street",
        id: 2,
        routes: [
          {
            toId: 3,
            distance: 3.847,
          },
          {
            toId: 1,
            distance: 6.062,
          },
        ],
      },
      {
        name: "Appleby Line",
        id: 3,
        routes: [
          {
            toId: 4,
            distance: 4.153,
          },
          {
            toId: 2,
            distance: 3.847,
          },
        ],
      },
      {
        name: "Bronte Road",
        id: 4,
        routes: [
          {
            toId: 5,
            distance: 4.927,
          },
          {
            toId: 3,
            distance: 4.153,
          },
        ],
      },
      {
        name: "Neyagawa Blvd.",
        id: 5,
        routes: [
          {
            toId: 6,
            distance: 3.227,
          },
          {
            toId: 4,
            distance: 4.927,
          },
        ],
      },
    ];
    it("should calculate the correct distance", () => {
      expect(calculateDistance(route,route[4], route[0])).toBe(18.989);
    });
  });
  
