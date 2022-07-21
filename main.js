// Create an object using a constuctor/ class
class Book {
    constructor(title, author, published) {
        this.title = title
        this.author = author
        this.published = published
    }
    get getBook() {
        return `This book ${this.title} is was written by${this.author} and published in ${this.published}`
    }
}

const book1 = new Book('Alice in Wonderland', 'Lewis Carol', 1869)
console.log(book1)
const book2 = new Book('Tom Sawyer', 'Mark Twain', 1876)
console.log(book2)

class Pet {
    constructor(name, carer, born) { 
        this.name = name
        this.carer = carer
        this.born = born
    }
     get getPet(){
        return `This is ${this.name}, who is looked after by ${this.carer} and was born in ${this.born}` 
     }
     set changeName(value) {
        if(value.length < 4 ) {
            alert('Name is to short')
        } else {
            this.name = value
        }
        
    }
}

const pet1 = new Pet('Lola', 'Ania', 2020)
console.log(pet1)
const pet2 = new Pet ('Star', 'John', 2012)
console.log(pet2)
pet2.changeName = 'Milo'
console.log(pet2)
//Show the keys of any object

function showKeys(obj) {
    const keys = Object.keys(obj)
    console.log('Keys of the object', keys)
    return keys  
}
const letsSeeKeys = showKeys(pet2)

//Show values of given object keys

const keysOfTheObject = Object.keys(book2)
console.log(keysOfTheObject)

keysOfTheObject.forEach((key) => {
    let showKeyValues= book2[key] 
    console.log('showing key values', showKeyValues)
})

