// Often used to store characters
// common operations: getAllWithPrefix, startsWith

class Node {
    constructor() {
        this.child = {}
        this.wordEnds = false;

    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;

        // iterate children in root node
        for (let i = 0; i < word.length; i++) {

            if (!curr.child[word[i]]) {
                curr.child[word[i]] = new Node();
            }
            // update current
            curr = curr.child[word[i]];

        }
        curr.wordEnds = true;
    }

    contains(word){
        let curr = this.root;

        // iterate children in root node
        for (let i = 0; i < word.length; i++) {

            if (!curr.child[word[i]]) {
                return false
            }
            // update current
            curr = curr.child[word[i]];

        }
            return curr.wordEnds  === true
    }

    startsWithPrefix(word){
        let curr = this.root;

        // iterate children in root node
        for (let i = 0; i < word.length; i++) {

            if (!curr.child[word[i]]) {
                return false
            }
            // update current
            curr = curr.child[word[i]];

        }
        return  true
    }

}

function iterate(obj) {
    var walked = [];
    var stack = [{obj: obj, stack: ''}];
    while(stack.length > 0)
    {
        var item = stack.pop();
        var obj = item.obj;
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                  var alreadyFound = false;
                  for(var i = 0; i < walked.length; i++)
                  {
                    if (walked[i] === obj[property])
                    {
                      alreadyFound = true;
                      break;
                    }
                  }
                  if (!alreadyFound)
                  {
                    walked.push(obj[property]);
                    stack.push({obj: obj[property], stack: item.stack + '.' + property});
                  }
                }
                else
                {
                    console.log(item.stack + '.' + property + "=" + obj[property]);
                }
            }
        }
    }
}
    
const trie = new Trie();
trie.insert('hike')
trie.insert('hi')
trie.insert('hello')
console.log(trie.startsWithPrefix("hex"));
// console.log(trie.root.child);
// iterate(trie.root.child, '')


