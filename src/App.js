import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [urlInput, setUrlInput] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const submit = (e) => {
    e.preventDefault();
    getShortUrl();
  };
  const getShortUrl = async () => {
    const params = {
      url: urlInput
    };
    console.log({ params });
    try {
      let response = await axios.post(process.env.API_URL, params);
      console.log({ response });
      setShortUrl(response.data);
      setError('');

    }
    catch (err) {
      console.log({ err });
      setError(err);
      setShortUrl('');
    }
  };
  return (
    <div className="App">
      <form onSubmit={submit} className="url_form">
        <input type="text" onChange={(e) => setUrlInput(e.target.value)} placeholder="URL..." value={urlInput} />
        <button type="submit" className="button">URL</button>
      </form>
      {shortUrl && <div id="shortUrl">{shortUrl}</div>}
      {error && <div id="error">{error}</div>}
    </div>
  );
}

export default App;
