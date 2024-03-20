let fields = [
    null,
    'circle',
    'cross',
    null,
    null,
    null,
    null,
    null,
    null
];

function init() {
    render();
}
  
  function render() {
    let contentDiv = document.getElementById('content');
    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) {
      tableHTML += '<tr>';
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        let symbol = '';
        if (fields[index] === 'circle') {
          symbol = generateCircleSVG();
        } else if (fields[index] === 'cross') {
          symbol = 'X';
        }
        tableHTML += `<td>${symbol}</td>`;
      }
      tableHTML += '</tr>';
    }
  
    tableHTML += '</table>';
    contentDiv.innerHTML = tableHTML;
}
  
function generateCircleSVG() {
    const color = '#00B0EF';
    const width = 70;
    const height = 70;

    return `<svg width="${width}" height="${height}">
              <circle cx="35" cy="35" r="30" stroke="${color}" stroke-width="5" fill="none">
                <animate attributeName="stroke-dasharray" from="0 188.5" to="188.5 0" dur="0.2s" fill="freeze" />
              </circle>
            </svg>`;
}
 
  


