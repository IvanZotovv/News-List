
export default class Page {
  constructor(item){
    this.item = item;
    //this.render()
    //console.log(item)
  }

  getContent(){
    this.getRender();
  }

  getRender(){
    //console.log(this.item.main_color)
    const block = document.querySelector('.info-block'),
    itemAnimation = document.createElement('div');
    itemAnimation.innerHTML =  `
    <div class="info-block-item ${this.item.type_animation}">
      <h4 class="info-block-header">${this.item.title}</h4>
      <div class="font-italic">${this.item.url}</div>
      <div class="text-monospace">${this.item.content}</div>
    </div>  
    `;
    block.innerHTML = itemAnimation.innerHTML;
    block.style = `background:${this.item.main_color}; overflow:hidden`;
  }
 } 
 

