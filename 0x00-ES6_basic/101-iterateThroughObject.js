export default function iterateThroughObject(reportWithIterator) {
  let output = '';

  for (const [idx, item] of Object.entries(reportWithIterator)) {
    output += `${item}`;

    if (parseInt(idx) !== reportWithIterator.length - 1) {
      output += ' | ';
    }
  }

  return output;
}
