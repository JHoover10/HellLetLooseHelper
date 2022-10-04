export let general = [
    "Cannot place OPs and garrisons in most covered buildings.",
    "Cannot place AP and AT mines on your enemies HQ two rows/columns, unless that is the only area they control."
]

export let warfare = [
    "Cannot place supplies from supply truck in the two rows/columns of either side of the map.",
    "Both teams start the game with 1 medium tank (spawns middle), 1 light tank (spawns left/top), 1 recon tank (spawns right/bottom), 3 troop trucks, and 1 supply truck (spawns middle).",
    "At the start of the game, the middle point is a \"neutral\" zone until one team captures it. While \"nuetral\" garrisons cannot be placed, but OPs can.",
    "Players count of 1 times the cap strength while in the 4x4 zone around the point and count for 3 times the cap strength in the point."
]

export let offensive = {
    "general": [
        "Offensive team gets only 30 minutes to capture the point, once the point is capture the 30 minutes resets.",
        "When time runs out and the offensive team is capturing the point, the match will go into overtime and the offensive team will lose 5 manpower per second.",
        "Players only counts for cap strength if they are in the point."
    ],
    "offensiveTeam": [
        "Cannot place supplies from supply truck in the two rows/columns of their side of the map.",
        "Recon team cannot reach artillery until the third/middle point is captured.",
        "Does NOT get artillery",
        "Starts with one garrison in front of the first point.",
        "Starts with 1000 of each resource."
    ],
    "defensiveTeam": [
        "Can place supplies from supply truck in the first row/column of their side of the map.",
        "Once the first point is captured the first two rows/columns will give you the \"TURN BACK NOW\" timer.",
        "After the first point, players can enter the first two rows/columns of the enemy territory.",
        "Starts the game with 6 premade garrisons, 3 normal garrisons in base and 3 (one top, middle and bottom) near the second point.",
        "The premade garrisons do not apply to the 200m rule.",
        "Starts with 0 of each resource."
    ]
}