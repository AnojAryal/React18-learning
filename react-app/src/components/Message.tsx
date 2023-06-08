let count = 0;

const Message = () => {
  console.log("message called", count);
  count++;
  return (
    <div>
      <strong>Message:</strong>
      {count}
    </div>
  );
};

export default Message;
