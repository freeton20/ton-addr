const { controllers } = require('tondev');
let t_out = [];
function tondevTerminal() {

    let output = [];
    let _tondevTerminal = {
        output,
        log: (...args) => {
            t_out.push(args);
        },
        writeError: (text) => {
            !t_out.includes(text) && t_out.push(text);
        },
        write: () => {
        },
    };

    return _tondevTerminal;
}
async function runCommand(command, args) {
    try {
        await command.run(tondevTerminal(), args);
    } catch (err) {
        console.log(err);
    }
}

async function isSe() {
    let args = [];
    args['instance'] = 'default';
    let command = controllers[2].commands[0];
    await runCommand(command, args);
    if ((t_out[0][0].indexOf("running")) > -1) {
        return true;
    }
    return false;
}

module.exports = {
    isSe
}
