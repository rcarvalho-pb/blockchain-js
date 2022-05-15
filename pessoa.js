class Pessoa{
  #location;
  #name;
  #age;
  #email;
  constructor(name, age, email, location){
    this.#name = name;
    this.#age = age;
    this.#email = email;
    this.#location = location;
  }

  getName(){
    return this.#name;
  }
}


module.exports = Pessoa;