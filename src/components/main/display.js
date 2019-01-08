import Konva from 'konva';
import { orksArr, spellAnimations, knightAnimation } from './index';

export default class Display {
  constructor() {
    this.stage = new Konva.Stage({
      container: 'canvas',
      width: 1250,
      height: window.innerHeight * 0.6,
    });
    this.knightLayer = new Konva.Layer();
    this.knightSprite = new Image();
    this.knight = '';

    this.monsterLayer = new Konva.Layer();
    this.monsterSprite = new Image();
    this.monster = '';

    this.monsterAttackLayer = new Konva.Layer();
    this.monsterAttackSprite = new Image();
    this.monsterAttack = '';

    this.healLayer = new Konva.Layer();
    this.healSprite = new Image();
    this.heal = '';

    this.heroAttackLayer = new Konva.Layer();
    this.heroAttackSprite = new Image();
    this.heroAttack = '';

    this.preload();
  }

  preload() {
    this.knightSprite.src = './../../screens/game/images/knight_sprite.png';
    this.monsterSprite.src = './../../screens/game/images/monster_sprite.png';
    this.monsterAttackSprite.src = './../../screens/game/images/monsterAttack.png';
    this.healSprite.src = './../../screens/game/images/heal.png';
    this.heroAttackSprite.src = './../../screens/game/images/hero_attack.png';
  }

  drawMonster() {
    const i = Math.round(Math.random() * 2);
    const j = Math.round(Math.random() * 2);
    const k = Math.round(Math.random() * 2);
    this.monsterLayer.clear();

    // Draw Left Hand
    const leftHand = new Konva.Image({
      x: 900,
      y: 200,
      image: this.monsterSprite,
      width: orksArr.leftHand[i][2],
      height: orksArr.leftHand[i][3],
    });
    leftHand.crop({
      x: orksArr.leftHand[i][0],
      y: orksArr.leftHand[i][1],
      width: orksArr.leftHand[i][2],
      height: orksArr.leftHand[i][3],
    });
    // add the shape to the layer
    this.monsterLayer.add(leftHand);

    // Draw Weapon
    const weapon = new Konva.Image({
      x: 760,
      y: 240,
      image: this.monsterSprite,
      width: orksArr.weapon[i][2],
      height: orksArr.weapon[i][3],
    });
    weapon.crop({
      x: orksArr.weapon[i][0],
      y: orksArr.weapon[i][1],
      width: orksArr.weapon[i][2],
      height: orksArr.weapon[i][3],
    });
    // add the shape to the layer
    this.monsterLayer.add(weapon);

    // Draw LeftLeg
    const leftLeg = new Konva.Image({
      x: 980,
      y: 340,
      image: this.monsterSprite,
      width: orksArr.leftLeg[i][2],
      height: orksArr.leftLeg[i][3],
    });
    leftLeg.crop({
      x: orksArr.leftLeg[i][0],
      y: orksArr.leftLeg[i][1],
      width: orksArr.leftLeg[i][2],
      height: orksArr.leftLeg[i][3],
    });
    // add the shape to the layer
    this.monsterLayer.add(leftLeg);

    // Draw RighttLeg
    const rightLeg = new Konva.Image({
      x: 1030,
      y: 340,
      image: this.monsterSprite,
      width: orksArr.rightLeg[i][2],
      height: orksArr.rightLeg[i][3],
    });
    rightLeg.crop({
      x: orksArr.rightLeg[i][0],
      y: orksArr.rightLeg[i][1],
      width: orksArr.rightLeg[i][2],
      height: orksArr.rightLeg[i][3],
    });
    // add the shape to the layer
    this.monsterLayer.add(rightLeg);

    // Draw Body
    const body = new Konva.Image({
      x: 950,
      y: 160,
      image: this.monsterSprite,
      width: orksArr.body[j][2],
      height: orksArr.body[j][3],
    });
    body.crop({
      x: orksArr.body[j][0],
      y: orksArr.body[j][1],
      width: orksArr.body[j][2],
      height: orksArr.body[j][3],
    });
    // add the shape to the layer
    this.monsterLayer.add(body);

    // Draw Head
    const head = new Konva.Image({
      x: 930,
      y: 80,
      image: this.monsterSprite,
      width: orksArr.head[k][2],
      height: orksArr.head[k][3],
    });
    head.crop({
      x: orksArr.head[k][0],
      y: orksArr.head[k][1],
      width: orksArr.head[k][2],
      height: orksArr.head[k][3],
    });
    // add the shape to the layer
    this.monsterLayer.add(head);
    const amplitude = 5;
    const period = 2000;
    const anim = new Konva.Animation(((frame) => {
      head.setY(amplitude * Math.sin(frame.time * 2 * Math.PI / period) + 80);
    }), this.monsterLayer);

    anim.start();
    // Draw rightHand
    const rightHand = new Konva.Image({
      x: 1090,
      y: 200,
      image: this.monsterSprite,
      width: orksArr.rightHand[i][2],
      height: orksArr.rightHand[i][3],
    });
    rightHand.crop({
      x: orksArr.rightHand[i][0],
      y: orksArr.rightHand[i][1],
      width: orksArr.rightHand[i][2],
      height: orksArr.rightHand[i][3],
    });
    // add the shape to the layer
    this.monsterLayer.add(rightHand);

    // add the shape to the layer
    this.monsterLayer.add(rightHand);
    // add the layer to the stage
    this.stage.add(this.monsterLayer);
    this.monsterLayer.draw();
  }

  drawKnight() {
    const animations = knightAnimation;
    this.knight = new Konva.Sprite({
      x: 50,
      y: 150,
      image: this.knightSprite,
      animation: 'idle',
      animations,
      frameRate: 7,
      frameIndex: 0,
    });
    // add the shape to the layer
    this.knightLayer.add(this.knight);

    // add the layer to the stage
    this.stage.add(this.knightLayer);

    // start sprite animation
    this.knight.start();
  }

  setKnightAnimation(anim) {
    this.knight.setAnimation(anim);
  }
  // Spell Fire Ball
  drawMonsterAttack() {
    const animations = {
      fire: spellAnimations.monsterAttack,
    };
    this.monsterAttack = new Konva.Sprite({
      x: 130,
      y: 170,
      image: this.monsterAttackSprite,
      animation: 'fire',
      animations,
      frameRate: 16,
      frameIndex: 0,
    });
    // add the shape to the layer
    this.monsterAttackLayer.add(this.monsterAttack);

    // add the layer to the stage
    this.stage.add(this.monsterAttackLayer);

    // start sprite animation
    this.monsterAttack.start();
    this.monsterAttack.on('frameIndexChange', () => {
      if (this.monsterAttack.frameIndex() === 15) {
        setTimeout(() => {
          this.monsterAttack.stop();
          this.monsterAttackLayer.clear();
        }, 1000 / this.monsterAttack.frameRate());
      }
    });
  }
  // Hero heal
  drawHeal() {
    const animations = {
      heal: spellAnimations.heal,
    };
    this.heal = new Konva.Sprite({
      x: 100,
      y: 300,
      image: this.healSprite,
      animation: 'heal',
      animations,
      frameRate: 20,
      frameIndex: 0,
    });
    // add the shape to the layer
    this.healLayer.add(this.heal);

    // add the layer to the stage
    this.stage.add(this.healLayer);

    // start sprite animation
    this.heal.start();
    this.heal.on('frameIndexChange', () => {
      if (this.heal.frameIndex() === 19) {
        setTimeout(() => {
          this.heal.stop();
          this.healLayer.clear();
        }, 1000 / this.heal.frameRate());
      }
    });
  }

  // Hero fire Attack
  drawHeroAttack() {
    const animations = {
      attack: spellAnimations.heroAttack,
    };
    this.heroAttack = new Konva.Sprite({
      x: 950,
      y: 270,
      image: this.heroAttackSprite,
      animation: 'attack',
      animations,
      frameRate: 40,
      frameIndex: 0,
    });
    // add the shape to the layer
    this.heroAttackLayer.add(this.heroAttack);

    // add the layer to the stage
    this.stage.add(this.heroAttackLayer);

    // start sprite animation
    this.heroAttack.start();
    this.heroAttack.on('frameIndexChange', () => {
      if (this.heroAttack.frameIndex() === 39) {
        setTimeout(() => {
          this.heroAttack.stop();
          this.heroAttackLayer.clear();
        }, 1000 / this.heroAttack.frameRate());
      }
    });
  }
}
