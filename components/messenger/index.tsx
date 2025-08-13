import React, { useState } from 'react';

const AdvancedMessenger = () => {
  const [message, setMessage] = useState('');
  const [recipientId, setRecipientId] = useState('');


  return (
    <div className="messenger-panel">
      <h3>Send Messenger Message</h3>
      <input
        type="text"
        placeholder="Recipient ID"
        value={recipientId}
        onChange={(e) => setRecipientId(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />
      <button onClick={() => {}}>Send Message</button>
    </div>
  );
};

export default AdvancedMessenger;