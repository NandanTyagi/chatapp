const sendMessage = async (message, connection) => {
  try {
    await connection.invoke('SendMessage', message);
  } catch (e) {
    throw e;
  }
};

export default sendMessage;
