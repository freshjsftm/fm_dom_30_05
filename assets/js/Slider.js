class Slider{
  constructor(images, currentIndex=0){
    this._images = images; //array
    this.currentIndex = currentIndex;
  }
  get images(){
    return this._images; //array
  }
  get currentIndex(){
    return this._currentIndex; //0
  }
  set currentIndex(value){
    if(typeof value !== 'number'){
      throw new TypeError('must be number');
    }
    // if(value<0 || Number.isInteger(value)===false ){
    //   throw new RangeError('must be +integer');
    // }
    this._currentIndex = value;
  }
  get currentSlide(){
    return this._images[this._currentIndex]; //array[0]
  }
  get nextIndex(){
    return (this._currentIndex+1)%this._images.length;
  }
  get prevIndex(){
    return (this._currentIndex-1+this._images.length)%this._images.length;
  }
};
