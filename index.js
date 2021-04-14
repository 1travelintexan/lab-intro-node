class SortedList {
  constructor() {
    (this.items = []), (this.length = 0);
  }

  add(item) {
    this.items.push(item);
    this.items.sort((elem1, elem2) => {
      if (elem1 > elem2) {
        return 1;
      } else if (elem1 < elem2) {
        return -1;
      } else {
        return 0;
      }
    });
    this.length++;
  }

  get(pos) {
    if (this.items[pos] == undefined) {
      return OutOfBounds;
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      return EmptySortedList;
    } else {
      return this.items[this.items.length - 1];
    }
  }
  min() {
    if (this.items.length === 0) {
      return EmptySortedList;
    } else {
      return this.items[0];
    }
  }

  sum() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total = this.items[i] + total;
    }
    if (this.items.length == 0) {
      return 0;
    } else {
      return total;
    }
  }

  avg() {
    let total = 0;
    if (this.items.length == 0) {
      return EmptySortedList;
    } else {
      for (let i = 0; i < this.items.length; i++) {
        total = this.items[i] + total;
      }
      let average = total / this.items.length;

      return average;
    }
  }
}

module.exports = SortedList;

let practice = new SortedList();
practice.add(6);
