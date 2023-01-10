const dataset = (element) =>{
  // Split the element by ">"
  const openingTag = element.split(">")[0];
  // Select the first element at index 0
  // extract the data attribute by using the match method
  const attributes = openingTag.match(/data-(\w+)=("\w+")/g);
  const dataAttributes = {};
  attributes.forEach((attribute) => {
    const matchData = attribute.match(/data-(\w+)=("\w+")/);
    console.log(matchData[2])
    dataAttributes[matchData[1]] = dataAttributes[matchData[2]]

  })
  return dataAttributes
}

const burger = `<div class="card" data-id="42" data-price="15" data-category="popular">
  <div class="card-category">Popular</div>
  <div class="card-description">
    <h2>The best burger in town (15€)</h2>
  </div>
</div>`;

console.log(dataset(burger));

module.exports = dataset;

// if (typeof window === "object") {
//   console.log("code is running in a browser environment")
// } else {
//   console.log("code is running in a non-browser environment")
// }
