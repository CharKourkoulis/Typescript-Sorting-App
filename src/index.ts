
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkeList } from "./LinkedList";

var collection = new NumbersCollection([3,54,-65,8,9,12,1]);
collection.sort();
console.log(collection.data);

var chars = new CharactersCollection('helloWorld');

chars.sort();
console.log(chars);

var linked = new LinkeList();

linked.add(300);
linked.add(4);
linked.add(-78);

linked.sort();
linked.print();