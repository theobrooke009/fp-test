

const floorThree = document.querySelector('.floorThreeData')
const floorOne = document.querySelector('.floorOneData')
const basement = document.querySelector('.basementData')
const warehouse = document.querySelector('.warehouseData')

const mockData = [
  {
    id: 'id1',
    type: 'co2',
    value: '120',
    online: true,
    location: 'Floor 1',
  },
  {
    id: 'id2',
    type: 'temp',
    value: '20',
    online: true,
    location: 'Floor 1',
  },
  {
    id: 'id3',
    type: 'temp',
    value: '20',
    online: true,
    location: 'Floor 3',
  },
  {
    id: 'id4',
    type: 'co2',
    value: '250',
    online: false,
    location: 'Floor 1',
  },
  {
    id: 'id5',
    type: 'devices',
    value: '20',
    online: true,
    location: 'Floor 3',
  },
  {
    id: 'id6',
    type: 'devices',
    value: '17',
    online: true,
    location: 'Basement',
  },
  {
    id: 'id7',
    type: 'devices',
    value: '2',
    online: true,
    location: 'Warehouse',
  },
  {
    id: 'id8',
    type: 'co2',
    value: '110',
    online: true,
    location: 'Warehouse',
  },
  {
    id: 'id9',
    type: 'temp',
    value: '22.5',
    online: false,
    location: 'Basement',
  },
  {
    id: 'id10',
    type: 'co2',
    value: '475',
    online: false,
    location: 'Floor 3',
  },
  {
    id: 'id11',
    type: 'co2',
    value: '519',
    online: true,
    location: 'Basement',
  },
  {
    id: 'id12',
    type: 'temp',
    value: '14',
    online: true,
    location: 'Warehouse',
  }
]

function getData() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(mockData)
    }, 1000 * Math.random())
  })
}

async function buildTable(){

  const result = await getData()

  //sorting the data by type here, to avoid doing it in every map & filter
  result.sort(function(a,b){
    if (a.type < b.type) {
      return -1
    }
    if (a.type > b.type){
      return 1
    }
    return 0
  })
  
  //data arranged by floor as this fit my idea best
  const floorThreeArray = result.filter(data => data.location === 'Floor 3')
    .map(data => {
      return `<div class = "floorData">

      <div class = "dataContainer">
      <h5 id="data">${data.type[0].toUpperCase() + data.type.substring(1)}: ${data.value} ${data.type === 'temp' ?  '&#176 C' : data.type === 'co2' ? 'ppm' : ''}</h5>
      </div>

      <div class = "dataContainer">
        <div class="status">${data.online ? '<h5 class="online">Online</h5>' : '<h5 class="offline">Offline</h5>'}</div>
      </div>

</div>`
    })
    

  const floorOneArray = result.filter(data => data.location === 'Floor 1')
    .map(data => {
      return `<div class = "floorData">

      <div class = "dataContainer">
      <h5 id="data">${data.type[0].toUpperCase() + data.type.substring(1)}: ${data.value} ${data.type === 'temp' ?  '&#176 C' : data.type === 'co2' ? 'ppm' : ''}</h5>
      </div>

      <div class = "dataContainer">
        <div class="status">${data.online ? '<h5 class="online">Online</h5>' : '<h5 class="offline">Offline</h5>'}</div>
      </div>

    </div>`
    })

  const basementArray = result.filter(data => data.location === 'Basement')
    .map(data => {
      return `<div class = "floorData">

      <div class = "dataContainer">
      <h5 id="data">${data.type[0].toUpperCase() + data.type.substring(1)}: ${data.value} ${data.type === 'temp' ?  '&#176 C' : data.type === 'co2' ? 'ppm' : ''}</h5>
      </div>

      <div class = "dataContainer">
        <div class="status">${data.online ? '<h5 class="online">Online</h5>' : '<h5 class="offline">Offline</h5>'}</div>
      </div>

    </div>`
    })

  const warehouseArray = result.filter(data => data.location === 'Warehouse')
    .map(data => {
      return `<div class = "floorData">
      <div class = "dataContainer">
      <h5 id="data">${data.type[0].toUpperCase() + data.type.substring(1)}: ${data.value} ${data.type === 'temp' ?  '&#176 C' : data.type === 'co2' ? 'ppm' : ''}</h5>
      </div>

      <div class = "dataContainer">
        <div class="status">${data.online ? '<h5 class="online">Online</h5>' : '<h5 class="offline">Offline</h5>'}</div>
      </div>
    
    </div>`
    })

  floorThree.innerHTML = floorThreeArray.join('')
  floorOne.innerHTML = floorOneArray.join('')
  basement.innerHTML = basementArray.join('')
  warehouse.innerHTML = warehouseArray.join('')
}

// setTimeout(() => {
//   $('.dataContainer').load(location.href + ' .dataContainer>*','')
// }, 5000)

buildTable()
































