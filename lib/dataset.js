const dataset = (element) =>{
  const openingTag = element.split('>')[0];
  const rawAttributes = openingTag.match(/data-\w+="\w+"/g) || [];
  // // [ 'data-id="42"', 'data-price="15"', 'data-category="popular"' ]

  // const attributes = {};
  // rawAttributes.forEach((attribute) => {
  //   const matchData = attribute.match(/data-(.+)="(.+)"/);
  //   console.log(attributes[matchData[1]]) =
  //   //console.log(attributes[matchData[2]])
  //   // attributes[matchData[1]] = cast(matchData[2]);
  // });
  // // return attributes
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
