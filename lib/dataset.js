const dataset = (element) =>{
  // Split the element by ">" and select the first element at index 0
  const openingTag = element.split(">")[0];
  // extract the data attribute by using the match method
  const attributes = openingTag.match(/data-\w+="\w+"/g);
  const dataAttributes = {};
  attributes.forEach((attribute) => {
    const matchData = attribute.match(/data-(\w+)="(\w+)"/);
    dataAttributes[matchData[1]] = cast(matchData[2]);
  });
  return dataAttributes;
};


const cast = (data) => {
  if ((data.match(/\d/g) || []).length === data.length) {
    return Number.parseInt(data, 10);
  }
  return data;
};


const burger = `<div class="card" data-id="42" data-price="15" data-category="popular">
  <div class="card-category">Popular</div>
  <div class="card-description">
    <h2>The best burger in town (15€)</h2>
  </div>
</div>`;

console.log(dataset(burger));








module.exports = dataset;
