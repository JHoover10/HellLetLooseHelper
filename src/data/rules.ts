export let general = [
    "Cannot place OPs and garrisons in most covered buildings.",
    "Cannot place AP and AT mines on your enemies last two rows/columns, unless that is the only area they control."
]

export let warfare = [
    "Cannot place supplies from supply truck in the two rows/columns of either side of the map."
]

export let offensive = {
    "general": [

    ],
    "offensiveTeam": [
        "Cannot place supplies from supply truck in the two rows/columns of their side of the map.",
        "Recon team cannot reach artillery until the third/middle point is captured.",
        "Does NOT get artillery",
        "Starts with one garrison in front of the first point."
    ],
    "defensiveTeam": [
        "Can place supplies from supply truck in the first row/column of their side of the map.",
        "Once the first point is captured the first two rows/columns will give you the \"TURN BACK NOW\" timer.",
        "After the first point, players can enter the first two rows/columns of the enemy territory.",
        "Starts the game with 6 premade garrisons, 3 normal garrisons in base and 3 (one top, middle and bottom) near the second point.",
        "The premade garrisons do not apply to the 200m rule."
    ]
}