import Page from './Page';

export class Main extends Page {
  constructor(item){
    super(item);
    // this.item = item
    // console.log(this.item)
    this.getContent();
  }
  render(){
    super.getContent();
  }
}


export class Text extends Page {
  constructor(item){
    super(item);
    //this.item = item
    //console.log(this.item)
    this.getContent();
  }
  render(){
    super.getContent();
  }
}

export class Contacts extends Page {
  constructor(item){
    super(item);
    //this.item = item
    //console.log(this.item)
    this.getContent();
  }
  render(){
    super.getContent();
  }
}

export class News extends Page {
  constructor(item){
    super(item);
    this.item = item;
    //console.log(this.item)
    this.render();
  }
  addNewsItems(){
    let blockItem = document.querySelector('.info-block-item'),
    div = document.createElement('div');
    div.className = "card-columns";
    this.item.news.map(i => {
      let p = document.createElement('p');
      p.className = "card ";
      p.innerText += ` ${i}`;
      div.appendChild(p);
    });
    blockItem.appendChild(div);
  }
  render(){
    super.getContent();
    this.addNewsItems();
  }
}




