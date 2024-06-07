import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dryzone = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const menuButtons = [
    { label: "Home", path: "/home" },
    { label: "Schemes", path: "/schemes" },
    { label: "Industries", path: "/industries" },
    { label: "Individuals", path: "/individuals" },
    { label: "Subsidies", path: "/subsidies" },
    { label: "Water management", path: "/wm" },
    { label: "Fertilizers", path: "/fertilizers" },
    { label: "Shopping", path: "/shopping" },
    { label: "Workers", path: "/work" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigateToPage = (path) => {
    navigate(path);
    toggleMenu();
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleAddPost = () => {
    navigate("/addpost");
  };

  const handleSignOutClick = () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (confirmed) {
      navigate("/login");
    }
  };

  const handleSearch = () => {
    if (selectedState) {
      const googleMapsUrl = `https://www.google.com/maps/place/${selectedDistrict}`;
      window.location.href = googleMapsUrl;
    } else {
      alert("Please select a state before searching.");
    }
  };


  const menuStyles = {
    position: "absolute",
    top: "80px",
    left: "20px",
    backgroundColor: "#1c1c1c",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "1rem",
    borderRadius: "0.5rem",
  };

  const buttonStyles = {
    display: "block",
    padding: "0.5rem 1rem",
    color: "#34cc54",
    backgroundColor: "#000000",
    cursor: "pointer",
    borderRadius: "0.25rem",
    marginBottom: "0.5rem",
    width: "100%",
    textAlign: "center",
    fontSize: "1.3rem",
  };

  const states = [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Delhi","Lakshadweep","Puducherry"];
  const districts = {
    "Andaman and Nicobar Islands": [
      "Nicobar", "North and Middle Andaman", "South Andaman"
    ],
    "Andhra Pradesh": [
      "Alluri Sitarama Raju", "Anakapalle", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "East Godavari",
      "Eluru", "Guntur", "YSR Kadapa (Cuddapah)", "Kakinada", "Krishna", "Konaseema", "Kurnool", "Parvathipuram Manyam",
      "Nandyal", "NTR", "Palnadu", "Prakasam", "Nellore", "Tirupati", "Sri Sathya Sai", "Srikakulam", "Visakhapatnam",
      "Vizianagaram", "West Godavari"
    ],
    "Arunachal Pradesh": [
      "Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siangl", "Kamle", "Kra Daadi", "Kurung Kumey",
      "Lepa Rada", "Lohit", "Longdling", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai",
      "Pakke Kessang", "Papum Pare", "Shi Yomi", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri",
      "West Kameng", "West Siang", "Capital Complex Itanagar"
    ],
    "Assam": [
      "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji",
      "Dhubri", "Dibrugarh", "Dima Hasao (North Cachar Hills)", "Goalpara", "Golaghat", "Hailakandi", "Hojai",
      "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimaganj", "Kokrajhar", "Lakhimpur", "Majuli",
      "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salamara Mankachar", "Tinsukia", "Udakguri",
      "West Karbi Anglong", "Bajali", "Tamulpur"
    ],
    "Bihar": [
      "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga",
      "East Champaran (Motihari)", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar",
      "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger (Monghyr)", "Muzaffarpur",
      "Nalanda", "Nawada", "Patna", "Purnia (Purnea)", "Rohtas", "Saharasa", "Samastipur", "Saran", "Sheikhpura",
      "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"
    ],
    "Chandigarh": ["Chandigarh"],
    "Chhattisgarh": [
      "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada (South Bastar)",
      "Dhamtari", "Durg", "Gariyaband", "Janjigir-Champa", "Jashpur", "Kabirdham (Kawardha)", "Kanker (North Bastar)",
      "Kondagaon", "Korba", "Korea (Koriya)", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon",
      "Sukma", "Surajpur", "Surguja", "Gaurela-Pendra-Marwahi", "Khairagarh-Chhuikhadan-Gandai", "Manendragarh-Chirmiri-Bharatpur",
      "Mohla-Manpur-Chowki", "Sarangarh-Bilaigarh", "Shakti"
    ],
    "Dadra and Nagar Haveli and Daman and Diu": [
      "Dadra And Nagar Haveli", "Daman", "Diu"
    ],
    "Delhi": [
      "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi",
      "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"
    ],
    "Goa": [
      "North Goa", "South Goa"
    ],
    "Gujarat": [
      "Ahmedabad", "Amreli", "Anand", "Arvalli", "Banaskantha (Palanpur)", "Bharuch", "Bhavnagar", "Botad",
      "Chhota Udepur", "Dahod", "Dangs (Ahwa)", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar",
      "Junagadh", "Kachchh", "Kheda (Nadiad)", "Mahisagar", "Mehsana", "Morbi", "Narmada (Rajpipla)", "Navsari",
      "Panchmahal (Godhra)", "Patan", "Porbandar", "Rajkot", "Sabarkantha (Himmatnagar)", "Surat", "Surendranagar",
      "Tapi (Vyara)", "Vadodara", "Valsad"
    ],
    "Haryana": [
      "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Gurgaon", "Hisar", "Jhajjar", "Jind", "Kaithal",
      "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rohtak", "Sirsa",
      "Sonipat", "Yamunanagar", "Fatehabad", "Rewari"
    ],
    "Himachal Pradesh": [
      "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul & Spiti", "Mandi", "Shimla",
      "Sirmaur", "Solan", "Una"
    ],
    "Jammu and Kashmir": [
      "Anantnag", "Bandipore", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam",
      "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"
    ],
    "Jharkhand": [
      "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla",
      "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi",
      "Sahibganj", "Seraikela-Kharsawan", "Simdega", "West Singhbhum"
    ],
    "Karnataka": [
      "Bagalkot", "Ballari (Bellary)", "Belagavi (Begaum)", "Bengaluru (Bangalore) Rural", "Bengaluru (Bangalore) Urban",
      "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)", "Chitradurga", "Dakshina Kannada", "Davangere",
      "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi (Gulbarga)", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru (Mysore)",
      "Raichur", "Ramanagara", "Shivamogga (Shimoga)", "Tumakuru (Tumkur)", "Udupi", "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)",
      "Yadgir", "Chitradurga", "Vijayanagara"
    ],
    "Kerala": [
      "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram",
      "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"
    ],
    "Ladakh": [
      "Kargil", "Leh"
    ],
    "Lakshadweep": [
      "Lakshadweep"
    ],
    "Madhya Pradesh": [
      "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur",
      "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad",
      "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch",
      "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur",
      "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha", "Niwari"
    ],
    "Maharashtra": [
      "Ahmednagar", "Akola", "Amravati", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon",
      "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani",
      "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal", "Aurangabad"
    ],
    "Manipur": [
      "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney",
      "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"
    ],
    "Meghalaya": [
      "East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills",
      "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills", "Eastern West Khasi Hills"
    ],
    "Mizoram": [
      "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Hnahthial", "Lunglei", "Mamit", "Saiha", "Serchhip", "Khawzawl", "Saitual"
    ],
    "Nagaland": [
      "Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto", "Tseminyü",
      "Chümoukedima", "Niuland", "Noklak", "Shamator"
    ],
    "Odisha": [
      "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur",
      "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar (Keonjhar)", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj",
      "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"
    ],
    "Puducherry": [
      "Karaikal", "Yanam", "Mahe", "Pondicherry"
    ],
    "Punjab": [
      "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar",
      "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr (Shahid Bhagat Singh Nagar)", "Pathankot", "Patiala", "Rupnagar",
      "Sahibzada Ajit Singh Nagar (Mohali)", "Sangrur", "Tarn Taran", "Malerkotla"
    ],
    "Rajasthan": [
      "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa",
      "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota",
      "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"
    ],
    "Sikkim": [
      "Gangtok", "Gyalshing", "Pakyong", "Namchi", "Mangan", "Soreng"
    ],
"Tamil Nadu": [
    "Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri",
    "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivanganga", "Thanjavur",
    "Theni", "Thoothukudi (Tuticorin)", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
    "Viluppuram", "Virudhunagar", "Tenkasi", "Tirupattur", "Ranipet", "Chengalpet", "Kallakurichi", "Mayiladuthurai"
  ],
  "Telangana": [
    "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagital", "Jangaon", "Jayashankar Bhoopalpally", "Jogulamba Gadwal", "Kamareddy",
    "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Nagarkurnool",
    "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy",
    "Warangal (Rural)", "Hanamkonda (erstwhile Warangal (Urban))", "Yadadri Bhuvanagiri", "Mulugu", "Narayanpet"
  ],
  "Tripura": [
    "Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"
  ],
  "Uttarakhand": [
    "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag",
    "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"
  ],
  "Uttar Pradesh": [
    "Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi (Chatrapati Sahuji Mahraj Nagar)", "Amroha (J.P.Nagar)", "Auraiya", "Azangarh",
    "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli",
    "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur",
    "Gonda", "Gorakhpur", "Hamirpur", "Hapur (Panchsheel Nagar)", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat",
    "Kanpur Nagar", "Kanshiram Nagar (Kasganj)", "Kaushambi", "Kushinagar (Padrauna)", "Lakhimpur - Kheri", "Lalitpur", "Lucknow", "Maharajganj",
    "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mizapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "RaeBareli", "Rampur",
    "Saharanpur", "Sambhal (Bhim Nagar)", "Sant Kabir Nagar", "Shahjahanpur", "Shamali (Prabuddh Nagar)", "Shravasti", "Siddharth Nagar", "Sitapur",
    "Sonbhandra", "Sultanpur", "Unnao", "Varanasi"
  ],
  "West Bengal": [
    "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur (South Dinajpur)", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri",
    "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur (West Medinipur)",
    "Paschim (West) Burdwan (Bardhaman)", "Purba Burdwan (Bardhaman)", "Purba Medinipur (East Medinipur)", "Purulia", "South 24 Parganas",
    "Uttar Dinajpur (North Dinajpur)"
  ],  
  }; 
  
  return (
    <div>
      <header
    style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    boxSizing: "border-box",
    width: "100%",
    textAlign: "left",
    fontSize: "20px",
    backgroundColor: "#34cc54",
    color: "#000000",
    fontFamily: "timesroman",
    position: "fixed",
    zIndex: 1000,
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px", // Adjust this gap to reduce space
    }}
  >
    <button
      onClick={toggleMenu}
      style={{
        backgroundColor: "#34cc54",
        cursor: "pointer",
        border: "none",
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          height: "35px",
          width: "35px",
        }}
        loading="lazy"
        alt="Menu"
        src="https://cdn-icons-png.flaticon.com/512/54/54630.png"
      />
    </button>
    <h1
      style={{
        margin: "0",
        fontWeight: "bold",
      }}
    >
      Dryzone
    </h1>
  </div>
  <div
    style={{
      display: "flex",
      gap: "20px",
    }}
  >
    <button
      onClick={handleAddPost}
      style={{
        backgroundColor: "#34cc54",
        cursor: "pointer",
        border: "none",
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          height: "35px",
          width: "35px",
        }}
        loading="lazy"
        alt="Menu"
        src="https://www.svgrepo.com/show/59773/plus-square-button.svg"
      />
    </button>
    <button
      onClick={handleProfileClick}
      style={{
        backgroundColor: "#34cc54",
        cursor: "pointer",
        border: "none",
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          height: "45px",
          width: "35px",
        }}
        loading="lazy"
        alt="Profile"
        src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
      />
    </button>
    <button
      onClick={handleSignOutClick}
      style={{
        backgroundColor: "#34cc54",
        cursor: "pointer",
        border: "none",
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          height: "35px",
          width: "35px",
        }}
        loading="lazy"
        alt="Sign Out"
        src="/uilsignout.svg"
      />
    </button>
  </div>
  {showMenu && (
        <div style={menuStyles}>
          {menuButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => navigateToPage(button.path)}
              style={buttonStyles}
            >
              {button.label}
            </button>
          ))}
        </div>
      )}
</header>

      <div
        style={{
          width: "100%",
          position: "relative",
          backgroundColor: "#000000",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
          boxSizing: "border-box",
          color: "#A9A9A9",
          fontFamily: "Roboto",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            margin: "0",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-74.3px",
              left: "127.1px",
              width: "1592.2px",
              height: "841.5px",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                zIndex: 1,
                objectFit: "contain",
                position: "absolute",
                left: "1px",
                top: "4px",
                transform: "scale(1.01)",
              }}
              alt=""
              src="/mini-roads.svg"
            />
          </div>
          <img
            style={{
              position: "absolute",
              top: "-450px",
              left: "-228.1px",
              width: "2255.6px",
              height: "1489.7px",
              objectFit: "contain",
              zIndex: 2,
            }}
            alt=""
            src="/roads.svg"
          />
        </div>
        <div
          style={{
            width: "80%",
            maxWidth: "600px",
            backgroundColor: "#000000",
            paddingTop: "10px",
            paddingRight: "40px",
            paddingLeft: "40px",
            paddingBottom: "90px",
            marginBottom:"50px",
            borderRadius: "10px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px",
            zIndex: 3,
          }}
        >
          <h2 style={{ color: "#34cc54", textAlign: "center" }}>Select Location</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
  <label style={{ color: "#ffffff" }}>State:</label>
  <select
    value={selectedState}
    onChange={(e) => setSelectedState(e.target.value)}
    style={{
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      fontSize: "1rem",
      color:"#34cc54",
      backgroundColor: "rgb(31, 41, 55)", // Set background color here
    }}
  >
    <option value="">Select State</option>
    {states.map((state, index) => (
      <option key={index} value={state}>
        {state}
      </option>
    ))}
  </select>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
  <label style={{ color: "#ffffff" }}>District:</label>
  <select
    value={selectedDistrict}
    onChange={(e) => setSelectedDistrict(e.target.value)}
    style={{
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      fontSize: "1rem",
      color:"#34cc54",
      backgroundColor: "rgb(31, 41, 55)", // Set background color here
    }}
  >
    <option value="">Select District</option>
    {selectedState &&
      districts[selectedState].map((district, index) => (
        <option key={index} value={district}>
          {district}
        </option>
      ))}
  </select>
</div>


            {/* Search button */}
            <button
              onClick={handleSearch}
              style={{
                marginTop:"20px",
                padding: "10px",
                backgroundColor: "#34cc54",
                color: "#000000",
                borderRadius: "5px",
                border: "none",
                fontSize: "1rem",
                cursor: "pointer",
              }} 
            >
              Search
            </button>
        </div>
      </div>
    </div>
  );
};

export default Dryzone;
