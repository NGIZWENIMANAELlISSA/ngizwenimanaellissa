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
  {id:9,name:"Death Certificate",rw:"Icyemezo cy'urupfu",category:"Civil Registration",icon:"📜",desc:"Apply for death certificates."},
  {id:10,name:"Divorce Certificate",rw:"Icyemezo cy'ubutane",category:"Civil Registration",icon:"📄",desc:"Divorce registration services."},
  {id:11,name:"National ID Replacement",rw:"Gusimbuza indangamuntu",category:"Identification",icon:"🪪",desc:"Apply for national ID replacement."},
  {id:12,name:"Passport Application",rw:"Gusaba pasiporo",category:"Immigration",icon:"🛂",desc:"Apply for a Rwandan passport."},
  {id:13,name:"Vehicle Registration",rw:"Kwiyandikisha kw'ikinyabiziga",category:"Transport",icon:"🚘",desc:"Vehicle registration services."},
  {id:14,name:"Vehicle Inspection",rw:"Igenzura ry'ibinyabiziga",category:"Transport",icon:"🔧",desc:"Vehicle inspection services."},
  {id:15,name:"Driving Test",rw:"Ikizamini cyo gutwara",category:"Transport",icon:"🚦",desc:"Driving test registration."},
  {id:16,name:"Equivalence of Certificates",rw:"Kugereranya impamyabumenyi",category:"Education",icon:"🎓",desc:"Apply for academic certificate equivalence."},
  {id:17,name:"Company Name Reservation",rw:"Kubika izina ry'ikigo",category:"Business",icon:"🏢",desc:"Reserve a business or company name."},
  {id:18,name:"Business License",rw:"Uruhushya rw'ubucuruzi",category:"Business",icon:"📋",desc:"Business licensing services."},
  {id:19,name:"Land Title Transfer",rw:"Kwimura uburenganzira ku butaka",category:"Land",icon:"🏡",desc:"Land ownership transfer services."},
  {id:20,name:"Land Documents",rw:"Inyandiko z'ubutaka",category:"Land",icon:"📑",desc:"Request land-related documents."},
  {id:21,name:"Tax Clearance Certificate",rw:"Icyemezo cy'uko nta misoro urimo",category:"Finance",icon:"💰",desc:"Request tax clearance services."},
  {id:22,name:"Notary Services",rw:"Serivisi za noteri",category:"Legal",icon:"⚖️",desc:"Access notary-related services."},
  {id:23,name:"Police Certificate",rw:"Icyemezo cya Polisi",category:"Security",icon:"👮",desc:"Request police-related certificates."}
];

export default function App() {

  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [language, setLanguage] = useState("EN");
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [tracking, setTracking] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    names:"",
    id:"",
    phone:"",
    email:"",
    district:"",
    sector:"",
    details:""
  });

  const rw = language === "RW";

  const filtered = services.filter(service =>
    `${service.name} ${service.rw} ${service.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const go = (newPage) => {
    setPage(newPage);
    setMessage("");
    setResult(null);
    window.scrollTo(0, 0);
  };

  const apply = (service) => {
    setSelected(service);

    setForm({
      names:"",
      id:"",
      phone:"",
      email:"",
      district:"",
      sector:"",
      details:""
    });

    go("apply");
  };

  const submitApplication = (e) => {
    e.preventDefault();

    const application = {
      ...form,
      service:selected.name,
      reference:"IRE-" + Date.now().toString().slice(-8),
      status:"Submitted",
      date:new Date().toLocaleDateString()
    };

    setApplications(previous => [
      application,
      ...previous
    ]);

    go("success");
    setMessage(
      "Application submitted successfully. Reference: " +
      application.reference
    );
  };

  const trackApplication = () => {
    const found = applications.find(
      app =>
        app.reference.toLowerCase() ===
        tracking.trim().toLowerCase()
    );

    setResult(found || false);
  };

  const styles = `
    * {
      box-sizing:border-box;
      margin:0;
      padding:0;
    }

    body {
      font-family:Arial,sans-serif;
      background:#f5f8f7;
      color:#243447;
    }

    button,input,textarea,select {
      font:inherit;
    }

    button {
      cursor:pointer;
    }

    .top {
      background:#073c30;
      color:white;
      padding:11px 6%;
      display:flex;
      justify-content:space-between;
      font-size:13px;
      gap:10px;
      flex-wrap:wrap;
    }

    header {
      background:white;
      padding:18px 6%;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:15px;
      flex-wrap:wrap;
      box-shadow:0 2px 10px #00000008;
    }

    .logo {
      display:flex;
      align-items:center;
      gap:10px;
      color:#087c50;
      cursor:pointer;
    }

    .logo h2 {
      letter-spacing:2px;
      font-size:25px;
    }

    .logo small {
      font-size:10px;
      letter-spacing:2px;
    }

    .flag {
      font-size:35px;
    }

    nav {
      display:flex;
      gap:17px;
      flex-wrap:wrap;
    }

    nav button,.links button {
      background:transparent;
      border:0;
      font-weight:600;
      color:#344;
    }

    nav button:hover,.links button:hover {
      color:#078653;
    }

    .actions {
      display:flex;
      gap:10px;
      align-items:center;
    }

    select {
      padding:10px;
      border:1px solid #ddd;
      border-radius:6px;
      background:white;
    }

    .btn {
      background:#078
