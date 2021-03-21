const { XMLHttpRequest } = require('xmlhttprequest')
const { ajax } = require('rxjs/ajax')
const { map, concatAll } = require('rxjs/operators')


ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/LeonamOliveira/repos'
})
    .pipe(
        map(resp => JSON.parse(resp.xhr.responseText)),
        concatAll(),
        map(repo => repo.full_name)
    )
    .subscribe(console.log)
// interval(1000)
//     .pipe(
//         map(_ => [1, 2, 3]),
//         concatAll()
//         )
//     .subscribe(console.log)