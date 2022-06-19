const { setup: setupDevServer } = require("jest-dev-server");
module.exports = async () => {
    await setupDevServer([
        {
            command: "cd ../../restapi && python api.py",
            launchTimeout: 120000,
            debug:true,
            port: 5000,
        },
        {
            command: "npm start",
            launchTimeout: 60000,
            debug: true,
            port: 3000
        }]);
};