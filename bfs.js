class Queue {
  queue = new Array();

  enqueue = (item) => {
    this.queue.push(item);
  };

  dequeue = () => {
    if (this.checkEmpty() === true) {
      console.log("Cannot dequeue empty queue");
      return null;
    } else {
      let popval = this.queue.shift();
      return popval;
    }
  };

  checkEmpty = () => {
    this.queue.length < 1 ? true : false;
  };

  getQueue = () => {
    return this.queue;
  };
}
const mangoSellers = {
  you: [
    {
      friend: "clarie",
      mangoSeller: false,
    },
    {
      friend: "alice",
      mangoSeller: false,
    },
    {
      friend: "bob",
      mangoSeller: false,
    },
  ],
  bob: [
    {
      friend: "anuj",
      mangoSeller: false,
    },
    {
      friend: "peggy",
      mangoSeller: false,
    },
  ],
  alice: [
    {
      friend: "peggy",
      mangoSeller: true,
    },
  ],
  clarie: [
    {
      friend: "thom",
      mangoSeller: false,
    },
  ],
  anuj: [],
  peggy: [],
  thom: [
    {
      friend: "jonny",
      mangoSeller: false,
    },
  ],
  jonny: [],
};

function bfs(mangoSellers) {
  const searchQueue = new Queue();
  const searchedMangoSellers = [];
  mangoSellers["you"].forEach((element) => searchQueue.enqueue(element));
  while (searchQueue.getQueue().length > 1) {
    person = searchQueue.dequeue();
    let alreadyChecked = searchedMangoSellers.includes(person.friend);
    if (alreadyChecked === false) {
      if (person.mangoSeller === true) {
        console.log("Mango seller found.");
        console.log("Name : ", person.friend);
        return null;
      } else {
        mangoSellers[person.friend].forEach((element) =>
          searchQueue.enqueue(element)
        );
        searchedMangoSellers.push(person.friend);
      }
    }
  }
  console.log("Sorry! We could not find any mango sellers");
}

bfs(mangoSellers);
