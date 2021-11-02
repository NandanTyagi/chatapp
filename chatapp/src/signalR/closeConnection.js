const closeConnection = async (connection) => {
  try {
    await connection.stop();
  } catch (e) {
    throw e;
  }
};

export default closeConnection;
