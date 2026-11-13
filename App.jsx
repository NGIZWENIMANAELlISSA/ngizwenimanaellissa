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
