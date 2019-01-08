const orksArr = {
  leftHand: [
    [10, 417, 104, 191],
    [134, 417, 108, 191],
    [262, 417, 109, 191],
  ],
  weapon: [
    [475, 239, 220, 153],
    [242, 239, 213, 158],
    [10, 239, 212, 138],
  ],
  leftLeg: [
    [91, 10, 61, 93],
    [10, 10, 61, 93],
    [172, 10, 61, 93],
  ],
  rightLeg: [
    [95, 123, 65, 96],
    [10, 123, 65, 96],
    [180, 123, 65, 96],
  ],
  body: [
    [10, 1086, 198, 229],
    [446, 1086, 198, 219],
    [228, 1086, 198, 226],
  ],
  head: [
    [470, 628, 219, 207],
    [10, 628, 210, 201],
    [240, 628, 210, 201],
  ],
  headAnim: [
    [470, 628, 219, 207],
    [10, 628, 210, 201],
    [240, 628, 210, 201],
  ],
  rightHand: [
    [282, 855, 118, 211],
    [145, 855, 117, 198],
    [10, 855, 115, 197],
  ],
};

const knightAnimation = {
  idle: [
    0, 0, 244, 292,
    390, 0, 244, 292,
    780, 0, 244, 292,
    1170, 0, 244, 292,
    1555, 0, 244, 292,
  ],
  attack: [
    25, 425, 282, 312,
    430, 425, 282, 312,
    850, 425, 282, 312,
    1305, 425, 282, 312,
    1775, 425, 282, 312,
    25, 425, 282, 312,
    25, 425, 282, 312,
  ],
  heal: [
    50, 817, 281, 295,
    502, 817, 281, 295,
    938, 817, 281, 295,
    1410, 817, 281, 295,
    1870, 817, 281, 295,
    50, 817, 281, 295,
    50, 817, 281, 295,
  ],
};

const spellAnimations = {
  monsterAttack: [
    384, 387, 125, 125,
    0, 0, 125, 125,
    126, 0, 125, 125,
    254, 0, 125, 125,
    384, 0, 125, 125,
    0, 126, 125, 125,
    126, 126, 125, 125,
    254, 126, 125, 125,
    384, 126, 125, 125,
    0, 262, 125, 125,
    126, 262, 125, 125,
    254, 262, 125, 125,
    384, 262, 125, 125,
    0, 387, 125, 125,
    126, 387, 125, 125,
    254, 387, 125, 125,
  ],
  heal: [
    28, 34, 135, 150,
    221, 34, 135, 150,
    414, 34, 135, 150,
    605, 34, 135, 150,
    797, 34, 135, 150,
    28, 220, 135, 150,
    221, 220, 135, 150,
    414, 220, 135, 150,
    605, 220, 135, 150,
    797, 220, 135, 150,
    28, 416, 135, 150,
    221, 416, 135, 150,
    414, 416, 135, 150,
    605, 416, 135, 150,
    797, 416, 135, 150,
    28, 606, 135, 150,
    221, 606, 135, 150,
    414, 606, 135, 150,
    605, 606, 135, 150,
    797, 606, 135, 150,
  ],
  heroAttack: [
    9, 0, 176, 120,
    200, 0, 176, 120,
    393, 0, 176, 120,
    585, 0, 176, 120,
    776, 0, 176, 120,
    9, 152, 176, 172,
    200, 152, 176, 172,
    393, 152, 176, 172,
    585, 152, 176, 172,
    776, 152, 176, 172,
    9, 348, 176, 172,
    200, 348, 176, 172,
    393, 348, 176, 172,
    585, 348, 176, 172,
    776, 348, 176, 172,
    9, 545, 176, 172,
    200, 545, 176, 172,
    393, 545, 176, 172,
    585, 545, 176, 172,
    776, 545, 176, 172,
    9, 776, 176, 172,
    200, 776, 176, 172,
    393, 776, 176, 172,
    585, 776, 176, 172,
    776, 776, 176, 172,
    9, 968, 176, 172,
    200, 968, 176, 172,
    393, 968, 176, 172,
    585, 968, 176, 172,
    776, 968, 176, 172,
    9, 1161, 176, 172,
    200, 1161, 176, 172,
    393, 1161, 176, 172,
    585, 1161, 176, 172,
    776, 1161, 176, 172,
    9, 1357, 176, 172,
    200, 1357, 176, 172,
    393, 1357, 176, 172,
    585, 1357, 176, 172,
    776, 1357, 176, 172,
  ],
};

export { orksArr, spellAnimations, knightAnimation };