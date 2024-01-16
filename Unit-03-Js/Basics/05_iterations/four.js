// forin loop +++++++++++++++++++++++++

// for Object

const myObject = {
    js: 'javaScript',
    py: 'pythan',
    rb: 'ruby',
    jv: 'java',
} 

for (const key in myObject) {
    // console.log(`${key}, shortcut is for ${myObject[key]}`);
}


// for array

const coding = ['js', 'py', 'jv', 'rb', 'c++']

for (const key in coding) {
    // console.log(`${key}, value is for ${coding[key]}`)
}

// for map

const map = new Map()
 map.set('IN', 'India')
 map.set('Fr', 'france')
 map.set('USA', 'United States of America')


//  for (const [key] in map) {
//     console.log(`${key}, shortcut is for ${map}`)
//  }



// not iterable 