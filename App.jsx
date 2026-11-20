
import React, { useState } from "react";

const services = [
  {id:1,name:"Birth Certificate",rw:"Icyemezo cy'amavuko",category:"Civil Registration",icon:"👶",desc:"Apply for birth certificates."},
  {id:2,name:"Marriage Certificate",rw:"Icyemezo cy'ishyingirwa",category:"Civil Registration",icon:"💍",desc:"Apply for marriage certificates."},
  {id:3,name:"National ID",rw:"Indangamuntu",category:"Identification",icon:"🪪",desc:"Identification services."},
  {id:4,name:"Police Clearance",rw:"Icyemezo cya Polisi",category:"Security",icon:"👮",desc:"Request police clearance."},
  {id:5,name:"Driving License",rw:"Uruhushya rwo gutwara",category:"Transport",icon:"🚗",desc:"Driving license services."},
  {id:6,name:"Land Services",rw:"Serivisi z'ubutaka",category:"Land",icon:"🏠",desc:"Land related services."},
  {id:7,name:"Business Registration",rw:"Kwiyandikisha k'ubucuruzi",category:"Business",icon:"🏢",desc:"Register your business."},

  {id:8,name:"Tax Services",rw:"Serivisi z'imisoro",category:"Finance",icon:"💰",desc:"Tax related services."},
  {
    id: 9,
    name: "Death Certificate",
    rw: "Icyemezo cy'urupfu",
    category: "Civil Registration",
    icon: "📜",
    desc: "Apply for death certificates."
  },
  {
    id: 10,
    name: "Divorce Certificate",
    rw: "Icyemezo cy'ubutane",
    category: "Civil Registration",
    icon: "📄",
    desc: "Divorce registration services."
  },

  // Identification
  {
    id: 11,
    name: "National ID Replacement",
    rw: "Gusimbuza indangamuntu",
    category: "Identification",
    icon: "🪪",
    desc: "Apply for national ID replacement."
  },
  {
    id: 12,
    name: "Passport Application",
    rw: "Gusaba pasiporo",
    category: "Immigration",
    icon: "🛂",
    desc: "Apply for a Rwandan passport."
  },

  // Transport
  {
    id: 13,
    name: "Vehicle Registration",
    rw: "Kwiyandikisha kw'ikinyabiziga",
    category: "Transport",
    icon: "🚘",
    desc: "Vehicle registration services."
  },
  {
    id: 14,
    name: "Vehicle Inspection",
    rw: "Igenzura ry'ibinyabiziga",
    category: "Transport",
    icon: "🔧",
    desc: "Vehicle inspection services."
  },
  {
    id: 15,
    name: "Driving Test",
    rw: "Ikizamini cyo gutwara",
    category: "Transport",
    icon: "🚦",
    desc: "Driving test registration."
  },

  // Education
  {
    id: 16,
    name: "Equivalence of Certificates",
    rw: "Kugereranya impamyabumenyi",
    category: "Education",
    icon: "🎓",
    desc: "Apply for academic certificate equivalence."
  },

  // Business
  {
    id: 17,
    name: "Company Name Reservation",
    rw: "Kubika izina ry'ikigo",
    category: "Business",
    icon: "🏢",
    desc: "Reserve a business or company name."
  },
  {
    id: 18,
    name: "Business License",
    rw: "Uruhushya rw'ubucuruzi",
    category: "Business",
    icon: "📋",
    desc: "Business licensing services."
  },

  // Land
  {
    id: 19,
    name: "Land Title Transfer",
    rw: "Kwimura uburenganzira ku butaka",
    category: "Land",
    icon: "🏡",
    desc: "Land ownership transfer services."
  },
  {
    id: 20,
    name: "Land Documents",
    rw: "Inyandiko z'ubutaka",
    category: "Land",
    icon: "📑",
    desc: "Request land-related documents."
  },

  // Finance
  {
    id: 21,
    name: "Tax Clearance Certificate",
    rw: "Icyemezo cy'uko nta misoro urimo",
    category: "Finance",
    icon: "💰",
    desc: "Request tax clearance services."
  },

  // Other services
  {
    id: 22,
    name: "Notary Services",
    rw: "Serivisi za noteri",
    category: "Legal",
    icon: "⚖️",
    desc: "Access notary-related services."
  },
  {
    id: 23,
    name: "Police Certificate",
    rw: "Icyemezo cya Polisi",
    category: "Security",
    icon: "👮",
    desc: "Request police-related certificates."
  }

];

export default function App() {
  const [page,setPage] = useState("home");
  const [search,setSearch] = useState("");
  const [selected,setSelected] = useState(null);
  const [language,setLanguage] = useState("EN");
  const [user,setUser] = useState(null);
  const [applications,setApplications] = useState([]);
  const [tracking,setTracking] = useState("");
  const [result,setResult] = useState(null);
  const [message,setMessage] = useState("");
  const [form,setForm] = useState({
    names:"",id:"",phone:"",email:"",
    district:"",sector:"",details:""
  });

  const rw = language === "RW";

  const filtered = services.filter(s =>
    `${s.name} ${s.rw} ${s.category}`
      .toLowerCase().includes(search.toLowerCase())
  );

  const go = p => {
    setPage(p);
    setMessage("");
    setResult(null);
    window.scrollTo(0,0);
  };

  const apply = service => {
    setSelected(service);
    setForm({
      names:"",id:"",phone:"",email:"",
      district:"",sector:"",details:""
    });
    go("apply");
  };

  const submit = e => {
    e.preventDefault();

    const application = {
      ...form,
      service:selected.name,
      reference:"IRE-"+Date.now().toString().slice(-8),
      status:"Submitted",
      date:new Date().toLocaleDateString()
    };

    setApplications(prev => [application,...prev]);
    setMessage("Your application was submitted successfully.");
    go("success");
  };

  const track = () => {
    const found = applications.find(
      a => a.reference.toLowerCase() === tracking.trim().toLowerCase()
    );
    setResult(found || false);
  };

  const css = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:Arial,sans-serif;background:#f5f8f7;color:#243447}
    button,input,textarea,select{font:inherit}
    button{cursor:pointer}
    .top{background:#073c30;color:white;padding:11px 6%;display:flex;justify-content:space-between;font-size:13px}
    header{background:white;padding:18px 6%;display:flex;align-items:center;justify-content:space-between;gap:15px;flex-wrap:wrap;box-shadow:0 2px 10px #00000008}
    .logo{display:flex;align-items:center;gap:10px;color:#087c50;cursor:pointer}
    .logo h2{letter-spacing:2px;font-size:25px}
    .logo small{font-size:10px;letter-spacing:2px}
    .flag{font-size:35px}
    nav{display:flex;gap:17px;flex-wrap:wrap}
    nav button,.links button{background:transparent;border:0;font-weight:600;color:#344}
    nav button:hover,.links button:hover{color:#078653}
    .actions{display:flex;gap:10px;align-items:center}
    select{padding:10px;border:1px solid #ddd;border-radius:6px;background:white}
    .btn{background:#078653;color:white;padding:12px 22px;border:0;border-radius:6px;font-weight:bold}
    .btn:hover{background:#05633e}
    .hero{background:linear-gradient(120deg,#063a2d,#078653);color:white;padding:75px 9%;display:flex;align-items:center;justify-content:space-between;gap:30px;min-height:440px}
    .hero-content{max-width:650px}
    .tag{background:#ffffff25;padding:10px 15px;border-radius:20px;font-size:12px;letter-spacing:2px}
    .hero h1{font-size:clamp(35px,5vw,55px);line-height:1.15;margin:25px 0}
    .hero p{line-height:1.8;color:#e0f1e8;margin-bottom:25px}
    .search{display:flex;background:white;padding:6px;border-radius:8px;max-width:530px}
    .search input{flex:1;min-width:0;border:0;padding:13px;outline:none;color:#333}
    .search button{background:#f5b43b;color:#182c22;border:0;padding:12px 22px;border-radius:6px;font-weight:bold}
    .hero-art{background:#ffffff20;border:1px solid #ffffff55;border-radius:20px;padding:45px;text-align:center;min-width:250px}
    .hero-art div{font-size:65px}
    .hero-art h2{margin:20px 0}
    .features{display:grid;grid-template-columns:repeat(3,1fr);gap:25px;padding:40px 8%;background:white;text-align:center}
    .features span{font-size:32px}
    .features h3{margin:12px}
    .features p,.muted{color:#718096;font-size:14px;line-height:1.7}
    .section{padding:60px 8%;min-height:60vh}
    .heading{display:flex;justify-content:space-between;align-items:center;gap:15px;margin-bottom:25px}
    .heading small,.green{color:#078653;font-weight:bold;letter-spacing:1px}
    .heading h2{margin-top:10px;font-size:30px}
    .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:30px}
    .card{background:white;padding:25px 20px;border:1px solid #e5ece8;border-radius:12px;transition:.2s}
    .card:hover{transform:translateY(-5px);box-shadow:0 10px 25px #00000010;border-color:#078653}
    .icon{font-size:38px;display:block;margin-bottom:15px}
    .card small{color:#078653;font-weight:bold}
    .card h3{margin:12px 0;font-size:18px}
    .card p{font-size:13px;color:#718096;line-height:1.6;margin-bottom:12px}
    .card button{background:transparent;color:#078653;border:0;font-weight:bold;margin-top:10px}
    .page{padding:55px 8%;min-height:65vh}
    .page h1{font-size:32px;margin:15px 0}
    .wide{width:100%;max-width:550px;padding:14px;border:1px solid #ddd;border-radius:7px;margin-top:25px}
    .box{max-width:800px;background:white;margin:20px auto;padding:35px;border-radius:12px;box-shadow:0 5px 30px #00000009}
    .form-heading{display:flex;align-items:center;gap:18px;border-bottom:1px solid #eee;padding-bottom:20px;margin-bottom:25px}
    .form-heading span{font-size:45px}
    .form-heading h2{margin:8px 0}
    .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
    label{display:block;font-weight:600;font-size:14px;margin-bottom:18px}
    label input,label textarea{display:block;width:100%;padding:13px;margin-top:9px;border:1px solid #dce3e9;border-radius:6px;outline:none}
    label input:focus,label textarea:focus{border-color:#078653}
    textarea{min-height:100px;resize:vertical}
    .check{display:flex;align-items:center;gap:10px}
    .check input{width:auto}
    .full{width:100%}
    .back{background:transparent;color:#078653;font-weight:bold;margin-bottom:20px;border:0}
    .notice{padding:15px;background:#e8f7ee;color:#087c50;border-radius:7px;margin:20px 0;line-height:1.6}
    .center{text-align:center}
    .success{width:80px;height:80px;border-radius:50%;background:#ddf5e7;color:#078653;display:grid;place-items:center;font-size:45px;margin:20px auto}
    .trackbox{display:flex;gap:10px;max-width:600px;margin:30px auto}
    .trackbox input{flex:1;min-width:0;padding:14px;border:1px solid #ddd;border-radius:6px}
    .application{background:white;padding:20px;margin:15px 0;border-radius:8px;border:1px solid #eee}
    footer{background:#092f50;color:white;padding:45px 15px;text-align:center}
    footer p{margin:15px}
    .links{display:flex;justify-content:center;gap:25px;margin:25px;flex-wrap:wrap}
    .links button{color:white}
    @media(max-width:950px){.grid{grid-template-columns:repeat(2,1fr)}.hero-art{display:none}}
    @media(max-width:650px){
      .top{flex-direction:column;gap:8px}
      header{justify-content:center}
      nav{justify-content:center;gap:12px}
      .hero{padding:50px 6%}
      .features{grid-template-columns:1fr}
      .grid,.form-grid{grid-template-columns:1fr}
      .section,.page{padding:40px 5%}
      .box{padding:20px}
      .trackbox{flex-direction:column}
    }
  `;

  const card = s => (
    <div className="card" key={s.id}>
      <span className="icon">{s.icon}</span>
      <small>{s.category}</small>
      <h3>{rw ? s.rw : s.name}</h3>
      <p>{s.description || s.desc}</p>
      <button onClick={() => apply(s)}>Apply Now →</button>
    </div>
  );

  return (
    <div>
      <style>{css}</style>

      <div className="top">
        <span>🇷🇼 {rw ? "Serivisi za Leta kuri Internet" : "Rwanda Online Government Services"}</span>
        <span>Help Center | +250 787236241</span>
      </div>

      <header>
        <div className="logo" onClick={() => go("home")}>
          <span className="flag">🇷🇼</span>
          <div><h2>IREMBO</h2><small>ONLINE SERVICES</small></div>
        </div>

        <nav>
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("services")}>Services</button>
          <button onClick={() => go("track")}>Track Request</button>
          <button onClick={() => go("about")}>About Us</button>
          <button onClick={() => go("contact")}>Contact</button>
          {user && <button onClick={() => go("dashboard")}>Dashboard</button>}
        </nav>

        <div className="actions">
          <select value={language} onChange={e => setLanguage(e.target.value)}>
            <option value="EN">English</option>
            <option value="RW">Kinyarwanda</option>
          </select>
          <button className="btn" onClick={() => go(user ? "dashboard" : "login")}>
            {user ? "My Account" : "Login"}
          </button>
        </div>
      </header>

      {page === "home" && <>
        <section className="hero">
          <div className="hero-content">
            <span className="tag"><div>WELCOME TO IREMBO NGIZWENIMANA ONLINE SERVICE</div>
            </span>
            <h1>{rw ? "Serivisi za Leta, aho uri hose." : "Government Services, Anywhere free."}</h1>
            <p>Access government services quickly, easily and securely from anywhere in Rwanda.</p>
            <div className="search">
              <input placeholder="Search for a service..." value={search}
                onChange={e => setSearch(e.target.value)} />
              <button onClick={() => go("services")}>Search</button>
            </div>
            <button onClick={() => go("services")} className="btn" style={{marginTop:22}}>
              Explore Services →
            </button>
          </div>
          <div className="hero-art">
            <div>🇷🇼</div><h2>Digital Rwanda</h2>
            <p>Simple. Fast. Secure.</p>
            <h1>🏛️ 💻 📱</h1>
          </div>
        </section>

        <section className="features">
          <div><span>⚡</span><h3>Fast Services</h3><p>Save time with online applications.</p></div>
          <div><span>🔒</span><h3>Secure Platform</h3><p>Protect your personal information.</p></div>
          <div><span>🌍</span><h3>Anywhere Access</h3><p>Access services from anywhere.</p></div>
        </section>

        <section className="section">
          <div className="heading">
            <div><small>OUR SERVICES</small><h2>Popular Services</h2></div>
            <button className="btn" onClick={() => go("services")}>View All →</button>
          </div>
          <div className="grid">{services.slice(0,4).map(card)}</div>
        </section>
      </>}

      {page === "services" && <section className="page">
        <small className="green">DISCOVER SERVICES</small>
        <h1>All Government Services</h1>
        <p className="muted">Choose a service to start your application.</p>
        <input className="wide" placeholder="Search services..." value={search}
          onChange={e => setSearch(e.target.value)} />
        <div className="grid">{filtered.map(card)}</div>
        {filtered.length === 0 && <p>No services found.</p>}
      </section>}

      {page === "apply" && selected && <section className="page">
        <button className="back" onClick={() => go("services")}>← Back to Services</button>
        <div className="box">
          <div className="form-heading">
            <span>{selected.icon}</span>
            <div><small className="green">ONLINE APPLICATION</small>
              <h2>{selected.name}</h2><p>{selected.desc}</p>
            </div>
          </div>
          <form onSubmit={e => {
            e.preventDefault();
            const app = {
              ...form, service:selected.name,
              reference:"IRE-"+Date.now().toString().slice(-8),
              status:"Submitted", date:new Date().toLocaleDateString()
            };
            setApplications(old => [app,...old]);
            setMessage("Application successfully submitted. Reference: "+app.reference);
            go("success");
          }}>
            <h3>Personal Information</h3><br/>
            <div className="form-grid">
              <label>Full Names *
                <input required value={form.names} onChange={e => setForm({...form,names:e.target.value})} placeholder="Enter full names"/>
              </label>
              <label>National ID *
                <input required maxLength="16" value={form.id} onChange={e => setForm({...form,id:e.target.value})} placeholder="National ID"/>
              </label>
              <label>Phone Number *
                <input required type="tel" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="+250"/>
              </label>
              <label>Email *
                <input required type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} placeholder="Email address"/>
              </label>
              <label>District *
                <input required value={form.district} onChange={e => setForm({...form,district:e.target.value})}/>
              </label>
              <label>Sector *
                <input required value={form.sector} onChange={e => setForm({...form,sector:e.target.value})}/>
              </label>
            </div>
            <label>Additional Details
              <textarea value={form.details} onChange={e => setForm({...form,details:e.target.value})}/>
            </label>
            <label>Supporting Documents
              <input type="file" accept=".pdf,.jpg,.jpeg,.png"/>
            </label>
            <label className="check">
              <input type="checkbox" required/> I confirm that the information is correct.
            </label>
            <button className="btn full">Submit Application →</button>
          </form>
        </div>
      </section>}

      {page === "success" && <section className="page center">
        <div className="success">✓</div>
        <h1>Application Submitted!</h1>
        <p className="notice">{message}</p>
        <button className="btn" onClick={() => go("track")}>Track Request</button>
        <button className="btn" style={{margin:10}} onClick={() => go("home")}>Home</button>
      </section>}

      {page === "track" && <section className="page center">
        <span className="icon">🔎</span>
        <h1>Track Your Application</h1>
        <p className="muted">Enter your reference number.</p>
        <div className="trackbox">
          <input placeholder="IRE-12345678" value={tracking} onChange={e => setTracking(e.target.value)}/>
          <button className="btn" onClick={() => {
            const found = applications.find(a => a.reference.toLowerCase() === tracking.trim().toLowerCase());
            setResult(found || false);
          }}>Track</button>
        </div>
        {result && result !== false && <div className="notice">
          <h3>{result.service}</h3>
          Reference: {result.reference}<br/>
          Status: {result.status}<br/>
          Date: {result.date}
        </div>}
        {result === false && <p className="notice">Application not found. Check your reference number.</p>}
      </section>}

      {page === "login" && <section className="page center">
        <div className="box" style={{maxWidth:450}}>
          <h1>Login / Register</h1>
          <form onSubmit={e => {
            e.preventDefault();
            setUser({name:form.names,email:form.email});
            go("dashboard");
          }}>
            <label>Full Name<input required value={form.names} onChange={e => setForm({...form,names:e.target.value})}/></label>
            <label>Email<input required type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})}/></label>
            <label>Password<input required type="password" minLength="6"/></label>
            <button className="btn full">Login</button>
          </form>
          <p className="notice">Demo login only. Real account authentication needs a backend.</p>
        </div>
      </section>}

      {page === "dashboard" && <section className="page">
        <h1>Welcome, {user?.name}</h1>
        <p>My Applications</p>
        {applications.length === 0 ? <p className="notice">No applications yet.</p> :
          applications.map(a => <div className="application" key={a.reference}>
            <h3>{a.service}</h3>
            <p>Reference: {a.reference}</p>
            <p>Status: {a.status}</p>
          </div>)}
        <button className="btn" onClick={() => {setUser(null);go("home")}}>Logout</button>
      </section>}

      {page === "about" && <section className="page">
        <h1>About Irembo</h1>
        <p className="muted">A demonstration of a digital platform designed to make public services accessible to citizens online.</p>
        <h2>Our Mission</h2>
        <p>To simplify access to public services through digital technology.</p>
      </section>}

      {page === "contact" && <section className="page">
        <div className="box">
          <h1>Contact Us</h1>
          <form onSubmit={e => {e.preventDefault();setMessage("Message received in admistration staff Ms.NGIZWENIMANA.");}}>
            <label>Full Name<input required/></label>
            <label>Email<input required type="email"/></label>
            <label>Subject<input required/></label>
            <label>Message<textarea required/></label>
            <button className="btn full">Send Message</button>
          </form>
          {message && <p className="notice">{message}</p>}
        </div>
      </section>}

      <footer>
        <h2>🇷🇼 IREMBO</h2>
        <p>Government Services Made Simple.</p>
        <div className="links">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("services")}>Services</button>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>
        <small>© 2026 Irembo NGIZWENIMANA. Educational project.</small>
        <h5><li>needed other things call center site</li></h5>
        <h6>phone:0787236241</h6>
      </footer>
    </div>
  );
}
