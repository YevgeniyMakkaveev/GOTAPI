export default class gotService {
 constructor() {
  this._apiBase = `https://www.anapioficeandfire.com/api`
 }

 async getResource(url) {
  const res = await fetch(`${this._apiBase}${url}`);
  if (!res.ok) {
   throw new Error(`Could not fetch ${url}` + `, recieved ${res.status}`)
  }
  return await res.json()
 }

 async getJhon() {
  const res = await fetch(`https://anapioficeandfire.com/api/characters/583`)
  return await res.json()
  //НЕ ЗАБЫВАЙ О ()!
 }

 //можно и без переменной просто ретурнить с this.getResource
 async getAllChar() {
  const res= await this.getResource(`/characters?page=5`);
  
  return res.map(this._transformChar)
 }
 async getChar(id) {
  const res = await this.getResource(`/characters/${id}`)
  return this._transformChar(res)
 }
 getAllHouses() {
  return this.getResource(`/houses`)
 }
 getAllHouse(id) {
  return this.getResource(`/house/${id}`)
 }
 getAllBooks() {
  return this.getResource(`/books`)
 }
 getBook(id) {
  return this.getResource(`/books/${id}`)
 }

 _transformChar(char) {
  
  return {
   name: this._fillElem(char.name),
   gender: this._fillElem(char.gender),
   born: this._fillElem(char.born),
   died: this._fillElem(char.died),
   culture: this._fillElem(char.culture),
   tvSeries: this._fillElem(char.tvSeries)
  }
 }

 _transformHouse(house){
  
  return{
   name: house.name,
   region: house.region,
   words: house.words,
   titles: house.titles,
   overlord: house.overlord,
   ancestralWeapons: house.ancestralWeapons
  }
 }
 _transformBook(book){
  
   return{
   name: book.name,
   numberOfPages: book.numberOfPages,
   publiser: book.publiser,
   released: book.released
  }
 }
 _fillElem = (item)=>{
  if(!item){return `Нет данных`} else return item
  
 }
}