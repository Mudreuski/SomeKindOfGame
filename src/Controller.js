import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/style.css';
import './css/slider.css';
import './jq-ui/jquery-ui.min';

import {
  Monster, Player, SimpleMath,
  RuToEng, EngToRu,
  Storage, Display,
  SequenceOfNumbers, SequenceOfWords, Compare,
} from './components/main/index';

export default class Controller {
  constructor() {
    this.monster = new Monster();
    this.player = new Player();
    this.display = new Display();
    this.display.drawKnight();
    this.display.drawMonster();
    this.SimpleMath = new SimpleMath(1, 10);
    this.RuToEng = new RuToEng();
    this.EngToRu = new EngToRu();
    this.SequenceOfNumbers = new SequenceOfNumbers();
    this.SequenceOfWords = new SequenceOfWords();
    this.Compare = new Compare();
    this.storage = new Storage('scoreBoard');
    this.currentTask = '';
    this.score = 0;
    this.addAllButtonListeners();
    this.heroAttackSound = new Audio('./sounds/heroAttackSound.mp3');
    this.healSound = new Audio('./sounds/healSound.mp3');
    this.monsterAttackSound = new Audio('./sounds/monsterAttackSound.mp3');
    this.intro = new Audio('./sounds/intro.mp3');
    this.death = new Audio('./sounds/death.mp3');
  }

  addAllButtonListeners() {
    const that = this;

    $('#SequenceOfNumbers').click(() => {
      this.currentTask = 'SequenceOfNumbers';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.SequenceOfNumbers.getRandomTask();
    });

    $('#SequenceOfWords').click(() => {
      this.currentTask = 'SequenceOfWords';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.SequenceOfWords.getRandomTask();
    });

    $('#Compare').click(() => {
      this.currentTask = 'Compare';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.Compare.getRandomTask();
    });

    $('#SimpleMath').click(() => {
      this.currentTask = 'SimpleMath';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.SimpleMath.getRandomTask();
    });

    $('#RuToEng').click(() => {
      this.currentTask = 'RuToEng';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.RuToEng.getRandomTask();
    });

    $('#EngToRu').click(() => {
      this.currentTask = 'EngToRu';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.EngToRu.getRandomTask();
    });

    $('#checkTaskAnsw').click(this.addAnswerListener.bind(that));

    $('#startGame').submit((e) => {
      e.preventDefault();
      const player = $('#nickName').val();
      this.player.name = player;
      $('.modal-registration').addClass('hide-modal');
      this.intro.play();
    });

    $('#spelChoice').click(() => {
      $('#spels').modal({
        keyboard: false,
        backdrop: 'static',
      });
    });
  }
  
  addAnswerListener() {
    const that = this;
    $('#task').off('hidden.bs.modal');
    let answerIsCorrect = false;
    let spellAtack = false;
    switch (this.currentTask) {
      case 'SimpleMath':
        answerIsCorrect = this.SimpleMath.checkAnswer($('#taskAnsw').val());
        spellAtack = true;
        break;

      case 'RuToEng':
        answerIsCorrect = this.RuToEng.checkAnswer($('#taskAnsw').val().toLowerCase());
        break;

      case 'SequenceOfNumbers':
        answerIsCorrect = this.SequenceOfNumbers.checkAnswer($('#taskAnsw').val());
        break;

      case 'Compare':
        answerIsCorrect = this.Compare.checkAnswer($('#taskAnsw').val().trim());
        break;

      case 'SequenceOfWords':
        answerIsCorrect = this.SequenceOfWords.checkAnswer($('#taskAnsw').val().toLowerCase());
        spellAtack = true;
        break;

      case 'EngToRu':
        answerIsCorrect = this.EngToRu.checkAnswer($('#taskAnsw').val().toLowerCase());
        spellAtack = true;
        break;

      default: answerIsCorrect = false;
        break;
    }

    if (answerIsCorrect) {
      $('#task').modal('hide');
      $('#task').on('hidden.bs.modal', () => {
        if (spellAtack) {
          this.heroAttackSound.play();
          this.display.setKnightAnimation('attack');
          this.display.drawHeroAttack();
          this.display.knight.on('frameIndexChange', () => {
            if (this.display.knight.frameIndex() === 6) {
              setTimeout(() => {
                this.display.setKnightAnimation('idle');
              }, 1000 / this.display.knight.frameRate());
            }
          });
          that.monster.health -= that.player.damage;
        } else {
          this.healSound.play();
          this.display.setKnightAnimation('heal');
          this.display.drawHeal();
          this.display.knight.on('frameIndexChange', () => {
            if (this.display.knight.frameIndex() === 6) {
              setTimeout(() => {
                this.display.setKnightAnimation('idle');
              }, 1000 / this.display.knight.frameRate());
            }
          });
          that.player.health += that.player.damage;
          if (that.player.health > 100) { that.player.health = 100; }
        }
        this.checkWon();
      });
    } else {
      $('#task').modal('hide');
      $('#task').on('hidden.bs.modal', () => {
        this.monsterAttackSound.play();
        this.display.drawMonsterAttack();
        that.player.health -= that.monster.damage;
        this.checkWon();
      });
    }
  }

  checkWon() {
    if (this.player.health <= 0) {
      this.death.play();
      this.storage.store(this.player.name, this.score);
      this.showScore();
      return;
    }
    if (this.monster.health <= 0) {
      this.score += 1;
      this.monster = new Monster();
      this.display.monsterLayer.destroyChildren();
      this.display.drawMonster();
      this.monster.damage += 10 * this.score;
    }
  }

  showScore() {
    this.storage.get();
    $('#modalScore').addClass('show');
  }
}

