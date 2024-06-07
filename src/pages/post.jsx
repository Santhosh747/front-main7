import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

const AddPost = () => {
  const navigate = useNavigate();
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [postType, setPostType] = useState('normal');
  const [photo, setPhoto] = useState(null);
  const webcamRef = useRef(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ caption, location, postType, photo });
    try {
      const response = await fetch('http://localhost:5000/api/posts/create', {
        method: 'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          caption: caption,
          location: location,
          postType: postType,
          photo: photo
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
        return;
      }
      navigate("/");

      const responseData = await response.json();
      console.log('Success:', responseData);

    } catch (error) {
      console.error('There was an error!', error);
    }

  };

  return (
    <div style={{ padding: '2rem', color: '#34cc54', backgroundColor: '#000000', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Create New Post</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <div style={{ flex: 1, maxWidth: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ width: '100%', height: '300px', marginBottom: '1rem' }}
          />
          <button
            type="button"
            onClick={handleCapture}
            style={{ display: 'block', marginBottom: '1rem', width: '50%', padding: '1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer', textAlign: 'center' }}
          >
            Capture Photo
          </button>
          <label style={{ display: 'block', marginBottom: '1rem', width: '45%', textAlign: 'left', paddingLeft: '40%', paddingRight: '45%' }}>
            Or select a file:
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'block', margin: '0 auto', width: '100%', padding: '1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer' }}
            />
          </label>
          {photo && (
            <div>
              <img src={photo} alt="Captured" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            </div>
          )}
        </div>
        <div style={{ flex: 1, maxWidth: '45%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '1rem', width: '80%' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ffffff' }}>Caption</label>
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Enter caption..."
                style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
              />
            </div>
            <div style={{ marginBottom: '1rem', width: '80%' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ffffff' }}>Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location..."
                style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
              />
            </div>
            <div style={{ marginBottom: '1rem', width: '80%' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ffffff' }}>Post Type</label>
              <select
                value={postType}
                onChange={(e) => setPostType(e.target.value)}
                style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
              >
                <option value="normal">Normal</option>
                <option value="urgent">Credits</option>
              </select>
            </div>
            <button
              type="submit"
              style={{ width: '80%', padding: '1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer' }}
            >
              Submit Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};



export default AddPost;