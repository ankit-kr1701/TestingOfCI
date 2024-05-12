const client = require('../client')

async function init() {
    const result = await client.get("user:1");
    await client.set("msg:1", "Hello ankit");
    const result2 = await client.get("msg:1");
    console.log(result2);
    console.log("Result -> ", result);
}

init();

//small commet added