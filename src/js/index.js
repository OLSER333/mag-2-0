import '../scss/style.scss';
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').slice(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'

    })
  })
}


const data = {
  users: {
    id1: {name: 'olser1', age: 21},
    id2: {name: 'olser2', age: 22},
    id3: {name: 'olser3', age: 23},
    id4: {name: 'olser4', age: 24},
    id5: {name: 'olser5', age: 25},
  },
  getUsersIds() {
    // setTimeout(() => {
    console.log(Object.keys(this.users))
      return Object.keys(this.users)
    // }, Math.random() * 700)
  },
  getUserInfo(id) {
    // setTimeout(() => {
      return this.users[id]
    // }, Math.random() * 700)
  }
}


// const { getUserInfo, getUsersIds } = db;

function getUsersInfo() {
  const ids = data.getUsersIds()
  console.log(ids)
}

getUsersInfo()



//
// getUsersIds((ids) => {
//   console.log(ids); // ['id2', 'id6']
// });
//
// getUserInfo('someUserId', (userInfo) => {
//   console.log(userInfo); // { name: 'Alex', age: 70 }
// });









