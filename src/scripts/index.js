import '../styles/index.scss';
import _ from 'lodash';
import {Main, Text, Contacts, News} from './pages';


class App {
  constructor(){
    this.dataInfo = [];
    this.fetchJson();
  }

  fetchJson(){
    const element = document.querySelector('.container'),
    header = document.createElement('h1');
    header.className='header';
    header.textContent = 'Web Interface';
    element.appendChild(header);
    fetch('/content.json')
      .then(response => response.json())
      .then(data => this.render(data))
      .catch(e => console.log(e));
  }


  navigateHistory(e){
    if(e.target.tagName != 'A') return;
    e.preventDefault();

    const findСoincidence =  this.dataInfo.find(i => i.url === e.target.getAttribute('href'));
    //console.log(findСoincidence)

    history.pushState({}, '', findСoincidence.url);
    this.updateChange(findСoincidence);
  }
  
  updateChange(state){
    //console.log(state)
    if(!state) return;
    const infoBlock = document.createElement('div');
    infoBlock.className = 'section-info';

    switch(state.type){
      case 'main': { 
        new Main(state);
        break; 
      } 
      case 'text': { 
        new Text(state);
        break; 
      }
      case 'contacts': {
        new Contacts(state);
        break;    
      } 
      case 'news': { 
        new News(state);
        break; 
      }
      default:
      return;
    }
  }

  renderItems(i){
    //console.log(i)
    const item = document.createElement('li'),
      link = document.createElement('a');
      item.className = 'item';
      link.textContent = i.name;
      link.href = i.url;
      link.className = 'item-link';
      item.appendChild(link);
    return item;
  }


  render(dataArray) {
    this.dataInfo = dataArray;
    const block = document.querySelector('.menu-block'),
    list = document.createElement('ul');
    list.className = 'nav list-item';
    document.addEventListener('click', (e)=>{
      this.navigateHistory(e);
    });
    dataArray.forEach(i => {
      list.appendChild(this.renderItems(i));
    });
    block.appendChild(list);
  }
};

new App();
