export const types = [
    { id: 1, name: "On site" },
    { id: 2, name: "Remote" },
]

export const categories = [
    { id: 1, name: "Medical" },
    { id: 2, name: "Software" },
    { id: 3, name: "Technology" },
]

export const countries = [
    { id: 1, name: "Romania", code: "RO" },
    { id: 2, name: "Rusia", code: "RUS" },
    { id: 3, name: "America", code: "USA" }
]

export const counties = [
    { id: 1, name: "Arges", code: "Ag" },
    { id: 2, name: "Bucuresti", code: "B" },
    { id: 3, name: "Prahova", code: "Ph" }
]

export const cities = [
    { id: 1, name: "Bucuresti", code: "Bucuresti" },
    { id: 2, name: "Pitesti", code: "Pitesti" }
]

export const conference = {
    id: 1,
    name: "Introduction in GraphQL",
    startDate: new Date("2020-10-15T20:00:00.000Z"),
    endDate: new Date("2020-10-06T23:30:00.000Z"),
    location: {
        id: 1,
        name: "Totalsoft",
        country: { id: 1, name: "Romania", code: "ROU" },
        county: { id: 2, name: "Bucuresti", code: "B" },
        city: { id: 1, name: "Bucuresti", code: "Bucuresti" },
        address: "Bucuresti, Romania",
        latitude: "",
        longitude: ""
    },
    type: { id: 1, name: "On site" },
    category: { id: 2, name: "Software" },
    speakers: [
        { id: 1, name: "Alexandra Capatina", nationality: "Ro", rating: 5, image: "", isMainSpeaker: true },
        { id: 2, name: "Dragos Rosca", nationality: "Ro", rating: 4, image: "", isMainSpeaker: false },
        { id: 3, name: "Costi Diaconita", nationality: "Ro", rating: 3, image: "", isMainSpeaker: false },
        { id: 4, name: "Elena Dumitrescu", nationality: "Ro", rating: 2, image: "", isMainSpeaker: false }
    ]
}