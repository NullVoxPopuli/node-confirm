module.exports = {
  confirm: async () => {
    let esModule = await import('../index.js');

    return await esModule.confirm();
  }
}
