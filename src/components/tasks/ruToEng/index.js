import $ from 'jquery';
import randomWord from './wordBank';

export default class RuToEng {
  constructor() {
    this.task = '';
  }
  getRandomTask() {
    this.task = randomWord();
    this.showTask();
    return this.task;
  }

  checkAnswer(answ) {
    return this.task.word.some(el => answ === el);
  }

  showTask() {
    const html = `
        <h4 class="task border"> ${this.task.trans}</h4>
        <input type="text" name="answer" id="taskAnsw" placeholder="Введите какой-то ответ">`;
    $('#taskBody').html(html);
    $('#taskTitle').html('Переведи:');
  }
}
