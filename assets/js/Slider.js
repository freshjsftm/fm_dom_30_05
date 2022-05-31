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
    if(value<0 || Number.isInteger(value)===false ){
      throw new RangeError('must be +integer');
    }
    this._currentIndex = value;
  }
  get currentSlide(){
    return this._images[this._currentIndex]; //array[0]
  }
  next(){
    return this._currentIndex+1;
  }
  prev(){
    return this._currentIndex-1;
  }
};

/*
0 % 3   =  0
1 % 3   =  1
2 % 3   =  2
3 % 3   =  0
4 % 3   =  1
5 % 3   =  2
6 % 3   =  0
*/