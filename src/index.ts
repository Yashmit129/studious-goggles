import * as fs from "node:fs";
(async function () {
    await fs.writeFile('m', "hello world!", (err) => {
        if (err) console.log(err.message); else console.log('Done!')
    })
})()