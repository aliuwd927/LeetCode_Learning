//This is an object
//Data holds any value
//Next is the Next Object
//This next Object also contains data and the pointer to the NEXT object.
//Cycle contintues.
//{Data:1,
// next:{data:2, next: null}
//}

class MakeNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }

  add(data) {
    //If start and end has no value, make a new Node with value and append to head
    if (this.start === null) {
      this.start = new MakeNode(data);
      this.end = this.start;
    } else {
      //If start has value but end has no value, make new node with value and append to tail.
      //For each value added, append to the tail.
      /*
    If the list has already had some nodes added, 
    you need to add the new node to the end of the list,
    and update end, and the next property, of the previous end node:
    */
      this.end.next = new MakeNode(data);
      this.end = this.end.next;
    }
    //Increase with each value added.
    this.length++;
    //This ensures set the LAST item to equal whatever that last item was
    this.end.data = data;
  }

  insertAsFirst(data) {
    /*
    Inital
      {data:1, next:{data:2,next:{data:3,next:null}}}
    Insert
      {data:15,next:{data:1,next:{data:2,next:{data:3,next:null}}}}
    
    */

    //creates a new node
    let temp = new MakeNode();
    //sets the beginning of current start as next
    temp.next = this.start;
    //make temp the new head
    this.start = temp;
    //passing data to temp obj makeNode.
    temp.data = data;
  }

  deleteNode(data) {
    /*
    Extra Note:

    At this point we could add lots of different methods that access and modify the list. 
    Most of these would do their tasks by traversing the list, 
    and making changes to the next "pointers" to reorganize the list.

    The key idea is the loop that traverses the list:

    var current = this.start;
    while (current !== null) {
    do something which the current node
    current = current.next;
    }

    */

    let current = this.start;
    let previous = this.start;
    while (current !== null) {
      if (data === current.data) {
        console.log(data === current.data);
        console.log(data);
        console.log(current.data);
        console.log(current);
        console.log(this.start);

        console.log(current === this.start);
        if (current === this.start) {
          this.start = current.next;
          return;
        }
        console.log(current);
        console.log(this.end);

        console.log(current === this.end);
        if (current === this.end) {
          console.log(this.end);
          this.end = previous;
          console.log(previous);
        }

        console.log(current.next);
        console.log(previous);
        console.log(this.end);
        console.log(previous.next);
        console.log(current);
        console.log(current.next);
        previous.next = current.next;
        return;
      }
      console.log(previous);
      console.log(current);
      previous = current;
      console.log(previous);
      console.log(current);
      current = current.next;
      console.log(current);
      console.log(current.next);
    }
  }
}

const linkedList = new List();
for (let i = 1; i <= 10; i++) {
  linkedList.add(i);
}
//Line 83-97 executed.
//linkedList.deleteNode(1)
//Line 108-124 executed
//linkedList.deleteNode(2);
//Line 102-124 executed
//linkedList.deleteNode(10);

console.log(linkedList);
