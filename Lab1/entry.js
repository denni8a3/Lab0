class Entry {

    constructor(entry){
      this.props = {};
      this.props.entry = new Entry(entry) ;
    }
}
module.exports = Entry;
