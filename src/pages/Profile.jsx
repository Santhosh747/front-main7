import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultprofile from '../assets/default-profile.jpg';
import AddPost from './post'; // Ensure this is the correct path to your Post component
import useFetchUsername from '../username';
import ImagetoBase64 from '../utility/ImagetoBase64'; // Make sure this is the correct path

const Profile = () => {
  const navigate = useNavigate();
  const storedUserId = sessionStorage.getItem('userId'); // Or retrieve from state
  const { username, loading, error } = useFetchUsername(storedUserId);
  const [userData, setUserData] = useState(null); // Initialize userData state

  const [user, setUser] = useState({
    profilePicture: defaultprofile,
    username: username, // Use the destructured username
    fullname: '',
    bio: '',
    creditsCount: 0,
    followersCount: 0,
    followingCount: 0
  });

  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('posts');
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    username: '',
    fullname: '',
    bio: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!storedUserId) {
        console.error('User ID not found');
        return;
      }
      try {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        const response = await fetch(`http://localhost:5000/api/auth/${storedUserId}`, {
          headers: {
            'Authorization': `Bearer ${token}` // Include token in Authorization header
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser((prevUser) => ({
          ...prevUser,
          username: data.username, // Update the username state
          fullname: data.fullname,
          bio: data.bio,
          creditsCount: data.credits,
          followersCount: data.followers,
          followingCount: data.following,
          profilePicture: data.profilePhoto || defaultprofile,
        }));
        setPosts(data.posts || []);
        setForm({
          username: data.username,
          fullname: data.fullname,
          bio: data.bio
        });
        setUserData(data); // Set userData state
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [storedUserId]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/profile/edit/${storedUserId}`, {
        method: 'PUT', // or 'PATCH'
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedUser = await response.json();
      setUser((prevUser) => ({
        ...prevUser,
        fullname: updatedUser.fullname,
        bio: updatedUser.bio,
      }));
      setEditMode(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleCancel = () => {
    setForm({
      username: user.username,
      fullname: user.fullname,
      bio: user.bio
    });
    setEditMode(false);
  };

  const handleUploadProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
  
    if (!userData) {
      console.error('User data is not loaded');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:5000/api/profile/photo/${storedUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ email: userData.email, profilePhoto: data })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedUser = await response.json();
      setUser((prevUser) => ({
        ...prevUser,
        profilePicture: updatedUser.image,
      }));
    } catch (error) {
      console.error('Error updating profile picture:', error);
    }
  };  

  const handleAddClick = () => {
    navigate("/addpost");
  };

  const renderPosts = () => {
    if (isLoading) {
      return <p>Loading posts...</p>;
    }

    if (activeTab === 'posts' && !posts.length) {
      return (
        <div className="no-posts">
          <p style={{ marginLeft: '5px' }}>Share your first photo!</p>
          <button onClick={handleAddClick} style={{ marginLeft: '50px' }}>Share</button>
        </div>
      );
    }

    return posts.map((post) => (
      <AddPost key={post.id} post={post} />
    ));
  };

  return (
    <div style={{ padding: '2rem', color: '#34cc54', backgroundColor: '#000000', minHeight: '100vh', width: '100%', position: 'fixed' }}>
      {isLoading ? (
        <div style={{ textAlign: 'center', color: '#34cc54' }}>Loading...</div>
      ) : (
        <>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <img
                src={user.profilePicture}
                alt="Profile"
                style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', marginRight: '2rem' }} // Increased size of profile picture
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadProfileImage}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer',
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              {editMode ? (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
                    <input
                      type="text"
                      name="fullname"
                      value={form.fullname}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.5rem', backgroundColor: '#1c1c1c', border: 'none', color: '#34cc54' }}
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Bio:</label>
                    <textarea
                      name="bio"
                      value={form.bio}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.5rem', backgroundColor: '#1c1c1c', border: 'none', color: '#34cc54' }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ padding: '0.5rem 1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer', marginRight: '0.5rem' }}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    style={{ padding: '0.5rem 1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer' }}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <div>
                    <span>{user.followersCount} Followers</span>
                    <span>{user.followingCount} Following</span>
                    <span>{user.creditsCount} Credits</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: '2rem' }}>{user.fullname}</h3>
                  <p>{user.bio}</p>
                  <button
                    onClick={() => setEditMode(true)}
                    style={{ padding: '0.5rem 1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer', marginRight: '0.5rem' }}
                  >
                    Edit Profile
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    style={{ padding: '0.5rem 1rem', backgroundColor: '#34cc54', border: 'none', color: '#000000', cursor: 'pointer' }}
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', marginBottom: '2rem' }}>
              <button
                onClick={() => handleTabChange('posts')}
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  backgroundColor: activeTab === 'posts' ? '#34cc54' : '#1c1c1c',
                  border: 'none',
                  color: activeTab === 'posts' ? '#000000' : '#34cc54',
                  cursor: 'pointer',
                }}
              >
                Posts
              </button>
              <button
                onClick={() => handleTabChange('liked')}
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  backgroundColor: activeTab === 'liked' ? '#34cc54' : '#1c1c1c',
                  border: 'none',
                  color: activeTab === 'liked' ? '#000000' : '#34cc54',
                  cursor: 'pointer',
                }}
              >
                Liked
              </button>
            </div>

            <div>
              {activeTab === 'posts' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                  {renderPosts()}
                </div>
              )}
              {activeTab === 'liked' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                  {renderPosts()}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
