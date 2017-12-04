/** */

function justSomeAsyncAction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Result of async action");
        }, 2000);
    });
}

/** */

export async function foo() {
    try {
        let result = await justSomeAsyncAction();
        console.log(result);
    } catch (error) {
        console.log("Error, " + error);
    }
}

foo();